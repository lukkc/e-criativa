$(document).ready(function() {
  
        //personalização no scroll
        $("html, .modal").niceScroll({
          cursorwidth:"10px",
          cursorcolor:"rgba(216,236,242,0.6)",
          zindex:999,
          scrollspeed:100,
          mousescrollstep:50,
          cursorborder:"1px solid #0A3145",
          cursorborderradius:"0px"
        });

        //ajusta o tamanho do carousel principal
        if ($(window).width() > 767) {
          var porcent = $(window).height() / 100;
          $('.carousel-inner .item img').css("height", $(window).height() - $('header').height());
          $('footer').css("height", $(window).height() - $('header').height());
        }

        if ($(window).width() <= 767) {
          
          $('#Modal-Resgister-Comprador div.modal-content').css("width",$(window).width());
        }
        
                 
  });

$( window ).resize(function() {

        if ($(window).width() > 767) {  
          var porcent = $(window).height() / 100;

          $(".menu").show();
          $(".menu ul").css("width","100%");
          $(".menu li").css("width", $(".menu ul").width() / 11);
          $(".menu").css("height","auto");
          //ajusta o tamanho do carousel principal
          $('.carousel-inner .item img').css("height", $(window).height() - $('header').height());
          $('footer').css("height", $(window).height() - $('header').height());
        }    

        if ($(window).width() <= 767) { 
          $(".menu").hide();
          $(".menu").css("width","100%");
          $(".menu ul").css("width","100%");
          $(".menu li").css("width","100%");
          $("header").css("margin-bottom","-6px");
          $('.carousel-inner .item img').css("height", "300px");
          $('footer').css("height", "auto");
          $('#Modal-Resgister-Comprador .modal-content').css("width",$(window).width());
        }        
});

      //ajusta o header quando o botao menu e clicado
$(".btn-menu").on('click', function(){
		    $(".menu").toggle();
        if($("header").css("margin-bottom") == "-6px"){
            $("header").css("margin-bottom","19px");
        }else if($("header").css("margin-bottom") =="19px"){
            $("header").css("margin-bottom","-6px");
        }
});


//mostra o preview da imagem selecionada
$("#inpt_ftcomprador").change(function() {
 
  var preview = document.querySelector('#ftcomprador');
  var file    = document.querySelector('#inpt_ftcomprador').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }



  });


  $("#inpt-img-obra").change(function() {
 
      var preview = document.querySelector('#img-obra-register');
  var file    = document.querySelector('#inpt-img-obra').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }


  });
    

    $("#inpt-img-obra1").change(function() {
 
      var preview = document.querySelector('#img-obra-register1');
  var file    = document.querySelector('#inpt-img-obra1').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }


  });


  $("#inpt-img-obra2").change(function() {
 
      var preview = document.querySelector('#img-obra-register2');
  var file    = document.querySelector('#inpt-img-obra2').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }


  });

  $("#inpt-img-obra3").change(function() {
 
      var preview = document.querySelector('#img-obra-register3');
  var file    = document.querySelector('#inpt-img-obra3').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }


  });

  $("#inpt-img-obra4").change(function() {
 
      var preview = document.querySelector('#img-obra-register4');
  var file    = document.querySelector('#inpt-img-obra4').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }


  });

//validação de entrada dos inputs dos modais

//quando clicar nos botoes do modal register aparecer os modais de cadastro
/*$('#Modal-Register-Comprador').on('hide.bs.modal', function (e) {
    $('#Modal-register').modal('hide');
});

$("#comprador").on('click', function(){
    $('#Modal-Register-Comprador').modal('show');
});

$("#artista").on('click', function(){
    $('#Modal-Register-Artista').modal('show');
    $("#btn-cadastro-obra").on('click', function(){
    //if(todos os inputs estiverem ok do modal register executar abaixo)
        $('#Modal-Register-Artista').modal('hide');
        $('#Modal-Register-Artista').on('hidden.bs.modal', function (e) {
            $('#Modal-Register-Comprador').modal('show');
        });
    });
});*/



