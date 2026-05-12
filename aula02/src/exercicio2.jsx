export default function Exercicio2 ({numero})
{
    let peso= Number(numero);
    let altura =Number(numero);
    let imc = peso/(altura/altura);

    return (
        <div>
            O peso é {peso} e a altura é {altura} metros, e o IMC é {imc};
        </div>
    )
}