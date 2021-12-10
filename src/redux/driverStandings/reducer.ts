import { RootState } from '../store'
import actions, { ActionType } from './actions'

type SelfState = {
  [season: string]: {
    standings?: any[],
    status?: 'idle' | 'loading' | 'fetched' | 'failed',
    error?: any
  }
}

export default function reducer(state: SelfState = {}, action: ActionType) {
  switch (action.type) {
    case actions.fetchDriverStandings.pending: {
      const { season } = action.payload
      return {
        ...state,
        [season]: {
          status: 'loading',
          standings: []
        }
      }
    }
    case actions.fetchDriverStandings.fulfilled: {
      const { season, standings } = action.payload
      return {
        ...state,
        [season]: {
          status: 'fetched',
          standings
        }
      }
    }
    case actions.fetchDriverStandings.rejected: {
      const { meta: { arg: { season } }, error } = action
      return {
        ...state,
        [season]: {
          status: 'failed',
          standings: [],
          error
        }
      }
    }
    default: {
      return state
    }
  }
}

export const selectSelf = (state: RootState) => state.driverStandings
export const selectDriverStandings = (state: RootState, season: string) => {
  const selfState = selectSelf(state)
  return selfState[season] || { status: 'idle', standings: [] }
}