
var palabraX;

function palabraAleatoria(){  
    
    fetch('https://random-word-api.vercel.app/api?words=1&length=5')
    .then(res =>  res.json())
    .then(json =>{
        palabraX = json
        
    });
}


palabraAleatoria();

let index = 0
let inputs = document.querySelectorAll('.inputs');

function verificarPalabra(){

    console.log(palabraX[0]);



    let pri = (document.getElementById('pri').value === '')? '-':document.getElementById('pri').value;
    let sec = (document.getElementById('sec').value === '')? '-':document.getElementById('sec').value;
    let ter = (document.getElementById('ter').value === '')? '-':document.getElementById('ter').value;
    let cuar = (document.getElementById('cuar').value === '')? '-':document.getElementById('cuar').value;
    let quin = (document.getElementById('quin').value === '')? '-':document.getElementById('quin').value;


    let input = (pri+sec+ter+cuar+quin).toLowerCase();



    const palabraText = document.querySelector('.palabra').textContent;
    const palabraACambiar = document.querySelector('.palabra')
    const respuestas = document.querySelectorAll('.divs-respuesta');


    
    for(let i = 0; i < 5; i++){
        

        if(input[i] === palabraX[0][i]){

            respuestas[index].innerHTML = input[i];
            respuestas[index].dataset.feedback = 'bien';
            index++;

        }else if(input[i] === '-') {

            respuestas[index].innerHTML = '';
            inputs[i].value = '';
            index++;

        }else if(palabraX[0].includes(input[i])){
            respuestas[index].dataset.feedback = 'casi';
            respuestas[index].innerHTML = input[i];
            inputs[i].value = '';
            index++;
            
        }
        else{
            respuestas[index].innerHTML = input[i];
            respuestas[index].dataset.feedback = 'mal';
            inputs[i].value = '';
            index++;
        }
    }

    inputs[0].focus();


};



document.addEventListener('keydown', function(e) {
    let activo = document.activeElement;
    let anterior = activo.previousElementSibling;

 if(e.code == 'Backspace'|| e.code == 'ArrowLeft' || e.code == 'Delete'){
    if(activo.value === '' ){
        anterior.focus();
    }

  }
});


document.addEventListener('keyup', function(e) {
    let activo = document.activeElement;
    let siguiente = activo.nextElementSibling;

    if(e.code != 'Tab' && e.code != 'Backspace' && e.code !== 'F5' && e.code !== 'Enter' && e.code != 'Delete'){

    siguiente.focus();
  }
});



