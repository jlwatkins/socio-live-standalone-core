function handleFiles(files) {
  // Check for the various File API support.
  if (window.FileReader) {
      // FileReader are supported.
      getAsText(files[0]);
  } else {
      alert('FileReader are not supported in this browser.');
  }
}

function getAsText(fileToRead) {
  var reader = new FileReader();
  // Read file into memory as UTF-8
  reader.readAsText(fileToRead);
  // Handle errors load
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
}

function loadHandler(event) {
  var csv = event.target.result.replace(/\r/g, "\n");
  processData(csv);
}

function processData(csv) {
    console.log(csv);
    var allTextLines = csv.split(/\n/);
    console.log(allTextLines);
    var people = [];
    for (var i=1; i<allTextLines.length; i++) {
        var splitItems = allTextLines[i].split(/,/);
        var data = {
            first_name: splitItems[0],
            last_name: splitItems[1],
            position: splitItems[2]
        };
        people.push(data);
    }

    /* Start loop for generating random popups of people */

    setInterval(function() {
        var randomPerson = people[Math.floor(Math.random()*people.length)];
        makeDiv(randomPerson.first_name, randomPerson.last_name, randomPerson.position);
    }, 5000);

    $('.vignette').show();

    $('#csv-loader').delay(2000).animate({'opacity': '0'}, 200, 'linear');

    setTimeout(function() {
        $('#csv-loader').remove();
    }, 2800);

    setTimeout(function() {

        $('#particles-js').css({
            'height': '99.74%',
            'width': '100%'
        });

        particlesJS.load('particles-js', './js/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }, 10);
}

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
      alert("Canno't read file !");
  }
}
