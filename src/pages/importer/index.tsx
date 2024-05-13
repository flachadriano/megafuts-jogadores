import { ChangeEvent, useState } from "react";
import { Player } from "../../models/Player";

interface ImportType {
  setPlayers: (players: Player[]) => void
}

export function Importer({ setPlayers }: ImportType) {
  const [ data, setData ] = useState('');

  const analyze = () => {
    const playersJson: Player[] = JSON.parse(data).Dados;
    setPlayers(playersJson);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ paddingBottom: '10px' }}>
        <button onClick={analyze}>Executar importação</button>
      </div>
      <textarea rows={15} onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => setData(evt.target.value)}></textarea>
    </div>
  );
}