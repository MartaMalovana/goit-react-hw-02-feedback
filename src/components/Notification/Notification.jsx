import React, {Component} from "react";
import PropTypes from 'prop-types';
import {TextMessage} from './Notification.styled';

export default class Notification extends Component {
    render () {
        return <TextMessage>{this.props.message}</TextMessage>;
    };
}

Notification.propTypes = {
    message: PropTypes.string,
}