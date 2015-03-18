/* Abre o painel que contem as informacoes do dia*/

function showInfo(object){
		var id = object.id;
	    $(".information").slideToggle();
        $( ".information" ).html( "<p>" + id + "</p>" );
	    //setCurrentDay();
		}


/* Mostra o dia atual*/
function setCurrentDay(){
	var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
	var dia = day.toString();
    var mes = month.toString();
    var ano = year.toString();
    var currentDay = "#" + dia + mes + ano;
    console.log(currentDay);
    $(currentDay).css("backgroundColor","#CDE250");
    $(currentDay).css("textDecoration","underline");
  
}

/* Mostra o dia atual no hover*/

$(".responsive-calendar").hover(
	function() {
	setCurrentDay();
});
