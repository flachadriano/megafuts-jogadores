import { GridRowModel } from "@mui/x-data-grid";
import { Player } from "../../../../models/Player";

interface PositionType {
    attribute: string;
    row: GridRowModel<Player>;
    onClickPosition: (position: string, row: GridRowModel<Player>) => void;
}

export default function Position({ attribute, row, onClickPosition }: PositionType) {
    return (
        <div style={{ display: 'flex', height: '100%' }} onClick={() => onClickPosition(attribute, row)}>
            { eval("row[attribute]") == 'True' && <span>X</span> }
        </div>
    )
}