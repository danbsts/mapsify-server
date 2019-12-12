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
        if (!contain && this.validatePlace(place)) {
            this.places.push(place);
        }
        return contain && this.validatePlace(place);
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

    validatePlace(place: Place): boolean {
        if(place.name != undefined && place.name != null && place.name != "" &&
            place.lng != undefined && place.lng != null && place.lng != 0 &&
            place.lat != undefined && place.lat != null && place.lat != 0 &&
            place.playlistLink != undefined && place.playlistLink != null && place.playlistLink != "")
            return true;
        return false;
    }
}