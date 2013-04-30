function addListItem() {
  var text = $('#new-text').val();
  var listElement = '<li><input type="checkbox" class="done" />'+text+' <button class="delete">Delete</button></li>';
  $('#todo').append(listElement);
  $('#new-text').val(''); 
}

function finishItem() {
  if( $(this).parent().css('textDecoration') === 'line-through' ){
    $(this).parent().css('textDecoration', 'none');
    $(this).parent().css('color', 'black');
    $('#todo').append($(this).parent());
  } else {
    $(this).parent().css('textDecoration', 'line-through');
    $(this).parent().css('color', 'red');
    $('#completed').append($(this).parent());
  }
}

function deleteItem() {
  $(this).parent().remove();
}

$(function() {
  $('#add').on('click', addListItem);
  $(document).on('click', '.delete', deleteItem);
  $(document).on('click', '.done', finishItem);
});



