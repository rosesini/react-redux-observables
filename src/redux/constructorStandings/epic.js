import { ofType } from 'redux-observable'
import { catchError, map, merge, of, switchMap, throwError } from 'rxjs'
import actions, { fetchConstructorStandingsFulfilled, fetchConstructorStandingsRejected } from './actions'
import { constructorStadingsAdapter, fetchConstructorStandingsApi } from './utils'

const fetchStandingsEpic = action$ => action$.pipe(
  ofType(actions.fetchConstructorStandings.pending),
  map(action => action.payload.season),
  switchMap(season =>
    fetchConstructorStandingsApi(season)
      .then(data => ({
        season,
        standings: constructorStadingsAdapter(data)
      }))
      .catch(error => throwError(() => ({
        season,
        error
      })))
  ),
  map(({ season, standings }) => fetchConstructorStandingsFulfilled(season, standings)),
  catchError(({season, error}) => of(fetchConstructorStandingsRejected(season, error)))
)

const epic = (action$, state$) => merge(
  fetchStandingsEpic(action$)
)
export default epic