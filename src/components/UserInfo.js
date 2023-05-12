export default class UserInfo {
  constructor(config) {
    this._elementNameUser = document.querySelector(config.nameInputSelector);
    this._elementJobUser = document.querySelector(config.jobInputSelector);
  }
  getUserInfo() {
    return {
      userName: this._elementNameUser.textContent,
      userJob: this._elementJobUser.textContent,
    };
  }
  setUserInfo(dataUser) {
    this._elementNameUser.textContent = dataUser.userName;
    this._elementJobUser.textContent = dataUser.userJob;
  }
}
