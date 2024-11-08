const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        characters: [],
        loading: false,
        error: null,
        nextPage: null,
        favoritesCount: 0,
      },
  
      actions: {
        loadCharacters: async () => {
          const store = getStore();
          if (store.loading) return;
  
          setStore({ loading: true, error: null });
  
          try {
            const url = store.nextPage || "https://swapi.dev/api/people";
            const response = await fetch(url);
            const data = await response.json();
  
            const charactersWithImages = data.results.map(character => {
              const characterId = character.url.match(/\/(\d+)\/$/)[1];
              return {
                ...character,
                imgSrc: `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`,
                favorite: false, // Inicializamos todos los personajes sin favoritos
              };
            });
  
            setStore({
              characters: [...store.characters, ...charactersWithImages],
              loading: false,
              nextPage: data.next,
            });
          } catch (error) {
            setStore({ loading: false, error: "Error al cargar los personajes" });
            console.error(error);
          }
        },
  
        toggleFavorite: (characterId) => {
          const store = getStore();
          const updatedCharacters = store.characters.map(character => 
            character.url === characterId 
              ? { 
                  ...character, 
                  favorite: !character.favorite // Cambiar el estado de favorite
                } 
              : character
          );
  
          const favoritesCount = updatedCharacters.filter(character => character.favorite).length; // Contar los favoritos
  
          setStore({
            characters: updatedCharacters,
            favoritesCount: favoritesCount, // Actualizar el contador de favoritos
          });
        },
           // Nueva función para eliminar el personaje de los favoritos
        removeFavorite: (characterId) => {
          const store = getStore();
          console.log(characterId)
          const updatedCharacters = store.characters.map(character => 
            character.url === characterId 
              ? { 
                  ...character, 
                  favorite: false // Establecer como no favorito
                } 
              : character
          );

          const favoritesCount = updatedCharacters.filter(character => character.favorite).length;

          setStore({
            characters: updatedCharacters,
            favoritesCount: favoritesCount,
          });
        },
      },
   
    };
  };
  
  export default getState;
  