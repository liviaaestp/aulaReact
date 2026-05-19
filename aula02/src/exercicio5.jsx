export default function Exercicio5({ quantidade }) {
    
    const salarioBruto = quantidade * 150;
  
    const valorInss = salarioBruto * 0.08;
  
    const salarioLiquido = salarioBruto - valorInss;
  
    return (
      <div style={{ marginBottom: '20px' }}>
        <p>Quantidade de Consultas: {quantidade}</p>
        <p>Salário Bruto: R$ {salarioBruto.toFixed(2)}</p>
        <p>Desconto INSS: R$ {valorInss.toFixed(2)}</p>
        <p><strong>Salário Líquido: R$ {salarioLiquido.toFixed(2)}</strong></p>
      </div>
    );
  }