<<<<<<< HEAD
// CSV Parsing
var users = {};
$('#read_csv').on("click",function(e){
    e.preventDefault();
            
    var el = document.getElementById('read_csv');
    // Check for the file in input field
    if (!$('#csv_file')[0].files.length){
        alert("Please choose at least one file to read the data.");
    }
    // Check for the file extention
	if(document.getElementById('csv_file').value.toLowerCase().lastIndexOf(".csv")==-1){
        // It stops if the file is not csv
        alert("Please upload a file with .csv extension.");
        return false;
    }else{
        $('#csv_file').parse({ // Parse csv file
            config: {
                delimiter: "auto",
                complete: parseFile
            },
            before: function(file, inputElem)
            {
                console.log("Parsing file...", file);
            },
            error: function(err, file)
            {
                console.log("ERROR:", err, file);
            },
            complete: function()
            {
                if($('#csv_file')[0].files.length){
                    setupSlotMachine(users); // Add users from csv file
                    document.getElementById('txt').style.display = 'none';
                    document.getElementById('csv_file').value = '';
                
                    console.log(users);
                }
            }
        });
    }
});



var data = [];
var cells = [];

function parseFile(results){
	data = results.data;
	users = {};
    orderedUsers = [];
	for(i=1; i<data.length; i++){
		var row = data[i];
		cells = row.join(",").split(",");
        // Parse the data from from csv and put them in user object
        users[i] = new BasicUser(i, cells[0], cells[1], cells[2], Date.now());
    }
    return users;
}
// CSV Parsing

=======
>>>>>>> upstream/master
// Basic wrapper for users
function BasicUser(id, first, last, info, join_time) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.info = info;
    this.joinTime = join_time;
<<<<<<< HEAD
        
=======

>>>>>>> upstream/master
    this.getFullName = function() {
        return this.first + " " + this.last;
    };


    this.buildHtmlForAttendeeDrawing = function() {
        var thisUserDiv = document.createElement('div');
        thisUserDiv.className = "user-drawing-element-div";
        thisUserDiv.setAttribute('name', this.id);

        var thisUserNameP = document.createElement('p');
        thisUserNameP.innerHTML = this.getFullName();
        thisUserNameP.className = "attendee-name";
        thisUserDiv.appendChild(thisUserNameP);

        var thisUserInfoP = document.createElement('p');
        thisUserInfoP.className = "attendee-info";
        thisUserInfoP.innerHTML = this.info;
        thisUserDiv.appendChild(thisUserInfoP);

        return thisUserDiv;
    }
}


function getRandomInterval() {
  return parseInt(Math.random() * ((Math.random() * 10) * 1000));
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

<<<<<<< HEAD

=======
>>>>>>> upstream/master
var $defaultTheme = $('[name="theme-1"]');

var temporary = false;
var options = {
  useEasing : true,
  useGrouping : true,
  separator : '',
  decimal : '.',
  prefix : '',
  suffix : ''
};

var $title = $('title');
var $eventName = $('[name="event_name"]');
var $settingsPanel = $('div[class="panel-inner"]');

<<<<<<< HEAD

/*users = {
=======
var users = {
>>>>>>> upstream/master
  1: new BasicUser(1, "Desmond", "Strickland", "Fishery", Date.now()),
  2: new BasicUser(2, 'Thaddeus','Galvan','Professional Training & Coaching', Date.now()),
  3: new BasicUser(3, 'Lamont','Friedman','Automotive', Date.now()),
  4: new BasicUser(4, 'Martin','Holland','Information Technology and Services', Date.now()),
  5: new BasicUser(5, 'Nancy','Carr','Information Technology and Services', Date.now()),
  6: new BasicUser(6, 'Graham','Norris',' Ceramics & Concrete', Date.now()),
  7: new BasicUser(7, 'Royce','Lester','Veterinary', Date.now()),
  8: new BasicUser(8, 'Emily','Herman','Alternative Dispute Resolution', Date.now()),
  9: new BasicUser(9, 'Odessa','Clay','Warehousing', Date.now()),
  10: new BasicUser(10, 'Enid','Castaneda','Airlines/Aviation', Date.now()),
  11: new BasicUser(11, 'Mara','Schultz','Facilities Services', Date.now()),
  12: new BasicUser(12, 'Romeo','Navarro','Information Technology and Services', Date.now()),
  13: new BasicUser(13, 'Jess','Clay','Banking', Date.now()),
  14: new BasicUser(14, 'Aimee','Guerrero','Biotechnology', Date.now()),
  15: new BasicUser(15, 'Dino','Payne','Computer Games', Date.now()),
  16: new BasicUser(16, 'Susie','Velasquez','Nanotechnology', Date.now()),
  17: new BasicUser(17, 'Velma','Walton','Restaurants', Date.now()),
  18: new BasicUser(18, 'Rosario','Cook','Professional Training & Coaching', Date.now()),
  19: new BasicUser(19, 'Maximo','Morgan','Transportation/Trucking/Railroad', Date.now()),
  20: new BasicUser(20, 'Bettye','Sandoval','Tobacco', Date.now()),
  21: new BasicUser(21, 'Eve','Malone','Judiciary', Date.now()),
  22: new BasicUser(22, 'Daryl','Carney','Real Estate', Date.now()),
  23: new BasicUser(23, 'Britney','Pennington','Recreational Facilities and Services', Date.now()),
  24: new BasicUser(24, 'Phyllis','Chung','International Affairs', Date.now()),
  25: new BasicUser(25, 'Susanne','Clark','Facilities Services', Date.now())
<<<<<<< HEAD

};*/

=======
};
>>>>>>> upstream/master

