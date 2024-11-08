const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],  // Personajes
      vehicles: [],  // Vehículos
      planets: [],  // Planetas
      favorites: [],  // Lista global de favoritos
      favoritesCount: 0,
      loading: false,
      error: null,
      nextPage: null,
    },

    actions: {
      loadPeople: async () => {
        const store = getStore();
        if (store.loading) return;

        setStore({ loading: true, error: null });

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
            };
          });

          setStore({
            people: [...store.people, ...peopleWithImages],
            loading: false,
            nextPage: data.next,
          });
        } catch (error) {
          setStore({ loading: false, error: "Error al cargar los personajes" });
          console.error(error);
        }
      },

      toggleFavorite: (id, category) => {
        const store = getStore();
        console.log("TOGGLE...",category)
        const updatedCategory = store[category].map(item =>
          item.url === id
            ? { ...item, favorite: !item.favorite }
            : item
        );

        const updatedFavorites = updatedCategory.filter(item => item.favorite);
        setStore({
          [category]: updatedCategory,
          favorites: updatedFavorites,
          favoritesCount: updatedFavorites.length,
        });
        console.log(store.favorites);
      },

      removeFavorite: (id, category) => {
        const store = getStore();
        console.log("CATEGORY: ",category)
        const updatedCategory = store[category].map(item =>
            item.url === id ? { ...item, favorite: false } : item
        );
    
        const updatedFavorites = store.favorites.filter(item => item.url !== id);
    
        setStore({
            [category]: updatedCategory,  // Actualizar la categoría
            favorites: updatedFavorites,  // Actualizar la lista global de favoritos
            favoritesCount: updatedFavorites.length,  // Actualizar el contador de favoritos
        });
    },
    

      clearFavorites: () => {
        const store = getStore();
        setStore({
          favorites: [],
          favoritesCount: 0,
        });
      },
    },
  };
};

export default getState;
