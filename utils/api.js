const BASE_API = 'https://router.project-osrm.org/route/v1/driving/';

const Api = () => ({
  async getCoordinates() {
    let query = await fetch(`${BASE_API}-87.20315,14.099045;-87.19119,14.099867?overview=full&geometries=geojson&alternatives=true&steps=false&hints=;`);
    let data = await query.json();
    return data;
  },
});

export default Api();
