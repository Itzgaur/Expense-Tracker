export function Balance({ income, expense }) {
  const balance = Number(income) - Number(expense);

  return (
    <div className="balance">
      <div
        className={
          balance >= 0 ? "currentBalance income" : "currentBalance expense"
        }
      >
        <h3>You Balance</h3>
        <h2>{balance} ₹</h2>
      </div>
      <div className="transactionCategory">
        <div className="box income">
          <h3>Income</h3>
          <p>{income} ₹</p>
        </div>
        <div className="box expense">
          <h3>Expense</h3>
          <p>{expense} ₹</p>
        </div>
      </div>
    </div>
  );
}
