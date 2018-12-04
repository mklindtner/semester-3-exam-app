import React, { Component } from "react";
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';
import {getToken} from '../data/DataMapper';
import getAuthenticatedUser from '../getAuthenticatedUser';

import UserMapper from '../data/UserMapper';


export default class AuthenticationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "mikkel@email.com",
            password: "1234",
            errors: []
        }
    
        this.userMapper = new UserMapper();
    }

    

    render() {
        if( this.props.auth !== null ) {
            return <Redirect to='/TimeLine' />
        }


        return (
            <View style={styles.container} >

                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => {
                        this.setState({ email });
                    }
                    }
                    placeholder={"enter your email here"}
                    style={styles.input}
                />

                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={"enter password here"}
                    style={styles.input}
                />

                <Button
                    title={'login'}
                    style={styles.input}
                    onPress={this.onSubmit}
                />
            </View>


        );
    }

    onSubmit = () => {
        this.userMapper.authenticate(this.state.email, this.state.password).then(response => {
            if (response.status === 200) {
                this.props.onAuthentication(response.body);            
                this.setState({ errors: [] });
                return;
            }

            if (response.status === 401) {
                this.setState({ errors: ["Incorrect email or password."] });
                return;
            }

            this.setState({ errors: ["An error occurred."] });
        })

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});

const displayError = () => {
    {
    errors.length > 0 && <div className="form-errors">
        {errors.map((error, index) =>
            <div key={index} className="alert alert-danger">
                <p>{error}</p>
            </div>
        )}
    </div>
    }
}



/*

 console.log(this.state.auth);
        if ( this.state.auth != "" ) {
            console.log(this.state.auth);
            console.log("token is relevant");
            return <Redirect to='/TimeLine' />
        }

  componentDidMount() {
        this.setState = ({
            auth: getAuthenticationContext
        });
    }

*/