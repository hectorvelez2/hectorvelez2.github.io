var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
villaplatzi.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
var fondo = {
  url: "tile.png",
  cargaOK: false 
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var lobo = {
  url: "lobo.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarLobos()
{
  lobo.cargaOK = true;
  dibujar();
}
function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (pollo.cargaOK)
    {
      console.log(cantidad);
      for(var v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 40;
        var y = y * 40;
        papel.drawImage(pollo.imagen, x, y);
      }
    }
  if (vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (lobo.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 50;
      var y = y * 50;
      papel.drawImage(lobo.imagen, x, y);
    }
  }

}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
