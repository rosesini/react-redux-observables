import axios from '../../axios'
import store, { AppDispatch } from '../store'
import { fetchDriverStandings } from './actions'
import { selectSelf } from './reducer'

export const fetchDriverStandingsApi = (season: string): Promise<any> => {
  const requestURL = `/f1/${season}/driverStandings.json`
  return axios
    .get(requestURL)
    .then(res => res.data)
}

export const loadDriverStandings = (season: string, dispatch: AppDispatch) => {
  const driverStandings = selectSelf(store.getState())
  if (driverStandings[season]?.status !== 'fetched') {
    dispatch(fetchDriverStandings(season))
  }
}

export const driverStandingsAdapter = (res: any) => {
  const { MRData: { StandingsTable: { StandingsLists: listsData } } } = res

  return listsData[0]['DriverStandings']
    .map((driver: any) => {
      const { Driver: { driverId, familyName, givenName, nationality, url }, Constructors, ...rest } = driver
      const constructor = (Constructors && Constructors.length && Constructors[0]) || undefined

      return {
        driverId,
        familyName,
        givenName,
        nationality,
        url,
        constructor,
        ...rest
      }
    })
}
