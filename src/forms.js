import React from 'react';

class FormDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                field1: '',
                field2: '',
                field3: '',
                field4: '',
                field5: '',
                field6: '',
                'field6.1': 'coconut',
                field7: '',
            }
        };
        this.handleFormDataChange = this.handleFormDataChange.bind(this);
    }

    Greet(props) {
        return <h1>Hello {props.name}</h1>;
    }

    handleFormDataChange(e) {
        e.persist();
        this.setState((state, props) => {
            const formData = state.formData;
            formData[e.target.name] = e.target.value;
            return state;
        });
    }

    render() {
        return (
            <form>
                <input type="text" name="field1" value={this.state.formData.field1} onChange={this.handleFormDataChange} /> <br />
                <input type="text" name="field2" value={this.state.formData.field2} onChange={this.handleFormDataChange} /> <br />
                <input type="text" name="field3" value={this.state.formData.field3} onChange={this.handleFormDataChange} /> <br />
                <input type="text" name="field4" value={this.state.formData.field4} onChange={this.handleFormDataChange} /> <br />
                <input type="text" name="field5" value={this.state.formData.field5} onChange={this.handleFormDataChange} /> <br />
                <input type="text" name="field6" value={this.state.formData.field6} onChange={this.handleFormDataChange} /> <br />
                <select name="field6.1" value={this.state.formData["field6.1"]} onChange={this.handleFormDataChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select> <br />
                <input type="checkbox" name="field7" value={this.state.formData.field7} onChange={this.handleFormDataChange} /> <br />
                <button>Submit</button>
                <hr />
                {JSON.stringify(this.state)}
            </form>
        );
    }

}

function Main() {
    return <FormDemo />
}

export default Main;