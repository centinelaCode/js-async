# Asincronismo en JS

## Callbacks
Los callbacks permiten implementar funcionalidades asincronas, es decir JS ejecuta el codigo de forma secuencial, pero hay casos en los que determinado codigo debe ejecutarse hasta que ocurra otra cosa, es lo que conocemos como asíncronia.

Es donde entran los callbacks, estos permiten que una función no s eva ejecutar antes de que se complete una tarea en especifico, sino que se ejecutará despues que la trea haya finalizado.

Un callback no es más que una función que se le pasa como parametro otra función y se manda a llamar enseguida de que haya ocurrido algo o se completo alguna tarea en especifico.

Ejemplo:
```
function saludar(nombre) {
  alert('Hola' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```

Explicación: el codigo anterior consta de 2 funciones y una llamada a una de las funciones, todo empieza invocando la función ```procesarEntradaUsuario``` a la cual se le pasa otra función como parametro la cual se especifica con el nombre de callback, donde callback será la función saludar ```callback = saludar -> ya que es lo que se mando como parametro```, ya dentro de la función se ejecuta en el navegado el prompt el cual permite al usuario ingresar su nombre el cual se guarda en la variable nombre. Despues se invoca el callback donde se le pasa el nombre (aunque internamente esta ejecutando la función ```saludar(nombre)```), es decir el callback será la función saludar, al ejecutar esta función ya solo muestra una alerta con el texto: Hola y el nombre que se paso como parametro.
