import { Link } from "react-router-dom"

export function Menu() {
  return (
    <ul>
      <li><Link to={`/import`}>Importar dados</Link></li>
      <li><Link to={`/analize`}>Analisar jogadores</Link></li>
    </ul>
  );
}