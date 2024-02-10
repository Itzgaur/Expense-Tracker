export function Transaction({ transaction, ondeleteTransaction }) {
  function handleDelete(transaction) {
    ondeleteTransaction(transaction);
  }
  return (
    <div
      className={`transaction ${
        transaction.transactionType === "income" ? "income" : "expense"
      }`}
    >
      <h3>{transaction.transactionType}</h3>
      <p>{transaction.amount} ₹</p>
      <button
        type="button"
        className="delete"
        onClick={() => handleDelete(transaction)}
      >
        ❌
      </button>
    </div>
  );
}
