/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AuthorsListQueryVariables = {};
export type AuthorsListQueryResponse = {
    readonly authors: ReadonlyArray<{
        readonly id: string | null;
        readonly login: string | null;
        readonly displayName: string | null;
    } | null> | null;
};
export type AuthorsListQuery = {
    readonly response: AuthorsListQueryResponse;
    readonly variables: AuthorsListQueryVariables;
};



/*
query AuthorsListQuery {
  authors {
    id
    login
    displayName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "authors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "login",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorsListQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthorsListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AuthorsListQuery",
    "operationKind": "query",
    "text": "query AuthorsListQuery {\n  authors {\n    id\n    login\n    displayName\n  }\n}\n"
  }
};
})();
(node as any).hash = 'de18e1efb905d03c2ab8facd87fb0de7';
export default node;
