import "./App.css";
import Exemplo1 from "./exemplo1";
import Exercicio1 from "./exercicio1";
import Exercicio2 from "./exercicio2";
import Exercicio3 from "./exercicio3";
import Exercicio4 from "./exercicio4";
import Exercicio5 from "./exercicio5";
import Exercicio6 from "./exercicio6";


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
      <h3>exercicio 3</h3>
      <Exercicio3 nota1 ={7.5} nota2={9.5}/>
      <hr />
      <Exercicio3 nota1 ={3} nota2={6.5}/>
      <hr />
      </div>

      <div className="card">
      <h3> Exercício 4</h3>
      <Exercicio4 tipo="retangulo" base={10} altura={5} />
      <Exercicio4 tipo="triangulo" base={10} altura={5} />
      <Exercicio4 tipo="quadrado" base={10} altura={10} />
      
      </div>

      <div className="card">
       <hr />
      <h3> Exercício 5</h3>
      <Exercicio5 quantidade={10} />
      <hr />
      <Exercicio5 quantidade={20} />
     </div>
    

     <div className="card">
    <h3>Exercício 6</h3>
    <Exercicio6 capital={1000} taxa={5} tempo={6} />
    </div>
     
      
    </div>
   
  )
}