/*---------------------------------------------------------------------
   Name         : DOSE - Developer Coding Challenge VoiceRegonition.js

   Version      :  3.0

   Author       :  Maria Garcia Fernandez

   Author URL   :  www.garciafdez.com

   Author Email : maria@garciafdez.com
----------------------------------------------------------------------*/
/***********************
* Voice Recognition JS *
************************/
var accessToken = "56838c380b9148f085e21807deed03c0"; // Client access token
var baseUrl = "https://api.api.ai/v1/";

$(document).ready(function() {
	$("#input").keypress(function(event) { // To access by entering the message as a text
		if (event.which == 13) {
			event.preventDefault();
			send();
		}
	});
	$("#rec").click(function(event) { // To access by using the microphone
		switchRecognition();
	});
    var title = new Vue({ // Title by Vue.js
        el: '#title',
        data: {
            title: 'Digital Assistant'
        }
    })
});

var recognition;

function startRecognition() {
	recognition = new webkitSpeechRecognition(); // Create a webkitSpeechRecognition object
	recognition.onstart = function(event) { // Check if we are going to start talking or if we are 
		updateRec();
	};
	recognition.onresult = function(event) { // Transcription of the audio to text
        var text = "";
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
        }
        $("#input").val(text); // Show the audio as text in the input field
        send();
        stopRecognition();
	};
	recognition.onend = function() {
		stopRecognition();
	};
	recognition.lang = "en-US"; // Language used
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

function getAction(action) { // Select the action triggered by the tags and intents in API.AI
    switch(action){
        case "open_web_Music":
            $(location).attr('href', 'https://dose.com/tagged/music');
            break;
        case "open_web_Food":
            $(location).attr('href', 'https://dose.com/tagged/food');
            break;
        default:
            break;
    }
}

function updateRec() { // Change the micro button for the stop button
  if(recognition){
    $("#rec").attr('class', 'stop');
  } else {
    $("#rec").attr('class', 'micro');
  }
}

function send() { // ajax query to the API in order to obtain the action established to the spoken or written data
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
            getAction(JSON.parse(JSON.stringify(data, undefined, 2)).result.action);
		},
		error: function() {
            getAction(JSON.parse("Internal Server Error").result.action);
		}
	});
}