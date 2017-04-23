$('#nametag-container').hide();

setInterval(updateGradient,10);

var attendeeInfo;

$('#csv-loader').on('dragenter', function() {
    $(this).css({'background-color':'#ff5252'});
});

$('#csv-loader').on('dragleave', function() {
    $(this).css({'background-color':'black'});
});

function makeDiv(fName, lName, occ){

    parentDiv = '.background';

    var nameTag = `
        <div class="nametag-container">
            <div class="nametag">
                <span class="firstName">`+fName+`</span>
                <span class="lastName">`+lName+`</span>
                </br><span class="occupation">`+occ+`</span>
            </div>
            <div class="arrow-down"></div>
        </div>
    `;
    $newdiv = $(nameTag);

    var posx = (0.6*Math.random() * ($(document).width() - $newdiv.width())).toFixed();
    var posy = (0.8*Math.random() * ($(document).height() - $newdiv.height())).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( parentDiv ).fadeIn(800).delay(3000).fadeOut(1200, function(){
       $(this).remove();
    });
};

var spinnerOpen = false;
$('#spinner-toggle').on('click', function() {
    if(!spinnerOpen) {
        openSpinner();
    }
    else {
        closeSpinner();
    }

});

var spinning = false;
var intervalID;
$('#spin-button').on('click', function() {
    if(!spinning) {
        startSpinner();
    } else {
        stopSpinner();
    }
});

function openSpinner() {
    $('#spinner').animate({'opacity': '1'});
    $('#spinner-toggle').text('Close Spinner');
    $('#spin-button').animate({'opacity': '1'}, 500);
    $('#spin-button').prop('disabled', false);
    startSpinner();
    $('#first_name_spinner').delay(500).animate({'opacity': '1'});
    $('#last_name_spinner').delay(500).animate({'opacity': '1'});
    $('#occupation_spinner').delay(500).animate({'opacity': '1'});
    spinnerOpen = true;
}

function closeSpinner() {
    $('#spin-button').animate({'opacity': '0'}, 10);
    $('#spinner').animate({'opacity': '0'});
    $('#spinner-toggle').text('Open Spinner');
    $('#spin-button').prop('disabled', true);
    $('#first_name_spinner').css('opacity', '0');
    $('#last_name_spinner').css('opacity', '0');
    $('#occupation_spinner').css('opacity', '0');

    stopSpinner();

    spinnerOpen = false;
}

function stopSpinner() {
    $('#spin-button').text('Spin');
    spinning = false;

    clearInterval(intervalID);

    if(attendeeInfo !== undefined) {
        var randomPerson = attendeeInfo.list[getRandomInt(0, attendeeInfo.list.length)];
        $('#first_name_spinner').text(randomPerson.first_name);
        $('#last_name_spinner').text(randomPerson.last_name);
        $('#occupation_spinner').text(randomPerson.position);
    }

}

function startSpinner() {
    $('#spin-button').text('Stop');
    spinning = true;

    $('#first_name_spinner').css('opacity', '1');
    $('#last_name_spinner').css('opacity', '1');
    $('#occupation_spinner').css('opacity', '1');

    attendeeInfo = getPeople();

    intervalID = setInterval(function() {

        var randomFirstName = attendeeInfo.list[getRandomInt(0, attendeeInfo.list.length)].first_name;

        var randomLastName = attendeeInfo.list[getRandomInt(0, attendeeInfo.list.length)].last_name;

        var randomOccupation = attendeeInfo.list[getRandomInt(0, attendeeInfo.list.length)].position;

        $('#first_name_spinner').text(randomFirstName);
        $('#last_name_spinner').text(randomLastName);
        $('#occupation_spinner').text(randomOccupation);

    }, 15);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
