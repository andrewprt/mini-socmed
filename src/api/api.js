export const apiCall = (link) =>
    fetch(link).then(response => response.json())

export const apiPost = (link, obj) =>
    fetch(link, obj)
        .then(response => response.json())