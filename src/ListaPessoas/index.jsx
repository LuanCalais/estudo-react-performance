import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";
import { faker } from "@faker-js/faker";
// faker é uma lib que gera nomes aleatórios
faker.locale = "pt_BR";

const ListaPessoas = () => {
  const [pessoas, setPessoas] = useState([
    {
      nome: "Maria João",
      id: faker.datatype.uuid(),
    },
    {
      nome: "Maria João",
      id: faker.datatype.uuid(),
    },
  ]);

  //   useCallback trabalha com o memo, recebe a função e um colchete que é quando deve ser mudada, se usar uma variável de fora
  // neste caso não utilizamos mas poderíamos utilizar o [pessoas]
  const deletarPessoa = useCallback((id) => {
    setPessoas((listaAnterior) =>
      listaAnterior.filter((pessoa) => pessoa.id !== id)
    );
  }, []);

  return (
    <div className="has-text-centered">
      <ul>
        {pessoas.map((pessoa, index) => {
          return <Pessoa key={pessoa.id} nome={pessoa.nome} id={pessoa.id} deletar={deletarPessoa} />;
        })}
      </ul>
      <button
        className="button is-primary is-outlined"
        onClick={() => {
          setPessoas((listaAnterior) => [
            ...listaAnterior,
            {
              nome: faker.name.fullName(),
              id: faker.datatype.uuid(),
            },
          ]);
        }}
      >
        Adicionar Pessoa
      </button>
    </div>
  );
};

export default ListaPessoas;

/* 

    memo não funciona para funções, neste caso o "deletar" como props é uma referência a função 
    que está no componente pai, e uma referência nunca é igual a outra, para resolver este problema de 
    performance utilizamos o "useCallback"

*/
