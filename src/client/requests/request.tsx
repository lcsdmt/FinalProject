function manageData(path, method = "GET", dto = {}) {
    let data = {
        method: method,
        body: JSON.stringify(dto),
        headers: {
            "Authorization": sessionStorage.AUTH_TOKEN,
            "Content-Type": "application/json",
        }
    };
    if (method === "GET") {
        // delete this obj key if we only want to read data
        delete data.body
    }
    return fetch(path, data)
        .then(response => {
            if (response.ok) {
                if (method === "GET") {
                    return response.json();
                } else {
                    return response;
                }
            }
            return response;
        })
        .catch(err => console.error(err));
};

export function getData(path) {
    return manageData(path, "GET", {});
}

export function postData(path, payload) {
    return manageData(path, "POST", payload);
}

export function destroyData(path, payload) {
    return manageData(path, "DELETE", payload);
}

export function putData(path, payload) {
    return manageData(path, "PUT", payload);
}

export function checkLogin() {
    let { AUTH_TOKEN } = sessionStorage;
    if (AUTH_TOKEN) {
        return true;
    } else {
        return false;
    }
}

export function logout() {
    // remove user from session storage to log user out
    let { AUTH_TOKEN } = sessionStorage;
    if (AUTH_TOKEN) {
        sessionStorage.removeItem("AUTH_TOKEN");
        sessionStorage.removeItem("LOGGED_IN_USER");
    }
}