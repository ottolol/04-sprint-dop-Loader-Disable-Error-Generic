import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC } from '../../app/app-reducer.ts'

// export const fetchDecksTC = () => (dispatch: Dispatch) => {
//   decksAPI.fetchDecks().then((res) => {
//     dispatch(setAppStatusAC( 'loading' ))
//     dispatch(setDecksAC(res.data.items))
//   })
// }
export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatusAC('loading'));
    const res = await decksAPI.fetchDecks();
    dispatch(setDecksAC(res.data.items));
    dispatch(setAppStatusAC('succeeded'));
  } catch (error) {
    // обработка ошибок, например:
    console.error('Ошибка при загрузке колод:', error);
    
    // можно вызвать setErrorAC или другие экшены для отображения ошибки
    // dispatch(setErrorAC(error.message));
    
    // также можно установить статус 'failed'
    // dispatch(setAppStatusAC('failed'));
  }
}

// export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
//   return decksAPI.addDeck(name).then((res) => {
//     dispatch(addDeckAC(res.data))
//   })
// }
export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatusAC('loading'))
    const res = await decksAPI.addDeck(name)
    dispatch(addDeckAC(res.data))
    dispatch(setAppStatusAC('succeeded'))
  } catch (error) {
    console.error('Ошибка при добавлении колод:', error);
  }
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  return decksAPI.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