//VALIDAÇÃO INPUTS
/*var nome;
var sobrenome;
$('#btn-form-comprador').on('click', function(){


  if($("input[name='usuario']").val().length >= 5 && $("input[name='usuario']").val().match(/[a-zA-Z]/g) && !$("input[name='usuario']").val().match(/[^a-zA-Z\s]/g)){

      for(nome = 0; nome < $("input[name='usuario']").val().length; nome++){


        if($("input[name='usuario']").val()[nome] != " "){
         $('form').find('input').popover('show');
         
       }

       if($("input[name='usuario']").val()[nome] == " " && nome <= 1){
         $('form').find('input').popover('show');
         
       }
       if($("input[name='usuario']").val()[nome] == " " && nome > 1){
        if($("input[name='usuario']").val()[nome + 1] == undefined ){
          $('form').find('input').popover('show');
         
        }else{
          if($("input[name='usuario']").val()[nome + 2] == undefined){
            $('form').find('input').popover('show');
          
          }else{
            if($("input[name='usuario']").val().length >= 5){
              $('form').find('input').popover('hide');
            
              return false;
            }
          }
        }
      }
    }
  }else{
    $('form').find('input').popover('show');
    
  }
});
$('#Modal-Register-Comprador').on('hide.bs.modal', function (e) {
          
    $('form').find('input').popover('hide'); 
     $('form').find('input').val(undefined);
    

           
});
//document.getElementById('form-register-comprador').submit();


$("input[name='usuario']").on('input',function(){
document.getElementById('form-register-comprador').nome.value = document.getElementById('form-register-comprador').nome.value.replace(/^([\d]{2})([\d])$/, "$1.$2" );
});*/


var formRegisterComprador = document.getElementById("form-register-comprador");
var nome = formRegisterComprador.usuario;
var email = formRegisterComprador.email;
var dtNascimento = formRegisterComprador.dtNascimento;
var senha = formRegisterComprador.senha;
var confSenha = formRegisterComprador.confSenha;
var telefone = formRegisterComprador.telefone;
var auxForm = 0;

