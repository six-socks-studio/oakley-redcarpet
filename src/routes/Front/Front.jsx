import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import "./Front.css"

import { useSocketIo } from '../../hooks/useSocketIo'

export default () => {
  const { socket } = useSocketIo()
  const [opacities, setOpacities] = React.useState([])

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: 2,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  useEffect(() => {
    socket.on("command", (command) => {
      switch(command) {
        case 'next':
          instanceRef.current.next()
          break
        case 'prev':
          instanceRef.current.prev()
          break
      }
    });
  }, [instanceRef, socket])

  return (
    <div ref={sliderRef} className="front">
      {[0, 0].map((src, idx) => (
        <div
          key={idx}
          className="front__slide"
          style={{ opacity: opacities[idx] }}
        >
          <img src={`/images/4k/0${idx + 1}_Oakley_test_4k-bg.jpg`} />
          <video width="100%" height="100%" autoPlay loop muted playsInline webkitplaysinline="true">
            <source src={'/videos/' + (idx + 1) + '.mov'} type='video/mp4; codecs="hvc1"' />
            <source src={'/videos/' + (idx + 1) + '.webm'} type="video/webm" />
          </video>
        </div>
      ))}
    </div>
  )
}
