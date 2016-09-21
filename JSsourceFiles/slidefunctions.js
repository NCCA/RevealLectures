       if (typeof(Storage) === "undefined") {
                alert("Sorry this device is not capable of storing notes");
        }

    Reveal.initialize({
                        controls: true,
                        progress: false,
                        history: true,
                        center: false,
                        slideNumber: 'c/t' ,
                        math: {
                        mathjax: 'https://cdn.mathjax.org/mathjax/latest/MathJax.js',
                        config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
                        },
           menu: {
									markers: true,
									openSlideNumber: true,
									keyboard: false,
									themes: [
										{ name: 'Black', theme: '/jmacey/js/reveal.js/css/theme/black.css' },
										{ name: 'White', theme: '/jmacey/js/reveal.js/css/theme/white.css' },
										{ name: 'League', theme: '/jmacey/js/reveal.js/css/theme/league.css' },
										{ name: 'Sky', theme: '/jmacey/js/reveal.js/css/theme/sky.css' },
										{ name: 'Beige', theme: '/jmacey/js/reveal.js/css/theme/beige.css' },
										{ name: 'Simple', theme: '/jmacey/js/reveal.js/css/theme/simple.css' },
										{ name: 'Serif', theme: '/jmacey/js/reveal.js/css/theme/serif.css' },
										{ name: 'Blood', theme: '/jmacey/js/reveal.js/css/theme/blood.css' },
										{ name: 'Night', theme: '/jmacey/js/reveal.js/css/theme/night.css' },
										{ name: 'Moon', theme: '/jmacey/js/reveal.js/css/theme/moon.css' },
										{ name: 'Solarized', theme: '/jmacey/js/reveal.js/css/theme/solarized.css' }
										],
										custom: [
										{ title: 'Code Style', icon: '<i class="fa fa-external-link">', src: '/jmacey/js/reveal.js/codeThemes.html' },
										]
			        
									},
            // Optional libraries used to extend on reveal.js
            dependencies: [
                            { src: '/jmacey/js/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                            { src: '/jmacey/js/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                            { src: '/jmacey/js/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                            { src: '/jmacey/js/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                            { src: '/jmacey/js/reveal.js/plugin/notes/notes.js' },
                            { src: '/jmacey/js/reveal.js/plugin/math/math.js', async: true },
                            { src: '/jmacey/js/reveal.js/plugin/menu/menu.js' },
                            { src: '/jmacey/js/reveal.js/plugin/line-numbers/line-numbers.js'}


                            ]
    });
    var gCurrentSlide=0;
    Reveal.addEventListener( 'slidechanged', function( event ) {

		
  	var totalslides = document.querySelectorAll( '.reveal .slides section:not(.stack)' ).length;
  	var current_slide = 0;

  	var horizontal_slides = document.querySelectorAll( '.reveal .slides>section' );
  	for (var i = 0; i < event.indexh; i++)
		 {
    // get subslides
    	var subslides = horizontal_slides[i].querySelectorAll('section');

    // if subslides.length is 0, add 1 for horizontal slide, else add subslides.length
    	current_slide += (subslides.length === 0) ? 1 : subslides.length;
  	}

  	current_slide += event.indexv+1;
		gCurrentSlide=current_slide;
		//console.log("slide "+gCurrentSlide);

    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );

function loadCss(name){

var head = document.getElementsByTagName('head')[0],
   link = document.createElement('link');
   link.type = 'text/css';
   link.rel = 'stylesheet';
   link.href = "/jmacey/js/reveal.js/lib/css/"+name;
   head.appendChild(link);


    console.log(name);
    return link;
}

// note I assume that the folder will always be lectureNN so we search for that
function goHome()
{
    var url=window.location.href;
    var n = url.indexOf("lecture");
    var home=url.substring(0,n)
    document.location.href=home;
}

// 3. On Reveal.js ready event, copy header/footer <div> into each `.slide-background` <div>
var header = $('#header').html();
if ( window.location.search.match( /print-pdf/gi ) ) {
    Reveal.addEventListener( 'ready', function( event ) {
        $('.slide-background').append(header);
    });
}
else {
    $('div.reveal').append(header);
}

// Get the modal
var modal = document.getElementById('notes');
var modalNotes = document.getElementById('showNotes');


// Get the <span> element that closes the modal
var span = document.getElementById("close");
var spanNotes = document.getElementById("closeNotes");


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    Reveal.configure( {
        keyboard: true,
         help: true,
    } );

}
spanNotes.onclick = function() {
    modalNotes.style.display = "none";
    Reveal.configure( {
        keyboard: true,
         help: true,
    } );

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        Reveal.configure( {
        keyboard: true,
         help: true,
    } );
    }
    if (event.target == modalNotes) {
        modalNotes.style.display = "none";
        Reveal.configure( {
        keyboard: true,
         help: true,
    } );
    }
    
}
function storeNote()
{
    document.getElementById("noteText").innerHTML='';
    Reveal.configure( {
        keyboard: false,
         help: false,
    } );
    modal.style.display = "block";

}

function appendToStorage(name, data){
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    localStorage.setItem(name, old + "<br>" + data);
}

function submitNote()
{
    modal.style.display="none";
    Reveal.configure( {
        keyboard: true,
         help: true,
    } );
    var note=document.getElementById('noteText');
    var text=note.innerHTML;
    appendToStorage(gCurrentSlide,text+'<br/>');

}

function showNotes()
{
    var notes=document.getElementById('savedNotes');
    var text=localStorage.getItem(gCurrentSlide);
    notes.innerHTML=text;
    modalNotes.style.display="block";
}

function clearNotes()
{
    if (confirm('Are you sure you want to clear the notes for this page?')) 
    {
        localStorage.setItem(gCurrentSlide, "");
        document.getElementById('savedNotes').innerHTML='';
        modalNotes.style.display="none";

    }
}

function clearAllNotes()
{    
	if (confirm('Are you sure you want to clear all notes?')) 
	{
		localStorage.clear();
		document.getElementById('savedNotes').innerHTML='';
		modalNotes.style.display="none";

	}

}
function copyTextToClipboard(text) 
{
  var textArea = document.createElement("textarea");

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;
	

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

function copyAll()
{
    var text=document.title+"\n";
		text+=window.location.href+"\n";


	 for ( var i = 0, len = localStorage.length; i < len; ++i ) 
	 {
  		//console.log( localStorage.getItem( localStorage.key( i ) ) );
			text+="\nSlide "+ localStorage.key(i).toString() + " : \n";
			text+=localStorage.getItem( localStorage.key( i ) );
	}


    for(var i in window.localStorage)
    {
				text += localStorage.getItem(i); 
    }
		// remove html tags
		cleanText = text.replace(/<\/?[^>]+(>|$)/g, "\n");
		console.log(cleanText);
		copyTextToClipboard(cleanText);
}

function loadNotes()
{
	var html="<html><body>";
	for ( var i = 0, len = localStorage.length; i < len; ++i ) 
	 {
  		//console.log( localStorage.getItem( localStorage.key( i ) ) );
			html+="<h2>Slide "+ localStorage.key(i).toString() + " : </h2>";
			html+=localStorage.getItem( localStorage.key( i ) );
	}
	html+="</body></html>";
	document.getElementById('notesFrame').contentWindow.document.write(html);
	console.log(html);
}


