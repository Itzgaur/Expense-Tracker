import { useState } from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { TransactionForm } from "./components/TransactionForm";
import { TransactionList } from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function handleAddTransaction(newTransaction) {
    newTransaction.id = transactions.length;

    newTransaction.transactionType === "income"
      ? setIncome(Number(income) + Number(newTransaction.amount))
      : setExpense(Number(expense) + Number(newTransaction.amount));

    setTransactions([...transactions, newTransaction]);
  }

  function handleDeleteTransaction(removeTransaction) {
    console.log(removeTransaction);

    removeTransaction.transactionType === "income"
      ? setIncome(Number(income) - Number(removeTransaction.amount))
      : setExpense(Number(expense) - Number(removeTransaction.amount));

    setTransactions(
      transactions.filter(
        (transaction) => transaction.id !== removeTransaction.id
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <Balance income={income} expense={expense} />
      <TransactionList
        transactions={transactions}
        ondeleteTransaction={handleDeleteTransaction}
      />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}

export default App;
