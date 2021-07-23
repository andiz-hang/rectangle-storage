// Confirm the Edit
function editRect() {
    $.ajax({
        method: 'post',
        url: '/rectangle/edit',
        data: 'id='+$('#id').val()+'&width='+$('#width').val()+'&height='+$('#height').val()+'&color='+$('#color').val(),
        success: function(data) {
            window.self.close();
            window.close();
            self.close();
        }
    });
};