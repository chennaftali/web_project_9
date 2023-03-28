import { userId } from "../utils/constants";

const customFetch = (url, headers) => 
    fetch(url, headers)
    .then(res => res.ok ? res.json(): Promise.reject(res.statusText))
      .catch(console.log)


class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    // _checkResponseStatus(res) {
    //   console.log(res)
    //   // if(res.ok){
    //   //   return res.json()
    //   // } else {
    //   //   return Promise.reject(`123Error status: ${res.status}`)
    //   // }
    //   return res
    // }
    getInitialCards() {
      return customFetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      }).then(this._checkResponseStatus)
    }
  
    getUserInfo() {//לבדוק כפילויות כי קיימת פונ כזו בuserInfo.js
        return customFetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })//.then(this._checkResponseStatus)
      }

      createCard(data) {
        return customFetch(`${this._baseUrl}/cards`, {
          headers: this._headers,
          method: "POST",
          body: JSON.stringify(data)
        })
      }
      deleteCard(cardID) {
        return customFetch(`${this._baseUrl}/cards/${cardID}`,
        {headers: this._headers, 
          method: `DELETE`})
      }

      likeCard = (cardID) => {
        return customFetch(`${this._baseUrl}/cards/likes/${cardID}`, {
          headers: this._headers,
          method: `PUT`,
        })
      }

      unlikeCard = (cardID) => {
        return customFetch(`${this._baseUrl}/cards/likes/${cardID}`, {
          headers: this._headers,
          method: `DELETE`
        })
      }

      changeProfilPicture(data) {
        return customFetch(`${this._baseUrl}/users/me/avatar`, {
          headers: this._headers,
          method: `PATCH`,
          body: JSON.stringify(data)
        })
      }
  }

  
  
  export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
    headers: {
      authorization: "ed0bd0fb-6870-43e5-b6c3-88e44500d0b5",
      "Content-Type": "application/json"
    }
  });
  //Token: ed0bd0fb-6870-43e5-b6c3-88e44500d0b5
//Group ID: cohort-3-en"
