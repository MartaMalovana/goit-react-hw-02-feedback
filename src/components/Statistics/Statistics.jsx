import React, {Component} from "react";
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { TitleStatistics, StatisticsOption, Section } from './Statistics.styled';

export default class Statistics extends Component {
    render (){
        const {good, neutral, bad, total, positivePercentage} = this.props;
        return total !== 0 ? 
            (<Section title="feedback statistics">
                <TitleStatistics>Статистика:</TitleStatistics>
                <StatisticsOption>Добре: {good}</StatisticsOption>
                <StatisticsOption>Може бути: {neutral}</StatisticsOption>
                <StatisticsOption>Погано: {bad}</StatisticsOption>
                <StatisticsOption>Всього відгуків: {total}</StatisticsOption>
                <StatisticsOption>Позитивних відгуків: {positivePercentage} %</StatisticsOption>
            </Section>) 
        : <Notification message="There is no feedback"/>;
    };
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}