import { useEffect } from 'react'
import { Podium, PodiumDriver, PodiumItem, PodiumLink, PodiumRank, PodiumRight, PodiumTime, TeamColorIcon } from '../components/StandingStyles'
import { selectConstructorStandings } from '../redux/constructorStandings/reducer'
import { loadConstructorStandings } from '../redux/constructorStandings/utils'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RANDOM_TEAM_COLORS } from '../utils'

type ConstructorStandingsPodiumProps = {
  season: string
}

const ConstructorStandingsPodium: React.FC<ConstructorStandingsPodiumProps> = ({ season }) => {
  const dispatch = useAppDispatch()
  const { status, standings } = useAppSelector(state => selectConstructorStandings(state, season))

  useEffect(() => {
    loadConstructorStandings(season, dispatch)
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
              <strong className="text-capitalize">{standing["name"]}</strong>
            </PodiumDriver>
            <PodiumRight>
              <PodiumTime>{standing["points"]} PTS</PodiumTime>
            </PodiumRight>
          </PodiumLink>
        </PodiumItem>
      ))}
    </Podium>
  )
}

export default ConstructorStandingsPodium
