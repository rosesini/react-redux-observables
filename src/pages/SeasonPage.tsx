import { useState } from 'react'
import styled from 'styled-components'
import SeasonSelector from '../components/SeasonSelector'
import ConstructorStandingsPodium from '../containers/ConstructorStandingsPodium'
import DriverStandingsPodium from '../containers/DriverStandingsPodium'

const Container = styled.div`
  max-width: 1320px;
  margin: 20px auto;
  padding: 0 10px;
`

const Standings = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 -10px;
`

const StandingsContainer = styled.div`
  flex: 100% 1;
  margin: 0 10px;
  background-color: #f3f3f3;
  min-height: 400px;
`

const currentYear = new Date().getFullYear().toString()

export default function SeasonPage() {
  const [season, setSeason] = useState(currentYear)

  const handleSeasonChange = (value: string) => {
    setSeason(value)
  }

  return (
    <Container>
      <h1>Standings for <SeasonSelector handleChange={handleSeasonChange} /></h1>

      <Standings>
        <StandingsContainer>
          <DriverStandingsPodium season={season} />
        </StandingsContainer>
        <StandingsContainer>
          <ConstructorStandingsPodium season={season} />
        </StandingsContainer>
      </Standings>
    </Container>
  )
}