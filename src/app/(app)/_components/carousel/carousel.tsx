'use client'

import { Media } from '@/payload-types'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot-buttons'
import { PrevButton, NextButton, usePrevNextButtons } from './arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'

type PropType = {
  slides: Media[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                loading="lazy"
                width={915}
                src={slide.url}
                alt={slide.alt}
                className="blog-single-image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
