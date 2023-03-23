import { memo } from "react"

const Pessoa = ({nome, deletar, id}) => {
    return(
        <li className="box mb-3">
            {nome}

            <button onClick={() => deletar(id)} className="button is-danger ml-2">
                Me delete 
            </button>
        </li>
    )
}

export default memo(Pessoa)

/*
    memo - pega estado das props antes da renderização e depois de renderizar 
    assim ele apenas renderiza o que aconteceu de diferente 
    sem o memo ele irá renderizar a lista inteira novamente para adicionar o "José"


    memo não funciona para funções, neste caso o "deletar" como props é uma referência a função 
    que está no componente pai, e uma referência nunca é igual a outra, para resolver este problema de 
    performance utilizamos o "useCallback"(que está no componente pai)

*/
