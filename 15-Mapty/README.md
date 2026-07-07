# Mapty — Map Your Workouts 🏃‍♂️🚴‍♂️

A workout tracker built with vanilla JavaScript. Click anywhere on the map to log a running or cycling workout — it appears as a marker with a popup and as a card in the sidebar, and everything is saved in your browser between visits.

**Live demo:** https://claude.ai/code/artifact/70c0201a-cebd-4c41-83a3-68cd63baa1b3
_(The demo runs in a sandbox that blocks external requests, so it draws a stylized offline canvas map instead of real OpenStreetMap tiles.)_

## Features

- **Interactive map** — powered by [Leaflet](https://leafletjs.com/) 1.9.4 with OpenStreetMap tiles. Click the map to open the workout form.
- **Two workout types** — running (with cadence, pace auto-calculated in min/km) and cycling (with elevation gain, speed auto-calculated in km/h). The form fields switch automatically with the type.
- **Geolocation** — the map opens at your current position, with a graceful fallback to a default location if permission is denied or unavailable.
- **Input validation** — distance, duration, and cadence must be positive numbers; you get an alert if they aren't.
- **Persistence** — workouts are stored in `localStorage` and rebuilt as proper `Running`/`Cycling` class instances on reload (prototype chain and `Date` restored, not just plain JSON objects).
- **Click to pan** — click a workout card in the sidebar and the map flies to its marker.

## Running It

No build step, no dependencies to install — Leaflet loads from a CDN.

1. Open `index.html` in a browser (or serve the folder: `npx serve .`).
2. Allow location access when prompted (optional — a default location is used otherwise).
3. Click the map, fill in the form, press <kbd>Enter</kbd>.

To wipe all saved workouts, run `app.reset()` in the DevTools console.

## Architecture

Everything lives in `script.js`, organized around four classes:

```
Workout            base class: id, date, coords, distance, duration, description
├── Running        + cadence, calcPace()
└── Cycling        + elevationGain, calcSpeed()

App                the controller: owns the Leaflet map, the workout array,
                   and all event handling / rendering / localStorage I/O
```

The `App` class wires up the whole flow: get position → load map → click map → show form → submit → create workout → render marker + list card → persist. Private class fields (`#map`, `#workouts`, `#mapEvent`) keep the state encapsulated.

The original architecture diagrams from the course are in this folder: `Mapty-architecture-final.png` and `Mapty-flowchart.png`.

## Credits

- Project design and course by [Jonas Schmedtmann]
- Implementation, fixes, and enhancements by [Sylvester Eziagor](https://twitter.com/YOUwooded).
