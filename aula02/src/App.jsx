import "./App.css";
import Exemplo1 from "./exemplo1";
import Exercicio1 from "./exercicio1";
import Exercicio2 from "./exercicio2";
import Exercicio3 from "./exercicio3";
export default function App()
{
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>

      <div className="card">
            <h3>Chamadas para o componete Exemplo1</h3>

            <Exemplo1 numero1={10} numero2={20} />
      </div>
      <div className="card">
        <h3>Exercicio 1</h3>
        <Exercicio1 numero={12}/>
        <Exercicio1 numero={67}/>
        <Exercicio1 numero={-5}/>

      </div>
      <div className="card">
        <h3>Exercício 2 </h3>
        <Exercicio2 peso={80} altura ={1.80}/>
        <hr />
        <Exercicio2 peso={60} altura={1.60}/>
      </div>

      <div className="card">
      <h3>exercicio3</h3>
      <Exercicio3 nota1 ={7.5} nota2={9.5}/>
      <hr />
      <Exercicio3 nota1 ={3} nota2={6.5}/>
      <hr />
      </div>
      
    </div>
  )
}