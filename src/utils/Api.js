class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  _hanldeResponse = (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
    return res.json()
  }

  /* Получение фото */
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._hanldeResponse(res))
  }

  /* Получение инфо о пользователе */
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._hanldeResponse(res))
  }

  /* Загрузка инфо о пользователе */
  patchUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._hanldeResponse(res))
  }

  /* Добавление фото */
  addNewPhoto(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._hanldeResponse(res))
  }

  /* Удаление фото */
  deletePhoto(photoID) {
    return fetch(`${this._baseUrl}/cards/${photoID}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._hanldeResponse(res))
  }

  /* Лайк фото */
  setLike(photoId) {
    return fetch(`${this._baseUrl}/cards/likes/${photoId}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._hanldeResponse(res))
  }

  /* Снятие лайка */
  deleteLike(photoId) {
    return fetch(`${this._baseUrl}/cards/likes/${photoId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._hanldeResponse(res))
  }

  /* Снятие и установка лайка */
  changeLikeCardStatus(photoId, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${photoId}`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers,
    }).then((res) => this._hanldeResponse(res))
  }

  /* Обновление аватара */
  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._hanldeResponse(res))
  }
}

// NEW API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',

  headers: {
    authorization: 'd08facf4-cfb9-4bbf-b1e2-fb8de78d9cf7',
    'Content-Type': 'application/json',
  },
})

export default api
