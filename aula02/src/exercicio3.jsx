export default function Exercicio3({ nota1, nota2 })
 {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const media = (n1 + n2) / 2;
  
    const situacao = media >= 6 ? "Aprovado" : "Reprovado";
  
    return (
      <div>
        <p>
          A media das notas é {media.toFixed(2)} e a situação é <strong>{situacao}</strong>
        </p>
      </div>
    );
  }