/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AuthorPageQueryVariables = {
    id: string;
};
export type AuthorPageQueryResponse = {
    readonly author: {
        readonly login: string | null;
    } | null;
};
export type AuthorPageQuery = {
    readonly response: AuthorPageQueryResponse;
    readonly variables: AuthorPageQueryVariables;
};



/*
query AuthorPageQuery(
  $id: String!
) {
  author(id: $id) {
    login
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
        "name": "login",
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
    "name": "AuthorPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AuthorPageQuery",
    "operationKind": "query",
    "text": "query AuthorPageQuery(\n  $id: String!\n) {\n  author(id: $id) {\n    login\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ff3b2c926a6a04fb402fb190d79cb4af';
export default node;
