export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const setting = {
  inputSelector: ".popup__content",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const elementList = document.querySelector(".element__list");
export const addCardForm = document.querySelector(".popup__form_type-add");
export const editProfileForm = document.querySelector(
  ".popup__form_type-profile"
);
////////////popup//////////////
///////////////////////////////
export const editProfilePopup = document.querySelector(".popup_type-edit");
export const addCardPopup = document.querySelector(".popup_type_add-card");
export const imagePopup = document.querySelector(".popup_type_image-preview");
///////////Forms//////////////
export const formProfile = document.querySelector(".popup__form_type-profile");
export const inputName = document.querySelector(".popup__content_type_name");
export const inputOccupation = document.querySelector(
  ".popup__content_type_aboutMe"
);

export const formAdd = document.querySelector(".popup__form_type-add");
export const addTitleInput = document.querySelector(
  ".popup__content_type_img-title"
);
export const addImageInput = document.querySelector(
  ".popup__content_type_img-link"
);
//////////Buttons/////////////

export const openProfilePopupButton = document.querySelector(
  ".profile__edit-button"
);
export const closeProfilePopupButton = document.querySelector(
  ".popup__close_type-proile"
);
export const closeImagePopup = document.querySelector(
  ".popup__close_type_image-preview"
);
export const addCardButton = document.querySelector(".profile__add-button");
export const closeAddPopupButton = document.querySelector(
  ".popup__close_type_add"
);
/////////others DOM element/////////////
export const profileName = document.querySelector(".profile__name");
export const profileOccupation = document.querySelector(".profile__explorer");

export const userId = "ed0bd0fb-6870-43e5-b6c3-88e44500d0b5";
