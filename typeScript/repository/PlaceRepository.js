"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaceRepository {
    constructor() {
        this.places = [];
    }
    addPlace(place) {
        this.places.push(place);
        return true;
    }
    getPlaces() {
        return this.places;
    }
}
exports.PlaceRepository = PlaceRepository;
//# sourceMappingURL=PlaceRepository.js.map