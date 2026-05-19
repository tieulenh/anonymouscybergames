import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
    {
        url: "https://s3-api.fpt.vn/fptvn-storage/2024-12-24/1735025987_chinhdonhaypubgmobile.png"
    },
    {
        url: "https://cdn-mainsite-aka.vnggames.com/upload/naraka/source/News/2_16x9%20(1).png"
    },
    {
        url: "https://clouddosage.com/wp-content/uploads/2024/06/header-54.jpg.webp"
    }
]

const TopTrendBanner = ({...props}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const intervalRef = useRef(null)

    // NEXT
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === banners.length - 1 ? 0 : prev + 1
        )
    }

    // PREV
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
        )
    }

    // START AUTO SLIDE
    const startAutoSlide = () => {

        stopAutoSlide()

        intervalRef.current = setInterval(() => {
            nextSlide()
        }, 5000)
    }

    // STOP AUTO SLIDE
    const stopAutoSlide = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
    }

    useEffect(() => {

        startAutoSlide()

        return () => stopAutoSlide()

    }, [])

    return (
        <div
            className="position-relative overflow-hidden rounded-4 shadow"

            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}

            style={{
                position: "relative",
                width: "90%",
                aspectRatio: 16/9
            }}
        >

            {/* SLIDER */}
            <div
                className="d-flex h-100"
                style={{
                    width: `${banners.length * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / banners.length)}%)`,
                    transition: "transform 0.8s ease-in-out"
                }}
            >

                {banners.map((banner, index) => (

                    <img
                        key={index}
                        src={banner.url}
                        alt={`banner-${index}`}
                        className="w-100"
                        style={{
                            height: "100%",
                            objectFit: "cover",
                            alignSelf: "center",
                            justifySelf: "center",
                            objectFit: "cover",
                            flex: `0 0 ${100 / banners.length}%`
                        }}
                    />

                ))}

            </div>

            {/* PREV BUTTON */}
            <button
                onClick={prevSlide}
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                    width: "45px",
                    height: "45px",
                    opacity: 0.8
                }}
            >
                <ChevronLeft size={24} />
            </button>

            {/* NEXT BUTTON */}
            <button
                onClick={nextSlide}
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                    width: "45px",
                    height: "45px",
                    opacity: 0.8
                }}
            >
                <ChevronRight size={24} />
            </button>

            {/* INDICATORS */}
            <div
                className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3"
            >

                {banners.map((_, index) => (

                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: currentIndex === index ? "28px" : "12px",
                            height: "12px",
                            borderRadius: "999px",
                            backgroundColor: currentIndex === index ? "white" : "rgba(255,255,255,0.5)",
                            transition: "0.3s",
                            cursor: "pointer"
                        }}
                    />

                ))}

            </div>

        </div>
    )
}

export default TopTrendBanner