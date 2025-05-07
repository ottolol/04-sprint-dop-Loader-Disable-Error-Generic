export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

// Action Type
const SET_APP_STATUS = 'app/SET_APP_STATUS' as const
const SET_APP_ERROR = 'app/SET_APP_ERROR' as const

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: SET_APP_STATUS,
    payload: { status } as const
  }
}

export const setErrorAC = (error: string | null) => ({
  type: SET_APP_ERROR,
  payload: { error },
} as const)

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case SET_APP_STATUS:
      return  {
        ...state, status: action.payload.status
      }
    case SET_APP_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setErrorAC>