$('#btn-form-comprador').on('click', function(){

//VALIDA INPT NOME COMPLETO
  if(!nome.value.match(/[^a-z\s]/ig)){

    if(/^([\w]{2,})([\s]{1})([\w]{2,})/ig.test(nome.value)){
      $('form').find(nome).popover('hide');
      $('#errornome').css("display","none");
      $('form').find(nome).removeClass("error");
      $('form').find(nome).removeClass("neutro");
      $('form').find(nome).addClass("ok");
    }else{

      if ($(window).width() > 767) {
        $('form').find(nome).popover('show');
      }
      else{
        $('#errornome').css("display","block")
      }
      $('form').find(nome).removeClass("ok");
      $('form').find(nome).removeClass("neutro");
      $('form').find(nome).addClass("error");
      auxForm+=1;
    }
  }else{
    //$('#nome').attr({});
    if ($(window).width() > 767) {
        $('form').find(nome).popover('show');
      }
      else{
        $('#errornome').css("display","block");
      }
      $('form').find(nome).removeClass("ok");
      $('form').find(nome).removeClass("neutro");
      $('form').find(nome).addClass("error");
      auxForm+=1;
  }

//VALIDA INPT EMAIL
  if(!/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email.value)){
    if ($(window).width() > 767) {
        $('form').find(email).popover('show');
      }
      else{
        $('#erroremail').css("display","block");
      }
      $('form').find(email).removeClass("ok");
      $('form').find(email).removeClass("neutro");
      $('form').find(email).addClass("error");
      auxForm+=1;
  }else{
    $('form').find(email).popover('hide');
    $('#erroremail').css("display","none");
    $('form').find(email).removeClass("neutro");
    $('form').find(email).removeClass("error");
    $('form').find(email).addClass("ok");
  }

//VALIDA INPT DATA
  if(!/([\d]{2})\/([\d]{2})\/([\d]{4})/ig.test(dtNascimento.value)){
    if ($(window).width() > 767) {
        $('form').find(dtNascimento).popover('show');
      }
      else{
        $('#errordtNasc').css("display","block");
      }
      $('form').find(dtNascimento).removeClass("ok");
      $('form').find(dtNascimento).removeClass("neutro");
      $('form').find(dtNascimento).addClass("error");
      auxForm+=1;
    
  }else{
    $('form').find(dtNascimento).popover('hide');
    $('#errordtNasc').css("display","none");
    $('form').find(dtNascimento).removeClass("neutro");
    $('form').find(dtNascimento).removeClass("error");
    $('form').find(dtNascimento).addClass("ok");
  }

//VALIDA INPT SENHA
  if(!/^(((?=.*\d)(?=.*[a-z])).{6,32})$/i.test(senha.value) || confSenha.value != senha.value){
      if(!/^(((?=.*\d)(?=.*[a-z])).{6,32})$/i.test(senha.value)){
        confSenha.setAttribute("data-content","<strong>Senha inválida</strong>.&nbsp; Digite uma senha com no minimo 6 caracteres, que tenha no minimo 1 letra e 1 número.");
        $('form').find(senha).removeClass("ok");
        $('form').find(senha).removeClass("neutro");
      $('form').find(senha).addClass("error");
      }else if(/^(((?=.*\d)(?=.*[a-z])).{6,32})$/i.test(senha.value)){
        $('#errorsenha').css("display","none");
        $('form').find(senha).removeClass("neutro");
    $('form').find(senha).removeClass("error");
    $('form').find(senha).addClass("ok");
      }


      if(confSenha.value != senha.value){
        confSenha.setAttribute("data-content","Sua senha de confirmação não está igual a primeira senha digitada");
        $('form').find(senha).removeClass("ok");
        $('form').find(confSenha).removeClass("neutro");
      $('form').find(confSenha).addClass("error");
      }if ($(window).width() > 767) {
        $('form').find(confSenha).popover('show');
      }
      else{
        if(!/^(((?=.*\d)(?=.*[a-z])).{6,32})$/i.test(senha.value)){
        $('#errorsenha').css("display","block");
      }else if(confSenha.value != senha.value){
        $('#errorconfSenha').css("display","block");
      }
        
      }
      auxForm+=1;
      
    }else{
      $('form').find(confSenha).popover('hide');
      if(confSenha.value == senha.value){
        $('#errorconfSenha').css("display","none");
      $('form').find(confSenha).removeClass("neutro");
    $('form').find(confSenha).removeClass("error");
    $('form').find(confSenha).addClass("ok");
      }
      
    }

//VALIDA INPT TELEFONE
  if(!/^\(([0-9]{2})\)\s([0-9]?)[\s]?([0-9]{4})\s\-\s([0-9]{4})$/i.test(telefone.value)){
    if ($(window).width() > 767) {
        $('form').find(telefone).popover('show');
        $('form').find(telefone).removeClass("neutro");
    $('form').find(telefone).removeClass("ok");
    $('form').find(telefone).addClass("error");
      }
      else{
        $('#errortel').css("display","block");
      }
      $('form').find(telefone).removeClass("neutro");
      $('form').find(telefone).addClass("error");
      auxForm+=1;
  }else{
    $('form').find(telefone).popover('hide');
    $('#errortel').css("display","none");
    $('form').find(telefone).removeClass("neutro");
    $('form').find(telefone).removeClass("error");
    $('form').find(telefone).addClass("ok");
  }

  
  if(auxForm > 0){
    auxForm = 0;
  }else{
    document.getElementById('form-register-comprador').submit();
  }




});

$('.modal').on('hide.bs.modal', function (e) {
    $('form').find('input').popover('hide'); 
     $('form').find('input').val(undefined);
       
});

