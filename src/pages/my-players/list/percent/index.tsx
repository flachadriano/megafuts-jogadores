import { Tooltip } from "@mui/material";
import { COLORS } from "../../../../constants/Colors";

interface PercentType {
  val1: string;
  val2: string;
}

export default function Percent({ val1, val2 }: PercentType) {
  const num1 = Number.parseInt(val1);
  const num2 = Number.parseInt(val2);
  const val = num1 / (num1 + num2);
  const percent = Math.round(val * 100);
  let color = percent > 80 ? percent > 90 ? COLORS.blue : COLORS.green : COLORS.white;
  if (percent < 60) color = COLORS.yellow

  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: color }}>
      <Tooltip title={`${val1} / ${val2}`} arrow placement="top">
        <span>{ percent }</span>
      </Tooltip>
    </div>
  )
}