/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AuthorQueryVariables = {
    id: string;
};
export type AuthorQueryResponse = {
    readonly author: {
        readonly id: string | null;
        readonly login: string | null;
        readonly displayName: string | null;
    } | null;
};
export type AuthorQuery = {
    readonly response: AuthorQueryResponse;
    readonly variables: AuthorQueryVariables;
};



/*
query AuthorQuery(
  $id: String!
) {
  author(id: $id) {
    id
    login
    displayName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "author",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AuthorQuery",
    "operationKind": "query",
    "text": "query AuthorQuery(\n  $id: String!\n) {\n  author(id: $id) {\n    id\n    login\n    displayName\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f33037647636c8c20be5966e43cfc15b';
export default node;
