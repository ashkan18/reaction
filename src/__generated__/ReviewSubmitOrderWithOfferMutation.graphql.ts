/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type OrderModeEnum = "BUY" | "OFFER" | "%future added value";
export type SubmitOrderWithOfferInput = {
    readonly offerId: string;
    readonly clientMutationId?: string | null;
};
export type ReviewSubmitOrderWithOfferMutationVariables = {
    readonly input: SubmitOrderWithOfferInput;
};
export type ReviewSubmitOrderWithOfferMutationResponse = {
    readonly ecommerceSubmitOrderWithOffer: ({
        readonly orderOrError: ({
            readonly order?: ({
                readonly state: string | null;
                readonly mode: OrderModeEnum | null;
                readonly lastOffer: ({
                    readonly id: string | null;
                }) | null;
            }) | null;
            readonly error?: ({
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export type ReviewSubmitOrderWithOfferMutation = {
    readonly response: ReviewSubmitOrderWithOfferMutationResponse;
    readonly variables: ReviewSubmitOrderWithOfferMutationVariables;
};



/*
mutation ReviewSubmitOrderWithOfferMutation(
  $input: SubmitOrderWithOfferInput!
) {
  ecommerceSubmitOrderWithOffer(input: $input) {
    orderOrError {
      __typename
      ... on OrderWithMutationSuccess {
        order {
          state
          mode
          lastOffer {
            id
            __id: id
          }
          __id: id
        }
      }
      ... on OrderWithMutationFailure {
        error {
          type
          code
          data
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubmitOrderWithOfferInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "SubmitOrderWithOfferInput!"
  }
],
v2 = {
  "kind": "InlineFragment",
  "type": "OrderWithMutationFailure",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "error",
      "storageKey": null,
      "args": null,
      "concreteType": "EcommerceError",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
          "args": null,
          "storageKey": null
        },
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
          "name": "data",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "type": "OrderWithMutationSuccess",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "order",
      "storageKey": null,
      "args": null,
      "concreteType": "Order",
      "plural": false,
      "selections": [
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
          "kind": "LinkedField",
          "alias": null,
          "name": "lastOffer",
          "storageKey": null,
          "args": null,
          "concreteType": "Offer",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            v3
          ]
        },
        v3
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ReviewSubmitOrderWithOfferMutation",
  "id": null,
  "text": "mutation ReviewSubmitOrderWithOfferMutation(\n  $input: SubmitOrderWithOfferInput!\n) {\n  ecommerceSubmitOrderWithOffer(input: $input) {\n    orderOrError {\n      __typename\n      ... on OrderWithMutationSuccess {\n        order {\n          state\n          mode\n          lastOffer {\n            id\n            __id: id\n          }\n          __id: id\n        }\n      }\n      ... on OrderWithMutationFailure {\n        error {\n          type\n          code\n          data\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReviewSubmitOrderWithOfferMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ecommerceSubmitOrderWithOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitOrderWithOfferPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "orderOrError",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v2,
              v4
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReviewSubmitOrderWithOfferMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ecommerceSubmitOrderWithOffer",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitOrderWithOfferPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "orderOrError",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              v2,
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '3cffbb8217b8d88203182bf3c5a2b365';
export default node;
