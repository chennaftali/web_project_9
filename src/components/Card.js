export class Card {
  constructor(data, templateCardSelector, userId, handleCardClick, handleDelete, ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner._id;
    this._userId = userId;
    this._likes = data.likes;
    

    this._handleCardClick = handleCardClick;
    this._templateCardSelector = templateCardSelector;
    this._handleDelete = handleDelete;
  }

  _getElement = () => {
    return document
      .querySelector(this._templateCardSelector)
      .content.querySelector(".card__list-item")
      .cloneNode(true);
  };

  _toggleLikeButton = (e) => {
    const activLikeButton = e.target;
    activLikeButton.classList.toggle("card__button_type_active");
  };

  handleElementDelete = () => {
    // this._api.deleteCard(id)
    this._cardElement.remove();
    //confirmModal.open();
    this._cardElement = null;
  };

  _setEventListeners() {
    this._likeButton.addEventListener("click", this._toggleLikeButton);
    //this._deleteButton.addEventListener("click", this._handleDelete);
    this._cardImage.addEventListener("click", this._handleCardClick);
  }
  createCard() {
    this._cardElement = this._getElement();

    this._cardImage = this._cardElement.querySelector(".card__img");
    const cardTitle = this._cardElement.querySelector(".card__title");
    // this._deleteButton = this._cardElement.querySelector(
    //   ".card__button_type_delete"
    // );
    this._likeButton = this._cardElement.querySelector(
      ".card__button_type-like"
    );
    if(this._owner === this._userId) {
      const deleteButton = document.createElement("button")
      //console.log(deleteButton)
      deleteButton.className = "card__button_type_delete";
      deleteButton.addEventListener("click", this._handleDelete)
      this._cardElement.prepend(deleteButton)
    }

    this._cardImage.src = this._link;
    this._cardImage.alt = `photo of ${this._name}`;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    this._cardElement.querySelector(".card__button_like-counter").textContent = this._likes.length;
    //console.log(this._likes.length)
    return this._cardElement;
    
  }
}
