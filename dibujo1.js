var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick ); 

var d = document.getElementById("dibujito"); 
var ancho = d.width;
var lienzo = d.getContext("2d"); 


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#000000"
    var colorcito1 = "#000000"
    var xi, yf;
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
      {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarlinea(colorcito, 0, yi, xf, 300);
        console.log("lineas");

      }

    dibujarlinea(colorcito, 1, 1, 1, 299);
    dibujarlinea(colorcito, 0, 299, 299, 299);

    for(l = 0; l < lineas; l++)
      {
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarlinea(colorcito1, xi, 0, 300, yf);
        console.log("lineas");
      }

      dibujarlinea(colorcito1, 299, 1, 1, 1);
      dibujarlinea(colorcito1, 299, 299, 299, 0);

}