var orderedUsers = [];
var nextUser = 0;
var control = {
  stopping: false,
  cleanup: undefined,
  speed: 2000,
  winner: undefined,
  interval: undefined
};
function runControl() {
  if(control.interval) {
    clearInterval(control.interval);
    control.interval = undefined;
  }
  var increment = 0;
  var carousel = $('#carousel');
  var $figures = carousel.find('figure');
  var minimum = 6;
  if(orderedUsers.length < 6) {
    minimum = orderedUsers.length;
  }
  $figures.css('opacity', 0.5);
  control.interval = setInterval(function () {
    increment++;
    carousel.css({
      '-webkit-transform': 'rotateX(' + (increment * -60) + 'deg)'
    });
    var pastSix = 0;
    if (increment > 6) {
      increment
    }
    if (control.stopping && control.winner) {
      var figureOne = $($figures[carousel.attr('data-state')]);
      if (figureOne.find('div[name="' + control.winner + '"]').length > 0) {
        $figures.css('opacity', 0.5);
        figureOne.css('opacity', 1);
        console.log("Expecting: " + users[control.winner].getFullName() + " with id: " + control.winner);
        var $startStopBtn = $('#start-stop-button');
        $startStopBtn.removeClass('running');
        $startStopBtn.html("SPIN");
        control.stopping = false;
        clearInterval(control.interval);
        return;
      } else if($figures.find('div[name="' + control.winner + '"]').length === 0) {
        for(var i = 0; i < orderedUsers.length; i++) {
          var cur = orderedUsers[i];
          if(cur.id === control.winner) {
            console.log("Added at: " + cur.index);
            nextUser = cur.index;
          }
        }
      }

    }
    
    console.log("Stopping: " + control.stopping + " and Winner: " + control.winner);
    carousel.attr('data-state', (increment % minimum) + 1);
    var thisFigure = $($figures[(increment + 3) % minimum]);
    thisFigure.empty();
    thisFigure.append(orderedUsers[nextUser % orderedUsers.length].user.buildHtmlForAttendeeDrawing());
    nextUser = ((nextUser + 1) % orderedUsers.length);
  }, control.speed);
}

function openAttendeeDrawing() {
<<<<<<< HEAD
  document.getElementById('attendee-drawing-overlay').style.width = "100%";  
  var $slotMachine = $('#planeMachine');
  $slotMachine.empty();
  console.log(orderedUsers);
// Makes the drawing page as a default after opening it again    
  if(orderedUsers.length == 0){
    $('#txt').css('display','unset');   
  }
  temporary = true;
=======
  document.getElementById('attendee-drawing-overlay').style.width = "100%";

  var $slotMachine = $('#planeMachine');
  $slotMachine.empty();
  temporary = true;
  setupSlotMachine(users);
>>>>>>> upstream/master

  $('#start-stop-button').off('click').on('click', function(e) {

    if(orderedUsers.length  < 6) {
      alert("You must have at least 6 users joined")
    } else {
      temporary = false;
      var $startStopBtn = $('#start-stop-button');
      if ($startStopBtn.hasClass('running')) {
        control.stopping = true;
      } else {
        control.stopping = false;
        control.speed = 100;

        var $startStopBtn = $('#start-stop-button');
        $startStopBtn.addClass('running');
        $startStopBtn.html("STOP");
        control.winner = parseInt(Math.random() * orderedUsers.length) + 1;
        console.log("Expected Winner: " + users[control.winner].getFullName());
        runControl()
      }
    }
  })
}

