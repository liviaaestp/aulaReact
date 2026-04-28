import "./App.css";
import Exemplo1 from "./Exemplo1";
export default function App()
{
  return (
    <div>
      <h1> Aula 02 - Criação de componentes</h1>

     <div className="card">
      <h3>Chamadas para o componente Exeplo1</h3>

      <Exemplo1 numero1={10} numero2={20} />
     </div>

    </div>
  )
}