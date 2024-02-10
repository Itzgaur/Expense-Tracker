import { Transaction } from "./Transaction";

export function TransactionList({ transactions, ondeleteTransaction }) {
  console.log(transactions);

  return (
    <div className="transactionList">
      <h3 className="sectionTitle">History</h3>
      <ul>
        {transactions.length > 0 &&
          transactions.map((transaction, index) => {
            return (
              <Transaction
                transaction={transaction}
                key={index}
                ondeleteTransaction={ondeleteTransaction}
              />
            );
          })}
      </ul>
    </div>
  );
}
