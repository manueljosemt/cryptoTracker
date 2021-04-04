class Http {
  static instance = new Http();

  get = async url => {
    console.log(url);
    try {
      let request = await fetch(url);
      let json = await request.json();
      return json;
    } catch (error) {
      console.log('http get method error', error);
      throw Error(error);
    }
  };

  post = async (url, body) => {
    try {
      let request = await fetch(url, {method: 'POST', body});
      let json = await request.json;
    } catch (error) {
      console.log('http get method error', error);
      throw Error(error);
    }
  };
}

export default Http;
