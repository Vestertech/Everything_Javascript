"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
let map, mapEvent;

class App {
  constructor() {}
  _getPosition() {}
  _loadMap() {}
  _showForm() {}
  _toggleElevateField() {}
  _newWorkout() {}
}

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function (position) {
    // This part checks if the browser supports geolocation. If it does, it uses navigator.geolocation.getCurrentPosition to get the user's current position and then initializes a Leaflet map centered on that position.
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    // This creates leaflet map using OpenStreetMap tiles & sets view to user's current position......
    let map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Handling clicks on map, when map is clicked, it triggers event to display a form for entering workout details.....
    map.on(
      "click",
      function (mapE) {
        mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
      },
      function () {
        alert(`Could not get your current location!`);
      }
    );
    // Form Submission event/enter key: prevents default, clears input, adds marker to the map at clicked location.
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Clear Input fields
      inputDistance.value =
        inputCadence.value =
        inputDuration.value =
        inputElevation.value =
          "";
      // Display marker
      console.log(mapEvent);
      const { lat, lng } = mapEvent.latlng;
      L.marker({ lat, lng })
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: "running-popup",
          })
        )
        .setPopupContent("Workout")
        .openPopup();
    });
  });
// Input type for change events: When the workout type changes, it toggles the visibility of the elevation and cadence input fields.
inputType.addEventListener("change", function () {
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});
