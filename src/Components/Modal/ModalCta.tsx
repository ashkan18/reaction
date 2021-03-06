import { color, space } from "@artsy/palette"
import InvertedButton from "Components/Buttons/Inverted"
import React, { SFC } from "react"
import styled from "styled-components"
import { media } from "../Helpers"

export interface CtaProps {
  isFixed: boolean
  text: string
  onClick: () => void
}

export const ModalCta: SFC<{
  cta?: CtaProps
  hasImage?: boolean
  onClose: () => void
}> = props => {
  const {
    cta: { isFixed, onClick, text },
    hasImage,
    onClose,
  } = props

  return (
    <Cta isFixed={isFixed} hasImage={hasImage}>
      <InvertedButton onClick={onClick || onClose}>{text}</InvertedButton>
    </Cta>
  )
}

const Cta = styled.div.attrs<{ isFixed?: boolean; hasImage?: boolean }>({})`
  padding: ${space(2)}px 0 ${space(3)}px 0;
  button {
    margin: 0;
    width: 100%;
  }
  ${props =>
    props.isFixed &&
    `
    position: absolute;
    bottom: 0;
    right: ${space(4)}px;
    left: ${props.hasImage ? "calc(50% + 40px)" : space(4) + "px"};
    background: white;
    border-top: 1px solid ${color("black10")};
  `};

  ${media.sm`
    padding-bottom: ${space(2)}px;
    ${props =>
      props.isFixed &&
      `
      right: ${space(2)}px;
      left: ${space(2)}px
    `}
  `};
`
