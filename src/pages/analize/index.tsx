import { Skill } from "../../components/skill";
import { Player } from "../../models/Player";

interface AnalizeType {
  players: Player[]
}

export function Analize({ players }: AnalizeType) {
  // PLE = 11 - PL

  const renderHeader = () => {
    return (
      <thead>
        <th>#</th>
        <th>Nome</th>
        <th>Idade</th>
        <th>VEL</th>
        <th>RES</th>
        <th>INT</th>
        <th>PSC</th>
        <th>PSL</th>
        <th>CTB</th>
        <th>AGR</th>
        <th>DES</th>
        <th>CHU</th>
        <th>DFG</th>
        <th>FRM</th>
        <th>EXP</th>
        <th>OVR TD</th>
        <th>OVR CHT</th>
        <th>OVR DFG</th>
        <th>OVR RCP</th>
        <th>OVR DES</th>
        <th>OVR PC</th>
        <th>OVR PC%</th>
        <th>OVR PL</th>
        <th>OVR PL%</th>
        <th>OVR PCE</th>
        <th>OVR PLE</th>
      </thead>
    );
  }

  const renderPlayer = (player: Player, index: number) => {
    const odd = index % 2;
    const calcPercent = (val1: string | undefined, val2: string | undefined) => {
      const parsedVal1 = parseInt(val1 || '0');
      const parsedVal2 = parseInt(val2 || '0');
      return Math.round((parsedVal1 / (parsedVal1 + parsedVal2)) * 100);
    }

    return (
      <tr style={{ backgroundColor: odd ? '#333' : '#444' }}>
        <td>{ player.Camisa }</td>
        <td>{ player.NomeAbreviado }</td>
        <td>{ player.Idade }</td>
        <td><Skill indice={player.IndiceVelocidade} potential={player.PotencialVelocidadeCalculado} maxed={player.MaximizadoVelocidade} /></td>
        <td><Skill indice={ player.IndiceResistencia } potential={player.PotencialResistenciaCalculado} maxed={player.MaximizadoResistencia} /></td>
        <td><Skill indice={ player.IndiceInteligencia } potential={player.PotencialInteligenciaCalculado} maxed={player.MaximizadoInteligencia} /></td>
        <td><Skill indice={ player.IndicePasse } potential={player.PotencialPasseCalculado} maxed={player.MaximizadoPasse} /></td>
        <td><Skill indice={ player.IndicePasseLongo } potential={player.PotencialPasseLongoCalculado} maxed={player.MaximizadoPasseLongo} /></td>
        <td><Skill indice={ player.IndiceControleBola } potential={player.PotencialControleBolaCalculado} maxed={player.MaximizadoControleBola} /></td>
        <td><Skill indice={ player.IndiceAgressividade } potential={player.PotencialAgressividadeCalculado} maxed={player.MaximizadoAgressividade} /></td>
        <td><Skill indice={ player.IndiceDesarme } potential={player.PotencialDesarmeCalculado} maxed={player.MaximizadoDesarme} /></td>
        <td><Skill indice={ player.IndiceChute } potential={player.PotencialChuteCalculado} maxed={player.MaximizadoChute} /></td>
        <td><Skill indice={ player.IndiceDefesaGol } potential={player.PotencialDefesaGolCalculado} maxed={player.MaximizadoDefesaGol} /></td>
        <td>{ player.IndiceForma }</td>
        <td>{ player.IndiceExperiencia }</td>
        <td>{ calcPercent(player.OverallTomadaDecisaoCerta, player.OverallTomadaDecisaoErrada) }%</td>
        <td>{ player.OverallChute }</td>
        <td>{ player.OverallDefesa }</td>
        <td>{ player.OverallRecepcao }</td>
        <td>{ player.OverallDesarme }</td>
        <td>{ player.OverallPasseCurtoCerto } / { player.OverallPasseCurtoErrado }</td>
        <td>{ calcPercent(player.OverallPasseCurtoCerto, player.OverallPasseCurtoErrado) }%</td>
        <td>{ player.OverallPasseLongoCerto } / { player.OverallPasseLongoErrado }</td>
        <td>{ calcPercent(player.OverallPasseLongoCerto, player.OverallPasseLongoErrado) }%</td>
        <td>{ 11 - parseInt(player.IndicePasse || '0') }</td>
        <td>{ 11 - parseInt(player.IndicePasseLongo || '0') }</td>
      </tr>
    )
  }

  const renderTable = () => {
    return (
      <table>
        {renderHeader()}
        <tbody>
          {players.map((p, i) => renderPlayer(p, i))}
        </tbody>
      </table>
    )
  }

  return renderTable();
}