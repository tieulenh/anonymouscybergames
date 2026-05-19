import TopTrendBanner from "../components/topTrendBanner"

const HomeView = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyItems: "center"
            }}
        >
            {/* Top */}
            <div
                id="#"
                style={{
                    width: "100%"
                }}
            >
                {/* left side */}
                <div
                    style={{
                        width: "70%",
                        maxWidth: "1000px",
                        justifyItems: "center"
                    }}
                >
                    <TopTrendBanner />
                </div>
            </div>
            
            
            
        </div>
    )
}

export default HomeView
