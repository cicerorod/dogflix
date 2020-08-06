import styled from "styled-components";
import { KeyboardArrowLeft } from "@styled-icons/material-twotone/KeyboardArrowLeft";
import { KeyboardArrowRight } from "@styled-icons/material-twotone/KeyboardArrowRight";

export const Container = styled.div`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 10;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;

    &:before {
      font-size: 30px;
    }
  }
  .slick-prev {
    left: 0;
    height: 165px;
    transition: background linear 200ms;

    &:hover {
      background: rgba(0, 0, 0, 0.5);

      @media (max-width: 600px) {
        background-color: transparent;
      }
    }
  }

  .slick-next {
    right: 0;
    height: 165px;
    transition: background linear 200ms;

    &:hover {
      background: rgba(0, 0, 0, 0.5);

      @media (max-width: 600px) {
        background-color: transparent;
      }
    }
  }
`;

export const SliderItem = styled.div`
  margin-right: 16px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
  color: var(--white);

  &:hover {
    color: var(--white);
  }
`;

export const ArrowRight = styled(KeyboardArrowRight)`
  color: var(--white);

  &:hover {
    color: var(--white);
  }
`;
