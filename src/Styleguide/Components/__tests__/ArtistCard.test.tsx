import { Boot } from "Artsy/Router"
import { MatchingMediaQueries } from "Artsy/Router/types"
import { mount } from "enzyme"
import { set } from "lodash/fp"
import React from "react"
import { ArtistCard, LargeArtistCard, SmallArtistCard } from "../ArtistCard"

describe("ArtistCard", () => {
  const props = {
    user: null,
    artist: {
      image: {
        cropped: {
          url: "https://picsum.photos/110/110/?random",
        },
      },
      href: "/artist/francesca-dimattio",
      name: "Francesca DiMattio",
      formatted_nationality_and_birthday: "American, b. 1979",
      id: "percy",
    },
  }

  beforeAll(() => {
    window.matchMedia = undefined // Immediately set matching media query in Boot
  })

  it("is responsive", () => {
    const small = mount(
      <Boot initialMatchingMediaQueries={["xs"]}>
        <ArtistCard {...props} />
      </Boot>
    )
    expect(small.find(SmallArtistCard).length).toEqual(1)

    const large = mount(
      <Boot initialMatchingMediaQueries={["lg"]}>
        <ArtistCard {...props} />
      </Boot>
    )
    expect(large.find(LargeArtistCard).length).toEqual(1)
  })

  it("hides avatar if no image is provided", () => {
    ;["xs", "lg"].forEach(breakpoint => {
      const updatedProps: any = set("artist.image", undefined, props)

      const wrapper = mount(
        <Boot
          initialMatchingMediaQueries={[breakpoint] as MatchingMediaQueries}
        >
          <ArtistCard {...updatedProps} />
        </Boot>
      )

      expect(wrapper.find("Avatar").length).toEqual(0)
    })
  })
})
