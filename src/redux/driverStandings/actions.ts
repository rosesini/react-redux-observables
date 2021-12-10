const actions = {
  fetchDriverStandings: {
    pending: 'driverStandings/fetchStandings/pending',
    fulfilled: 'driverStandings/fetchStandings/fulfilled',
    rejected: 'driverStandings/fetchStandings/rejected'
  }
}
export default actions

export type ActionType = {
  type: string,
  payload?: any,
  meta?: any,
  error?: any
}


export const fetchDriverStandings = (season: string) => {
  return {
    type: actions.fetchDriverStandings.pending,
    payload: {
      season
    }
  }
}
export const fetchDriverStandingsFulfilled = (season: string, standings: any[]) => {
  return {
    type: actions.fetchDriverStandings.fulfilled,
    payload: {
      season,
      standings
    }
  }
}
export const fetchDriverStandigsRejected = (season: string, error: any) => {
  return {
    type: actions.fetchDriverStandings.rejected,
    meta: {
      arg: {
        season
      }
    },
    error
  }
}