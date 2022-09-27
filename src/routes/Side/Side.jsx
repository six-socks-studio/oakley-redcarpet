import React, { useMemo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import "./Side.css"

import { useSocketIo } from '../../hooks/useSocketIo'

export default (props) => {
  const { side } = useParams()
  const { socket } = useSocketIo()
  const [opacities, setOpacities] = React.useState([])

  const resolution = useMemo(() => props.downscale ? '2K' : '4K', [props.downscale])

  const images = useMemo(() => side === "left" ? [
    `/images/${resolution}/01_Oakley_test-min.jpg`,
    `/images/${resolution}/02_Oakley_test-min.jpg`,
    `/images/${resolution}/03_Oakley_test-min.jpg`,
    `/images/${resolution}/04_Oakley_test-min.jpg`,
  ] : [
    `/images/${resolution}/05_Oakley_test-min.jpg`,
    `/images/${resolution}/06_Oakley_test-min.jpg`,
    `/images/${resolution}/07_Oakley_test-min.jpg`,
    `/images/${resolution}/08_Oakley_test-min.jpg`,
  ], [side])

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: images.length,
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
    <div ref={sliderRef} className="side">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="side__slide"
          style={{ opacity: opacities[idx] }}
        >
          <img src={src} />
        </div>
      ))}
    </div>
  )
}
