import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component{
    render() {
        const { good, neutral, bad, total, percentage } = this.props;
        return (
            <div>
                <h2>{this.props.statisticsTitle}</h2>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {percentage}%</li>
                </ul>
            </div>
            
        )
    }
}

Statistics.propTypes = {
    statisticTitle: PropTypes.string,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,

};