//FORMATA INPT DATA NASCIMENTO
var auxDt;
var auxDt2 = "";
dtNascimento.oninput = function(){
  
  if(!dtNascimento.value.match(/[^0-9\/]/ig)){
    dtNascimento.value = dtNascimento.value.replace(/^([\d]{2})([\d]{1,2})$/, "$1/$2" );
    auxDt2 = dtNascimento.value;
    if(dtNascimento.value.length > 5){
      dtNascimento.value = dtNascimento.value.replace(/^([\d]{2})\/([\d]{2})([\d]{1,})$/, "$1/$2/$3" );
      auxDt2 = dtNascimento.value;
    }
    if(/^([\d]{2})\/([\d]{2})\/([\d]{4})$/ig.test(dtNascimento.value)){
      auxDt = dtNascimento.value;
    }
    if(dtNascimento.value.length > 10){
      dtNascimento.value = auxDt;
    }
  }else{ 
    if(dtNascimento.value.length <= 10){
      dtNascimento.value = auxDt2;
    }else{
      dtNascimento.value = auxDt;
    }
    
  }
}

//FORMATA INPT TELEFONE
  var auxTel;
  var auxTel2 = "";
  telefone.oninput = function(){

if(!telefone.value.match(/[^0-9\(\)\s\-]/ig)){

    telefone.value = telefone.value.replace(/^([0-9]{2})/, "($1)");
    auxTel2 = telefone.value;
    if(/^\(([0-9]{3})/i.test(telefone.value)){
      telefone.value = telefone.value.replace(/^\(([0-9]{2})([0-9]{1})/, "($1) $2");
      auxTel2 = telefone.value;
    }
    
    if(telefone.value.length > 4){
      telefone.value = telefone.value.replace(/^\(([0-9]{2})\)([0-9]{1})([0-9]*)$/, "($1) $2$3");
      auxTel2 = telefone.value;
    }

    if(telefone.value.length > 9 && !/^\(([0-9]{2})\)\s([0-9]?)[\s]?([0-9]{4})\s\-\s([0-9]{5})$/.test(telefone.value)){
      if(/^\(([0-9]{2})\)\s([0-9]{1})[\s]?([0-9]{4})[\s]?[\-]?[\s]?([0-9]{1,4})$/i.test(telefone.value)){
          telefone.value = telefone.value.replace(/^\(([0-9]{2})\)\s([0-9]{1})[\s]?([0-9]{3})([0-9]{1})[\s]?[\-]?[\s]?([0-9]{1,4})$/, "($1) $2$3 - $4$5");
          auxTel2 = telefone.value;
      }else{
          telefone.value = telefone.value.replace(/^\(([0-9]{2})\)\s([0-9]{4})([0-9]{1,4})$/, "($1) $2 - $3");
          auxTel2 = telefone.value;
      }
      telefone.value = telefone.value.replace(/^\(([0-9]{2})\)\s([0-9]{1})[\s]?([0-9]{3,4})[\s]?[\-]?[\s]?([0-9]{1,4})$/, "($1) $2$3 - $4");
      auxTel2 = telefone.value;
    }
    if(/^\(([0-9]{2})\)\s([0-9]?)[\s]?([0-9]{4})\s\-\s([0-9]{5})$/.test(telefone.value)){
      telefone.value = telefone.value.replace(/^\(([0-9]{2})\)\s([0-9]{1})([0-9]{3})\s\-\s([0-9]{1})([0-9]{4})$/, "($1) $2 $3$4 - $5");
      auxTel2 = telefone.value;
    }

    if(/^\(([0-9]{2})\)\s([0-9]?)[\s]?([0-9]{4})\s\-\s([0-9]{4})$/i.test(telefone.value)){
      auxTel = telefone.value;
    }

    if (telefone.value.length > 18) {
      telefone.value = auxTel;
    }
  }else{
    if (telefone.value.length <= 18) {
      telefone.value = auxTel2;
    }else{
      telefone.value = auxTel;
    }
    
  }  
}
