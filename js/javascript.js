let c = 0
let somar = document.querySelector('button.somar')
let subtrair = document.querySelector('button.subtrair')
let multiplicar = document.querySelector('button.multiplicar')
let dividir = document.querySelector('button.dividir')
let res = document.querySelector('h4#res')
let guardar = []
function insert(num){
    let numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function clean(){
    document.querySelector('h4#res').innerHTML = ''
}

function calcular(){
    let resultado = document.getElementById('res').innerHTML;
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado);
    }else{
        document.getElementById('res').innerHTML = ''
    }
}