import React from 'react';

class Content extends React.Component {

    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
                <label htmlFor="desc"></label>
                <input type="text" name="desc" id="desc" ref={this.props.textRef} />
            </div>
        );
    }

}

const WrapperContent = React.forwardRef((props, ref) => {
    return <Content {...props} textRef={ref}></Content>
});

class Container extends React.Component {
    
    constructor(props) {
        super(props);
        this.wrapperContentRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.state = { title: 'initial title' };
    }

    handleClick() {
        this.setState({ title: `title changed at ${new Date().toISOString()}` })
        this.wrapperContentRef.current.focus();
    }

    render() {
        return (
            <div>
                <WrapperContent title={this.state.title} ref={this.wrapperContentRef}></WrapperContent>
                <button onClick={this.handleClick}>Focus!!</button>
            </div>
        );
    }

}

function Main() {
    return <Container></Container>
}

export default Main;