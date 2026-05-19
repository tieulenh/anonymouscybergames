
const Card = ({ game }) => {

    return (

        <div 
            className="card shadow-sm game-card"
            style={{
                width: "",
                aspectRatio: 3/4
            }}
        >

            {/* IMAGE */}

            <div className="game-image-container">

                <img
                    src={game.imageUrl}
                    className="game-image"
                    alt={game.name}
                    onError={(e) => {
                        e.target.src =
                            "https://via.placeholder.com/300x400?text=No+Image";
                    }}
                />

            </div>

            {/* BODY */}

            <div className="card-body d-flex flex-column">

                <h5 className="card-title">
                    {game.name}
                </h5>

                <p className="card-text text-muted mb-2">
                    {game.shortDescription}
                </p>

                <div className="mt-auto">

                    <div className="d-flex justify-content-between align-items-center">

                        <span className="badge bg-secondary">

                            {game.categories?.[0] || "Game"}

                        </span>

                        <span className="fw-bold text-success">

                            {game.price === 0
                                ? "Free"
                                : game.price.toLocaleString("vi-VN") + " đ"}

                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Card;