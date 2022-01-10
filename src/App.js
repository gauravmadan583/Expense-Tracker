import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  	return (
		<div className="App">
			<Header></Header>
			<div className='container'>
				<Balance></Balance>
			</div>
			<IncomeExpenses></IncomeExpenses>
			<TransactionList></TransactionList>
			<AddTransaction></AddTransaction>
		</div>
  	);
}

export default App;
