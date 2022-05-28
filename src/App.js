import { useState } from "react"
import { Header } from "./components/Header"
import "./App.css"
import { Main } from "./components/Main"

function App() {
  const [isHomePage, setIsHomePage] = useState(true)
  const [listTransactions, setListTransactions] = useState([])

  function addListTransactions(newItem) {
    setListTransactions([...listTransactions, newItem])
  }

  function removeListTransactions(removedItemIndex) {
    const filteredItems = listTransactions.filter(
      (_, index) => index !== removedItemIndex
    )
    setListTransactions(filteredItems)
  }

  return (
    <>
      <Header setIsHomePage={setIsHomePage} />
      <Main
        addListTransactions={addListTransactions}
        listTransactions={listTransactions}
        removeListTransactions={removeListTransactions}
      />
    </>
  )
}

export default App
