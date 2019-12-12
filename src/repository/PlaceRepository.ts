import {Place} from '../common/Place'
import { PlaceRepositoryFixture } from '../fixture/PlaceRepositoryFixture';

export class PlaceRepository {
    places: Place[] = [];

    addPlace(place: Place): boolean {
        var contain: boolean = false;
        this.places.forEach(element => {
            if (element.name == place.name) {
                contain = true;
                return;
            }
        });
        if (!contain) {
            this.places.push(place);
        }
        return contain;
    }

    getPlaces(): Place[] {
        return this.places;
    }

    cleanPlaces() {
        this.places = [];
    }

    createDefaultPlaylistPlaceList() {
        this.places = new PlaceRepositoryFixture().createDefaultPlaylistPlaceList();
        return this.places;
    }

}