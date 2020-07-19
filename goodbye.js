(function(window){var ByeSpeaker = {};
 
	var speakWord = "Good Bye";
	ByeSpeaker.speak =   function speak(name) {
    console.log(speakWord + " " + name);
    }
    window.ByeSpeaker = ByeSpeaker;


})(window);