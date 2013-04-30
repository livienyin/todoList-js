function addListItem() {
  var text = $('#new-text').val();
  var listElement = $('<li />');
  $('<input />').attr('type', 'checkbox').attr('class', 'done').appendTo(listElement);
  listElement.append(text);
  $('<i />').attr('class', 'icon-remove-sign delete').appendTo(listElement);
  $('#todo').append(listElement);
  listElement.hide().fadeIn();
  $('#new-text').val(''); 
}

function finishItem() {
  listElement = $(this).parent();
  if(listElement.css('textDecoration') === 'line-through' ){
    listElement.css('textDecoration', 'none');
    listElement.css('color', 'black');
    $('#todo').append(listElement);
  } else {
    listElement.css('textDecoration', 'line-through');
    listElement.css('color', 'red');
    $('#completed').append(listElement);
  }
  listElement.hide().fadeIn();
}

function deleteItem() {
  listElement = $(this).parent();
  listElement.slideUp(400, function() {listElement.remove()});
}

$(function() {
  $('#add').on('click', addListItem);
  $(document).on('click', '.delete', deleteItem);
  $(document).on('click', '.done', finishItem);
});



