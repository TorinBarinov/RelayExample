/**
 * @generated SignedSource<<c6f6ffb4cd817f4bc18d8220f89389ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "last",
        "value": 30
      }
    ],
    "concreteType": "tenantConnection",
    "kind": "LinkedField",
    "name": "tenant_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "tenantEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "tenant",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pk",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "tenant_connection(last:30)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "tenantQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "tenantQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "630ce683e51adc057ec4c703e2b654e1",
    "id": null,
    "metadata": {},
    "name": "tenantQuery",
    "operationKind": "query",
    "text": "query tenantQuery {\n  tenant_connection(last: 30) {\n    edges {\n      node {\n        pk\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "0c0fcc6aa2168ec37ba7d1bba45f8ad6";

module.exports = node;
