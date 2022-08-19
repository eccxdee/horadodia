var hora = document.getElementById("hora")
var minuto = document.getElementById("minuto")
var segundo = document.getElementById("segundo")

var relogio = setInterval(function tempo() {
  var datadodia = new Date()
  var h = datadodia.getHours();
  var min = datadodia.getMinutes();
  var seg = datadodia.getSeconds();

  if(h < 10) h = '0' + h;
  if(min < 10) min = '0' + min;
  if(seg < 10) seg = '0' + seg;

  hora.textContent = h;
  minuto.textContent = min;
  segundo.textContent = seg;
})