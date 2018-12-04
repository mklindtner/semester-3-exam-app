import React, { Component } from "react";
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
//make class

export default class Post extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        return (
            <View className="post" key={this.props.id}>
                <View className="post-header">
                    <Text>
                        author: {this.props.authorName} {"\n"}
                        created at: {this.props.timeCreated} {"\n"} 
                    </Text>
                </View>
                <View className="post-body">
                    <Text>
                        Content: {this.props.contents} {"\n"} {"\n"} {"\n"}
                    </Text>
                </View>
            </View>
        );
    }
}