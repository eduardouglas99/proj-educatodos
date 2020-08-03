$(function(){

	$('[goto=contato]').click(function(){
		$('html,body').animate({'scrollTop':$('#quem-somos').offset().top});
		return false;
	});

	$('[goto=participante]').click(function(){
		$('html,body').animate({'scrollTop':$('.topo-f').offset().top});
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
	$('[name="cpf-login"]').mask("000.000.000-00");

	$( ".form-modal" ).submit(function( event ) {
		event.preventDefault();
		var formData = $(this).serializeArray();
		$.ajax({
			method: "POST",
 			url: "http://localhost/Projetos/educatodos/assets/php/insertUser.php",
 			data: formData,
 			async: true,
 			success: function(data) { 
	       		$('#log-box').html(data);
			},
		   	beforeSend: function() { 
		      $('.loading').fadeIn('fast'); 
		      $('.formulario form button').hide(''); 
		      $('.btn-load').show(''); 
		   	},
		   	complete: function(){ 
		      $('.loading').fadeOut('fast'); 
		      $('.formulario form button').show(''); 
		      $('.btn-load').hide('');
		   	}
		});
		$('.log-erro').show('');
	});

	$( ".login-consulta" ).submit(function( event ) {
		event.preventDefault();
		var formData = $(this).serializeArray();
		$.ajax({
			method: "POST",
 			url: "http://localhost/Projetos/educatodos/assets/php/selectUser.php",
 			data: formData,
 			async: true,
 			success: function(data) { 
	       		$('#consulta-form').html(data);
			},
		});
		$('.resultado-consulta').show('');
	});

	$('#open-login').click(function(){
		$('.info-partic .login-consulta').slideToggle('');
	});


});