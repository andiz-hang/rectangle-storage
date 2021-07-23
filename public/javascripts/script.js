function addRect() {
    $.ajax({
        method: 'post',
        url: '/rectangle',
        data: 'id='+$('#id').val()+'&width='+$('#width').val()+'&height='+$('#height').val()+'&color='+$('#color').val(),
        success: reload
    });
}

// Delete the Rectangle
$('.del').off('click').click(function(){
    var id = $(this).parent().attr('id');
    $.ajax({
        method: 'delete',
        url: '/rectangle/'+id,
        // data: id,
        success: reload
    });
});

// TODO: Edit the Rectangle
$('.edit').off('click').click(function(){
    var id = $(this).parent().attr('id');

    // window.open("/rectangle/edit","Ratting","width=550, height=170,left=150,top=200,toolbar=0,status=0,");
    
    $.ajax({
        method: 'get',
        url: '/rectangle/edit/'+id,
        // data: 'id='+$('#id').val()+'&width='+$('#width').val()+'&height='+$('#height').val()+'&color='+$('#color').val(),
        success: function(data) {
            var win = window.open("", "Ratting", "width=550, height=170,left=150,top=200,toolbar=0,status=0,");
            // var win = window.open();
            win.document.write(data);
        }
    });
});


// TODO: Get Rectangle Details
$('.rectangle').off('click').click(function(){
    var id = $(this).parent().attr('id');

    window.open("/rectangle/details","Ratting","width=550, height=170,left=150,top=200,toolbar=0,status=0,");

    // $.ajax({
    //     method: 'delete',
    //     url: '/rectangle/'+id,
    //     // data: id,
    //     success: reload
    // });
});

function reload() {
    window.location.replace('/');
    window.location.reload();
}