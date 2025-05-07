export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

// Action Type
const SET_APP_STATUS = 'app/SET_APP_STATUS' as const

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: SET_APP_STATUS,
    payload: { status } as const
  }
}

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case SET_APP_STATUS:
      return  {
        ...state, status: action.payload.status
      }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAppStatusAC>