//Funcion normal
function sumar( a, b){
    return a+b;
}


var resta = function(a, b){
    return a-b;
}

document.getElementById("user_name").value = 5

document.getElementById("alerta").addEventListener("click", function(e){
    alert("El diego es gei");
})

var lista = [1,2,3,4,5];

for(i = 0; i <lista.length; i++ ){
    console.log(lista[i])
}

lista.forEach(function(item){
    console.log("item: ", item);
})

var elementos = document.getElementsByTagName("label")


for(i = 0; i <elementos.length; i++ ){
    elementos.item(i).innerHTML = "label: " + i
    console.log(elementos.item(i))
}

