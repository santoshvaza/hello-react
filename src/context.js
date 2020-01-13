import React from 'react';

class UserSession {
  name = 'svaza';

  refreshSession() {
    console.log(`session for ${this.name} refreshed`);
  }
}

const UserSessionContext = React.createContext(new UserSession());

class Comp1 extends React.Component {

  static contextType = UserSessionContext;

  render() {
    const userSession = this.context;
    console.log('At Comp1');
    userSession.refreshSession();
    return (
      <p>Hello from Comp1</p>
    );
  }

}

class Comp2 extends React.Component {

  render() {
    return (
      <>
        <p>Hello from Comp2</p>
        <Comp1 />
      </>
    );
  }

}

class Comp3 extends React.Component {
  render() {
    return (
      <UserSessionContext.Consumer>
        {
          value => {
            console.log('At comp3');
            console.log(value.refreshSession());
            return (
              <>
                <p>Hello from Comp3</p>
                <Comp2 />
              </>
            );
          }
        }

      </UserSessionContext.Consumer>
    );
  }

}

function Main() {
  return (
    <UserSessionContext.Provider value={new UserSession()}>
      <Comp3 />
    </UserSessionContext.Provider>
  );
}

export default Main;