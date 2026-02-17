// =====================================================
// BORRAR ELEMENTO (DELETE)
// =====================================================

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        alert("Álbum borrado");
    } else {
        alert(`Error: ${xhr.status} ${xhr.statusText}`);
    }
});

document.getElementById("album").addEventListener("submit", e => {
    e.preventDefault();

    const id = document.forms.album.Id.value;
    const url = "http://localhost:3000/albums/" + id;

    xhr.open("DELETE", url);
    xhr.send();
});
