// Calculadora das 4 operações básicas
function Calculadora(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    operador = document.querySelector("input[name=opt]:checked").value;

       resultado = eval(parseFloat(num1) + operador + parseInt(num2));

    document.getElementById("exibir-resultado").innerHTML = resultado;
}
//Calculadora de Potencia
function potencia(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    resultado = Math.pow(parseInt(num1), parseInt(num2));

    document.getElementById("exibir-resultado").innerHTML = resultado;

}
//Calculadora de Raiz Quadrada
function raiz(){
    num1 = document.getElementById("num1").value;

    resultado = Math.sqrt(parseFloat(num1));

    document.getElementById("exibir-resultado").innerHTML = resultado;

}
//Calculadora de Area do Triângulo
function area(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    resultado = eval(parseFloat(num1) * parseInt(num2))/ 2;

    document.getElementById("exibir-resultado").innerHTML = resultado;

}
//Calculadora de Formula Quadratica
    function bhaskara(){
        
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        c = document.getElementById("c").value;

        delta = eval(parseFloat((b * b) -4 * a * c));

        x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
        x2 = eval(parseFloat((-b - Math.sqrt(delta)) / (2 * a)));
        document.getElementById("exibir-resultado").innerHTML = delta;
        document.getElementById("exibir-resultado1").innerHTML = x1;
        document.getElementById("exibir-resultado2").innerHTML = x2;

}
 


 