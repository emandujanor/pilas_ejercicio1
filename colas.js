var nombre = new Queue();
nombre.enqueue("Ana");
nombre.enqueue("Sara");
nombre.enqueue("Luisa");
nombre.enqueue("Diana");
nombre.enqueue("Angela");
console.log(nombre);


var apellido = new Queue();
apellido.enqueue("Robles");
apellido.enqueue("Suarez");
apellido.enqueue("Ramirez");
apellido.enqueue("Salazar");
apellido.enqueue("Lara");
console.log(apellido);

var nombres = new Queue();
  for (i =0; i<= nombre.length;i ++){
    nombres.add(nombre[i] + " " + apellido[i]);
  };
return nombres;
