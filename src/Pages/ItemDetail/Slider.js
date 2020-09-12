import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SliderItem from "./SliderItem";

const TOTAL_SLIDES = 2;

function Slider({ relatedProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all .5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const nextSlide = () => {
    const isNext = currentSlide >= TOTAL_SLIDES;
    setCurrentSlide(isNext ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Container>
      <Button display={currentSlide === 0 && "none"} onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 8 14"
        >
          <path d="M6.525 13.01a.5.5 0 0 0 .707 0l.53-.53a.5.5 0 0 0 0-.707L3.079 7.088a.125.125 0 0 1 0-.176l4.685-4.685a.5.5 0 0 0 0-.707l-.53-.53a.5.5 0 0 0-.708 0L1.222 6.293a1 1 0 0 0 0 1.414l5.303 5.303z"></path>
        </svg>
      </Button>
      <ListWrapper>
        <ul ref={slideRef}>
          <SliderItem relatedProducts={relatedProducts} />
        </ul>
      </ListWrapper>
      <Button
        display={currentSlide === TOTAL_SLIDES ? "none" : "block"}
        position="right"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 8 14"
        >
          <path d="M1.475.99a.5.5 0 0 0-.707 0l-.53.53a.5.5 0 0 0 0 .707l4.684 4.685a.125.125 0 0 1 0 .176L.237 11.773a.5.5 0 0 0 0 .707l.53.53a.5.5 0 0 0 .708 0l5.303-5.303a1 1 0 0 0 0-1.414L1.475.99z"></path>
        </svg>
      </Button>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  position: relative;
  width: 100%;

  ul {
    display: flex;
  }
`;

const ListWrapper = styled.div`
  overflow: hidden;
`;

const Button = styled.button`
  display: ${(props) => props.display || "inherit"};
  position: absolute;
  ${(props) => props.position || "left"}: -50px;
  top: calc(50% - 40px);
  background-color: #fafafa;
  padding: 12.5px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.2s ease-in-out;
  }
`;