function setupSlotMachine(usersDictionary) {
<<<<<<< HEAD
  var $carousel = $('#carousel');   
  var current = 0;
  orderedUsers = [];   
    
  var figures = $carousel.find('figure').empty();  
=======
  var $carousel = $('#carousel');
  var current = 0;
>>>>>>> upstream/master
  for(var key in usersDictionary) {
    var thisUser = usersDictionary[key];
    orderedUsers[current] = {index: current, id: thisUser.id, user: thisUser};
    current = current + 1;
  }
<<<<<<< HEAD
  figures = $carousel.find('figure'); 
    
  for(var i = 0; i < 6 && i < orderedUsers.length; i++) {
    figures[i].appendChild(orderedUsers[i].user.buildHtmlForAttendeeDrawing());
  }
  
=======

  var figures = $carousel.find('figure');
  for(var i = 0; i < 6 && i < orderedUsers.length; i++) {
    figures[i].appendChild(orderedUsers[i].user.buildHtmlForAttendeeDrawing());
  }
>>>>>>> upstream/master
  nextUser = i + 1;

  control.speed = 2000;
  runControl()
}

function closeAttendeeDrawing() {
<<<<<<< HEAD
    document.getElementById('attendee-drawing-overlay').style.width = "0%";

    $('#carousel').find('figure').empty();
    clearInterval(control.interval);
    
    var $startStopBtn = $('#start-stop-button');
    $startStopBtn.removeClass('running');
    $startStopBtn.html('SPIN');
    
    orderedUsers = [];
    users = {};
=======
  document.getElementById('attendee-drawing-overlay').style.width = "0%";

  $('#carousel').find('figure').empty();
  clearInterval(control.interval);
  var $startStopBtn = $('#start-stop-button');
  $startStopBtn.removeClass('running');
  $startStopBtn.html('SPIN');
>>>>>>> upstream/master
}

var attendees = new CountUp("attendeesCount", 0, 0, 0, 2.5, options);
attendees.start();
var handshakes = new CountUp("handshakesCount", 0, 0, 0, 2.5, options);
handshakes.start();
var $industriesList = $('#industriesList');


<<<<<<< HEAD
=======


>>>>>>> upstream/master
// SocioLive - non-attendee drawing functionality


function setupActions() {
  $settingsPanel.find('b[name="attendee_drawing"]').on('click', function(e) {
    openAttendeeDrawing();
  });
<<<<<<< HEAD
    
=======

>>>>>>> upstream/master
  $settingsPanel.find('b[name="fullscreen"]').on('click', toggleFullScreen);

  $settingsPanel.find('b[name="back_to_socio"]').on('click', function(e) {
    window.location = "https://socio.events"
<<<<<<< HEAD
  });    
=======
  });
>>>>>>> upstream/master
}

$title.html("SocioLive - Socio Networking");
$eventName.html("SOCIO NETWORKING");

var industriesCollection = "Accounting,Airlines/Aviation,Alternative Dispute Resolution,Alternative Medicine,Animation,Apparel & Fashion,Architecture & Planning,Arts and Crafts,Automotive,Aviation & Aerospace,Banking,Biotechnology,Broadcast Media,Building Materials,Business Supplies and Equipment,Capital Markets,Chemicals,Civic & Social Organization,Civil Engineering,Commercial Real Estate,Computer & Network Security,Computer Games,Computer Hardware,Computer Networking,Computer Software,Construction,Consumer Electronics,Consumer Goods,Consumer Services,Cosmetics,Dairy,Defense & Space,Design,Education Management,E-Learning,Electrical/Electronic Manufacturing,Entertainment,Environmental Services,Events Services,Executive Office,Facilities Services,Farming,Financial Services,Fine Art,Fishery,Food & Beverages,Food Production,Fund-Raising,Furniture,Gambling & Casinos,Glass, Ceramics & Concrete,Government Administration,Government Relations,Graphic Design,Health, Wellness and Fitness,Higher Education,Hospital & Health Care,Hospitality,Human Resources,Import and Export,Individual & Family Services,Industrial Automation,Information Services,Information Technology and Services,Insurance,International Affairs,International Trade and Development,Internet,Investment Banking,Investment Management,Judiciary,Law Enforcement,Law Practice,Legal Services,Legislative Office,Leisure, Travel & Tourism,Libraries,Logistics and Supply Chain,Luxury Goods & Jewelry,Machinery,Management Consulting,Maritime,Market Research,Marketing and Advertising,Mechanical or Industrial Engineering,Media Production,Medical Devices,Medical Practice,Mental Health Care,Military,Mining & Metals,Motion Pictures and Film,Museums and Institutions,Music,Nanotechnology,Newspapers,Non-Profit Organization Management,Oil & Energy,Online Media,Outsourcing/Offshoring,Package/Freight Delivery,Packaging and Containers,Paper & Forest Products,Performing Arts,Pharmaceuticals,Philanthropy,Photography,Plastics,Political Organization,Primary/Secondary Education,Printing,Professional Training & Coaching,Program Development,Public Policy,Public Relations and Communications,Public Safety,Publishing,Railroad Manufacture,Ranching,Real Estate,Recreational Facilities and Services,Religious Institutions,Renewables & Environment,Research,Restaurants,Retail,Security and Investigations,Semiconductors,Shipbuilding,Sporting Goods,Sports,Staffing and Recruiting,Supermarkets,Telecommunications,Textiles,Think Tanks,Tobacco,Translation and Localization,Transportation/Trucking/Railroad,Utilities,Venture Capital & Private Equity,Veterinary,Warehousing,Wholesale,Wine and Spirits,Wireless,Writing and Editing".split(",");

