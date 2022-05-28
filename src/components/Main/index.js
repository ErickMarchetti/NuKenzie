import { Form } from "../Form"
import { List } from "../List"
import { TotalMoney } from "../TotalMoney"
import "./style.css"

export function Main({
  addListTransactions,
  listTransactions,
  removeListTransactions
}) {
  return (
    <main className="main">
      <div className="mainContainer">
        <div className="mainContainer__infos">
          <Form addListTransactions={addListTransactions} />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <List
          listTransactions={listTransactions}
          removeListTransactions={removeListTransactions}
        />
      </div>
    </main>
  )
}
