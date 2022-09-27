import React, { useEffect, useMemo, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { gsap } from 'gsap'
import {  SplitText } from 'gsap/SplitText'

import "keen-slider/keen-slider.min.css"
import "./Front.css"

import { useSocketIo } from '../../hooks/useSocketIo'

export default (props) => {
  const titleRef = useRef()
  const [opacities, setOpacities] = useState([])

  const { socket } = useSocketIo()
  const resolution = useMemo(() => props.downscale ? '2K' : '4K', [props.downscale])

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

  useEffect(() => {
    gsap.registerPlugin(SplitText)
    const mySplitText = new SplitText(titleRef.current, { type: "words,chars" })

    const tl = gsap.timeline()

    tl.fromTo(mySplitText.words, {
      autoAlpha: 0,
      yPercent: 10,
    }, {
      autoAlpha: 1,
      yPercent: 0,
      stagger: 0.06,
      ease: 'power4.out',
      duration: 1,
      delay: 1,
    })

    tl.to(titleRef.current, {
      autoAlpha: 0,
      y: -10,
      ease: 'power4.out',
      duration: 1,
    }, '+=2')
  }, [titleRef])

  return (
    <div ref={sliderRef} className="front">
      <h1 className="front__title"> <div ref={titleRef}>This is <br /> Six Socks Studio</div> </h1>
      {[0, 0].map((src, idx) => (
        <div
          key={idx}
          className="front__slide"
          style={{ opacity: opacities[idx] }}
        >
          { !props.hideBg && <img src={`/images/${resolution}/0${idx + 1}_Oakley_test-bg.jpg`} /> }
          <video width="100%" height="100%" autoPlay loop muted playsInline webkitplaysinline="true">
            <source src={'/videos/' + resolution + '/' + (idx + 1) + '.mov'} type='video/mp4; codecs="hvc1"' />
            <source src={'/videos/' + resolution + '/' + (idx + 1) + '.webm'} type="video/webm" />
          </video>
        </div>
      ))}
    </div>
  )
}
