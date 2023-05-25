export default class UserInfo {
  constructor(config) {
    this._elementNameUser = document.querySelector(config.nameInputSelector);
    this._elementJobUser = document.querySelector(config.jobInputSelector);
    this._elementAvatar = document.querySelector(config.avatarSelector);
  }
  getUserInfo() {
    return {
      userName: this._elementNameUser.textContent,
      userJob: this._elementJobUser.textContent,
    };
  }
  setUserInfo({ avatar, userName, userJob }) {
    this._elementAvatar.src = avatar;
    this._elementNameUser.textContent = userName;
    this._elementJobUser.textContent = userJob;
  }
}
