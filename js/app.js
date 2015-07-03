$(document).ready(function(){

// use enter to add list items
    $('#item').keyup(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $('#addItem').click();
        };
    }); 




//add list items
    $('#addItem').click(function(){
        var txtbox = document.getElementById('item');
        var txtval = txtbox.value;
        event.preventDefault();

        if(!$.trim($('#item').val())) {
            alert('Please enter text to add to the list');
        } else {
            $('<li class="items"></li>').appendTo('#list').html('<input id="checkbox1" type="checkbox"> ' + txtval + '</span><img class="delete" src="img/Trash_icon.png"/>');

        document.getElementById('item').value = '';
        };
    });

//delete list items
    $('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//cross off list items
    $('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});

});


