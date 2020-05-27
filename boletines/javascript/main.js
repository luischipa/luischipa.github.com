console.log("hola mundo");

//el DOM
//let table = document.querySelector(".table");

//console.log(table);
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});


//console.log(links);
*/

/*let td = document.querySelectorAll("td");
td.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(this);
  });
});
*/

let links = document.querySelectorAll(".close");
links.forEach(function(link){
  link.addEventListener('click',function(ev){

    ev.preventDefault();

    let content = document.querySelector('.content');
    //quitarle las clases de animacion que ya tiene
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");
    //agregar class para animar su salida fadeOutUp
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function(){
      location.href = "/boletines";
    },600);
    /*
    setInterval(function(){
      location.href = "/";
    },1000);*/

    //setInterval

    return false;

  });

});

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
  icono.classList.remove("fa-star");
});
