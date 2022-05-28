import "./style.css"
import LoadCard from "../../assets/load.svg"

export function Loading() {
  return (
    <>
      <li>
        <h2>Você ainda não possui nenhum lançamento</h2>
      </li>
      <li className="loadCard">
        <div className="loadCard__bloco1"></div>
        <div className="loadCard__bloco2"></div>
      </li>
      <li className="loadCard">
        <div className="loadCard__bloco1"></div>
        <div className="loadCard__bloco2"></div>
      </li>
      <li className="loadCard">
        <div className="loadCard__bloco1"></div>
        <div className="loadCard__bloco2"></div>
      </li>
    </>
  )
}
