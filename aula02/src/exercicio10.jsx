export default function Exercicio10 ( {salario } ){

    let gratificacao = Number (salario) * 0.08;
    let salarioFinal = Number (salario) + gratificacao;

    return(
        <div>
            <p>

         Salario Base: {salario} <br  />
        Gratificacao: {gratificacao}<br   />
        Salario Final: {salarioFinal}<br   />

        </p>
        </div>
    
    )

}