export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector , userId }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._userId = userId;
  }

  getUserInfo(_userId) {
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

  setUserInfo({ name, aboutMe}) {
    
    this._profileName.textContent = name;
    this._profileJob.textContent = aboutMe;
    
    //this._userId = userId;
    //this._profileName._userId =  userId;
    console.log("setUserInfo", this._profileName);
  }
}
