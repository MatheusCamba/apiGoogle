import GoogleService from "../services/googleService.js";
import Calculo from "../utils/calculo.js";

class Distancias {
  static router(app) {
    app.get("/", async (req, res) => {
      const queries = req.query;
      const queriesValues = Object.values(queries);

      GoogleService.groupedCoordinate(...queriesValues)
        .then((response) => {
          const result = Calculo.distanceMaxMin(response);
          res.status(200).json(result);
        })
        .catch((e) => {
          res.status(400).json(e.message);
        });
    });
  }
}

export default Distancias;
