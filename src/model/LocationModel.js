export class LocationModel {
  constructor(coordinate, address) {
    this.coordinate = coordinate;
    this.address = address;
  }
}

export class Path {
  constructor(startingPoint, destiny) {
    this.startingPoint = startingPoint;
    this.destiny = destiny;
  }
}

export class FormattedDistance {
  constructor(path, distance) {
    this.path = path;
    this.distance = distance;
  }
}

export class Response {
  constructor(closer, futher) {
    this.close = closer;
    this.futher = futher;
  }
}
