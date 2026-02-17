// =====================================================
// MODIFICAR ELEMENTO (PATCH)
// =====================================================

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", function () {
    if (xhr.status === 201) {
        alert("Usuario modificado");
    } else {
        alert(`Error: ${xhr.status} ${xhr.statusText}`);
    }
});

document.getElementById("user").addEventListener("submit", e => {
    e.preventDefault();

    const user = {
        id: document.forms.user.id.value,
        name: document.forms.user.name.value,
        username: document.forms.user.username.value,
        email: document.forms.user.email.value
    };

    xhr.open("PATCH", "http://localhost:3000/users/" + user.id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
});
