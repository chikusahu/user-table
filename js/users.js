let users = [];

function renderTableData() {
    const tableBody = $('#tableBody');
    tableBody.empty();
    users.forEach(function (user) {
        const row = `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td></td>
            <td>
                <button class="btn btn-success btn-sm fa-solid fa-user-pen"></button>
                <button class="btn btn-danger btn-sm fa-solid fa-trash btn-delete" data-id="${user.id}" ></button>
            </td>
        </tr>`;
        tableBody.append(row);
    });

    $('.btn-delete').on('click', function () {

        if(confirm('Are you sure you want to delete this user?')) {
            const id = $(this).data('id');
            $('#spinner').show();
            
            $.ajax({
                url: 'https://api-generator.retool.com/Vgasu3/users/' + id,
                type: 'DELETE',
                success: function () {
                    onRefresh();
                    // alert('User deleted successfully');
                },
                error: function () {
                    alert('Failed to delete user');
                }
            });
        }
    });
}


function fetchData(url) {
    $('#spinner').show();
    $.get(url).done(function (data) {
        users = data;
        renderTableData();
        $('#spinner').hide();
    })
        .fail(function () {
            alert('Failed to fetch data');
        });
}

function onRefresh() {
    fetchData('https://api-generator.retool.com/Vgasu3/users');
}


$('#saveButton').on('click', function () {
    const user = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        address: $('#address').val(),
        lastlogin: new Date().toLocaleString()
    };

    $.post('https://api-generator.retool.com/Vgasu3/users', user)
        .done(function () {
            onRefresh();
            alert('User saved successfully');
            $('#addModal').modal('hide');
        })
        .fail(function () {
            alert('Failed to save user');
        });
        });


$('#refreshButton').on('click', onRefresh);

$('#searchButton').on('click', function () {
    const text = $('#searchText').val();
    if ($.trim(text) === '') {
        alert('Please enter a valid search text');
        return;
    }
    fetchData('https://api-generator.retool.com/Vgasu3/users?q=' + text);
});

onRefresh();

