import { useState, useEffect } from "react";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";

const GameList = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate an API call to fetch games
        const fetchGames = async () => {
            // Replace this with your actual API call
            const response = await fetch('/api/games');
            const data = await response.json();
            setGames(data);
        };

        fetchGames();
    }, []);

    if (games.length === 0) {
        return <div>Loading games...</div>;
    }

    return (
        <>
            <div className="container">
                <h1 className="mb-3">Game List</h1>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                    {games.map(game => (
                        <div
                            key={game.id}
                            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                            onClick={() => navigate(`/games/${game.id}`)}
                        >
                            <Card game={game} />
                        </div>
                    ))}
                </div>
            </div> 
        </>
        
    );
}

export default GameList;