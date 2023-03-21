import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);    
    this.submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__form");
     this.inputValues = {};
    this._inputs = this._form.querySelectorAll(".popup__content");
  }
  _getInputValues() {
    //const inputValues = {};
    this._inputs.forEach((input) => {
      this.inputValues[input.name] = input.value;
    });
    return this.inputValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submitHandler(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
