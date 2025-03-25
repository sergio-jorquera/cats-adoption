

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=true';
const API_KEY = 'live_fYNIPjQGos77X33i4D7BqGMi2SjreWUKapQj0c712r5HzEnRzx4r7zv05Q1KPoCS'; // Reemplaza con tu clave API real

const CatService = {
  async getCats() {
    try {
      const response = await fetch(API_URL, {
        headers: {
          'x-api-key': API_KEY,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cats:', error);
      return [];
    }
  },
};

export default CatService;