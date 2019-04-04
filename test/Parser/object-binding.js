// RUN: %hermes -dump-ast --pretty-json %s | %FileCheck %s --match-full-lines

//CHECK:      {
//CHECK-NEXT:   "type": "File",
//CHECK-NEXT:   "program": {
//CHECK-NEXT:     "type": "Program",
//CHECK-NEXT:     "body": [

var {a} = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var {a,} = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var {a, b} = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 },
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "b",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "b",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var {a: b, c: d, } = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "b",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 },
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "c",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "d",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var {a: b = 10} = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "AssignmentPattern",
//CHECK-NEXT:                     "left": {
//CHECK-NEXT:                       "type": "Identifier",
//CHECK-NEXT:                       "name": "b",
//CHECK-NEXT:                       "typeAnnotation": null
//CHECK-NEXT:                     },
//CHECK-NEXT:                     "right": {
//CHECK-NEXT:                       "type": "NumericLiteral",
//CHECK-NEXT:                       "value": 10
//CHECK-NEXT:                     }
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var {a: [b]} = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "ArrayPattern",
//CHECK-NEXT:                     "elements": [
//CHECK-NEXT:                       {
//CHECK-NEXT:                         "type": "Identifier",
//CHECK-NEXT:                         "name": "b",
//CHECK-NEXT:                         "typeAnnotation": null
//CHECK-NEXT:                       }
//CHECK-NEXT:                     ]
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var {a: [b] = [1]} = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "AssignmentPattern",
//CHECK-NEXT:                     "left": {
//CHECK-NEXT:                       "type": "ArrayPattern",
//CHECK-NEXT:                       "elements": [
//CHECK-NEXT:                         {
//CHECK-NEXT:                           "type": "Identifier",
//CHECK-NEXT:                           "name": "b",
//CHECK-NEXT:                           "typeAnnotation": null
//CHECK-NEXT:                         }
//CHECK-NEXT:                       ]
//CHECK-NEXT:                     },
//CHECK-NEXT:                     "right": {
//CHECK-NEXT:                       "type": "ArrayExpression",
//CHECK-NEXT:                       "elements": [
//CHECK-NEXT:                         {
//CHECK-NEXT:                           "type": "NumericLiteral",
//CHECK-NEXT:                           "value": 1
//CHECK-NEXT:                         }
//CHECK-NEXT:                       ]
//CHECK-NEXT:                     }
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       },

var {a: [b = 2] = [1]} = x;
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "VariableDeclaration",
//CHECK-NEXT:         "kind": "var",
//CHECK-NEXT:         "declarations": [
//CHECK-NEXT:           {
//CHECK-NEXT:             "type": "VariableDeclarator",
//CHECK-NEXT:             "init": {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "x",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             "id": {
//CHECK-NEXT:               "type": "ObjectPattern",
//CHECK-NEXT:               "properties": [
//CHECK-NEXT:                 {
//CHECK-NEXT:                   "type": "Property",
//CHECK-NEXT:                   "key": {
//CHECK-NEXT:                     "type": "Identifier",
//CHECK-NEXT:                     "name": "a",
//CHECK-NEXT:                     "typeAnnotation": null
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "value": {
//CHECK-NEXT:                     "type": "AssignmentPattern",
//CHECK-NEXT:                     "left": {
//CHECK-NEXT:                       "type": "ArrayPattern",
//CHECK-NEXT:                       "elements": [
//CHECK-NEXT:                         {
//CHECK-NEXT:                           "type": "AssignmentPattern",
//CHECK-NEXT:                           "left": {
//CHECK-NEXT:                             "type": "Identifier",
//CHECK-NEXT:                             "name": "b",
//CHECK-NEXT:                             "typeAnnotation": null
//CHECK-NEXT:                           },
//CHECK-NEXT:                           "right": {
//CHECK-NEXT:                             "type": "NumericLiteral",
//CHECK-NEXT:                             "value": 2
//CHECK-NEXT:                           }
//CHECK-NEXT:                         }
//CHECK-NEXT:                       ]
//CHECK-NEXT:                     },
//CHECK-NEXT:                     "right": {
//CHECK-NEXT:                       "type": "ArrayExpression",
//CHECK-NEXT:                       "elements": [
//CHECK-NEXT:                         {
//CHECK-NEXT:                           "type": "NumericLiteral",
//CHECK-NEXT:                           "value": 1
//CHECK-NEXT:                         }
//CHECK-NEXT:                       ]
//CHECK-NEXT:                     }
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "kind": "init"
//CHECK-NEXT:                 }
//CHECK-NEXT:               ]
//CHECK-NEXT:             }
//CHECK-NEXT:           }
//CHECK-NEXT:         ]
//CHECK-NEXT:       }

//CHECK-NEXT:     ]
//CHECK-NEXT:   }
//CHECK-NEXT: }
