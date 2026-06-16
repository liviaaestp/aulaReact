export default function Exercicio9 ( { vendas, salario } )
 {
    const comissao = vendas * 0.06;
    const salarioFinal = salario + comissao;

    return (
        <div>
            <h2>Exerciio 9 - Comissão de Vendas </h2>

            <p>Total de Vendas: R$ {vendas.toFixed(2)}</p>
            <p>Salário Base: R$ {salario.toFixed(2)}</p>
            <p>Comissão(6%): R$ {comissao.toFixed(2)}</p>
            <p>Salário final: R$ {salarioFinal.toFixed(2)}</p>



            </div>

    
    );
    
}