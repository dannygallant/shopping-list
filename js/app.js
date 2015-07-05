$(document).ready(function(){

// allow enter key to add items to the list, in addition to 'add' button
    $('#item').keyup(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $('#addItem').click();
        };
    }); 


// add items to the list
    $('#addItem').click(function(){
        var inputField = document.getElementById('item');
        var value = inputField.value;
        event.preventDefault();

        if(!$.trim($('#item').val())) {
            alert('Cannot enter a blank line to the list. Please enter an item.');
        } else {
            $('<li class="items"></li>').appendTo('#list').html('<input id="checkbox1" type="checkbox"> ' + value + '</span><img class="delete" src="img/Trash_icon.png"/>');

        document.getElementById('item').value = '';
        };
    });

// delete items from the list
    $('#list').on('click', '.delete', function(e){e.preventDefault(); 
    $(this).parent().remove()});

// cross items off the list
//     $('#list').on('click', 'li.checkbox1', function(){$(this).toggleClass('strikeThrough'); 
//     $(this).children('.box').toggleClass('checked');});

 });


