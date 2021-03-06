import React from "react"

import { Serif, space } from "@artsy/palette"
import { Flex } from "Styleguide/Elements/Flex"
import { CreditCardIcon } from "Styleguide/Elements/icons/CreditCardIcon"

export const CreditCardDetails = ({
  brand,
  last_digits,
  expiration_month,
  expiration_year,
}: {
  brand: string
  last_digits: string
  expiration_month: number
  expiration_year: number
}) => (
  <Flex alignItems="center">
    <CreditCardIcon type={brand} style={{ marginRight: space(1) }} />
    <Serif
      size="3"
      color="black100"
      style={{ position: "relative", top: "1px" }}
    >
      •••• {last_digits}
      &nbsp; Exp {expiration_month}/{expiration_year}
    </Serif>
  </Flex>
)
