$(function(){

	$('[goto=contato]').click(function(){
		$('html,body').animate({'scrollTop':$('#quem-somos').offset().top});
		return false;
	});

	$('#icon-mob').click(function(){
		$('.topo-mobile ul').slideToggle('');
	});

	$('#link-modal').click(function(){
		$('.modal').show('');
	});

	$('#link-close').click(function(){
		$('.modal').hide('');
	});

	$('[name="cpf"]').mask("000.000.000-00");
	$('[name="numcel"]').mask("(00)00000000");
	$('[name="cep"]').mask("00.000.000");
	$('[name="datanasc"]').mask("00/00/0000");

	$( ".form-modal" ).submit(function( event ) {
 		alert( "Formulario preenchido com sucesso, muito obrigado" );
  		event.preventDefault();
  		location.reload();
	});

});