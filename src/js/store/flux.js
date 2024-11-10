import imgsPlanets from "./imgsPlanets";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],  // Personajes
      planets: [],  // Planetas
      favorites: [],  // Lista global de favoritos
      favoritesCount: 0,
      peopleLoading: false, // Indicador específico para people
      planetsLoading: false, // Indicador específico para planets
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
              category:'people',
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
        if (store.planetsLoading) return;  // Evitar cargar si ya está en proceso
      
        setStore({ planetsLoading: true, error: null });  // Marcar como cargando
      
        try {
          const url = store.nextPage || "https://swapi.dev/api/planets";  // Usar la URL de la siguiente página si existe
          const response = await fetch(url);  // Hacer la solicitud fetch
          const data = await response.json();  // Parsear la respuesta JSON
      
          // Usar la URL del planeta para construir la imagen
          const planetsWithImages = data.results.map(planet => {
            // Extraemos el ID del planeta de la URL
            const planetId = planet.url.match(/\/(\d+)\//)[1];  // Extraer el número del ID de la URL del planeta
      
            // Construir la URL de la imagen utilizando el ID extraído
            return {
              ...planet,
              id: planetId,
              category: 'planets',
              imgSrc: imgsPlanets[planetId].imgSrc,  // La URL de la imagen para el planeta
              favorite: false,  // Propiedad para marcar como favorito
            };
          });
      
          // Agregar los planetas nuevos a la lista existente
          setStore({
            planets: [...store.planets, ...planetsWithImages],  // Concatenar los planetas
            planetsLoading: false,
            nextPage: data.next,  // Actualizar la URL de la siguiente página
          });
          console.log(store.planets)
        } catch (error) {
          setStore({ planetsLoading: false, error: "Error al cargar los planetas" });  
          console.error(error);  
        }
      },
      
      
      toggleFavorite: (id, category) => {
        const store = getStore();
        
        // Actualizar la categoría específica con el favorito alternado
        const updatedCategory = store[category].map(item =>
          item.id === id ? { ...item, favorite: !item.favorite } : item
        );
      
        // Actualizar el store con la categoría modificada
        setStore({
          [category]: updatedCategory
        });
      
        // Filtrar los favoritos de todas las categorías (people y planets) después de la actualización
        const updatedFavorites = [
          ...store.people.filter(person => person.favorite),
          ...store.planets.filter(planet => planet.favorite)
        ];
      
        // Actualizar la lista global de favoritos y el contador
        setStore({
          favorites: updatedFavorites,
          favoritesCount: updatedFavorites.length
        });
      },
      
      removeFavorite: (id, category) => {
        
        const store = getStore();
        console.log("ID:",id, " CATEGORY: ",category)
        console.log(store[category]);
        const updatedCategory = store[category].map(item =>
            item.id === id ? { ...item, favorite: false } : item
        );
    
        const updatedFavorites = store.favorites.filter(item => item.id !== id);
    
        setStore({
            [category]: updatedCategory,  // Actualizar la categoría
            favorites: updatedFavorites,  // Actualizar la lista global de favoritos
            favoritesCount: updatedFavorites.length,  // Actualizar el contador de favoritos
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
          people:updatedPeople,
          planets:updatedPlanets,
          favorites: [],
          favoritesCount: 0,

        });
    
      },
    },
  };
};

export default getState;
