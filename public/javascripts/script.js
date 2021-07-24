// Add a Rectangle
function addRect() {
    $.ajax({
        method: 'post',
        url: '/rectangle',
        data: 'id='+$('#id').val()+'&name='+$('#name').val()+'&width='+$('#width').val()+'&height='+$('#height').val()+'&color='+$('#color').val(),
        success: reload
    });
}

// Delete a Rectangle
$('.del').off('click').click(function(){
    var id = $(this).parent().attr('id');
    $.ajax({
        method: 'delete',
        url: '/rectangle/'+id,
        success: reload
    });
});

// Edit a Rectangle
$('.edit').off('click').click(function(){
    var id = $(this).parent().attr('id');
    $.ajax({
        method: 'get',
        url: '/rectangle/edit/'+id,
        success: function(data) {
            var win = window.open("", "Ratting", "width=550, height=500,left=150,top=200,toolbar=0,status=0,");
            win.document.write(data);
        }
    });
});

// View a Rectangle
$('.rectangle').off('click').click(function(){
    var id = $(this).parent().attr('id');
    $.ajax({
        method: 'get',
        url: '/rectangle/details/'+id,
        success: function(data) {
            var win = window.open("", "", "width=550, height=500,left=150,top=200,toolbar=0,status=0,");
            win.document.write(data);
        }
    });
});

function reload() {
    window.location.replace('/');
    window.location.reload("true");
}