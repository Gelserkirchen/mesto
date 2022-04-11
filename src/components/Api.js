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
            .catch(res => console.log('error to add card', res));
    }

    deleteCard(cardId) {  
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error delete card', res));
    }

    deleteLike(cardId) {  
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error to delete like', res));
    }

    addLike(cardId) {  
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error to add like', res));
    }

    updAvatar(avatar) {  
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar    
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(res => console.log('error avatar edit', res));
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
    headers: {
        // authorization: '2e5af95a-25b4-4742-9ead-1326c8073602',
        authorization: 'a9707e34-62b5-41bf-b58b-1d72c6c41940',
        'Content-Type': 'application/json'
    }
}); 