//check off todos once clicked connnected with styles.css
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	});

//deleting a todo 
$("ul").on("click", "span", function(event){
	$(this).parent().remove();
});






//adding new todos to the list 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
//grabbing new todos from the input 
	var todoText = $(this).val(); 
	//remove what is already written in input 
	$(this).val(" ");

	//create new li and add to ul 
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")



	}

});






	//if li is gray
//if($(this).css("color") === "rgb(128, 128, 128)"){
//		//turn it black
//		$(this).css({
//		color: "black",
//		textDecoration: "none"

//	});
//	}
//otherwise, once clicked turn gray
//	else{
//		$(this).css({
//			color: "gray",
//			textDecoration: "Line-through"
	
//	});
//	}
//});
