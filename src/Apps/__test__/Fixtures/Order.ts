export const UntouchedOrder = {
  id: "2939023",
  code: "abcdefg",
  itemsTotal: "$12,000",
  shippingTotal: null,
  taxTotal: null,
  buyerTotal: "$12,000",
  requestedFulfillment: {
    __typename: "Pickup",
    fulfillmentType: "pickup",
  },
  lineItems: {
    edges: [
      {
        node: {
          artwork: {
            artist_names: "Lisa Breslow",
            title: "Gramercy Park South",
            date: "2016",
            shippingOrigin: "New York, NY",
            medium: "Oil and pencil on panel",
            dimensions: {
              in: "36 × 36 in",
              cm: "91.4 × 91.4 cm",
            },
            attribution_class: null,
            image: {
              resized: {
                url:
                  "https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=185&height=184&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FtOfWds4sIX_9WpRf3RqaQQ%2Flarge.jpg",
              },
              resized_transactionSummary: {
                url:
                  "https://d7hftxdivxxvm.cloudfront.net?resize_to=fit&width=185&height=184&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FtOfWds4sIX_9WpRf3RqaQQ%2Flarge.jpg",
              },
            },
          },
        },
      },
    ],
  },
  seller: {
    __typename: "Partner",
    name: "Kathryn Markel Fine Arts",
    locations: [
      {
        city: "New York",
        state: "NY",
        country: "US",
      },
    ],
  },
}

export const OrderWithShippingDetails = {
  ...UntouchedOrder,
  requestedFulfillment: {
    __typename: "Ship",
    name: "Joelle Van Dyne",
    addressLine1: "23 41st st",
    addressLine2: null,
    city: "New York",
    postalCode: "90210",
    region: "US",
  },
  creditCard: {
    brand: "Visa",
    last_digits: "4444",
    expiration_month: 3,
    expiration_year: 21,
  },
}
