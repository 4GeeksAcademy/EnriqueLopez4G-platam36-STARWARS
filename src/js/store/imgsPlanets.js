const imgsPlanets = [
  { idPlanet: 1, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg' },
  { idPlanet: 2, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830' },
  { idPlanet: 3, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/6/69/Yavin4.jpg/revision/latest?cb=20200326211857' },
  { idPlanet: 4, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 5, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 6, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537' },
  { idPlanet: 7, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307' },
  { idPlanet: 8, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 9, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 10, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210616005549' },
  { idPlanet: 11, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg' },
  { idPlanet: 12, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830' },
  { idPlanet: 13, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/6/69/Yavin4.jpg/revision/latest?cb=20200326211857' },
  { idPlanet: 14, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 15, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 16, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537' },
  { idPlanet: 17, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307' },
  { idPlanet: 18, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 19, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 20, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210616005549' },
  { idPlanet: 21, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg' },
  { idPlanet: 22, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830' },
  { idPlanet: 23, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/6/69/Yavin4.jpg/revision/latest?cb=20200326211857' },
  { idPlanet: 24, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 25, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 26, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537' },
  { idPlanet: 27, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307' },
  { idPlanet: 28, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 29, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 30, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210616005549' },
  { idPlanet: 31, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg' },
  { idPlanet: 32, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830' },
  { idPlanet: 33, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/6/69/Yavin4.jpg/revision/latest?cb=20200326211857' },
  { idPlanet: 34, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 35, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 36, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537' },
  { idPlanet: 37, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307' },
  { idPlanet: 38, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 39, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 40, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210616005549' },
  { idPlanet: 41, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg' },
  { idPlanet: 42, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830' },
  { idPlanet: 43, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/6/69/Yavin4.jpg/revision/latest?cb=20200326211857' },
  { idPlanet: 44, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 45, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 46, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537' },
  { idPlanet: 47, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307' },
  { idPlanet: 48, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 49, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 50, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210616005549' },
  { idPlanet: 51, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg' },
  { idPlanet: 52, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830' },
  { idPlanet: 53, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/6/69/Yavin4.jpg/revision/latest?cb=20200326211857' },
  { idPlanet: 54, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 55, imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg' },
  { idPlanet: 56, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537' },
  { idPlanet: 57, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307' },
  { idPlanet: 58, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 59, imgSrc: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240324185443' },
  { idPlanet: 60, imgSrc: 'https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210616005549' }
];

export default imgsPlanets;
