import { Popup } from "../components/Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popup__img-preview");
    this._imageCaption = this._popup.querySelector(".popup__header-img");
  }
  open(image, caption) {
    this._imageElement.src = image;
    this._imageElement.alt = `${caption}`;
    this._imageCaption.textContent = caption;

    super.open();
  }
}
