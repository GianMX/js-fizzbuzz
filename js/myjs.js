// DA 1 A 100 GENERO TUTTI I NUMERI SE SONO MULTIPLI DI 3 CAMBIO CON FIZZ SE SONO MULTIPLI DI 5 CAMBIO CON BUZZ // MULTIPLI DI ENTRAMBI FIZZBUZZ
for (var i = 1; i <= 100; i++) {
if ( i%15 == 0 ) {
  // console.log("fizzbuzz");
  document.getElementById("list").innerHTML += "FizzBuzz" + '<li>';
}
else if ( i%3 == 0 ) {
  // console.log("fizz");
  document.getElementById("list").innerHTML += "Fizz" + '<li>';
}
else if ( i%5 == 0 ) {
  // console.log("buzz");
  document.getElementById("list").innerHTML += "Buzz" + '<li>';
}
else {
  // console.log(i);
  document.getElementById("list").innerHTML += i + '<li>';
}

}
