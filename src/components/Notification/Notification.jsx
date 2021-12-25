import React, {Component} from "react";
import {TextMessage} from './Notification.styled';

export default class Notification extends Component {
    render () {
        return <TextMessage>{this.props.message}</TextMessage>;
    };
}