var industriesHash = {};
for(var i = 0; i < industriesCollection.length; i++) {
  industriesHash[industriesCollection[i]] = 0;
}

( function updateInstrustries() {
    setTimeout(function() {
      for(var key in industriesHash) {
        var countUpBy = parseInt(Math.random() * 10);
        industriesHash[key] = parseInt(industriesHash[key] + countUpBy);
      }

      var industryTuple = [];

      for(var industry in industriesHash) {
        industryTuple.push({name: industry, count: industriesHash[key]});
      }

      industryTuple.sort(function(a, b) {
        return b.count - a.count;
      });

      $industriesList.empty();

      for(i = 0; i < industryTuple.length && i < 3; i++) {
        $industriesList.append('<button class="industry">' + industryTuple[i].name + "</button>");
      }

      updateInstrustries();
  }, getRandomInterval())
})();


var attendeesCount = 0;
var handshakesCount = 0;

// Update Handshakes Socio Party
( function updateAttendees() {
    setTimeout(function() {
      attendeesCount = attendeesCount + 1;
      attendees.update(attendeesCount);
      updateAttendees();
    }, getRandomInterval());
  }
)();
// Update Handshakes Socio Party
( function updateHandshakes() {
    setTimeout(function() {
      handshakesCount = handshakesCount + (parseInt(Math.random() * 10));
      var maxHandshakes = 0;
      for(var j = 0; j < attendeesCount; j++) {
        maxHandshakes = maxHandshakes + j;
      }
      if(handshakesCount > maxHandshakes) {
        handshakesCount = maxHandshakes;
      }
      handshakes.update(handshakesCount);
      updateHandshakes();
    }, getRandomInterval());
  }
)();

setupActions();

<<<<<<< HEAD
=======

>>>>>>> upstream/master
function readTextFile(file, then) {
  var rawFile = new XMLHttpRequest();
  var allText = undefined;
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        then(rawFile.responseText);
      } else {
        then(undefined);
      }
    } else {
      then(undefined);
    }
  };
  rawFile.send(null);
}

<<<<<<< HEAD

=======
>>>>>>> upstream/master
$('.theme-selector').on('click', function(e) {
  var themeSelected = $(e.target).attr('name');
  $('header').backstretch('images/presentation/' + themeSelected + '/background.jpg');

  readTextFile('images/presentation/' + themeSelected + '/colors.json', function(fileText) {
    if(fileText != undefined) {
      var themeSettings = JSON.parse(fileText.trim());
      constellationColor = themeSettings.constellation.red + ',' + themeSettings.constellation.green + ',' + themeSettings.constellation.blue;

      var startStopButton = $('#start-stop-button');
      startStopButton.css('background-color', themeSettings['spin-button-background-color'].hex);
      startStopButton.css('border-color', themeSettings['spin-button-background-color'].hex);

      $('.darkest-color-text').css('color', themeSettings['darkest-color'].hex);
      $('.darkest-color-icon').css('color', themeSettings['darkest-color'].hex);
    }
  });
});

$(document).ready(function() {

  var idleMouseTimer;
  var forceMouseHide = false;


    var $slideout = $('#slideout');

    $slideout.mouseenter(function() {
        if(!$slideout.hasClass('hoverClass')) {
            $slideout.addClass('hoverClass');
        }
    });

    $slideout.mouseleave(function() {
        if($slideout.hasClass('hoverClass')) {
            $slideout.removeClass('hoverClass');
        }
    });

    $slideout.on('click', function() {
        if(!$slideout.hasClass('hoverClass')) {
            $slideout.addClass('hoverClass')
        }
    });

    $(".container").on('click', function() {
        if($slideout.has('hoverClass')) {
            $slideout.removeClass('hoverClass');
        }
    });

  $("body").css('cursor', 'none');


  $("body").mousemove(function(ev) {
    if(!forceMouseHide) {
      $("body").css('cursor', '');

      clearTimeout(idleMouseTimer);

      idleMouseTimer = setTimeout(function() {
        $("body").css('cursor', 'none');

        forceMouseHide = true;
        setTimeout(function() {
          forceMouseHide = false;
        }, 200);
      }, 1000);
    }
  });
});



$defaultTheme.click();