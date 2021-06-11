import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => (
    <table className="transaction-history">
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