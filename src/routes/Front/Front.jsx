import React from "react"
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import "./Front.css"

export default () => {
  const [opacities, setOpacities] = React.useState([])

  const [sliderRef] = useKeenSlider({
    slides: 2,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  return (
    <div ref={sliderRef} className="front">
      {[0, 0].map((src, idx) => (
        <div
          key={idx}
          className="front__slide"
          style={{ opacity: opacities[idx] }}
        >
          <img loading="lazy" src={`images/4k/0${idx + 1}_Oakley_test_4k-bg.jpg`} />
          <video width="100%" height="100%" autoPlay loop muted playsInline webkitPlaysInline>
            <source src={'/videos/' + (idx + 1) + '.mov'} type='video/mp4; codecs="hvc1"' />
            <source src={'/videos/' + (idx + 1) + '.webm'} type="video/webm" />
          </video>
        </div>
      ))}
    </div>
  )
}
