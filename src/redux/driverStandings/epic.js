import { ofType } from 'redux-observable'
import { catchError, map, merge, of, switchMap, throwError } from 'rxjs'
import actions, { fetchDriverStandigsRejected, fetchDriverStandingsFulfilled } from './actions'
import { driverStandingsAdapter, fetchDriverStandingsApi } from './utils'

const fetchStandingsEpic = action$ => action$.pipe(
  ofType(actions.fetchDriverStandings.pending),
  map(action => action.payload.season),
  switchMap(season =>
    fetchDriverStandingsApi(season)
      .then(data => ({
        season,
        standings: driverStandingsAdapter(data)
      }))
      .catch(error => throwError(() => ({
        season,
        error
      })))
  ),
  map(({ season, standings }) => fetchDriverStandingsFulfilled(season, standings)),
  catchError(({ season, error }) => of(fetchDriverStandigsRejected(season, error)))
)

const epic = (action$, state$) => merge(
  fetchStandingsEpic(action$)
)
export default epic