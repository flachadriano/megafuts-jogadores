import styled from 'styled-components'
import { COLORS } from '../../constants/Colors'

export const Container = styled.div`
  width: 25px;
  display: flex;
`

export const BaseLabel = styled.span`
  display: flex;
  flex: 1;
  justify-content: center;
  border-radius: 5px;
`

export const Indice = styled(BaseLabel)``

export const Maxed = styled(BaseLabel)`
  background-color: ${COLORS.red};
`

export const HighPotential = styled(BaseLabel)`
  background-color: ${COLORS.blue};
`

export const LowerPotential = styled(BaseLabel)`
  background-color: ${COLORS.yellow};
`
