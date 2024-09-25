function myScope(){
const form = document.querySelector('.form');
const resultado= document.getElementById('resultadoInput');

function recebe(event) {
    event.preventDefault();
    const peso = document.querySelector('.pesoInput');
    const altura = document.querySelector('.alturaInput');

        let imcPuro = peso.value/(altura.value*altura.value);
        let imc = imcPuro.toFixed(1);
        if(imc < 18.5){
            resultado.textContent = `Seu IMC é de ${imc} (Abaixo do peso).`;
            resultado.className='resultado underweight';
        }
        else if(imc >= 18.5 && imc <= 24.9){
            resultado.textContent= `Seu IMC é de ${imc} (Peso normal).`;
            resultado.className='resultado normal'; 
        }
        else if(imc>= 25 && imc <= 29.9){
            resultado.textContent = `Seu IMC é de ${imc} (Sobrepeso).`;        
            resultado.className='resultado sobrepeso'; 
        }
        else if(imc>= 30 && imc <= 34.9){
            resultado.textContent = `Seu IMC é de ${imc} (Obesidade grau 1).`;
            resultado.className='resultado obeso-um';   
        }
        else if(imc>= 35 && imc <= 39.9){
            resultado.textContent = `Seu IMC é ${imc} (Obesidade grau 2).`;
            resultado.className='resultado obeso-dois';       
        }
        else if (imc>40) {
            resultado.textContent= `Seu IMC é ${imc} (Obesidade grau 3).`;
            resultado.className='resultado obeso-tres';
        };     
};
form.addEventListener('submit',recebe);
}
myScope();