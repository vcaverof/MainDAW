// =====================================================
// INSERTAR ELEMENTO (POST)
// =====================================================

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", function () {
    if (xhr.status === 201) {
        alert("Álbum insertado");
    } else {
        alert(`Error: ${xhr.status} ${xhr.statusText}`);
    }
});

document.getElementById("album").addEventListener("submit", e => {
    e.preventDefault();

    const album = {
        userId: document.forms.album.userId.value,
        title: document.forms.album.title.value
    };

    xhr.open("POST", "http://localhost:3000/albums");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(album));
});
