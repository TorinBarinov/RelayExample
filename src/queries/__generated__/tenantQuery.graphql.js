/**
 * @generated SignedSource<<eb8cb171e03e8780fb2163293328b268>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pk",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "tenantQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "tenantQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                  (v0/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "183737cb624dba78fe22a1edfa13a3af",
    "id": null,
    "metadata": {},
    "name": "tenantQuery",
    "operationKind": "query",
    "text": "query tenantQuery {\n  tenant_connection {\n    edges {\n      node {\n        pk\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "62d003c62ebd6c2ddc073512cfbb298b";

module.exports = node;
