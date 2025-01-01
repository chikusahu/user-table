
const user = [];

function renderUser() {
    const userList = $('#user');
    userList.html('');

    for (let i in user) {
        const listItem = $('<li>');
        const items = user[i];
        listItem.text(items.name + ' _ ' + items.age + ' _ ' + items.address);
        userList.append(listItem);
    }
}

$(function () {
    renderUser();

    $('#login').on('click', function () {
        const users = $('#username').val();
        const age = $('#age').val();
        const address = $('#address').val(); 

        if (!users.trim() || !age.trim() || !address.trim()) {
            return alert('Please enter all fields');
        }

        const items = { name: users, age: age, address: address };
        user.push(items);

        $('#username').val('');
        $('#age').val('');
        $('#address').val('');

        renderUser();
    });
});