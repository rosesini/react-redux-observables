import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import constructorStandingsEpic from './constructorStandings/epic'
import constructorStandingsReducer from './constructorStandings/reducer'
import driverStandingsEpic from './driverStandings/epic'
import driverStandingsReducer from './driverStandings/reducer'

const reducer = combineReducers({
  constructorStandings: constructorStandingsReducer,
  driverStandings: driverStandingsReducer
})
const epic = combineEpics<any, any, any>(
  constructorStandingsEpic,
  driverStandingsEpic
)
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
)
epicMiddleware.run(epic)

export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
