export class UserInfo {
    constructor({ nameSelector, professionSelector, avatarSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userProfession = document.querySelector(professionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            profession: this._userProfession.textContent,
            avatar: this._avatar.style.backgroundImage
        };
    }

    setUserInfo({ name, profession, avatarSrc = this._avatar }) {
        this._userName.textContent = name;
        this._userProfession.textContent = profession;
        this._avatar.style.backgroundImage = `url(${avatarSrc})`
    }
}