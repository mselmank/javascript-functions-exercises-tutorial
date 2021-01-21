

```js
const x = (x, y) => x * y;
console.log(x(2,2));
```







<script>

   function eliminarVocales (str){

      let resultado = str.replace(/[aeiou]/g, '');
      return resultado 
   }


   var text = "Hola que pasa con lo que pasa";
   const a = eliminarVocales(text);
   console.log(a);

   vectorLetras = configurarTexto();

   function configurarTexto (a){

   var mejorarTexto = a.toLowerCase().split("");
   return mejorarTexto;
}

  </script>


   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));