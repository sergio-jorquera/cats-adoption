const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

const CatService = {
  async getCats() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cats:', error);
      return [];
    }
  },
};

export default CatService;