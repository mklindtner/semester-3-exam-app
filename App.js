import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';
import AuthenticationForm from './authentication/AuthForm';
import { AsyncStorage } from 'react-native';
import TimeLine from './timeline/Timeline';
import getAuthenticationContext from './getAuthenticationContext';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  onAuthentication = async (authenticationContext) => {
    const text = JSON.stringify(authenticationContext);
    try {
      await AsyncStorage.setItem("authenticationContext", text);
    } catch (error) {
      console.log("failed to setItem in onAuthentication");
    }
    this.setState({ authenticationContext });
  };

  onLogout = async () => {
    await AsyncStorage.removeItem("authenticationContext");
    this.setState({ authenticationContext: null });
  };

  componentDidMount = async () => {
    const auth = await getAuthenticationContext();
    this.setState({ authenticationContext: auth })
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>


          <Switch>
            <Route
              exact path="/Login"
              component={() =>
                <AuthenticationForm
                  onAuthentication={this.onAuthentication}
                  auth={this.state.authenticationContext}
                />
              }
            />
            <Route
              exact path="/"
              component={Home}
            />

            <Route
              exact path="/TimeLine"
              component={() =>
                <TimeLine
                  sayHi={"hi from app"}
                  onLogout={this.onLogout}
                  auth={this.state.authenticationContext}
                />}
            />

          </Switch>

        </View>
      </NativeRouter>
    );
  }
}



const Home = () => {
  return (
    <View>
      <Link to="/Login" underlayColor="#f0f4f7">
        <Text>Login</Text>
      </Link>
      <Link to="/">
        <Text>Back to main page</Text>
      </Link>      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 /*
  authentication = async () => {
    try {
      const context = await AsyncStorage.getItem("authenticationContext");
      if(context != null)
        return context;
    } catch (error) {
      console.log("unable to retrieve authenticationContext in App");
    }
  }
  

  
  
  */