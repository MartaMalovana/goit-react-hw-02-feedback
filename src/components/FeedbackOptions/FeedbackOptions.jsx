import React, {Component} from 'react';
import {Container, Button, Title, Section} from './FeedbackOptions.styled';

export default class FeedbackOptions extends Component {

    render () {
        const {options, onLeaveFeedback} = this.props;
        return (
            <Section title="feedback buttons">
                <Title lang="uk">Будь-ласка, залиште відгук про наше кафе "EXSPRESSO"!</Title>
                <Container>{options.map(option => <Button name={option} onClick={(event) => onLeaveFeedback(event)}>{option}</Button>)}</Container>
            </Section>
        );
    };
};