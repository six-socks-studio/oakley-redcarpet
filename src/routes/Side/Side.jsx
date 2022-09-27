import React, { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import "./Side.css"

export default () => {
  const { side } = useParams()
  const [opacities, setOpacities] = React.useState([])

  const images = useMemo(() => side === "left" ? [
    "images/2K/01_Oakley_test_2k-min.jpg",
    "images/2K/02_Oakley_test_2k-min.jpg",
    "images/2K/03_Oakley_test_2k-min.jpg",
    "images/2K/04_Oakley_test_2k-min.jpg",
  ] : [
    "images/2K/05_Oakley_test_2k-min.jpg",
    "images/2K/06_Oakley_test_2k-min.jpg",
    "images/2K/07_Oakley_test_2k-min.jpg",
    "images/2K/08_Oakley_test_2k-min.jpg",
  ], [side])

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  return (
    <div ref={sliderRef} className="side">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="side__slide"
          style={{ opacity: opacities[idx] }}
        >
          <img loading="lazy" src={src} />
        </div>
      ))}
    </div>
  )
}
