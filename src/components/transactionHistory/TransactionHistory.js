import TransactionHistoryHeader from "./TransactionHistoryHeader";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
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
    </table>
  );
};
export default TransactionHistory;
