import React, {Component} from 'react';
import {Container, Button} from './FeedbackOptions.styled';

export default class FeedbackOptions extends Component {
    render () {
        const {options} = this.props;
        console.log(options);
        return <Container>{options.map(option => <Button>{option}</Button>)}</Container>;
    };
};