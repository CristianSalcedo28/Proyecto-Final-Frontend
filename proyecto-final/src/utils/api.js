class Api {
    constructor(props) {
      this.baseUrl = props.baseUrl;
    }
  
    getNewsCards() {
      return fetch(
        ` ${this.baseUrl}?location=Buenos%20Aires%2C%20Argentina&page=1`,
        {
          method: "GET",
        }
      ).then((res) => {
        return res.json();
      });
    }
  }
  
  const api = new Api({
    baseUrl: "https://www.themuse.com/api/public/jobs",
  });
  
  export default api;
