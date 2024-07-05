document.querySelector("h1").innerText = "Ejercicios 2";
//document.querySelector("h1").style.backgroundColor = "orange";
 let valorDolar = parseFloat(4000);

function imc(){   
  debugger;
    const peso = document.getElementById('peso').value;
    const estatura = document.getElementById('estatura').value;

    if (peso && estatura) {
        const imc = peso / (estatura * estatura) * 100;
        document.getElementById('resultado').textContent = `Tu IMC es ${imc}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingresa tanto tu peso como tu estatura.';
    }
}

function dollars(){
    debugger;
    const valor = document.getElementById('dolares').value;
    var result = pasarDolarAPesos(valor);
    document.getElementById('resultado3').textContent = 'El el valor en pesos es: ' + result;
}

function pasarDolarAPesos(valor) {
       var r = valor * valorDolar;
        return "$" + r;
}

function fact(){
    const numerofact = document.getElementById('factorial').value;
    var result = factorial(numerofact);
    document.getElementById('resultado2').textContent = 'El numero factorial es: ' + result;
}
function factorial(n) {
    if (n === 0 || n === 1) {   
      return 1;                 
    } else {                    
      return n * factorial(n - 1); 
    }
  }


  function calcularAreaYPerimetroRectangular() {
    debugger;
    const altura = document.getElementById('altura').value;
    const anchura = document.getElementById('anchura').value;
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    document.getElementById('resultado4').textContent = 'el area es: ' + area + ' y el perimetro es: ' + perimetro;
  }

  function calcularAreaYPerimetroCircular() {
    const radio = document.getElementById('radio').value;
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
    document.getElementById('resultado5').textContent = 'el area es: ' + area + ' y el perimetro es: ' + perimetro;
  }

  function mostrarTablaDeMultiplicar() {
    const numerox = document.getElementById('numerox').value;
    var text = '';
    for (var i = 1; i <= 10; i++) {

      var resultado = numerox * i;

      text += numerox + " x " + i + " = " + resultado + '\n';
      console.log(numerox + " x " + i + " = " + resultado);
    }
    document.getElementById('resultado6').textContent = text;
  }


