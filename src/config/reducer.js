export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
    //REMOVE before developing!! set null
  // token: 'BQAuFp5MIbCisEFT1TZu8rnIDh77nDc4CIeSds4SWri59c8_ey60F3SDkNZSSU4rTd6L8cOl0eYieWHRQfXHr15rO71zADvac7wkV5ZhbdDDcEurDpnOqffT06ZU5k6AVSnCDFGHG4ZnqcByUTbUNsQ1ZxACEGG3XA',
};

const  reducer = (state, action) => {
  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return{
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return{
        ...state,
        playlists: action.playlists
      }
    case 'SET_DISCOVER_WEEKLY':
      return{
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state;
  }
};

export default reducer;