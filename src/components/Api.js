class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    getProfile(){
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status));
    }

    editProfile(name, about) {  
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about    
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error Profile edit', res));
    }

    addCard(name, link) {  
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link    
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error Profile edit', res));
    }

    deleteCard(cardId) {  
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error Profile edit', res));
    }

    deleteLike(cardId) {  
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error Profile edit', res));
    }

    addLike(cardId) {  
        // debugger
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error Profile edit', res));
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
    headers: {
        authorization: '2e5af95a-25b4-4742-9ead-1326c8073602',
        'Content-Type': 'application/json'
    }
}); 