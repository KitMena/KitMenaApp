<script>
    import { onMount, onDestroy } from "svelte";
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    import locationsData from "../locations.json";
    import { Alert } from "bootstrap";

    let map;
    let userMarker;

    onMount(async () => {
        // Initialize the map
        map = L.map("map").setView([50.8503, 4.3517], 11); // Brussels coordinates

        // Add Tile Layer for the map
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "Bruxelles",
        }).addTo(map);

        // Loop through all locations and add markers
        for (const orgName in locationsData) {
            if (locationsData.hasOwnProperty(orgName)) {
                const orgLocations = locationsData[orgName];
                orgLocations.forEach(location => {
                    const { adresse, latitude, longitude, nom } = location;
                    if (latitude !== undefined && longitude !== undefined) {
                        L.marker([latitude, longitude]).addTo(map).bindPopup(orgName);
                    } else {
                        console.error(`Coordonnées manquantes pour l'emplacement : ${orgName}`);
                    }
                });
            }
        }

        // Get user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            // Add marker for user's current location
            userMarker = L.marker([latitude, longitude], {
                icon: L.icon({
                    iconUrl: './src/assets/red_marker.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34]
                })
            }).addTo(map).bindPopup("Vous êtes ici");
        }, (error) => {
            offline = true;
            console.error('Erreur de géolocalisation : ', error.message);
        });
    });

    onDestroy(() => {
        // Cleanup when the component is destroyed
        if (map) {
            map.remove();
        }
    });
</script>

<div id="map" style="height: 50vh;"></div>

<style>
    #map {
        border: solid var(--secondary) 0.2vh;
        border-radius: 2vh;
        width: 90%;
    }
</style>
