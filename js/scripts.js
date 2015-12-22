	setInterval(
    function () {
        $('.foto').animate({rotate: '+=0.12deg'}, 0);
        $('.foto1').animate({rotate: '-=0.12deg'}, 0);
    },
    100
);
	var posicao	= 5;
	var listapadrao = {marginLeft: "", fontSize: "1em", marginTop: ""};
	var efeitolista = {marginLeft: "-11px", fontSize: "2em", marginTop: "3px"};
	var titulo = "Título default";
	var paragrafo = "Texto default";
	var link = '';
	
		

		function teste(){
			 var myVar = {};
			  myVar = 5;
		}

		
		function handle(delta, ver) {

			if(window.myVar == 5){alert("5");}
			 if(posicao >= 214){
		    	posicao = 214;
		    	if(ver == 2){
				posicao = 156;
			}

		    }

		    else if (delta < 0){
		        /* EVENTO COM O MOUSE WHEEL DESCENDO */
		        posicao = posicao + 1;
		         $('.text').html('para baixo'+posicao);

		          if(ver == 2){
				posicao = 156;
			}

		    }
		    else if(posicao <=0){
		    	posicao=0 ;
 if(ver == 2){
				posicao = 156;
			}
		    
		    }
		    
		   
		    else {
		        /* EVENTO COM O MOUSE WHEEL SUBINDO */
		        posicao = posicao - 1;
		         $('.text').html('para cima'+posicao);

 if(ver == 2){
				posicao = 156;
			}
		    }
		    	//$('h1').html("Hello world");
		
			
			switch (posicao) {



				case 0:	


					posicao = 161;			
					break;		


				case 6:		

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal1";

				

					//$("body").css("background", "red");

					$(".metade-esquerda").toggle("puff", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("puff", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/apresentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});



						$("#list1").css(efeitolista); // lista da timeline que se altera
					 // lista da timeline que se altera

						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default


					
						
						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});

						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-1.png)"); //COLOCAREMOS IMAGEM OU COR
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/


					break;



				case 12:

					
					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal2";

					$("body").css("background", "#6ce9fc");
					//$(".metade-esquerda").css("background", "purple");

					
					$(".metade-esquerda").toggle("blind", 800, function(){

						$(".metade-esquerda").css({"background": "url(img/relatorio/Documentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});

						$(".metade-esquerda").toggle("blind", 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/Documentacao.jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});


						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 18:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal3";

					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("size", 700, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("size", 700, function(){					
						});

					});
					

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					
					break;

				case 24:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal4";

					$(".metade-esquerda").css("background", "red");
					$(".metade-esquerda").toggle("clip", 800, function(){

						$(".metade-esquerda").css("background", "black");
						$(".metade-esquerda").toggle("clip", 800, function(){					
						});

					});
						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

					break;


				case 30:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal5";

					$(".metade-esquerda").css("background", "black");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "blue");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});
						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 36:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal6";

					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("puff", 1000, function(){

						$(".metade-esquerda").css("background", "purple");
						$(".metade-esquerda").toggle("puff", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 42:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal7";

					$(".metade-esquerda").css("background", "purple");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "blue");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 48:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal8";

					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("size", 1000, function(){

						$(".metade-esquerda").css("background", "green");
						$(".metade-esquerda").toggle("size", 1000, function(){					
						});

					});
						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-5.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;

				case 54:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal9";

					$(".metade-esquerda").css("background", "green");
					
					$(".metade-esquerda").toggle("clip", 1000, function(){

						$(".metade-esquerda").css("background", "blue");
						$(".metade-esquerda").toggle("clip", 1000, function(){					
						});


					});
						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(efeitolista); // timeline que mantem-se default
					 // lista da timeline que se altera
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						


						$(".metade-esquerda").css("background", "purple");

					

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

					break;


				case 60:



					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal10";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(efeitolista); // timeline que mantem-se default
						 // lista da timeline que se altera
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 66:



				paragrafo = "Novo parágrafo";
				titulo = "novo titulo";
				link = "#myModal11";						
									
				$(".metade-esquerda").toggle("blind", 1000, function(){
					$(".metade-esquerda").css("background", "red");
					$(".metade-esquerda").toggle("blind", 1000, function(){					
					});
				});
					$("#list1").css(listapadrao); // lista da timeline que se altera
					$("#list2").css(listapadrao); // timeline que mantem-se default
					$("#list3").css(listapadrao); // timeline que mantem-se default
					$("#list4").css(listapadrao); // timeline que mantem-se default
					$("#list5").css(listapadrao); // timeline que mantem-se default
					$("#list6").css(listapadrao); // timeline que mantem-se default
					$("#list7").css(listapadrao); // timeline que mantem-se default
					$("#list8").css(listapadrao); // timeline que mantem-se default
					$("#list9").css(listapadrao); // timeline que mantem-se default
					$("#list10").css(listapadrao); // timeline que mantem-se default
					// lista da timeline que se altera
					$("#list11").css(efeitolista); // timeline que mantem-se default
					$("#list12").css(listapadrao); // timeline que mantem-se default
					$("#list13").css(listapadrao); // timeline que mantem-se default
					$("#list14").css(listapadrao); // timeline que mantem-se default
					$("#list15").css(listapadrao); // timeline que mantem-se default
					$("#list16").css(listapadrao); // timeline que mantem-se default
					$("#list17").css(listapadrao); // timeline que mantem-se default
					$("#list18").css(listapadrao); // timeline que mantem-se default
					$("#list19").css(listapadrao); // timeline que mantem-se default
					$("#list20").css(listapadrao); // timeline que mantem-se default
					$("#list21").css(listapadrao); // timeline que mantem-se default
					$("#list22").css(listapadrao); // timeline que mantem-se default
					$("#list23").css(listapadrao); // timeline que mantem-se default
					$("#list24").css(listapadrao); // timeline que mantem-se default
					$("#list25").css(listapadrao); // timeline que mantem-se default
					$("#list26").css(listapadrao); // timeline que mantem-se default
					$("#list27").css(listapadrao); // timeline que mantem-se default						 
					/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
					$('h1, p').fadeOut("slow", function(){
						$('h1').html(titulo);
						$('p').html(paragrafo);
						$('h1, p').fadeIn("slow");
					});						
					/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);/* MUDA O LINK DOS BOTOES */
					$('a').attr("href", link);
					/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
					$("#foto2").attr("src","img/ic-6.png");
					$("#foto2").attr("id", "foto2");
					$("#foto4").attr("src","img/ic-1.png");
					$("#foto4").attr("id", "foto3");						
					$("#foto6").attr("src","img/ic-5.png");
					$("#foto6").attr("id", "foto3");
					/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/
					break;


				case 72:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal12";
						
					
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list12").css(efeitolista); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						
						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 78:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal13";
						
					$(".metade-esquerda").css("background", "red");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list13").css(efeitolista); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 84:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal14";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list14").css(efeitolista); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;
				case 90:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal15";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list15").css(efeitolista); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 96:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal16";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list16").css(efeitolista); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-3.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 102:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal17";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list17").css(efeitolista); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-6.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 108:

					
					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal18";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						
						$("#list17").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list18").css(efeitolista); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 114:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal19";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list19").css(efeitolista); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;


				case 120:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal20";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list20").css(efeitolista); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 126:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal21";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list21").css(efeitolista); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */
						$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 132:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal22";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list22").css(efeitolista); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-6.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 138:


					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal23";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list23").css(efeitolista); // timeline que mantem-se default
						$("#list24").css(listapadrao); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-4.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-4.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

				case 144:

					paragrafo = "Novo parágrafo";
					titulo = "novo titulo";
					link = "#myModal24";
						
					$(".metade-esquerda").css("background", "blue");
					
					$(".metade-esquerda").toggle("blind", 1000, function(){

						$(".metade-esquerda").css("background", "red");
						$(".metade-esquerda").toggle("blind", 1000, function(){					
						});

					});

						$("#list1").css(listapadrao); // lista da timeline que se altera
						$("#list2").css(listapadrao); // timeline que mantem-se default
						$("#list3").css(listapadrao); // timeline que mantem-se default
						$("#list4").css(listapadrao); // timeline que mantem-se default
						$("#list5").css(listapadrao); // timeline que mantem-se default
						$("#list6").css(listapadrao); // timeline que mantem-se default
						$("#list7").css(listapadrao); // timeline que mantem-se default
						$("#list8").css(listapadrao); // timeline que mantem-se default
						$("#list9").css(listapadrao); // timeline que mantem-se default
						$("#list10").css(listapadrao); // timeline que mantem-se default
						$("#list11").css(listapadrao); // timeline que mantem-se default
						$("#list12").css(listapadrao); // timeline que mantem-se default
						$("#list13").css(listapadrao); // timeline que mantem-se default
						$("#list14").css(listapadrao); // timeline que mantem-se default
						$("#list15").css(listapadrao); // timeline que mantem-se default
						$("#list16").css(listapadrao); // timeline que mantem-se default
						$("#list17").css(listapadrao); // timeline que mantem-se default
						$("#list18").css(listapadrao); // timeline que mantem-se default
						$("#list19").css(listapadrao); // timeline que mantem-se default
						$("#list20").css(listapadrao); // timeline que mantem-se default
						$("#list21").css(listapadrao); // timeline que mantem-se default
						$("#list22").css(listapadrao); // timeline que mantem-se default
						$("#list23").css(listapadrao); // timeline que mantem-se default
						// lista da timeline que se altera
						$("#list24").css(efeitolista); // timeline que mantem-se default
						$("#list25").css(listapadrao); // timeline que mantem-se default
						$("#list26").css(listapadrao); // timeline que mantem-se default
						$("#list27").css(listapadrao); // timeline que mantem-se default						 

						/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
						$('h1, p').fadeOut("slow", function(){
							$('h1').html(titulo);
							$('p').html(paragrafo);
							$('h1, p').fadeIn("slow");
						});
						/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
						/* MUDA O LINK DOS BOTOES */
						$('a').attr("href", link);

						/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

						$("#foto3").attr("src","img/ic-2.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

						/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

						break;

					case 150:

						paragrafo = "Novo parágrafo";
						titulo = "novo titulo";
						link = "#myModal25";
							
						$(".metade-esquerda").css("background", "blue");
						
						$(".metade-esquerda").toggle("blind", 1000, function(){

							$(".metade-esquerda").css("background", "red");
							$(".metade-esquerda").toggle("blind", 1000, function(){					
							});

						});

							$("#list1").css(listapadrao); // lista da timeline que se altera
							$("#list2").css(listapadrao); // timeline que mantem-se default
							$("#list3").css(listapadrao); // timeline que mantem-se default
							$("#list4").css(listapadrao); // timeline que mantem-se default
							$("#list5").css(listapadrao); // timeline que mantem-se default
							$("#list6").css(listapadrao); // timeline que mantem-se default
							$("#list7").css(listapadrao); // timeline que mantem-se default
							$("#list8").css(listapadrao); // timeline que mantem-se default
							$("#list9").css(listapadrao); // timeline que mantem-se default
							$("#list10").css(listapadrao); // timeline que mantem-se default
							$("#list11").css(listapadrao); // timeline que mantem-se default
							$("#list12").css(listapadrao); // timeline que mantem-se default
							$("#list13").css(listapadrao); // timeline que mantem-se default
							$("#list14").css(listapadrao); // timeline que mantem-se default
							$("#list15").css(listapadrao); // timeline que mantem-se default
							$("#list16").css(listapadrao); // timeline que mantem-se default
							$("#list17").css(listapadrao); // timeline que mantem-se default
							$("#list18").css(listapadrao); // timeline que mantem-se default
							$("#list19").css(listapadrao); // timeline que mantem-se default
							$("#list20").css(listapadrao); // timeline que mantem-se default
							$("#list21").css(listapadrao); // timeline que mantem-se default
							$("#list22").css(listapadrao); // timeline que mantem-se default
							$("#list23").css(listapadrao); // timeline que mantem-se default
							$("#list24").css(listapadrao); // timeline que mantem-se default
							// lista da timeline que se altera
							$("#list25").css(efeitolista); // timeline que mantem-se default
							$("#list26").css(listapadrao); // timeline que mantem-se default
							$("#list27").css(listapadrao); // timeline que mantem-se default						 

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('h1, p').fadeOut("slow", function(){
								$('h1').html(titulo);
								$('p').html(paragrafo);
								$('h1, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('a').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-1.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-2.png");
						$("#foto6").attr("id", "foto3");

							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 156:

						paragrafo = "Novo parágrafo";
						titulo = "novo titulo";
						link = "#myModal26";
							
						$(".metade-esquerda").css("background", "blue");
						
						$(".metade-esquerda").toggle("blind", 1000, function(){

							$(".metade-esquerda").css("background", "red");
							$(".metade-esquerda").toggle("blind", 1000, function(){					
							});

						});

							$("#list1").css(listapadrao); // lista da timeline que se altera
							$("#list2").css(listapadrao); // timeline que mantem-se default
							$("#list3").css(listapadrao); // timeline que mantem-se default
							$("#list4").css(listapadrao); // timeline que mantem-se default
							$("#list5").css(listapadrao); // timeline que mantem-se default
							$("#list6").css(listapadrao); // timeline que mantem-se default
							$("#list7").css(listapadrao); // timeline que mantem-se default
							$("#list8").css(listapadrao); // timeline que mantem-se default
							$("#list9").css(listapadrao); // timeline que mantem-se default
							$("#list10").css(listapadrao); // timeline que mantem-se default
							$("#list11").css(listapadrao); // timeline que mantem-se default
							$("#list12").css(listapadrao); // timeline que mantem-se default
							$("#list13").css(listapadrao); // timeline que mantem-se default
							$("#list14").css(listapadrao); // timeline que mantem-se default
							$("#list15").css(listapadrao); // timeline que mantem-se default
							$("#list16").css(listapadrao); // timeline que mantem-se default
							$("#list17").css(listapadrao); // timeline que mantem-se default
							$("#list18").css(listapadrao); // timeline que mantem-se default
							$("#list19").css(listapadrao); // timeline que mantem-se default
							$("#list20").css(listapadrao); // timeline que mantem-se default
							$("#list21").css(listapadrao); // timeline que mantem-se default
							$("#list22").css(listapadrao); // timeline que mantem-se default
							$("#list23").css(listapadrao); // timeline que mantem-se default
							$("#list24").css(listapadrao); // timeline que mantem-se default
							$("#list25").css(listapadrao); // timeline que mantem-se default
							// lista da timeline que se altera
							$("#list26").css(efeitolista); // timeline que mantem-se default
							$("#list27").css(listapadrao); // timeline que mantem-se default						 

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('h1, p').fadeOut("slow", function(){
								$('h1').html(titulo);
								$('p').html(paragrafo);
								$('h1, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('a').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-1.png");
						$("#foto6").attr("id", "foto3");
							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 156:

						paragrafo = "Novo parágrafo";
						titulo = "novo titulo";
						link = "#myModal28";
							
						$(".metade-esquerda").css("background", "blue");
						
						$(".metade-esquerda").toggle("blind", 1000, function(){

							$(".metade-esquerda").css("background", "red");
							$(".metade-esquerda").toggle("blind", 1000, function(){					
							});

						});

							$("#list1").css(listapadrao); // lista da timeline que se altera
							$("#list2").css(listapadrao); // timeline que mantem-se default
							$("#list3").css(listapadrao); // timeline que mantem-se default
							$("#list4").css(listapadrao); // timeline que mantem-se default
							$("#list5").css(listapadrao); // timeline que mantem-se default
							$("#list6").css(listapadrao); // timeline que mantem-se default
							$("#list7").css(listapadrao); // timeline que mantem-se default
							$("#list8").css(listapadrao); // timeline que mantem-se default
							$("#list9").css(listapadrao); // timeline que mantem-se default
							$("#list10").css(listapadrao); // timeline que mantem-se default
							$("#list11").css(listapadrao); // timeline que mantem-se default
							$("#list12").css(listapadrao); // timeline que mantem-se default
							$("#list13").css(listapadrao); // timeline que mantem-se default
							$("#list14").css(listapadrao); // timeline que mantem-se default
							$("#list15").css(listapadrao); // timeline que mantem-se default
							$("#list16").css(listapadrao); // timeline que mantem-se default
							$("#list17").css(listapadrao); // timeline que mantem-se default
							$("#list18").css(listapadrao); // timeline que mantem-se default
							$("#list19").css(listapadrao); // timeline que mantem-se default
							$("#list20").css(listapadrao); // timeline que mantem-se default
							$("#list21").css(listapadrao); // timeline que mantem-se default
							$("#list22").css(listapadrao); // timeline que mantem-se default
							$("#list23").css(listapadrao); // timeline que mantem-se default
							$("#list24").css(listapadrao); // timeline que mantem-se default
							$("#list25").css(listapadrao); // timeline que mantem-se default
							$("#list26").css(listapadrao); // timeline que mantem-se default
							// lista da timeline que se altera
							$("#list27").css(efeitolista); // timeline que mantem-se default						 

							/* ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO */
							$('h1, p').fadeOut("slow", function(){
								$('h1').html(titulo);
								$('p').html(paragrafo);
								$('h1, p').fadeIn("slow");
							});
							/* MUDA O BACKGRDOUND DA METADE DIREITA*/
						
						$( ".metade-direita" ).animate({
							
							 opacity: 0.1
							}, 800, function(){
								$(".metade-direita").css("background" ,"url(img/fundo-2.png)");
						
							});

						$( ".metade-direita" ).animate({
							  opacity: 1
							}, 800);
							/* MUDA O LINK DOS BOTOES */
							$('a').attr("href", link);

							/* DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO */

							$("#foto3").attr("src","img/ic-3.png");
						$("#foto3").attr("id", "foto6");

						$("#foto6").attr("src","img/ic-5.png");
						$("#foto6").attr("id", "foto3");

							/* FIM DA DEFINICAO DOS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO*/

							break;

					case 162:

						posicao = 5;
						break;

			}

		
		   

		}

	function wheel(event){
		var delta = 0;
		if(!event)event=window.event;

		if(event.wheelDelta){
			
		
			delta=event.wheelDelta/120;

			if(window.opera){delta=-delta;

			}

		}
		else if(event.detail){
			delta=-event.detail/3;

		}

		if(delta)handle(delta);
		if(event.preventDefault){
			event.preventDefault();
			event.returnValue=false;
		}
	}

	if(window.addEventListener){
		window.addEventListener('DOMMouseScroll',wheel,false);
		window.onmousewheel=document.onmousewheel=wheel;
	}

	