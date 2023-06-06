import React from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../../components/styles.css'

const images = [
  "https://mahidol.ac.th/temp/2020/07/salaya-01.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-02.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-03.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-04.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-05.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-06.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-07.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-08.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-09.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-10.jpg",
  "https://mahidol.ac.th/temp/2020/07/salaya-11.jpg",
]

export default () => {
  const [opacities, setOpacities] = React.useState([])
  const [sliderRef] = useKeenSlider(
    {
      slides: images.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map((slide) => slide.portion)
        setOpacities(new_opacities)
      },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
      {images.map((src, idx) => (
        <div className='fader__slide' style={{height: 'auto', opacity: opacities[idx]}}//keen-slider__slide number-slide 
          key={idx}
           
        >
          <img src={src} />
        </div>
      ))}
    </div>
    </>
  )
}
