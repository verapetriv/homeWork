import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
    <table className={styles.transaction__history}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{firstLetterCaps(type)}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

function firstLetterCaps(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TransactionHistory;