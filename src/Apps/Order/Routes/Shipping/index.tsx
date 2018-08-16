import { Sans, Serif } from "@artsy/palette"
import { Shipping_order } from "__generated__/Shipping_order.graphql"
import React, { Component } from "react"
import { createFragmentContainer, graphql } from "react-relay"

import Input from "Components/Input"
import { Link } from "Router"
import { Collapse } from "Styleguide/Components/Collapse"
import { CountrySelect } from "Styleguide/Components/CountrySelect"
import { Button } from "Styleguide/Elements/Button"
import { Flex } from "Styleguide/Elements/Flex"
import { Join } from "Styleguide/Elements/Join"
import { Radio } from "Styleguide/Elements/Radio"
import { BorderedRadioGroup } from "Styleguide/Elements/RadioGroup"
import { Spacer } from "Styleguide/Elements/Spacer"
import { Responsive } from "Utils/Responsive"

import { Helper } from "Apps/Order/Components/Helper"

import { BuyNowStepper } from "Apps/Order/Components/BuyNowStepper"
import { TransactionSummaryFragmentContainer as TransactionSummary } from "Apps/Order/Components/TransactionSummary"
import { Col, Row } from "Styleguide/Elements/Grid"
import {
  TwoColumnLayout,
  TwoColumnSplit,
} from "../../Components/TwoColumnLayout"

export interface ShippingProps {
  order: Shipping_order
  mediator?: {
    trigger: (action: string, config: object) => void
  }
}

export interface ShippingState {
  shippingOption: string
}

export class ShippingRoute extends Component<ShippingProps, ShippingState> {
  state = {
    shippingOption: "SHIP",
  }

  render() {
    const { order } = this.props
    return (
      <>
        <Row>
          <Col>
            <BuyNowStepper currentStep={"shipping"} />
          </Col>
        </Row>
        <Spacer mb={3} />
        <Responsive>
          {({ xs }) => (
            <TwoColumnLayout
              Content={
                <>
                  <BorderedRadioGroup
                    onSelect={shippingOption =>
                      this.setState({ shippingOption })
                    }
                    defaultValue="SHIP"
                  >
                    <Radio value="SHIP">Provide shipping address</Radio>

                    <Radio value="PICKUP">
                      Arrange for pickup
                      <Collapse open={this.state.shippingOption === "PICKUP"}>
                        <Sans size="2" color="black60">
                          After you place your order, you’ll be appointed an
                          Artsy Specialist within 2 business days to handle
                          pickup logistics.
                        </Sans>
                      </Collapse>
                    </Radio>
                  </BorderedRadioGroup>

                  <Spacer mb={3} />

                  <Collapse open={this.state.shippingOption === "SHIP"}>
                    <Join separator={<Spacer mb={2} />}>
                      <Flex flexDirection="column">
                        <Input
                          placeholder="Add full name"
                          title="Full name"
                          block
                        />
                      </Flex>

                      <TwoColumnSplit>
                        <Flex flexDirection="column" pb={1}>
                          <Serif
                            mb={1}
                            size="3t"
                            color="black100"
                            lineHeight={18}
                          >
                            Country
                          </Serif>
                          <CountrySelect selected="US" />
                        </Flex>

                        <Flex flexDirection="column">
                          <Input
                            placeholder="Add postal code"
                            title="Postal code"
                            block
                          />
                        </Flex>
                      </TwoColumnSplit>
                      <TwoColumnSplit>
                        <Flex flexDirection="column">
                          <Input
                            placeholder="Add street address"
                            title="Address line 1"
                            block
                          />
                        </Flex>

                        <Flex flexDirection="column">
                          <Input
                            placeholder="Add apt, floor, suite, etc."
                            title="Address line 2 (optional)"
                            block
                          />
                        </Flex>
                      </TwoColumnSplit>
                      <TwoColumnSplit>
                        <Flex flexDirection="column">
                          <Input placeholder="Add city" title="City" block />
                        </Flex>

                        <Flex flexDirection="column">
                          <Input
                            placeholder="Add State, province, or region"
                            title="State, province, or region"
                            block
                          />
                        </Flex>
                      </TwoColumnSplit>
                    </Join>

                    <Spacer mb={2} />
                  </Collapse>

                  {!xs && (
                    <Link to={`/order2/${order.id}/payment`}>
                      <Button size="large" width="100%">
                        Continue
                      </Button>
                    </Link>
                  )}
                </>
              }
              Sidebar={
                <Flex flexDirection="column">
                  <TransactionSummary order={order} mb={xs ? 2 : 3} />
                  <Helper
                    artworkId={order.lineItems.edges[0].node.artwork.id}
                  />
                  {xs && (
                    <>
                      <Spacer mb={3} />
                      <Link to={`/order2/${order.id}/payment`}>
                        <Button size="large" width="100%">
                          Continue
                        </Button>
                      </Link>
                    </>
                  )}
                </Flex>
              }
            />
          )}
        </Responsive>
      </>
    )
  }
}

export const ShippingFragmentContainer = createFragmentContainer(
  ShippingRoute,
  graphql`
    fragment Shipping_order on Order {
      id
      lineItems {
        edges {
          node {
            artwork {
              id
            }
          }
        }
      }
      ...TransactionSummary_order
    }
  `
)
