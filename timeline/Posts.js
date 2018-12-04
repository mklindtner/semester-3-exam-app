import React, { Component } from "react";
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import Post from './Post';
import { get } from '../data/DataMapper';
import config from '../Config';

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = { allPosts: [] }
    }

    componentDidMount = async () => {
        await this.fetchTimeline();
    }


    fetchTimeline = () => {
        get(config.restUrl + "posts/timeline/" + 1 + "/25").then(response => {
            if (response.status == 200) {
                this.setState({ allPosts: response.body })
            }
        });
    };

    render() {
        return (this.state.allPosts.map( post => {
            return (
                <Post
                    key={post.id}
                    id={post.id}
                    authorName={post.author.name}
                    timeCreated={post.timeCreated}
                    contents={post.contents}
                />
            )
        })         
        );               
    }

}