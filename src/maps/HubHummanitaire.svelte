<script>
    import { onMount, onDestroy } from "svelte";
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    import locationsData from "../../locations.json";

    let map;
    let userMarker;

    onMount(async () => {
        console.log("map : Hub humanitaire");
        // Initialize the map
        map = L.map("map").setView([50.8503, 4.3517], 11); // Brussels coordinates

        // Add Tile Layer for the map
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "Bruxelles",
        }).addTo(map);

        // Add markers for Hub Humanitaire locations
        const hubHumanitaireLocations = locationsData["Hub humanitaire"];
        hubHumanitaireLocations.forEach((location) => {
            const { adresse, latitude, longitude } = location;
            if (latitude !== undefined && longitude !== undefined) {
                L.marker([latitude, longitude]).addTo(map).bindPopup(adresse);
            } else {
                console.error(
                    `Coordonnées manquantes pour l'emplacement : ${adresse}`,
                );
            }
        });

        // Get user's current location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                // Add marker for user's current location
                userMarker = L.marker([latitude, longitude], {
                    icon: L.icon({
                        iconUrl: "./src/assets/red_marker.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                    }),
                })
                    .addTo(map)
                    .bindPopup("Vous êtes ici");
            },
            (error) => {
                console.error("Erreur de géolocalisation : ", error.message);
            },
        );
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
