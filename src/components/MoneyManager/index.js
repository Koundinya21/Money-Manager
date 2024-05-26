import {Component} from 'react'
import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'
import './index.css'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updateTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updateTransactionList,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="background">
        <div className="top-manager-Name-container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="para">
            Welcome back to your <span className="manager">Money Manager</span>
          </p>
        </div>
        <div className="Money-det">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="transaction-details">
          <form className="transaction-form" onSubmit={this.onAddTransaction}>
            <h1 className="transaction-headerinput-label">Add Transaction</h1>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={this.onChangeTitleInput}
              className="input"
              placeholder="TITlE"
            />
            <label className="input-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              value={amountInput}
              onChange={this.onChangeAmountInput}
              placeholder="AMOUNT"
            />
            <label className="input-label" htmlFor="select">
              TYPE
            </label>
            <select
              id="select"
              className="input"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-transactions">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// import {Component} from 'react'
// import {v4} from 'uuid'
// import './index.css'
// import MoneyDetails from '../MoneyDetails'

// import TransactionItem from '../TransactionItem'

// const transactionTypeOptions = [
//   {
//     optionId: 'INCOME',
//     displayText: 'Income',
//   },
//   {
//     optionId: 'EXPENSES',
//     displayText: 'Expenses',
//   },
// ]

// class MoneyManager extends Component {
//   state = {
//     transactionsList: [],
//     titleInput: '',
//     amountInput: '',
//     optionId: transactionTypeOptions[0].optionId,
//   }

//   onChangeOfTitle = event => {
//     this.setState({titleInput: event.target.value})
//   }

//   onChangeOfAmount = event => {
//     this.setState({amountInput: event.target.value})
//   }

//   onChangeOfType = event => {
//     this.setState({optionId: event.target.value})
//   }
//   //   deleteTransaction = id => {
//   //     const {transactionsList} = this.state
//   //     const updateTransactionList = transactionsList.filter(
//   //       eachTransaction => id !== eachTransaction.id,
//   //     )

//   //     this.setState({
//   //       transactionsList: updateTransactionList,
//   //     })
//   //   }

//   deleteTransaction = id => {
//     const {transactionsList} = this.state
//     const updatedList = transactionsList.filter(each => each.optionId !== id)

//     this.setState({transactionsList: updatedList})
//   }

//   onAddOfTransaction = event => {
//     event.preventDefault()
//     const {titleInput, amountInput, optionId} = this.state
//     const getOptionIdText = transactionTypeOptions.find(
//       each => each.optionId === optionId,
//     )

//     const {displayText} = getOptionIdText
//     const newEntry = {
//       id: v4(),
//       name: titleInput,
//       amount: parseInt(amountInput),
//       type: displayText,
//     }

//     this.setState(prev => ({
//       transactionsList: [...prev.transactionsList, newEntry],
//       titleInput: '',
//       amountInput: '',
//       optionId: transactionTypeOptions[0].optionId,
//     }))
//   }

//   getExpenses = () => {
//     const {transactionsList} = this.state
//     let expensesAmount = 0
//     transactionsList.forEach(element => {
//       if (element.type === transactionTypeOptions[1].displayText) {
//         expensesAmount += element.amount
//       }
//     })

//     return expensesAmount
//   }

//   getIncome = () => {
//     const {transactionsList} = this.state
//     let incomeAmount = 0
//     transactionsList.forEach(each => {
//       if (each.type === transactionTypeOptions[0].displayText) {
//         incomeAmount += each.amount
//       }
//     })

//     return incomeAmount
//   }

//   getBalance = () => {
//     const {transactionsList} = this.state
//     let incomeAmount = 0
//     let balanceAmount = 0
//     let expensesAmount = 0
//     transactionsList.forEach(each => {
//       if (each.type === transactionTypeOptions[1].displayText) {
//         expensesAmount += each.amount
//       } else {
//         incomeAmount += each.amount
//       }
//     })
//     balanceAmount = incomeAmount - expensesAmount
//     return balanceAmount
//   }

//   render() {
//     const {transactionsList, titleInput, amountInput, optionId} = this.state

//     const balance = this.getBalance()
//     const income = this.getBalance()
//     const expenses = this.getExpenses()
//     return (
//       <div className="background">
//         <div className="Name-Container">
//           <h1 className="heading">Hi, Richard</h1>
//           <p className="para">
//             Welcome back to your <span className="manager">Money Manager</span>
//           </p>
//         </div>
//         <div className="Money-det">
//           <MoneyDetails
//             balanceAmount={balance}
//             incomeAmount={income}
//             expensesAmount={expenses}
//           />
//         </div>
//         <div className="transaction-details">
//           <form className="transaction-form" onSubmit={this.onAddOfTransaction}>
//             <h1 className="transaction-header">Add Transaction</h1>
//             <label htmlFor="title" className="input-label">
//               TITLE
//             </label>
//             <input
//               id="title"
//               className="input"
//               type="text"
//               placeholder="TITLE"
//               value={titleInput}
//               onChange={this.onChangeOfTitle}
//             />
//             <label htmlFor="amount" className="input-label">
//               AMOUNT
//             </label>
//             <input
//               type="text"
//               id="amount"
//               placeholder="AMOUNT"
//               className="input"
//               value={amountInput}
//               onChange={this.onChangeOfAmount}
//             />
//             <label htmlFor="select" className="input-label">
//               TYPE
//             </label>

//             <select
//               className="input"
//               id="select"
//               value={optionId}
//               onChange={this.onChangeOfType}
//             >
//               {transactionTypeOptions.map(each => (
//                 <option key={each.optionId} value={each.optionId}>
//                   {each.displayText}
//                 </option>
//               ))}
//             </select>
//             <button type="submit" className="button">
//               Add
//             </button>
//           </form>
//           <div className="history-transactions">
//             <h1>History</h1>
//             <div className="transactions-table-container">
//               <ul className="transactions-table">
//                 <li className="table-header">
//                   <p className="table-header-cell">Title</p>
//                   <p className="table-header-cell">Amount</p>
//                   <p className="table-header-cell">Type</p>
//                 </li>
//                 {transactionsList.map(each => (
//                   <TransactionItem
//                     key={each.id}
//                     transactionDetails={each}
//                     deleteTransaction={this.deleteTransaction}
//                   />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default MoneyManager
