import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expense(props) {
    return (
        <div className="expenses">
            <ExpenseItem
                title={props.expense0.title}
                amount={props.expense0.amount}
                date={props.expense0.date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expense1.title}
                amount={props.expense1.amount}
                date={props.expense1.date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expense2.title}
                amount={props.expense2.amount}
                date={props.expense2.date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expense3.title}
                amount={props.expense3.amount}
                date={props.expense3.date}>
            </ExpenseItem>
        </div>
    )
}

export default Expense;