export default function Exercicio6({ capital, taxa, tempo }) {

    const i = taxa / 100;
  
    const montanteSimples = capital * (1 + i * tempo);
  
    const montanteCompostos = capital * Math.pow(1 + i, tempo);
  
    return (
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
        <h3>Exercício 6 </h3>
        <p><strong>Capital Inicial:</strong> R$ {capital.toFixed(2)}</p>
        <p><strong>Taxa de Juros:</strong> {taxa}% ao mês</p>
        <p><strong>Tempo:</strong> {tempo} meses</p>
        <hr />
        <p><strong>Montante (Juros Simples):</strong> R$ {montanteSimples.toFixed(2)}</p>
        <p><strong>Montante (Juros Compostos):</strong> R$ {montanteCompostos.toFixed(2)}</p>
      </div>
    );
  }