// Confirm the Edit
function editRect() {
    $.ajax({
        method: 'post',
        url: '/rectangle/edit',
        data: 'id='+$('#id').val()+'&name='+$('#name').val()+'&width='+$('#width').val()+'&height='+$('#height').val()+'&color='+$('#color').val(),
        success: function(data) {
            window.opener.location.replace('/');
            window.opener.reload();

            window.close();
        }
    });
};

// Cancel Edit
function cancelEdit() {
    window.close();
};