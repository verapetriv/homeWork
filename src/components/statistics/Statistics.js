import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && (<h2 className={styles.title}>{title.toUpperCase()}</h2>)}

        <ul className={styles.stat__list}>
            {stats.map(({ id, label, percentage }) => (
                <li className={styles.item} style={{backgroundColor: createRandomColor()}} key={id}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
)

function createRandomColor() {
    return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default Statistics;