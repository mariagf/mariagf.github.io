/*---------------------------------------------------------------------
   Name         : DOSE - Developer Coding Challenge VoiceRegonition.js

   Version      :  2.0

   Author       :  Maria Garcia Fernandez

   Author URL   :  www.garciafdez.com

   Author Email : maria@garciafdez.com
----------------------------------------------------------------------*/
/***********************
* Voice Recognition JS *
************************/
var accessToken = "56838c380b9148f085e21807deed03c0";
var baseUrl = "https://api.api.ai/v1/";

$(document).ready(function() {
	$("#input").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			send();
		}
	});
	$("#rec").click(function(event) {
		switchRecognition();
	});
  var title = new Vue({
  	el: '#title',
    data: {
      title: 'Digital Assistant'
    }
  })
});

var recognition;

function startRecognition() {
	recognition = new webkitSpeechRecognition();
	recognition.onstart = function(event) {
		updateRec();
	};
	recognition.onresult = function(event) {
		var text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
    	text += event.results[i][0].transcript;
    }
    setInput(text);
		stopRecognition();
	};
	recognition.onend = function() {
		stopRecognition();
	};
	recognition.lang = "en-US";
	recognition.start();
}

function stopRecognition() {
	if (recognition) {
		recognition.stop();
		recognition = null;
	}
	updateRec();
}

function switchRecognition() {
	if (recognition) {
		stopRecognition();
	} else {
		startRecognition();
	}
}

function setInput(text) {
	$("#input").val(text);
  if(text.includes("show me music")){
    $(location).attr('href', 'https://dose.com/tagged/music')
  } else if(text.includes("show me food")){
    $(location).attr('href', 'https://dose.com/tagged/food')
  }
	send();
}

function updateRec() {
  if(recognition){
    $("#rec").attr('class', 'stop');
  } else {
    $("#rec").attr('class', 'micro');
  }
}

function send() {
	var text = $("#input").val();
	$.ajax({
		type: "POST",
		url: baseUrl + "query?v=20150910",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		headers: {
			"Authorization": "Bearer " + accessToken
		},
		data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
		success: function(data) {
			setResponse(JSON.stringify(data, undefined, 2));
		},
		error: function() {
			setResponse("Internal Server Error");
		}
	});
	setResponse("Loading...");
}

function setResponse(val) {
	$("#response").text(val);
}
