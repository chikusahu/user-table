const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        isActive: true,
        image: "https://via.placeholder.com/150?text=John+Doe"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 25,
        isActive: false,
        image: "https://via.placeholder.com/150?text=Jane+Smith"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 28,
        isActive: true,
        image: "https://via.placeholder.com/150?text=Alice+Johnson"
    },
    {
        id: 4,
        name: "Bob Williams",
        email: "bob.williams@example.com",
        age: 35,
        isActive: false,
        image: "https://via.placeholder.com/150?text=Bob+Williams"
    },
    {
        id: 5,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        age: 40,
        isActive: true,
        image: "https://via.placeholder.com/150?text=Charlie+Brown"
    }
];

$(() => {
    $('#data_body').html('');
    for (let i in users) {
        const item = users[i]
        let tr = $('<tr/>')
        let td_id = $('<td/>').html(item.id);
        let img = $('<img/>').attr("src", item.image);
        let td_image = $('<td/>').append(img);
        let td_name = $('<td/>').html(item.name);
        let td_age = $('<td/>').html(item.age);
        let td_email = $('<td/>').html(item.email);
        let td_active = $('<td/>').html(item.isActive ? "Yes" : "No");

        tr.append(td_id).append(td_image).append(td_name).append(td_age).append(td_email).append(td_active);

        $('#data_body').append(tr);
    }
})