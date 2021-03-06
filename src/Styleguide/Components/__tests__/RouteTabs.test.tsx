import { Boot } from "Artsy/Router"
import { StorybooksRouter } from "Artsy/Router"
import { mount } from "enzyme"
import React from "react"
import { RouteTab, RouteTabs } from "../RouteTabs"

describe("RouteTabs", () => {
  const getWrapper = () => {
    return mount(
      <Boot>
        <StorybooksRouter
          initialRoute="/cv"
          routes={[
            {
              path: "/",
              Component: () => {
                return (
                  <RouteTabs>
                    <RouteTab to="/overview">Overview</RouteTab>
                    <RouteTab to="/cv">CV</RouteTab>
                    <RouteTab to="/shows">Shows</RouteTab>
                  </RouteTabs>
                )
              },
              children: [
                {
                  path: "/overview",
                },
                {
                  path: "/cv",
                },
                {
                  path: "/shows",
                },
              ],
            },
          ]}
        />
      </Boot>
    )
  }

  it("renders nav items", async () => {
    const wrapper = getWrapper()

    await wrapper
      .find("StorybooksRouter")
      .instance()
      .componentDidMount()

    const html = wrapper.html()
    expect(html).toContain("Overview")
    expect(html).toContain("CV")
    expect(html).toContain("Shows")
  })
})
