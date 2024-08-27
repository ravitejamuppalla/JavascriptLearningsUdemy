'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class workouts {
  date = new Date();
  id = new Date().getTime();

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.decription = `${this.type[0].toUpperCase()}${this.type.slice(1)} ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends workouts {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.pace();
    this._setDescription();
  }
  pace() {
    this.pace = this.duration / this.distance;
  }
}

class Cycling extends workouts {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.speed();
    this._setDescription();
  }
  speed() {
    this.speed = this.distance / (this.duration / 60);
  }
}

// let run1 = new Running([30, 10], 5.2, 24, 178);
// let cylci1 = new Running([30, 10], 9.0, 30, 100);
// console.log(run1);
// console.log(cylci1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapvalues;
  #mapZoomLevel = 13;
  #worksouts = [];
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newworkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationFeild);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Couldn't find the you current location");
        }
      );
  }
  _loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    //   console.log(position);
    const currentcooridates = [latitude, longitude];
    this.#map = L.map('map').setView(currentcooridates, this.#mapZoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapposition) {
    this.#mapvalues = mapposition;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationFeild() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideform() {
    // prettier-ignore
    inputDistance.value = inputDuration.value =inputCadence.value =inputElevation.value ='';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newworkout(e) {
    let validInputs = function (...inputs) {
      return inputs.every(function (input) {
        return Number.isFinite(input);
      });
    };

    let allPostives = function (...inputs) {
      return inputs.every(function (evr) {
        return evr > 0;
      });
    };

    e.preventDefault();
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapvalues.latlng;
    let workout;

    if (type == 'running') {
      const cascade = +inputCadence.value;
      if (
        !validInputs(distance, duration, cascade) ||
        !allPostives(distance, duration, cascade)
      )
        alert('Please Enter Valid Postive Number');
      workout = new Running({ lat, lng }, distance, duration, cascade);
    }
    if (type == 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPostives(distance, duration)
      )
        alert('Please Enter Valid Postive Number');
      workout = new Cycling({ lat, lng }, distance, duration, elevation);
    }

    this.#worksouts.push(workout);
    console.log(this.#worksouts);

    this._renderWorkoutMarker(workout);

    this._renderworksList(workout);
    this._hideform();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : ' 🚴‍♀️'}` +
          '  ' +
          workout.decription
      )
      .openPopup();
  }

  _renderworksList(workout) {
    let html = ` <li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
          <h2 class="workout__title">${workout.decription}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : ' 🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

    if (workout.type == 'running') {
      html += ` <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cascade}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    }

    if (workout.type == 'cycling') {
      html += ` <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">m</span>
          </div>
          </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    let workoutsEl = e.target.closest('.workout');
    console.log(workoutsEl);
    if (!workoutsEl) return;
    let workoutsdata = this.#worksouts.find(function (work) {
      work.id == workoutsEl.dataset.id;
    });
    if (!workoutsdata) {
      console.log('');
      return;
    }
    console.log();
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
}

const app = new App();
