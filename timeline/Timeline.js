import React, { Component } from "react";
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import { getToken } from "../data/DataMapper";
//import getToken from '../data/DataMapper';
import { Redirect } from 'react-router-native';
import getAuthenticationUser from '../getAuthenticatedUser';
import {get} from '../data/DataMapper';
import config from '../Config';
import Posts from './Posts';

export default class TimeLine extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.auth === null) {
            return <Redirect to="/Login" />
        }

        return (
            <View>
                <Posts        
                />
                <Button
                    title="logout"
                    onPress={this.onSubmit}
                />
            </View>
        );
    }


    onSubmit = () => {
        this.props.onLogout();
    }
}