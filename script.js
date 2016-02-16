
$(document).ready(function() {
    console.log( "ready!" );

    var popcorn = Popcorn( "#myVideo" );

    $('#formBox').on('focus', popcorn.pause() );

	$('#formContainer').submit( function() { console.log('do'); return false });

	$('#script').val('');
	
	$('#clipBd').val('');

	// context = document.getElementById('myCanvas').getContext("2d");

});

var append = function() {
	var x = $('#formBox').val();
	var y = popcorn.currentTime().toFixed(1);
	if (y > 60) {
		var minutes = Math.floor(y / 60);
		var seconds = y - minutes * 60;
		seconds = seconds.toFixed(1);
		var newNumb = (seconds < 10 ? "0" : "") + seconds;
		y = minutes + ":" + newNumb;
	} 
	if ( $('#example') ) {
		$('#example').remove();
	}
	$('#noteList').append('<li><span class="noteCopy">' + y + ' - ' + x + '</span><button type="button" class="btn btn-danger btn-xs" onclick="strikeNote(this)">X</button></li>');
	$('#formBox').val('');
	$('#formBox').blur();
	popcorn.play();
}

function strikeNote(e) {
	$(e).parent().remove();
}

function clearList() {
	$('#noteList').html("");
}

// copy contents to clipboard in new window
function copyText() {
	$('#clipboard').fadeIn();
	var scriptSrc = $('#script').val();
	var videoSrc = $('#myVideo').attr('src');
	var noteArray = [];
	var noteString = "";
	var i = 0;
	$('.noteCopy').each( function() {noteArray.push($(this).text())});
	while (i < noteArray.length) {
		noteString = noteString + noteArray[i] + "\r";
		i++;
	}
	fullText = "Video source: " + videoSrc + "\r\r" + "Notes" + "\r" + noteString + "\r\r" + "Script" + "\r" + scriptSrc;
	$('#clipBd').val(fullText);
	$('#clipBd').select();
}
// function copyText() {
// 	$('#clipboard').fadeIn();
// 	var text = $('#noteList').html().replace(/<li>/g, "").replace(/\s+/g, "").replace(/<\/li>/g, "\r").trim();
// 	var scriptSrc = $('#script').val();
// 	var videoSrc = $('#myVideo').attr('src');
// 	var clipboard = "Video source: " + videoSrc + "\r\r" + "Notes" + "\r" + text + "\r\r" + "Script" + "\r" + scriptSrc;	
// 	$('#clipBd').val(clipboard);
// 	$('#clipBd').select();
// }

function hideIt() {
	$('#clipboard').fadeToggle();	
}

// button elements in NAV BAR
// load video elements

function loadVid(video) {
	$('#myVideo').attr('src', video);
}

function loadScript(scriptNo) {
	$('#script').val(scriptNo);
}

// sample scripts 
var one = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

var two = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";