class Largometraje {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  play() {
    return `Estoy reproduciendo ${this.title} y dura ${this.duration} minutos,`;
  }
}

class Pelicula extends Largometraje {
  constructor(title, duration, genre) {
    super(title, duration);
    this.genre = genre;
  }
}

class Documental extends Largometraje {
  constructor(title, duration, genre) {
    super(title, duration);
    this.genre = genre;
  }
}

class MovieTheater {
  constructor(location) {
    this.location = location;
  }

  playFeatureFilm(featureFilm) {
    const filmMsg = featureFilm.play();
    return `${filmMsg} ubicado el cine en ${this.location}`;
  }
}

const Avengers = new Pelicula("Avengers Movie", 120, "Película");
const Joker = new Pelicula("Joker", 180, "Thriller");

const Tierra1 = new Documental("El universo", 70, "Documental");
const Tierra2 = new Documental("Universo 2000", 120, "Naturaleza");

const Cinemex = new MovieTheater("CDMX");

console.log("Función Cine::", Cinemex.playFeatureFilm(Avengers));
