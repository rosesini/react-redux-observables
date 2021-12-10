import { useEffect } from 'react'
import { Podium, PodiumDriver, PodiumItem, PodiumLink, PodiumRank, PodiumRight, PodiumSubdetail, PodiumTime, TeamColorIcon } from '../components/StandingStyles'
import { selectDriverStandings } from '../redux/driverStandings/reducer'
import { loadDriverStandings } from '../redux/driverStandings/utils'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RANDOM_TEAM_COLORS } from '../utils'

type DriverStandingsPodiumProps = {
  season: string
}

const DriverStandingsPodium: React.FC<DriverStandingsPodiumProps> = ({ season }) => {
  const dispatch = useAppDispatch()
  const { status, standings } = useAppSelector(state => selectDriverStandings(state, season))

  useEffect(() => {
    loadDriverStandings(season, dispatch)
  }, [season, dispatch])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <Podium>
      {standings?.slice(0, 10).map((standing: any, id: number) => (
        <PodiumItem key={id}>
          <PodiumLink href={standing["url"]} target="_blank">
            <PodiumRank>{standing["position"]}</PodiumRank>
            <TeamColorIcon style={{ background: RANDOM_TEAM_COLORS[id] }} />
            <PodiumDriver>
              <span className="text-capitalize">{standing["givenName"]}</span>
              {' '}
              <strong className="text-uppercase">{standing["familyName"]}</strong>
            </PodiumDriver>
            <PodiumSubdetail>{standing["constructor"] && standing["constructor"]["name"]}</PodiumSubdetail>
            <PodiumRight>
              <PodiumTime>{standing["points"]} PTS</PodiumTime>
            </PodiumRight>
          </PodiumLink>
        </PodiumItem>
      ))}
    </Podium>
  )
}

export default DriverStandingsPodium
