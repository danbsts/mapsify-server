export class Place {
    name: string;
    lat: number;
    lng: number;
    playlistLink: string;

    constructor (name: string, lat: number, lng: number, playlistLink: string) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.playlistLink = playlistLink;
    }
}