import { mockTracking } from "Artsy/Analytics"
import { mount } from "enzyme"
import "jest-styled-components"
import React from "react"
import { RelatedPanel } from "../../../Fixtures/Components"
import { RelatedArticlesPanelLink } from "../RelatedArticlesPanelLink"

jest.unmock("react-tracking")

describe("RelatedArticlesPanelLink", () => {
  const getWrapper = props => {
    return mount(<RelatedArticlesPanelLink {...props} />)
  }

  let props
  beforeEach(() => {
    props = {
      article: RelatedPanel[0],
    }
  })

  it("renders expected data", () => {
    const component = getWrapper(props)

    expect(component.text()).toMatch(
      "The 15 Top Art Schools in the United States"
    )
    expect(component.html()).toMatch("PoetterHall_Exterior%2Bcopy.jpg")
  })

  it("Tracks link clicks", () => {
    const { Component, dispatch } = mockTracking(RelatedArticlesPanelLink)
    const component = mount(<Component article={RelatedPanel[0]} />)
    component.simulate("click")

    expect(dispatch).toBeCalledWith({
      action_type: "Click",
      destination_path:
        "/article/artsy-editorial-15-top-art-schools-united-states",
      type: "thumbnail",
    })
  })
})
