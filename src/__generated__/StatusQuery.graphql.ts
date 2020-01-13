/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
export type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
export type StatusQueryVariables = {};
export type StatusQueryResponse = {
    readonly order: {
        readonly " $fragmentRefs": FragmentRefs<"Status_order">;
    } | null;
};
export type StatusQueryRawResponse = {
    readonly order: ({
        readonly __typename: "CommerceOfferOrder";
        readonly internalID: string;
        readonly code: string;
        readonly state: CommerceOrderStateEnum;
        readonly mode: CommerceOrderModeEnum | null;
        readonly stateReason: string | null;
        readonly stateExpiresAt: string | null;
        readonly requestedFulfillment: ({
            readonly __typename: "CommerceShip";
            readonly name: string | null;
            readonly addressLine1: string | null;
            readonly addressLine2: string | null;
            readonly city: string | null;
            readonly postalCode: string | null;
            readonly region: string | null;
            readonly country: string | null;
            readonly phoneNumber: string | null;
        } | {
            readonly __typename: string;
        }) | null;
        readonly sellerDetails: ({
            readonly __typename: "Partner";
            readonly id: string | null;
            readonly name: string | null;
        } | {
            readonly __typename: string | null;
            readonly id: string | null;
        }) | null;
        readonly lineItems: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly artwork: ({
                        readonly artist_names: string | null;
                        readonly title: string | null;
                        readonly date: string | null;
                        readonly shippingOrigin: string | null;
                        readonly image: ({
                            readonly resized_ArtworkSummaryItem: ({
                                readonly url: string | null;
                            }) | null;
                        }) | null;
                        readonly id: string | null;
                        readonly contextGrids: ReadonlyArray<({
                            readonly __typename: string;
                            readonly title: string | null;
                            readonly ctaTitle: string | null;
                            readonly ctaHref: string | null;
                            readonly artworksConnection: ({
                                readonly edges: ReadonlyArray<({
                                    readonly __typename: string | null;
                                    readonly node: ({
                                        readonly id: string;
                                        readonly slug: string;
                                        readonly href: string | null;
                                        readonly image: ({
                                            readonly aspect_ratio: number;
                                            readonly placeholder: string | null;
                                            readonly url: string | null;
                                        }) | null;
                                        readonly internalID: string;
                                        readonly title: string | null;
                                        readonly image_title: string | null;
                                        readonly date: string | null;
                                        readonly sale_message: string | null;
                                        readonly cultural_maker: string | null;
                                        readonly artists: ReadonlyArray<({
                                            readonly id: string;
                                            readonly href: string | null;
                                            readonly name: string | null;
                                        }) | null> | null;
                                        readonly collecting_institution: string | null;
                                        readonly partner: ({
                                            readonly name: string | null;
                                            readonly href: string | null;
                                            readonly id: string | null;
                                            readonly type: string | null;
                                        }) | null;
                                        readonly sale: ({
                                            readonly is_auction: boolean | null;
                                            readonly is_closed: boolean | null;
                                            readonly id: string | null;
                                            readonly is_live_open: boolean | null;
                                            readonly is_open: boolean | null;
                                            readonly is_preview: boolean | null;
                                            readonly display_timely_at: string | null;
                                        }) | null;
                                        readonly sale_artwork: ({
                                            readonly counts: ({
                                                readonly bidder_positions: number | null;
                                            }) | null;
                                            readonly highest_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly opening_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly id: string | null;
                                        }) | null;
                                        readonly is_inquireable: boolean | null;
                                        readonly is_saved: boolean | null;
                                        readonly is_biddable: boolean | null;
                                        readonly is_acquireable: boolean | null;
                                        readonly is_offerable: boolean | null;
                                    }) | null;
                                    readonly id: string | null;
                                }) | null> | null;
                            }) | null;
                        }) | null> | null;
                        readonly layers: ReadonlyArray<({
                            readonly name: string | null;
                            readonly internalID: string;
                            readonly id: string | null;
                        }) | null> | null;
                        readonly slug: string;
                        readonly layer: ({
                            readonly name: string | null;
                            readonly artworksConnection: ({
                                readonly edges: ReadonlyArray<({
                                    readonly __typename: string | null;
                                    readonly node: ({
                                        readonly id: string;
                                        readonly slug: string;
                                        readonly href: string | null;
                                        readonly image: ({
                                            readonly aspect_ratio: number;
                                            readonly placeholder: string | null;
                                            readonly url: string | null;
                                        }) | null;
                                        readonly internalID: string;
                                        readonly title: string | null;
                                        readonly image_title: string | null;
                                        readonly date: string | null;
                                        readonly sale_message: string | null;
                                        readonly cultural_maker: string | null;
                                        readonly artists: ReadonlyArray<({
                                            readonly id: string;
                                            readonly href: string | null;
                                            readonly name: string | null;
                                        }) | null> | null;
                                        readonly collecting_institution: string | null;
                                        readonly partner: ({
                                            readonly name: string | null;
                                            readonly href: string | null;
                                            readonly id: string | null;
                                            readonly type: string | null;
                                        }) | null;
                                        readonly sale: ({
                                            readonly is_auction: boolean | null;
                                            readonly is_closed: boolean | null;
                                            readonly id: string | null;
                                            readonly is_live_open: boolean | null;
                                            readonly is_open: boolean | null;
                                            readonly is_preview: boolean | null;
                                            readonly display_timely_at: string | null;
                                        }) | null;
                                        readonly sale_artwork: ({
                                            readonly counts: ({
                                                readonly bidder_positions: number | null;
                                            }) | null;
                                            readonly highest_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly opening_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly id: string | null;
                                        }) | null;
                                        readonly is_inquireable: boolean | null;
                                        readonly is_saved: boolean | null;
                                        readonly is_biddable: boolean | null;
                                        readonly is_acquireable: boolean | null;
                                        readonly is_offerable: boolean | null;
                                    }) | null;
                                    readonly id: string | null;
                                }) | null> | null;
                            }) | null;
                            readonly id: string | null;
                        }) | null;
                        readonly internalID: string;
                        readonly sale: ({
                            readonly is_closed: boolean | null;
                            readonly id: string | null;
                        }) | null;
                        readonly context: ({
                            readonly __typename: string;
                            readonly id: string | null;
                        }) | null;
                    }) | null;
                    readonly id: string | null;
                    readonly fulfillments: ({
                        readonly edges: ReadonlyArray<({
                            readonly node: ({
                                readonly courier: string;
                                readonly trackingId: string | null;
                                readonly estimatedDelivery: string | null;
                                readonly id: string | null;
                            }) | null;
                        }) | null> | null;
                    }) | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly shippingTotal: string | null;
        readonly shippingTotalCents: number | null;
        readonly taxTotal: string | null;
        readonly taxTotalCents: number | null;
        readonly itemsTotal: string | null;
        readonly totalListPrice: string | null;
        readonly buyerTotal: string | null;
        readonly creditCard: ({
            readonly brand: string;
            readonly lastDigits: string;
            readonly expirationYear: number;
            readonly expirationMonth: number;
            readonly id: string | null;
        }) | null;
        readonly id: string | null;
        readonly lastOffer: ({
            readonly internalID: string;
            readonly amount: string | null;
            readonly amountCents: number;
            readonly shippingTotal: string | null;
            readonly shippingTotalCents: number | null;
            readonly taxTotal: string | null;
            readonly taxTotalCents: number | null;
            readonly buyerTotal: string | null;
            readonly buyerTotalCents: number | null;
            readonly fromParticipant: CommerceOrderParticipantEnum | null;
            readonly note: string | null;
            readonly id: string | null;
        }) | null;
        readonly myLastOffer: ({
            readonly internalID: string;
            readonly amount: string | null;
            readonly amountCents: number;
            readonly shippingTotal: string | null;
            readonly shippingTotalCents: number | null;
            readonly taxTotal: string | null;
            readonly taxTotalCents: number | null;
            readonly buyerTotal: string | null;
            readonly buyerTotalCents: number | null;
            readonly fromParticipant: CommerceOrderParticipantEnum | null;
            readonly note: string | null;
            readonly id: string | null;
        }) | null;
    } | {
        readonly __typename: string;
        readonly internalID: string;
        readonly code: string;
        readonly state: CommerceOrderStateEnum;
        readonly mode: CommerceOrderModeEnum | null;
        readonly stateReason: string | null;
        readonly stateExpiresAt: string | null;
        readonly requestedFulfillment: ({
            readonly __typename: "CommerceShip";
            readonly name: string | null;
            readonly addressLine1: string | null;
            readonly addressLine2: string | null;
            readonly city: string | null;
            readonly postalCode: string | null;
            readonly region: string | null;
            readonly country: string | null;
            readonly phoneNumber: string | null;
        } | {
            readonly __typename: string;
        }) | null;
        readonly sellerDetails: ({
            readonly __typename: "Partner";
            readonly id: string | null;
            readonly name: string | null;
        } | {
            readonly __typename: string | null;
            readonly id: string | null;
        }) | null;
        readonly lineItems: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly artwork: ({
                        readonly artist_names: string | null;
                        readonly title: string | null;
                        readonly date: string | null;
                        readonly shippingOrigin: string | null;
                        readonly image: ({
                            readonly resized_ArtworkSummaryItem: ({
                                readonly url: string | null;
                            }) | null;
                        }) | null;
                        readonly id: string | null;
                        readonly contextGrids: ReadonlyArray<({
                            readonly __typename: string;
                            readonly title: string | null;
                            readonly ctaTitle: string | null;
                            readonly ctaHref: string | null;
                            readonly artworksConnection: ({
                                readonly edges: ReadonlyArray<({
                                    readonly __typename: string | null;
                                    readonly node: ({
                                        readonly id: string;
                                        readonly slug: string;
                                        readonly href: string | null;
                                        readonly image: ({
                                            readonly aspect_ratio: number;
                                            readonly placeholder: string | null;
                                            readonly url: string | null;
                                        }) | null;
                                        readonly internalID: string;
                                        readonly title: string | null;
                                        readonly image_title: string | null;
                                        readonly date: string | null;
                                        readonly sale_message: string | null;
                                        readonly cultural_maker: string | null;
                                        readonly artists: ReadonlyArray<({
                                            readonly id: string;
                                            readonly href: string | null;
                                            readonly name: string | null;
                                        }) | null> | null;
                                        readonly collecting_institution: string | null;
                                        readonly partner: ({
                                            readonly name: string | null;
                                            readonly href: string | null;
                                            readonly id: string | null;
                                            readonly type: string | null;
                                        }) | null;
                                        readonly sale: ({
                                            readonly is_auction: boolean | null;
                                            readonly is_closed: boolean | null;
                                            readonly id: string | null;
                                            readonly is_live_open: boolean | null;
                                            readonly is_open: boolean | null;
                                            readonly is_preview: boolean | null;
                                            readonly display_timely_at: string | null;
                                        }) | null;
                                        readonly sale_artwork: ({
                                            readonly counts: ({
                                                readonly bidder_positions: number | null;
                                            }) | null;
                                            readonly highest_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly opening_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly id: string | null;
                                        }) | null;
                                        readonly is_inquireable: boolean | null;
                                        readonly is_saved: boolean | null;
                                        readonly is_biddable: boolean | null;
                                        readonly is_acquireable: boolean | null;
                                        readonly is_offerable: boolean | null;
                                    }) | null;
                                    readonly id: string | null;
                                }) | null> | null;
                            }) | null;
                        }) | null> | null;
                        readonly layers: ReadonlyArray<({
                            readonly name: string | null;
                            readonly internalID: string;
                            readonly id: string | null;
                        }) | null> | null;
                        readonly slug: string;
                        readonly layer: ({
                            readonly name: string | null;
                            readonly artworksConnection: ({
                                readonly edges: ReadonlyArray<({
                                    readonly __typename: string | null;
                                    readonly node: ({
                                        readonly id: string;
                                        readonly slug: string;
                                        readonly href: string | null;
                                        readonly image: ({
                                            readonly aspect_ratio: number;
                                            readonly placeholder: string | null;
                                            readonly url: string | null;
                                        }) | null;
                                        readonly internalID: string;
                                        readonly title: string | null;
                                        readonly image_title: string | null;
                                        readonly date: string | null;
                                        readonly sale_message: string | null;
                                        readonly cultural_maker: string | null;
                                        readonly artists: ReadonlyArray<({
                                            readonly id: string;
                                            readonly href: string | null;
                                            readonly name: string | null;
                                        }) | null> | null;
                                        readonly collecting_institution: string | null;
                                        readonly partner: ({
                                            readonly name: string | null;
                                            readonly href: string | null;
                                            readonly id: string | null;
                                            readonly type: string | null;
                                        }) | null;
                                        readonly sale: ({
                                            readonly is_auction: boolean | null;
                                            readonly is_closed: boolean | null;
                                            readonly id: string | null;
                                            readonly is_live_open: boolean | null;
                                            readonly is_open: boolean | null;
                                            readonly is_preview: boolean | null;
                                            readonly display_timely_at: string | null;
                                        }) | null;
                                        readonly sale_artwork: ({
                                            readonly counts: ({
                                                readonly bidder_positions: number | null;
                                            }) | null;
                                            readonly highest_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly opening_bid: ({
                                                readonly display: string | null;
                                            }) | null;
                                            readonly id: string | null;
                                        }) | null;
                                        readonly is_inquireable: boolean | null;
                                        readonly is_saved: boolean | null;
                                        readonly is_biddable: boolean | null;
                                        readonly is_acquireable: boolean | null;
                                        readonly is_offerable: boolean | null;
                                    }) | null;
                                    readonly id: string | null;
                                }) | null> | null;
                            }) | null;
                            readonly id: string | null;
                        }) | null;
                        readonly internalID: string;
                        readonly sale: ({
                            readonly is_closed: boolean | null;
                            readonly id: string | null;
                        }) | null;
                        readonly context: ({
                            readonly __typename: string;
                            readonly id: string | null;
                        }) | null;
                    }) | null;
                    readonly id: string | null;
                    readonly fulfillments: ({
                        readonly edges: ReadonlyArray<({
                            readonly node: ({
                                readonly courier: string;
                                readonly trackingId: string | null;
                                readonly estimatedDelivery: string | null;
                                readonly id: string | null;
                            }) | null;
                        }) | null> | null;
                    }) | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly shippingTotal: string | null;
        readonly shippingTotalCents: number | null;
        readonly taxTotal: string | null;
        readonly taxTotalCents: number | null;
        readonly itemsTotal: string | null;
        readonly totalListPrice: string | null;
        readonly buyerTotal: string | null;
        readonly creditCard: ({
            readonly brand: string;
            readonly lastDigits: string;
            readonly expirationYear: number;
            readonly expirationMonth: number;
            readonly id: string | null;
        }) | null;
        readonly id: string | null;
    }) | null;
};
export type StatusQuery = {
    readonly response: StatusQueryResponse;
    readonly variables: StatusQueryVariables;
    readonly rawResponse: StatusQueryRawResponse;
};



