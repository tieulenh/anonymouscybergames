import { Pencil, Trash2, EyeOff, Eye } from "lucide-react";

const InteractedFieldMenu = (
        {
            obj = {status: "ENABLE"}, 
            toUpdate,
            toHide, 
            toShow,
            toDel, 
            className = "itr-menu",
        }

    ) => {

    return (
        <div
            className={className}
            style={
                {
                    display: "flex", 
                    justifyItem: "center",
                    with: "100%"
                }
            }
        >
            <Pencil onClick={toUpdate} color="green" style={{margin: "0 6px"}}/>

            {obj.status === 'ENABLE' 
                ? <Eye onClick={toShow} style={{margin: "0 6px"}} /> 
                : <EyeOff onClick={toHide} style={{margin: "0 6px"}}/>
            }

            <Trash2 onClick={toDel} color="red" style={{margin: "0 6px"}}/>
        </div>
    )
}

export default InteractedFieldMenu