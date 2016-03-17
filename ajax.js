function getText() {
	$.ajax({
		type: "GET",
		url: "text.txt",
		cache: false
	}).done(function(text) {
		$("#server").html(text);
		
	})	
}

function getOtherText() {
	$.ajax({
		type: "GET",
		url: "text2.txt",
		cache: false
	}).done(function(text) {
		$("#server2").html(text);
		
	})	
}

function getErrorText() {
	$.ajax({
		type: "GET",
		url: "text3.txt",
		cache: false
	}).fail(function() {
		$("#server3").html("Something went wrong");
	})	
}

getText();