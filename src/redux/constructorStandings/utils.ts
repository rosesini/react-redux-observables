import axios from '../../axios'
import store, { AppDispatch } from '../store'
import { fetchConstructorStandings } from './actions'
import { selectSelf } from './reducer'

export const fetchConstructorStandingsApi = (season: string): Promise<any> => {
  const requestURL = `/f1/${season}/constructorStandings.json`
  return axios
    .get(requestURL)
    .then(res => res.data)
}

export const loadConstructorStandings = (season: string, dispatch: AppDispatch) => {
  const constructorStandings = selectSelf(store.getState())
  if (constructorStandings[season]?.status !== 'fetched') {
    dispatch(fetchConstructorStandings(season))
  }
}

export const constructorStadingsAdapter = (res: any) => {
  const { MRData: { StandingsTable: { StandingsLists: listsData } } } = res

  return listsData[0]['ConstructorStandings']
    .map((constructor: any) => {
      const { Constructor, ...rest } = constructor
      
      return {
        ...Constructor,
        ...rest
      }
    })
}
