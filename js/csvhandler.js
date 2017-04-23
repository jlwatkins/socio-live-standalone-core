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

var people;

_attendees = {};

function getPeople() {
    return jQuery.extend(true, {}, _attendees);
}

function processData(csv) {
    console.log(csv);
    var allTextLines = csv.split(/\n/); // First split by line
    console.log(allTextLines);
    people = [];
    for (var i=1; i<allTextLines.length; i++) { // Skip the column titles
        var splitItems = allTextLines[i].split(/,/); // Then split by comma
        var data = {
            first_name: splitItems[0],
            last_name: splitItems[1],
            position: splitItems[2]
        };
        people.push(data);
    }

    _attendees.list = people;

    /* Gets length of largest first name */
    _attendees.getMaxFirstname = function() {
        var max = 0;
        people.forEach(function(person) {
            if(person.first_name.length > max) max = person.first_name.length;
        });
        return max;
    };

    /* Gets length of largest last name */
    _attendees.getMaxLastname = function() {
        var max = 0;
        people.forEach(function(person) {
            if(person.last_name.length > max) max = person.last_name.length;
        });
        return max;
    };

    /* Gets length of largest occupation name*/
    _attendees.getMaxOccupation = function() {
        var max = 0;
        people.forEach(function(person) {
            if(person.position.length > max) max = person.position.length;
        });
        return max;
    };

    /* Start loop for generating popups of people */
    var personCtr = 0;
    setInterval(function() {
        if(personCtr == people.length) personCtr = 0;
        var person = people[personCtr++];
        makeDiv(person.first_name, person.last_name, person.position);
    }, 3500);

    $('#nametag-container').show();

    $('#csv-loader').delay(2000).animate({'opacity': '0'}, 200, 'linear');

    /* Delete the CSV loader after it fades out */
    setTimeout(function() {
        $('#csv-loader').remove();
    }, 2800);

    setTimeout(function() {

        /* This is a hack to fix a problem where ParticlesJS does not render
         * until the page is resized */

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
      alert("Cannot read file !");
  }
}
