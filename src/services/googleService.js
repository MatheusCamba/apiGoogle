import axios from "axios";
import LocationModel from "../model/LocationModel";

class GoogleService {
  static async geolocation(address) {
    const endCode = encodeURIComponent(address);
    const key = process.env.API_KEY;
    const request = (
      await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${endCode}&key=${key}`
      )
    ).data;
    return new LocationModel(request[0].geometry.location, address)
  }

  static groupedCordinate(...params){
      const grouped = []
      for(let i = 0; i < params[0]; i++){
        let address = await this.geolocation(params[0][i])
        grouped.push(address)
      }
  }
}

export default GoogleService;
