import "./style.css"

export function TotalMoney({ listTransactions }) {
  const values = listTransactions.map(({ type, value }) =>
    type === "Entrada" ? value : value * -1
  )

  const totalMoney = values.reduce((acc, value) => acc + value, 0)

  return (
    <div className="totalMoneyContainer">
      <div className="totalMoneyContainer__text">
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <p className="totalMoneyContainer__value">$ {totalMoney.toFixed(2)}</p>
    </div>
  )
}
