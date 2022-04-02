import { profileJob, profileName, inputProfileName, inputProfileProfession } from "../utils/constants.js"
export class UserInfo {
    constructor({ name, profession }) {
        this._userName = name;
        this._userProfession = profession;
    }

    getUserInfo() {
        return { name: this._userName, profession: this._userProfession }
    }

    setUserInfo({ name, profession }) {
        this._userName = name;
        this._userProfession = profession;

        profileName.textContent = name;
        profileJob.textContent = profession;
    }
}