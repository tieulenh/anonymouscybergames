import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`/api/games/${id}`);
                const data = await response.json();
                setGame(data);
            } catch (error) {
                console.error("Error fetching game detail:", error);
            }
        };

        fetchGameDetails();
    }, [id]);

    if (!game) {
        return <div className="container mt-3">Loading game details...</div>;
    }

    return (
        <div className="container mt-4">

            <h1 className="mb-3">
                Game Detail #{game.id}
            </h1>

            <div className="shadow-sm p-3">

                {/* Developer + Genre */}
                <div className="mb-2">
                    <span className="badge bg-primary me-2">
                        {game.genre}
                    </span>

                    <span className="text-muted">
                        Developer: {game.developer}
                    </span>
                </div>

                {/* Description */}
                <h5>Description</h5>
                <p>{game.description}</p>

                {/* System Requirements */}
                <h5>System Requirements</h5>
                <pre className="bg-light p-2 rounded">
                    {game.systemRequirements}
                </pre>

                {/* Trailer */}
                <h5>Trailer</h5>
                <a
                    href={game.trailerUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    Watch on YouTube
                </a>

            </div>
        </div>
    );
};

export default GameDetail;