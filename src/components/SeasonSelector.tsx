import styled from 'styled-components'

const currentYear = new Date().getFullYear()
const seasonYears = Array.from({ length: currentYear - 1950 + 1}, (v, k) => currentYear - k)

const Select = styled.select`
  -webkit-appearance: button;
  -moz-appearance: button;

  -webkit-user-select: none;
  -moz-user-select: none;

  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-end: 2px;

  background-color: #9dadcc;
  border: 1px solid #aaa;
  border-radius: 2px;
  color: #555;
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`

const Option = styled.option`
  font-size: .6em;
  font-weight: bold;
`

type SeasonSelectorProps = {
  handleChange: (value: string) => void
}

const SeasonSelector: React.FC<SeasonSelectorProps> = ({ handleChange }) => (
  <Select onChange={(event) => handleChange(event.target.value)}>
    {seasonYears.map((year) => (
      <Option key={year} value={year}>{year}</Option>
    ))}
  </Select>
)

export default SeasonSelector
