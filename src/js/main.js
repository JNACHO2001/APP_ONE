const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const result = document.getElementById('result')
const calcular= document.getElementById('calcular')

calcular.addEventListener('click',function(){
    

const imc = peso.value / (altura.value * altura.value);
let categoria = '';

if (imc < 18.5) {
    categoria = 'Bajo peso';
} else if (imc < 25) {
    categoria = 'Peso normal';
} else if (imc < 30) {
    categoria = 'Sobrepeso';
} else {
    categoria = 'Obesidad';
}

 result.textContent="tu tienes un imc de "+ Math.round(imc) +" por lo tanto esta en: "+ categoria
})

