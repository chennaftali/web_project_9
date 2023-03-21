import { Popup } from "../components/Popup.js";

export class PopupWithSubmit extends Popup {
    constructor(popupSelector, action) {
        super(popupSelector);
        this._submitHandler = action;
        }
//   setAction(action) {
//     this._submitHandler = action;
    
//   }
  setEventListeners() {
    this._popup.addEventListener("submit", (e) => {
        e.preventDefault();
        this._submitHandler();
        //this.close();
      });
      super.setEventListeners();
  }
}
