import { FaTrash } from "react-icons/fa"
import "./style.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Card({ item, index, removeListTransactions }) {
  const notify = () => toast("Item removido com sucesso!")

  return (
    <li
      className={
        "card " + (item.type === "Entrada" ? "card--green" : "card--gray")
      }
    >
      <div className="card__header">
        <h2>{item.description}</h2>
        <p>{item.type}</p>
      </div>
      <p className="card__value">
        {item.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
      </p>
      <button
        onClick={() => {
          removeListTransactions(index)
          notify()
        }}
      >
        <div className="card__trashContainer">
          <FaTrash />
        </div>
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </li>
  )
}
