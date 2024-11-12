import imgsPlanets from "./imgsPlanets";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      favorites: [],
      favoritesCount: 0,
      peopleLoading: false,
      planetsLoading: false,
      error: null,
      nextPage: null,
    },

    actions: {
      loadPeople: async () => {
        const store = getStore();
        if (store.peopleLoading) return;

        setStore({ peopleLoading: true, error: null });

        try {
          const url = store.nextPage || "https://swapi.dev/api/people";
          const response = await fetch(url);
          const data = await response.json();

          const peopleWithImages = data.results.map(character => {
            const characterId = character.url.match(/\/(\d+)\/$/)[1];
            return {
              ...character,
              imgSrc: `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`,
              favorite: false,
              category: 'people',
              id: characterId
            };
          });

          setStore({
            people: [...store.people, ...peopleWithImages],
            peopleLoading: false,
            nextPage: data.next,
          });
        } catch (error) {
          setStore({ loading: false, error: "Error al cargar los personajes" });
          console.error(error);
        }
      },

      loadPlanets: async () => {
        const store = getStore();
        if (store.planetsLoading) return;

        setStore({ planetsLoading: true, error: null });

        try {
          const url = store.nextPage || "https://swapi.dev/api/planets";
          const response = await fetch(url);
          const data = await response.json();

          const planetsWithImages = data.results.map(planet => {
            const planetId = planet.url.match(/\/(\d+)\//)[1];

            return {
              ...planet,
              id: planetId,
              category: 'planets',
              imgSrc: imgsPlanets[planetId].imgSrc,
              favorite: false,
            };
          });

          setStore({
            planets: [...store.planets, ...planetsWithImages],
            planetsLoading: false,
            nextPage: data.next,
          });
        } catch (error) {
          setStore({ planetsLoading: false, error: "Error al cargar los planetas" });
          console.error(error);
        }
      },

      toggleFavorite: (id, category) => {
        const store = getStore();
        
        // Actualizar la categoría correcta
        const updatedCategory = store[category].map(item =>
          item.id === id ? { ...item, favorite: !item.favorite } : item
        );

        setStore({
          [category]: updatedCategory
        });

        // Obtener los elementos favoritos con todos sus detalles
        const updatedFavorites = [
          ...store.people.filter(person => person.favorite),
          ...store.planets.filter(planet => planet.favorite)
        ];

        // Almacenamos todo el objeto del favorito en lugar de solo el id y category
        setStore({
          favorites: updatedFavorites,
          favoritesCount: updatedFavorites.length
        });
      },

      removeFavorite: (id, category) => {
        const store = getStore();

        // Remover el elemento de la categoría específica
        const updatedCategory = store[category].map(item =>
          item.id === id ? { ...item, favorite: false } : item
        );

        setStore({
          [category]: updatedCategory
        });

        // Filtrar la lista de favoritos para eliminar el ítem correcto
        const updatedFavorites = store.favorites.filter(fav => !(fav.id === id && fav.category === category));

        setStore({
          favorites: updatedFavorites,
          favoritesCount: updatedFavorites.length
        });
      },


      clearFavorites: () => {
        const store = getStore();
        const updatedPeople = store['people'].map(item =>
          ({ ...item, favorite: false })
        );
        const updatedPlanets = store['planets'].map(item =>
          ({ ...item, favorite: false })
        );

        setStore({
          people: updatedPeople,
          planets: updatedPlanets,
          favorites: [],
          favoritesCount: 0,
        });
      },
    },
  };
};

export default getState;