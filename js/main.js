$(document).ready(function(){
	$("#findMyWeather").click(function(event){
		event.preventDefault();
		if($("#city").val()!=""){
			$.get("scrapper.php?city="+$("#city").val(),function(data){
				if(data==""){
					$("#fail").fadeIn();
					$("#success").hide();
				}else{
					$("#success").html(data).fadeIn();
					$("#fail").hide();
				}
			});
		}else{
			alert("Please enter a city")
		}
	});
});