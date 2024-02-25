import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 22, end: 32 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 33, end: 37 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 39, end: 45 },
                },
                loc: { start: 39, end: 45 },
              },
              directives: [],
              loc: { start: 33, end: 45 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 49, end: 57 },
              },
              loc: { start: 49, end: 57 },
            },
            loc: { start: 48, end: 58 },
          },
          directives: [],
          loc: { start: 22, end: 58 },
        },
      ],
      loc: { start: 0, end: 60 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 67, end: 75 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 80, end: 82 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 84, end: 86 } },
              loc: { start: 84, end: 86 },
            },
            loc: { start: 84, end: 87 },
          },
          directives: [],
          loc: { start: 80, end: 87 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 90, end: 94 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 96, end: 102 },
              },
              loc: { start: 96, end: 102 },
            },
            loc: { start: 96, end: 103 },
          },
          directives: [],
          loc: { start: 90, end: 103 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 106, end: 110 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 112, end: 118 },
              },
              loc: { start: 112, end: 118 },
            },
            loc: { start: 112, end: 119 },
          },
          directives: [],
          loc: { start: 106, end: 119 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 122, end: 130 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 133, end: 140 },
              },
              loc: { start: 133, end: 140 },
            },
            loc: { start: 132, end: 141 },
          },
          directives: [],
          loc: { start: 122, end: 141 },
        },
      ],
      loc: { start: 62, end: 143 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 156, end: 161 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 166, end: 177 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 178, end: 182 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 184, end: 190 },
                },
                loc: { start: 184, end: 190 },
              },
              directives: [],
              loc: { start: 178, end: 190 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 194, end: 204 },
              },
              loc: { start: 194, end: 204 },
            },
            loc: { start: 193, end: 205 },
          },
          directives: [],
          loc: { start: 166, end: 205 },
        },
      ],
      loc: { start: 144, end: 207 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 214, end: 224 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 229, end: 231 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 233, end: 235 },
              },
              loc: { start: 233, end: 235 },
            },
            loc: { start: 233, end: 236 },
          },
          directives: [],
          loc: { start: 229, end: 236 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 239, end: 243 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 245, end: 251 },
              },
              loc: { start: 245, end: 251 },
            },
            loc: { start: 245, end: 252 },
          },
          directives: [],
          loc: { start: 239, end: 252 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 255, end: 259 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 261, end: 267 },
              },
              loc: { start: 261, end: 267 },
            },
            loc: { start: 261, end: 268 },
          },
          directives: [],
          loc: { start: 255, end: 268 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 271, end: 279 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 282, end: 289 },
              },
              loc: { start: 282, end: 289 },
            },
            loc: { start: 281, end: 290 },
          },
          directives: [],
          loc: { start: 271, end: 290 },
        },
      ],
      loc: { start: 209, end: 292 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 305, end: 310 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 315, end: 322 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 323, end: 325 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 327, end: 329 },
                  },
                  loc: { start: 327, end: 329 },
                },
                loc: { start: 327, end: 330 },
              },
              directives: [],
              loc: { start: 323, end: 330 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 333, end: 340 },
            },
            loc: { start: 333, end: 340 },
          },
          directives: [],
          loc: { start: 315, end: 340 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 343, end: 351 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 352, end: 356 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 358, end: 364 },
                },
                loc: { start: 358, end: 364 },
              },
              directives: [],
              loc: { start: 352, end: 364 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 368, end: 375 },
              },
              loc: { start: 368, end: 375 },
            },
            loc: { start: 367, end: 376 },
          },
          directives: [],
          loc: { start: 343, end: 376 },
        },
      ],
      loc: { start: 293, end: 378 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 385, end: 392 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 397, end: 399 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 401, end: 403 },
              },
              loc: { start: 401, end: 403 },
            },
            loc: { start: 401, end: 404 },
          },
          directives: [],
          loc: { start: 397, end: 404 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 407, end: 411 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 413, end: 419 },
              },
              loc: { start: 413, end: 419 },
            },
            loc: { start: 413, end: 420 },
          },
          directives: [],
          loc: { start: 407, end: 420 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 423, end: 427 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 429, end: 435 },
              },
              loc: { start: 429, end: 435 },
            },
            loc: { start: 429, end: 436 },
          },
          directives: [],
          loc: { start: 423, end: 436 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 439, end: 450 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 452, end: 458 },
              },
              loc: { start: 452, end: 458 },
            },
            loc: { start: 452, end: 459 },
          },
          directives: [],
          loc: { start: 439, end: 459 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 462, end: 467 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 469, end: 472 },
              },
              loc: { start: 469, end: 472 },
            },
            loc: { start: 469, end: 473 },
          },
          directives: [],
          loc: { start: 462, end: 473 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 476, end: 481 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 483, end: 489 },
              },
              loc: { start: 483, end: 489 },
            },
            loc: { start: 483, end: 490 },
          },
          directives: [],
          loc: { start: 476, end: 490 },
        },
      ],
      loc: { start: 380, end: 492 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 498, end: 503 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 493, end: 503 },
    },
  ],
  loc: { start: 0, end: 504 },
} as unknown as DocumentNode;
