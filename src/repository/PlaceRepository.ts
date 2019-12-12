import {Place} from '../common/Place'

export class PlaceRepository {
    places: Place[] = [];

    addPlace(place: Place): boolean {
        this.places.push(place);
        return true;
    }

    getPlaces(): Place[] {
        return this.places;
    }

}