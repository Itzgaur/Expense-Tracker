export function TransactionForm({ onAddTransaction }) {
  function handleSubmit(e) {
    e.preventDefault();
    const transaction = {
      amount: e.target[0].value,
      transactionType: e.target[1].value,
    };

    if (!transaction.amount) return;

    onAddTransaction(transaction);
  }

  return (
    <div className="transactionForm ">
      <h2 className="sectionTitle">Add New Transaction</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="amount">Enter Amount:</label>
        <input type="text" name="amount" />

        <label htmlFor="transactioType">Select Transaction: </label>
        <select name="transactionType" id="">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button type="submit" className="formButton">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
