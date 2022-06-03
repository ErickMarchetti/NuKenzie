import "./style.css"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Form({ addListTransactions }) {
  const [inputDescription, setInputDescription] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [inputTypeValue, setInputTypeValue] = useState("Entrada")

  function checker(e) {
    e.preventDefault()

    const check = inputDescription !== "" && inputValue !== ""

    check ? sendItem() : toast("Por favor preencha os campos corretamente")
  }

  function sendItem() {
    const newItem = {
      description: inputDescription,
      type: inputTypeValue,
      value: Math.abs(inputValue),
      secondType: "todos"
    }
    addListTransactions(newItem)
    setInputDescription("")
    setInputValue("")
    toast("Item adicionado com sucesso!")
  }

  return (
    <form className="form" onSubmit={checker}>
      <label for="descricao" className="form__labelDescription">
        Descrição
      </label>
      <input
        id="descricao"
        className="form__inputDescription"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
      ></input>
      <span className="form__spanDescription">Ex: Compra de roupas</span>

      <div className="form__values">
        <div className="form__valueContainer">
          <p>Valor</p>
          <input
            type="number"
            placeholder="1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
        <div className="form__typeValueContainer">
          <p>Tipo de valor</p>
          <select
            value={inputTypeValue}
            onChange={(e) => setInputTypeValue(e.target.value)}
          >
            <option>Entrada</option>
            <option>Saída</option>
          </select>
        </div>
      </div>

      <button className="form__button">Inserir valor</button>
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
    </form>
  )
}
