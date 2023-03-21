export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._userId;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  // setUserInfo({ name, aboutMe }) {
  //   console.log("setUserInfo", this);
  //   this._profileName.textContent = name;
  //   this._profileJob.textContent = aboutMe;
  // }

  setUserInfo({ userName, aboutMe, userId}) {//שיניתי מ-name לuserName
    
    this._profileName.textContent = userName;
    this._profileJob.textContent = aboutMe;
    
    this._userId = userId;
    //this._profileName._userId =  userId;
    console.log("setUserInfo", this._profileName);
  }
}
