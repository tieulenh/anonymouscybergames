import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Ranking = () => {

    const [games, setGames] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const fetchRanking = async () => {

            try {

                const response = await fetch("http://localhost:8080/api/games/rank")
                const data = await response.json()
                setGames(date)

            } catch (error) {

                console.error(error)
            }
        }

        fetchRanking()

    }, [])

    return (
        <div
            className="d-flex flex-column gap-3"
            style={{
                width: "320px"
            }}
        >

            {games.map((game, index) => (

                <div
                    key={game.id}

                    onClick={() => navigate(`/games/${game.id}`)}

                    className="d-flex align-items-center gap-3 p-3 rounded-4"

                    style={{
                        background:
                            index === 0
                                ? "rgba(255,255,255,0.18)"
                                : "transparent",

                        cursor: "pointer",

                        transition: "0.25s ease"
                    }}

                    onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                            "rgba(255,255,255,0.12)"
                    }}

                    onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                            index === 0
                                ? "rgba(255,255,255,0.18)"
                                : "transparent"
                    }}
                >

                    {/* IMAGE */}
                    <img
                        src={game.imageUrl}
                        alt={game.name}

                        style={{
                            width: "70px",
                            height: "95px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            flexShrink: 0
                        }}
                    />

                    {/* INFO */}
                    <div
                        className="text-white fw-semibold"
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.3"
                        }}
                    >
                        {game.name}
                    </div>

                </div>

            ))}

        </div>
    )
}

export default Ranking