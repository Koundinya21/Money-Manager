// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="Details-Container">
      <div className="container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="Balance"
          className="img"
        />
        <div className="details">
          <p className="heading-balance">Your Balance</p>
          <p className="para" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="Income"
          className="img"
        />
        <div className="details">
          <p className="heading-balance">Your Income</p>
          <p className="para" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="container3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="details">
          <p className="heading-balance">Your Balance</p>
          <p className="para" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

// import './index.css'

// const MoneyDetails = props => {
//   const {balanceAmount, incomeAmount, expensesAmount} = props

//   return (
//     <div className="Details-Container">
//       <div className="container1">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
//           alt="Balance"
//           className="img"
//         />
//         <div className="details">
//           <p className="heading-balance">Your Balance</p>
//           <p className="para" data-testid="balanceAmount">
//             Rs {balanceAmount}
//           </p>
//         </div>
//       </div>
//       <div className="container2">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
//           alt="income"
//           className="img"
//         />
//         <div className="details">
//           <p className="heading-balance">Your Income</p>
//           <p className="para" data-testid="incomeAmount">
//             Rs {incomeAmount}
//           </p>
//         </div>
//       </div>
//       <div className="container3">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
//           alt="expenses"
//           className="img"
//         />
//         <div className="details">
//           <p className="heading-balance">Your Expenses</p>
//           <p className="para" data-testid="expensesAmount">
//             Rs {expensesAmount}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

export default MoneyDetails
