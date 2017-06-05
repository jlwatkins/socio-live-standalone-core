var button = document.getElementById('file_select_button');
var input  = document.getElementById('csv_file');

// Making input invisible, but leaving shown fo graceful degradation
input.style.display = 'none';
button.style.display = 'initial';

button.addEventListener('click', function (e) {
    e.preventDefault();
    input.click();
});

input.addEventListener('change', function () {
   if($('#csv_file')[0].files.length){
       button.innerText = this.value;
   }
});