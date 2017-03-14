
var nombre = new Stack();
nombre.push="Vale";
nombre.push="Rosy";
nombre.push="Eli";
nombre.push="Angi";
nombre.push="Perla";
var apellido = new Stack();
apellido.push="Ramirez";
apellido.push="Rodriguez";
apellido.push="Elizondo";
apellido.push="Davalos";
apellido.push="Salazar";


function personas(nombre, apellido){
  var nombres =[];
  for(i=0; i>= nombres.length ; i++){
    nombres.push=nombre.pop() + " " + apellido.pop();
  }
  return nombres;
}
