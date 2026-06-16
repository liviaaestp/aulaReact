export default function Exercicio7 ( {Celsius}  )
{
let  fah = Number (Celsius * 9/5 + 32);
let kelvin = Number (Celsius + 273,15);

return(
    <div>
        {Celsius.toFixed(2)}
    °C equivale a {fah.toFixed(2)}°F e {kelvin.toFixed(2)}°K.C
    </div>
)
}