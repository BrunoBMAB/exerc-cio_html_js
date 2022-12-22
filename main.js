const form = document.getElementById('form-submit');
const numA = document.getElementById('Valor-A')
const numB = document.getElementById('Valor-B')

function validaAB(numA, numB) {
    
    if(numA < numB){
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

const mensagemSucesso = `O número B=${numB.value} é maior que o número A=${numA.value}`;

formEValido = validaAB(numB.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-messagen');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numA.value = ' ';
        numB.value = ' ';
        

    } else {
        numB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

})




console.log(form);
