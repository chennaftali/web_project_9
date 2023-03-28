import "./index.css";
import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";

import { UserInfo } from "../components/UserInfo.js";

import { Section } from "../components/Section.js";
import { api } from "../components/Api.js";

import {
  setting,
  elementList,
  addCardForm,
  editProfileForm,
  editProfilePopup,
  addCardPopup,
  inputName,
  inputOccupation,
  formAdd,
  addTitleInput,
  addImageInput,
  openProfilePopupButton,
  closeProfilePopupButton,
  addCardButton,
  closeAddPopupButton,
  profileName,
  profileOccupation,
  initialCards,
  userId,
} from "../utils/constants.js";


// const submitHandler = new UserInfo({
//   profileNameSelector: ".profile__name",
//   profileJobSelector: ".profile__explorer",
// });

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileJobSelector: ".profile__explorer",
});
const imageModal = new PopupWithImage(".popup_type_image-preview");
imageModal.setEventListeners();

const confirmModal = new PopupWithSubmit(".popup_type_delete-card");
   //api.deleteCard(res._id)
   //.then(res=> {console.log("card delete", res)})
   //.then(res=> {Card.CardhandleElementDelete()
   //confirmModal.close()})
  
    ///
   //let handleElementDelete = (cardId) => {
      //confirmModal.open();
      // confirmModal.setSubmitActionHere(() => {
      //   api.deleteCard(cardId)
      //     .then(() => {
      //       confirmModal.close();
      //       card.deleteCard();
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // });
    //};


confirmModal.setEventListeners();

const createCard = (data) => {
  //console.log(data)
  const card = new Card(data, "#card__template", userInfo._userId, () => {
    imageModal.open(data.link, data.name)}
  )
  
  const cardElement = card.createCard();
    //console.log(cardElement)
  return cardElement;
};

const prependCard = (e) => {        
  const card = createCard(e);
   section.prependItem(card)
};

const section = new Section(
  { renderer: prependCard },
  elementList
);

const editModal = new PopupWithForm(".popup_type-edit", (data) => {
  //console.log(data)
  userInfo.setUserInfo(data);
  
});
editModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_type_add-card", (data) => {
  //console.log(`data`,data);//name link
  api.createCard(data)
  .then(res => {
    //console.log("res", res)// placeName link:
    section.addItem(res);
  })
  // const card = new Card({
  //   handleDelete: () => {
  //     console.log(123)
  //   }
  // })
  
});
addCardModal.setEventListeners();

const addCardFormValidator = new FormValidator(setting, addCardForm);
const editProfileFormValidator = new FormValidator(setting, editProfileForm);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
//section.renderItems();

/////////////////Function/////////////////////

/////////add-card-function////////////////////////////////
function handleAddCardClick() {
  addCardModal.open();
  addCardFormValidator.disableButton();
}
addCardButton.addEventListener("click", handleAddCardClick);
/////////////////////////////////////////////////////////////////////////
///////////////Event Listeners////////////////

openProfilePopupButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputOccupation.value = data.job;
  editModal.open();
});

///Api
api.getUserInfo()
.then(res => {
  //console.log(res)
  userInfo.setUserInfo({name: res.name, aboutMe:res.about, userId: res._id})
  //console.log("check", api)

})
api.getInitialCards()
.then(res => {
  section.renderItems(res);
  //console.log("res", res)
})