/*
query StatusQuery {
  order: commerceOrder(id: "42") {
    __typename
    ...Status_order
    id
  }
}

fragment ArtworkGrid_artworks on ArtworkConnectionInterface {
  edges {
    __typename
    node {
      id
      slug
      href
      image {
        aspect_ratio: aspectRatio
      }
      ...GridItem_artwork
    }
    ... on Node {
      id
    }
  }
}

fragment ArtworkSummaryItem_order on CommerceOrder {
  sellerDetails {
    __typename
    ... on Partner {
      name
    }
    ... on Node {
      id
    }
    ... on User {
      id
    }
  }
  lineItems {
    edges {
      node {
        artwork {
          artist_names: artistNames
          title
          date
          shippingOrigin
          image {
            resized_ArtworkSummaryItem: resized(width: 55) {
              url
            }
          }
          id
        }
        id
      }
    }
  }
}

fragment Badge_artwork on Artwork {
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  href
  sale {
    is_preview: isPreview
    display_timely_at: displayTimelyAt
    id
  }
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment CreditCardSummaryItem_order on CommerceOrder {
  creditCard {
    brand
    lastDigits
    expirationYear
    expirationMonth
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment GridItem_artwork on Artwork {
  internalID
  title
  image_title: imageTitle
  image {
    placeholder
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment OtherWorks_artwork on Artwork {
  contextGrids {
    __typename
    title
    ctaTitle
    ctaHref
    artworksConnection(first: 8) {
      ...ArtworkGrid_artworks
      edges {
        node {
          slug
          id
        }
      }
    }
  }
  ...RelatedWorksArtworkGrid_artwork
  slug
  internalID
  sale {
    is_closed: isClosed
    id
  }
  context {
    __typename
    ... on Node {
      id
    }
  }
}

fragment RelatedWorksArtworkGrid_artwork on Artwork {
  layers {
    name
    internalID
    id
  }
  slug
  layer {
    name
    artworksConnection(first: 8) {
      ...ArtworkGrid_artworks
      edges {
        node {
          slug
          id
        }
      }
    }
    id
  }
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
}

fragment ShippingAddress_ship on CommerceShip {
  name
  addressLine1
  addressLine2
  city
  postalCode
  region
  country
  phoneNumber
}

fragment ShippingSummaryItem_order on CommerceOrder {
  state
  requestedFulfillment {
    __typename
    ...ShippingAddress_ship
  }
  lineItems {
    edges {
      node {
        artwork {
          shippingOrigin
          id
        }
        id
      }
    }
  }
}

fragment Status_order on CommerceOrder {
  __typename
  internalID
  code
  state
  mode
  stateReason
  stateExpiresAt(format: "MMM D")
  requestedFulfillment {
    __typename
    ... on CommerceShip {
      __typename
    }
    ... on CommercePickup {
      __typename
    }
  }
  ...ArtworkSummaryItem_order
  ...TransactionDetailsSummaryItem_order
  ...ShippingSummaryItem_order
  ...CreditCardSummaryItem_order
  lineItems {
    edges {
      node {
        artwork {
          ...OtherWorks_artwork
          id
        }
        fulfillments {
          edges {
            node {
              courier
              trackingId
              estimatedDelivery(format: "MMM Do, YYYY")
              id
            }
          }
        }
        id
      }
    }
  }
  ... on CommerceOfferOrder {
    myLastOffer {
      internalID
      amount(precision: 2)
      amountCents
      shippingTotal(precision: 2)
      shippingTotalCents
      taxTotal(precision: 2)
      taxTotalCents
      id
    }
  }
}

fragment TransactionDetailsSummaryItem_order on CommerceOrder {
  __typename
  mode
  shippingTotal(precision: 2)
  shippingTotalCents
  taxTotal(precision: 2)
  taxTotalCents
  itemsTotal(precision: 2)
  totalListPrice(precision: 2)
  buyerTotal(precision: 2)
  ... on CommerceOfferOrder {
    lastOffer {
      internalID
      amount(precision: 2)
      amountCents
      shippingTotal(precision: 2)
      shippingTotalCents
      taxTotal(precision: 2)
      taxTotalCents
      buyerTotal(precision: 2)
      buyerTotalCents
      fromParticipant
      note
      id
    }
    myLastOffer {
      internalID
      amount(precision: 2)
      amountCents
      shippingTotal(precision: 2)
      shippingTotalCents
      taxTotal(precision: 2)
      taxTotalCents
      buyerTotal(precision: 2)
      buyerTotalCents
      fromParticipant
      note
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "42"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v10 = {
  "kind": "ScalarField",
  "alias": "is_closed",
  "name": "isClosed",
  "args": null,
  "storageKey": null
},
v11 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "artworksConnection",
  "storageKey": "artworksConnection(first:8)",
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 8
    }
  ],
  "concreteType": "ArtworkConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Artwork",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            (v7/*: any*/),
            (v8/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "image",
              "storageKey": null,
              "args": null,
              "concreteType": "Image",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": "aspect_ratio",
                  "name": "aspectRatio",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "placeholder",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "version",
                      "value": "large"
                    }
                  ],
                  "storageKey": "url(version:\"large\")"
                }
              ]
            },
            (v2/*: any*/),
            (v5/*: any*/),
            {
              "kind": "ScalarField",
              "alias": "image_title",
              "name": "imageTitle",
              "args": null,
              "storageKey": null
            },
            (v6/*: any*/),
            {
              "kind": "ScalarField",
              "alias": "sale_message",
              "name": "saleMessage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": "cultural_maker",
              "name": "culturalMaker",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "artists",
              "storageKey": "artists(shallow:true)",
              "args": (v9/*: any*/),
              "concreteType": "Artist",
              "plural": true,
              "selections": [
                (v4/*: any*/),
                (v8/*: any*/),
                (v3/*: any*/)
              ]
            },
            {
              "kind": "ScalarField",
              "alias": "collecting_institution",
              "name": "collectingInstitution",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "partner",
              "storageKey": "partner(shallow:true)",
              "args": (v9/*: any*/),
              "concreteType": "Partner",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                (v8/*: any*/),
                (v4/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "type",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "sale",
              "storageKey": null,
              "args": null,
              "concreteType": "Sale",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": "is_auction",
                  "name": "isAuction",
                  "args": null,
                  "storageKey": null
                },
                (v10/*: any*/),
                (v4/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": "is_live_open",
                  "name": "isLiveOpen",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": "is_open",
                  "name": "isOpen",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": "is_preview",
                  "name": "isPreview",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": "display_timely_at",
                  "name": "displayTimelyAt",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": "sale_artwork",
              "name": "saleArtwork",
              "storageKey": null,
              "args": null,
              "concreteType": "SaleArtwork",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "counts",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SaleArtworkCounts",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": "bidder_positions",
                      "name": "bidderPositions",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": "highest_bid",
                  "name": "highestBid",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SaleArtworkHighestBid",
                  "plural": false,
                  "selections": (v11/*: any*/)
                },
                {
                  "kind": "LinkedField",
                  "alias": "opening_bid",
                  "name": "openingBid",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SaleArtworkOpeningBid",
                  "plural": false,
                  "selections": (v11/*: any*/)
                },
                (v4/*: any*/)
              ]
            },
            {
              "kind": "ScalarField",
              "alias": "is_inquireable",
              "name": "isInquireable",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": "is_saved",
              "name": "isSaved",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": "is_biddable",
              "name": "isBiddable",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": "is_acquireable",
              "name": "isAcquireable",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": "is_offerable",
              "name": "isOfferable",
              "args": null,
              "storageKey": null
            }
          ]
        },
        (v4/*: any*/)
      ]
    }
  ]
},
v13 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2
  }
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "shippingTotal",
  "args": (v13/*: any*/),
  "storageKey": "shippingTotal(precision:2)"
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "shippingTotalCents",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "taxTotal",
  "args": (v13/*: any*/),
  "storageKey": "taxTotal(precision:2)"
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "taxTotalCents",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "buyerTotal",
  "args": (v13/*: any*/),
  "storageKey": "buyerTotal(precision:2)"
},
v19 = [
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "amount",
    "args": (v13/*: any*/),
    "storageKey": "amount(precision:2)"
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "amountCents",
    "args": null,
    "storageKey": null
  },
  (v14/*: any*/),
  (v15/*: any*/),
  (v16/*: any*/),
  (v17/*: any*/),
  (v18/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "buyerTotalCents",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "fromParticipant",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "note",
    "args": null,
    "storageKey": null
  },
  (v4/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StatusQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "order",
        "name": "commerceOrder",
        "storageKey": "commerceOrder(id:\"42\")",
        "args": (v0/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Status_order",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StatusQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "order",
        "name": "commerceOrder",
        "storageKey": "commerceOrder(id:\"42\")",
        "args": (v0/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "state",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "mode",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "stateReason",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "stateExpiresAt",
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "MMM D"
              }
            ],
            "storageKey": "stateExpiresAt(format:\"MMM D\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "requestedFulfillment",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "CommerceShip",
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addressLine1",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "addressLine2",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "postalCode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "region",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "phoneNumber",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sellerDetails",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Partner",
                "selections": [
                  (v3/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lineItems",
            "storageKey": null,
            "args": null,
            "concreteType": "CommerceLineItemConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "CommerceLineItemEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CommerceLineItem",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artwork",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": "artist_names",
                            "name": "artistNames",
                            "args": null,
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          (v6/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "shippingOrigin",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": "resized_ArtworkSummaryItem",
                                "name": "resized",
                                "storageKey": "resized(width:55)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 55
                                  }
                                ],
                                "concreteType": "ResizedImageUrl",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "url",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              }
                            ]
                          },
                          (v4/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "contextGrids",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": true,
                            "selections": [
                              (v1/*: any*/),
                              (v5/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "ctaTitle",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "ctaHref",
                                "args": null,
                                "storageKey": null
                              },
                              (v12/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "layers",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ArtworkLayer",
                            "plural": true,
                            "selections": [
                              (v3/*: any*/),
                              (v2/*: any*/),
                              (v4/*: any*/)
                            ]
                          },
                          (v7/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "layer",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ArtworkLayer",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v12/*: any*/),
                              (v4/*: any*/)
                            ]
                          },
                          (v2/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sale",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Sale",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              (v4/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "context",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                              (v1/*: any*/),
                              (v4/*: any*/)
                            ]
                          }
                        ]
                      },
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "fulfillments",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CommerceFulfillmentConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CommerceFulfillmentEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "CommerceFulfillment",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "courier",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "trackingId",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "estimatedDelivery",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "format",
                                        "value": "MMM Do, YYYY"
                                      }
                                    ],
                                    "storageKey": "estimatedDelivery(format:\"MMM Do, YYYY\")"
                                  },
                                  (v4/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "itemsTotal",
            "args": (v13/*: any*/),
            "storageKey": "itemsTotal(precision:2)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalListPrice",
            "args": (v13/*: any*/),
            "storageKey": "totalListPrice(precision:2)"
          },
          (v18/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creditCard",
            "storageKey": null,
            "args": null,
            "concreteType": "CreditCard",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "brand",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lastDigits",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "expirationYear",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "expirationMonth",
                "args": null,
                "storageKey": null
              },
              (v4/*: any*/)
            ]
          },
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "CommerceOfferOrder",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lastOffer",
                "storageKey": null,
                "args": null,
                "concreteType": "CommerceOffer",
                "plural": false,
                "selections": (v19/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "myLastOffer",
                "storageKey": null,
                "args": null,
                "concreteType": "CommerceOffer",
                "plural": false,
                "selections": (v19/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "StatusQuery",
    "id": null,
    "text": "query StatusQuery {\n  order: commerceOrder(id: \"42\") {\n    __typename\n    ...Status_order\n    id\n  }\n}\n\nfragment ArtworkGrid_artworks on ArtworkConnectionInterface {\n  edges {\n    __typename\n    node {\n      id\n      slug\n      href\n      image {\n        aspect_ratio: aspectRatio\n      }\n      ...GridItem_artwork\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment ArtworkSummaryItem_order on CommerceOrder {\n  sellerDetails {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on Node {\n      id\n    }\n    ... on User {\n      id\n    }\n  }\n  lineItems {\n    edges {\n      node {\n        artwork {\n          artist_names: artistNames\n          title\n          date\n          shippingOrigin\n          image {\n            resized_ArtworkSummaryItem: resized(width: 55) {\n              url\n            }\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  is_acquireable: isAcquireable\n  is_offerable: isOfferable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment CreditCardSummaryItem_order on CommerceOrder {\n  creditCard {\n    brand\n    lastDigits\n    expirationYear\n    expirationMonth\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment GridItem_artwork on Artwork {\n  internalID\n  title\n  image_title: imageTitle\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment OtherWorks_artwork on Artwork {\n  contextGrids {\n    __typename\n    title\n    ctaTitle\n    ctaHref\n    artworksConnection(first: 8) {\n      ...ArtworkGrid_artworks\n      edges {\n        node {\n          slug\n          id\n        }\n      }\n    }\n  }\n  ...RelatedWorksArtworkGrid_artwork\n  slug\n  internalID\n  sale {\n    is_closed: isClosed\n    id\n  }\n  context {\n    __typename\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment RelatedWorksArtworkGrid_artwork on Artwork {\n  layers {\n    name\n    internalID\n    id\n  }\n  slug\n  layer {\n    name\n    artworksConnection(first: 8) {\n      ...ArtworkGrid_artworks\n      edges {\n        node {\n          slug\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n\nfragment ShippingAddress_ship on CommerceShip {\n  name\n  addressLine1\n  addressLine2\n  city\n  postalCode\n  region\n  country\n  phoneNumber\n}\n\nfragment ShippingSummaryItem_order on CommerceOrder {\n  state\n  requestedFulfillment {\n    __typename\n    ...ShippingAddress_ship\n  }\n  lineItems {\n    edges {\n      node {\n        artwork {\n          shippingOrigin\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Status_order on CommerceOrder {\n  __typename\n  internalID\n  code\n  state\n  mode\n  stateReason\n  stateExpiresAt(format: \"MMM D\")\n  requestedFulfillment {\n    __typename\n    ... on CommerceShip {\n      __typename\n    }\n    ... on CommercePickup {\n      __typename\n    }\n  }\n  ...ArtworkSummaryItem_order\n  ...TransactionDetailsSummaryItem_order\n  ...ShippingSummaryItem_order\n  ...CreditCardSummaryItem_order\n  lineItems {\n    edges {\n      node {\n        artwork {\n          ...OtherWorks_artwork\n          id\n        }\n        fulfillments {\n          edges {\n            node {\n              courier\n              trackingId\n              estimatedDelivery(format: \"MMM Do, YYYY\")\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n  ... on CommerceOfferOrder {\n    myLastOffer {\n      internalID\n      amount(precision: 2)\n      amountCents\n      shippingTotal(precision: 2)\n      shippingTotalCents\n      taxTotal(precision: 2)\n      taxTotalCents\n      id\n    }\n  }\n}\n\nfragment TransactionDetailsSummaryItem_order on CommerceOrder {\n  __typename\n  mode\n  shippingTotal(precision: 2)\n  shippingTotalCents\n  taxTotal(precision: 2)\n  taxTotalCents\n  itemsTotal(precision: 2)\n  totalListPrice(precision: 2)\n  buyerTotal(precision: 2)\n  ... on CommerceOfferOrder {\n    lastOffer {\n      internalID\n      amount(precision: 2)\n      amountCents\n      shippingTotal(precision: 2)\n      shippingTotalCents\n      taxTotal(precision: 2)\n      taxTotalCents\n      buyerTotal(precision: 2)\n      buyerTotalCents\n      fromParticipant\n      note\n      id\n    }\n    myLastOffer {\n      internalID\n      amount(precision: 2)\n      amountCents\n      shippingTotal(precision: 2)\n      shippingTotalCents\n      taxTotal(precision: 2)\n      taxTotalCents\n      buyerTotal(precision: 2)\n      buyerTotalCents\n      fromParticipant\n      note\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c33532e1ecf4fa92c15abbb176687229';
export default node;
