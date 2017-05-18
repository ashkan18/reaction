import * as React from "react"
import * as Relay from "react-relay"
import styled from "styled-components"
import ArtworkMetadata from "./metadata"
import SaveButton from "./save"

const Image = styled.img`
  width: 100%;
`

const ImageLink = styled.a`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Placeholder = styled.div`
  position: relative;
  width 100%;
`

interface Props extends RelayProps, React.HTMLProps<FillwidthItem> {
  targetHeight?: number,
  imageHeight?: number,
  width?: number,
  margin?: number,
}

export class FillwidthItem extends React.Component<Props, null> {
  render() {
    const { artwork, className, targetHeight, imageHeight } = this.props
    return (
      <div className={className}>
        <Placeholder style={{ height: targetHeight }}>
          <ImageLink href={artwork.href}>
            <Image
              src={artwork.image.url}
              height={imageHeight}
            />
          </ImageLink>
          <SaveButton
            artwork={artwork}
            style={{position: "absolute", right: "10px", bottom: "10px"}}
          />
        </Placeholder>
        <ArtworkMetadata artwork={artwork} />
      </div>
    )
  }
}

const StyledFillwidthItem = styled(FillwidthItem)`
  display: inline-block;
  width: ${props => props.width}px;
  vertical-align: top;
  margin-right: ${props => props.margin}px;
`

export default Relay.createContainer(StyledFillwidthItem, {
  fragments: {
    artwork: () => Relay.QL`
      fragment on Artwork {
        image {
          placeholder
          url(version: "large")
          aspect_ratio
        }
        href
        ${ArtworkMetadata.getFragment("artwork")}
        ${SaveButton.getFragment("artwork")}
      }
    `,
  },
})

interface RelayProps {
  artwork: {
    href: string | null,
    image: {
      placeholder: number | null,
      url: string | null,
      aspect_ratio: number | null,
    } | null,
  },
}
