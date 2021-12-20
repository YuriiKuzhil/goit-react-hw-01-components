import PropTypes from "prop-types";
import TransactionHistoryHeader from "./transactionHistoryHeader/TransactionHistoryHeader";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";
import { TransactionHistoryTable } from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryHeader />
      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
