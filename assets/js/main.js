  window.addEventListener('load',function() {

  var cuartap=document.getElementsByClassName("cuartap");
  var quintap=document.getElementsByClassName("quintap");
  var sextap=document.getElementsByClassName("sextap");
  var select=document.getElementById("select");

  var promociones=[];
  function mostrar(promociones){
    for(var i=0;i<promociones.length;i++){
      promociones[i].style.display="inline-block";
    }
  }

  function ocultar(promociones){
    for(var i=0;i<promociones.length;i++){
      promociones[i].style.display="none";
    }
  }

  select.onchange=function(){
    if(select.value=="cuarta_promocion"){
      mostrar(cuartap);
      ocultar(quintap);
      ocultar(sextap);
      }

    if(select.value=="quinta_promocion"){
      mostrar(quintap);
      ocultar(cuartap);
      ocultar(sextap);
    }

    if(select.value=="sexta_promocion"){
      mostrar(sextap);
      ocultar(cuartap);
      ocultar(quintap);
      }

    if(select.value=="todas"){
      mostrar(cuartap);
      mostrar(quintap);
      mostrar(sextap);
      }
    }
  })
