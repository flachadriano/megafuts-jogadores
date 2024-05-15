import { Container, HighPotential, Indice, LowerPotential, Maxed } from "./style";

interface SkillType {
  indice: string | undefined;
  high: string | undefined;
  low: string | undefined;
  maxed: string | undefined;
}

export function Skill({ indice, high, low, maxed }: SkillType) {
  const renderIndice = () => {
    if (maxed == 'True') {
      return <Maxed>{ indice }</Maxed>
    }
    return <Indice>{ indice }</Indice>;
  }

  const renderPotential = () => {
    if (high == 'True') {
      return <HighPotential />
    } else if (low == 'True') {
      return <LowerPotential />
    }
    return '';
  }

  return (
    <Container>
      { renderIndice() }
      { renderPotential() }
    </Container>
  )
}