import { Sans } from "@artsy/palette"
import React from "react"
import styled from "styled-components"
import SlideTransition from "./Animation/SlideTransition"
import Icon from "./Icon"

export interface MinimalCtaBannerProps extends React.Props<HTMLDivElement> {
  backgroundColor?: string
  copy?: string
  height?: string
  href?: string
  position: "top" | "bottom"
  textColor?: string
  show?: boolean
}

export interface State {
  dismissed: boolean
}

export class MinimalCtaBanner extends React.Component<
  MinimalCtaBannerProps,
  State
> {
  state = {
    dismissed: false,
  }

  dismissCta = () => {
    this.setState({ dismissed: true })
  }

  render() {
    const ctaBanner = (
      <SlideTransition
        in={this.props.show}
        timeout={{ enter: 10, exit: 250 }}
        height={this.props.height}
      >
        <BannerContainer
          position={this.props.position}
          backgroundColor={this.props.backgroundColor}
        >
          <Banner textColor={this.props.textColor}>
            <a href={this.props.href}>
              <Sans size="3" weight="medium" my={0.5}>
                <p>{this.props.copy}</p>
              </Sans>
            </a>
            <IconContainer onClick={this.dismissCta as any}>
              <Icon name="close" color={this.props.textColor} fontSize="16px" />
            </IconContainer>
          </Banner>
        </BannerContainer>
      </SlideTransition>
    )

    return !this.state.dismissed ? ctaBanner : <div />
  }
}

const BannerContainer = styled.div.attrs<MinimalCtaBannerProps>({})`
  width: 100%;
  height: inherit;
  background-color: ${props => props.backgroundColor || "white"};
  display: flex;
  position: fixed;
  z-index: 99;
  ${props => {
    if (props.position === "bottom") return "bottom: 0px;"
    if (props.position === "top") return "top: 0px;"
  }};
`

const Banner = styled.div.attrs<{ textColor: string }>({})`
  display: inline-flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px 10px;
  a {
    color: ${props => props.textColor || "black"};
    text-decoration: none;
    margin: auto auto auto 0;
  }
`

const IconContainer = styled.div`
  margin-left: auto;
`
