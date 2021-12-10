import styled from 'styled-components'

export const Podium = styled.ul`
  padding: 4px;
  border-radius: 4px;
  background-color: #f3f3f3;
  counter-reset: podium;
  list-style-type: none;
`

export const PodiumItem = styled.li`
  align-items: center;
  backface-visibility: hidden;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 2px;
  overflow: hidden;
  padding: 0;
`

export const PodiumLink = styled.a`
  padding: 15px 10px 15px 20px;
  transition: .4s cubic-bezier(.35, .15, .6, 1);
  width: 100%;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  background-color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #38383f;
  }
`

export const PodiumSubdetail = styled.span`
  margin-left: 10px;
  text-transform: capitalize;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: .5px;
  font-weight: 400;

  ${PodiumLink}:hover & {
    color: #949498;
  }
`

export const PodiumRight = styled.span`
  margin-left: auto;
`

export const PodiumRank = styled.span`
  position: relative;
  top: 1px;
  text-align: right;
  width: 20px;
  font-family: "Formula1 Display-Bold";

  ${PodiumLink}:hover & {
    color: white;
  }
`

export const PodiumTime = styled.span`
  margin-left: 10px;
  padding: 2px 10px;
  display: inline;
  text-align: center;
  background-color: #ededed;
  border-radius: 15px;
  line-height: 1;
  font-size: 13px;
  letter-spacing: .5px;
  font-weight: 400;
`

export const PodiumDriver = styled.span`
  font-family: "Formula1 Display-Regular";

  ${PodiumLink}:hover & {
    color: white;
  }
`

export const TeamColorIcon = styled.span`
  width: 4px;
  height: 14px;
  margin: 0 10px;
`