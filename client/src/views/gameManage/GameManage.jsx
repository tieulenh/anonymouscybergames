import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/localstorage";
import { Pencil, Trash2, EyeOff, Eye, AlignJustify } from "lucide-react";
import InteractedFieldMenu from "../../components/interactedFieldMenu";
import GameInforForm from "../../forms/gameInfor";

import Dialog from "../../components/dialog";
const clearDelDialog = {open: false, id: null}
const clearHidDialog = {open: false, id: null, status: null}

function GameManage() {
    const [games, setGames] = useState([])
    const navigate = useNavigate()
    const [delDialog, setDelDialog] = useState(clearDelDialog)
    const [hidDialog, setHidDialog] = useState(clearHidDialog)
    const [isOpenAddnewForm, setOpenAddnewForm] = useState(false)

    useEffect(() => {
        // Simulate an API call to fetch games
        const fetchGames = async () => {
            // Replace this with your actual API call
            const response = await fetch('/api/manage/games', 
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${getToken()}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            const data = await response.json();
            setGames(data);
        };

        fetchGames();
        
    }, []);

    async function handleDelete(id){
        try{
            const response = await fetch( `/api/manage/games/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${getToken()}`
                    }
                }
            );
            console.log("Deleted game:", id);
            setGames(prev =>
                prev.filter(game => game.id !== id)
            );
            setDelDialog(clearDelDialog)
        }catch(error){
            console.error(error);
        }
    }

    async function handleHide(id, status){
        try{
            const response = await fetch( `/api/manage/games/${id}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Authorization": `Bearer ${getToken()}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "status" : `${status}`,
                    })
                }
            );
            setHidDialog(clearHidDialog)
            setGames(prev => prev.map(game => game.id === id ? { ...game, status: status } : game ));
            console.log("Set status of game", id, "to", status)
        }catch(error){
            console.error(error);
        }
    }

    const handleAddNew = () => {

    }
    const handleUpdate = () => {

    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Game Management</h2>
            <button onClick={() => setOpenAddnewForm(prev => !prev)} className="btn text-white" style={{backgroundColor: "green"}}>new game</button>
            {isOpenAddnewForm && <GameInforForm handleSubmit={() => console.log('ok')} purpose="save" />}
            <div className="table-responsive">
                <table 
                    border="1" 
                    cellPadding="10" 
                    className="table table-hover table-bordered table-sm"
                    style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
                    >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Publisher</th>
                            <th>Release Date</th>
                            <th>Categories</th>
                            <th style={{maxWidth : "108px"}}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {games.map((game, idx) => (
                            <tr key={game.id}>
                                <td>{idx + 1}</td>
                                <td>{game.id}</td>
                                <td>{game.name}</td>
                                <td>{game.price}</td>
                                <td>{game.publisher}</td>
                                <td>{game.releaseDate}</td>
                                <td>
                                    {game.categories?.join(", ")}
                                </td>

                                {/* ACTIONS COLUMN */}
                                <td style={{ display: "flex", gap: "10px", height: "100%", maxWidth: "108px" }}>
                                    <InteractedFieldMenu 
                                        toUpdate={() => console.log("update")}
                                        toShow={() => setHidDialog({open: true, id: game.id, status: "DISABLE"})}
                                        toHide={() => setHidDialog({open: true, id: game.id, status: "ENABLE"})}
                                        toDel={() => { setDelDialog({open: true, id: game.id})}}
                                        obj={game}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Dialog 
                    isOpen={delDialog.open} 
                    dialogProps={{message: "Do you want to del this field!"}}
                    inConfirm={() => handleDelete(delDialog.id)}
                    inCancel={() => setDelDialog(clearDelDialog)}
                />
                <Dialog 
                    isOpen={hidDialog.open} 
                    dialogProps={{message: `Do you want to ${hidDialog.status === 'DISABLE' ? "hide" : "show"} this field!`}}
                    inConfirm={() => handleHide(hidDialog.id, hidDialog.status)}
                    inCancel={() => setHidDialog(clearHidDialog)}
                />

            </div>
        </div>
    )
}

export default GameManage