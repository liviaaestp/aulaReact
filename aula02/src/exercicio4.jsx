export default function Exercicio4({ tipo, base, altura }) {
    let area = 0;
  
    if (tipo === "retangulo") {
      area = base * altura;
    } else if (tipo === "triangulo") {
      area = (base * altura) / 2;
    } else {
      area = 0; 
    }
  
    return (
      <p>
        Polígono {tipo} de base {base} e altura {altura} possui a Área de {area.toFixed(2)}
      </p>
    );
  }