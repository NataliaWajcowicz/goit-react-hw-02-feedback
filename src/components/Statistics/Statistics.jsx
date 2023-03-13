import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';

export class Statistics extends Component{
    render() {
        const { good, neutral, bad, total, percentage } = this.props;
        return (
            <div className={css.statistics}>
                <h2 className={css.statisticsTitle}>{this.props.statisticsTitle}</h2>
                <ul className={css.statisticList}>
                    <li className={css.statisticItem}>Good: {good}</li>
                    <li className={css.statisticItem}>Neutral: {neutral}</li>
                    <li className={css.statisticItem}>Bad: {bad}</li>
                    <li className={css.statisticItem}>Total: {total}</li>
                    <li className={css.statisticItem}>Positive feedback: {percentage}%</li>
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