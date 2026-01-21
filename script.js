// index.js
$(document).ready(function(){
    var createTask = function () {
        $.ajax({
            type: 'POST',
            url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=38',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                task: {
                    content: $('#new-task-content').val()
                }
            }),
            success: function (response, textStatus) {
                console.log(response);
            },
            error: function (request, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });  
    }

    $('#create-task').on('submit', function (e) {
        e.preventDefault();
        createTask();
    });
});