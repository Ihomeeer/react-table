//Класс содержит всю логику для работы с API
class Api {
  constructor(baseUrl, limit) {
    this._baseUrl = baseUrl;
    this._limit = limit;
  }

  //проверка состояния промиса
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получение информации о продуктовых карточках с сервера
  getData() {
    return fetch(`${this._baseUrl}/products?limit=${this._limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => this._checkStatus(res))
  }
};

const api = new Api("https://dummyjson.com", 100);
export default api;