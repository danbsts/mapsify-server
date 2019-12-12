import { Place } from "../common/Place";

export class PlaceRepositoryFixture {
    places: Place[] = [];

    createDefaultPlaylistPlaceList() : Place[] {
        var PLACE_1 = new Place("Ta Ligado?!", -8.055604, -34.9521252, "https://open.spotify.com/playlist/1md5PAJ0yL5f8FIam1fzYm");
        var PLACE_2 = new Place("(ESC) ape", -8.055543, -34.952770, "https://open.spotify.com/playlist/25lRKxqfByXWgLhdnnJyal");
        var PLACE_3 = new Place("Coffee Table Jazz", -8.053436, -34.953208, "https://open.spotify.com/playlist/37i9dQZF1DWVqfgj8NZEp1");
        var PLACE_4 = new Place("Tempo do Rococó", -8.054897, -34.948600, "https://open.spotify.com/playlist/7ssNzzVMXRaY81p5rYXGep");
        this.places.push(PLACE_1);
        this.places.push(PLACE_2);
        this.places.push(PLACE_3);
        this.places.push(PLACE_4);
        return this.places;
    }
}