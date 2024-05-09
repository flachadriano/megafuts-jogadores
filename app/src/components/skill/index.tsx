import { Container, HighPotential, Indice, LowerPotential, Maxed } from "./style";

interface SkillType {
  indice: string | undefined;
  potential: string | undefined;
  maxed: string | undefined;
}

export function Skill({ indice, potential, maxed }: SkillType) {
  const renderIndice = () => {
    if (maxed == 'True') {
      return <Maxed>{ indice }</Maxed>
    }
    return <Indice>{ indice }</Indice>;
  }

  const renderPotential = () => {
    if (potential?.startsWith('H')) {
      return <HighPotential><span>{ potential[1] }</span></HighPotential>
    } else if (potential?.startsWith('L')) {
      return <LowerPotential>{ potential[1] }</LowerPotential>
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