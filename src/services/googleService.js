import axios from "axios";
import { LocationModel } from "../model/LocationModel.js";
import * as dotenv from "dotenv";
dotenv.config();

class GoogleService {
  /**
   *
   * @param {string} address
   * @returns Object
   */
  static async geolocation(address) {
    const endCode = encodeURIComponent(address);
    const key = process.env.API_KEY;
    const request = (
      await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${endCode}&key=${key}`
      )
    ).data;

    return new LocationModel(request.results[0].geometry.location, address);
  }
  /**
   *
   * @param  {...any} params
   * @returns {Array<Object>}
   */
  static async groupedCoordinate(...params) {
    const grouped = [];
    for (let i = 0; i < params.length; i++) {
      let address = await this.geolocation(params[i]);
      grouped.push(address);
    }
    return grouped;
  }
}

export default GoogleService;
