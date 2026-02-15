const API_URL = "http://localhost:8000/api"; //Conexión con mi back

async function apiGet(endpoint) {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
        }
    });

    return res.json();
}

async function apiPost(endpoint, data = {}) {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : "",
            "Accept": "application/json"
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

async function apiDelete(endpoint) {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        }
    });

    return res.json();
}