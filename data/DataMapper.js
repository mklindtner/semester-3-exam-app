import getAuthenticationContext from '../getAuthenticationContext';

function post(url, entity) {
    let status = -1;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + getToken(),
        },
        body: JSON.stringify(entity)
    }).then((response, error) => {        
        status = response.status;
        return response.json();
    }).then(body => Promise.resolve({
        status,
        body,
    }));
}

function get(url) {
    let status = -1;
    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + getToken()
        }
    }).then(response => {
        status = response.status;
        return response.json();
    }).then(body => Promise.resolve({
        status,
        body,
    }))
}

function put(url, entity) {
    let status = -1;
    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + getToken(),
        },
        body: JSON.stringify(entity)
    }).then((response, error) => {
        status = response.status;
        return response.json();
    }).then(body => Promise.resolve({
        status,
        body,
    }));
}

async function getToken(){
    const authContext = await getAuthenticationContext();
    if(authContext === null)
        return "";
    return authContext.token;
}

export {
    get,
    post,
    put,
    getToken
}