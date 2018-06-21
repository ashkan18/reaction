import styled from "styled-components"
import { Sans } from "@artsy/palette"
import React from "react"
import { pMedia } from "../../Helpers"
import { getDate } from "../Constants"
import { BylineLayout, DateFormat } from "../Typings"

interface DateProps {
  date?: string
  format?: DateFormat
  layout?: BylineLayout
  size?:
    | "1"
    | "2"
    | "3"
    | "3t"
    | "4"
    | "4t"
    | "5"
    | "5t"
    | "6"
    | "8"
    | "10"
    | "12"
    | "14"
    | "16"
}

export const Date: React.SFC<DateProps> = props => {
  const { date, format, layout, size } = props
  const condensed = layout === "condensed"
  const dateFormat = format || (condensed ? "condensed" : "default")
  const fontSize = size ? size : condensed ? "2" : "3t"

  return (
    <DateContainer condensed={condensed}>
      <Sans size={fontSize} weight="medium">
        {getDate(date, dateFormat)}
      </Sans>
    </DateContainer>
  )
}

const DateContainer = styled.div.attrs<{ condensed?: boolean }>({})`
  margin: 10px 30px 0 0;
  white-space: nowrap;
  ${props => pMedia.sm` margin: 10px 20px 0 0;`};
`
