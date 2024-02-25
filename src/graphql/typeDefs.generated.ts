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
                value: "categorySlug",
                loc: { start: 352, end: 364 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 366, end: 372 },
                },
                loc: { start: 366, end: 372 },
              },
              directives: [],
              loc: { start: 352, end: 372 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 374, end: 378 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 380, end: 383 },
                },
                loc: { start: 380, end: 383 },
              },
              directives: [],
              loc: { start: 374, end: 383 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 385, end: 389 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 391, end: 394 },
                },
                loc: { start: 391, end: 394 },
              },
              directives: [],
              loc: { start: 385, end: 394 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "needle",
                loc: { start: 396, end: 402 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 404, end: 410 },
                },
                loc: { start: 404, end: 410 },
              },
              directives: [],
              loc: { start: 396, end: 410 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "notId",
                loc: { start: 412, end: 417 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 419, end: 425 },
                },
                loc: { start: 419, end: 425 },
              },
              directives: [],
              loc: { start: 412, end: 425 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 429, end: 436 },
              },
              loc: { start: 429, end: 436 },
            },
            loc: { start: 428, end: 437 },
          },
          directives: [],
          loc: { start: 343, end: 437 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productsCount",
            loc: { start: 440, end: 453 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categorySlug",
                loc: { start: 454, end: 466 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 468, end: 474 },
                },
                loc: { start: 468, end: 474 },
              },
              directives: [],
              loc: { start: 454, end: 474 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "needle",
                loc: { start: 476, end: 482 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 484, end: 490 },
                },
                loc: { start: 484, end: 490 },
              },
              directives: [],
              loc: { start: 476, end: 490 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 493, end: 496 } },
            loc: { start: 493, end: 496 },
          },
          directives: [],
          loc: { start: 440, end: 496 },
        },
      ],
      loc: { start: 293, end: 498 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductVariant",
        loc: { start: 505, end: 519 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 524, end: 526 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 528, end: 530 },
              },
              loc: { start: 528, end: 530 },
            },
            loc: { start: 528, end: 531 },
          },
          directives: [],
          loc: { start: 524, end: 531 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 534, end: 538 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 540, end: 546 },
              },
              loc: { start: 540, end: 546 },
            },
            loc: { start: 540, end: 547 },
          },
          directives: [],
          loc: { start: 534, end: 547 },
        },
      ],
      loc: { start: 500, end: 549 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 556, end: 563 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 568, end: 570 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 572, end: 574 },
              },
              loc: { start: 572, end: 574 },
            },
            loc: { start: 572, end: 575 },
          },
          directives: [],
          loc: { start: 568, end: 575 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 578, end: 582 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 584, end: 590 },
              },
              loc: { start: 584, end: 590 },
            },
            loc: { start: 584, end: 591 },
          },
          directives: [],
          loc: { start: 578, end: 591 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 594, end: 598 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 600, end: 606 },
              },
              loc: { start: 600, end: 606 },
            },
            loc: { start: 600, end: 607 },
          },
          directives: [],
          loc: { start: 594, end: 607 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 610, end: 621 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 623, end: 629 },
              },
              loc: { start: 623, end: 629 },
            },
            loc: { start: 623, end: 630 },
          },
          directives: [],
          loc: { start: 610, end: 630 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 633, end: 638 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 640, end: 643 },
              },
              loc: { start: 640, end: 643 },
            },
            loc: { start: 640, end: 644 },
          },
          directives: [],
          loc: { start: 633, end: 644 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 647, end: 652 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 654, end: 660 },
              },
              loc: { start: 654, end: 660 },
            },
            loc: { start: 654, end: 661 },
          },
          directives: [],
          loc: { start: 647, end: 661 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "variants",
            loc: { start: 664, end: 672 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ProductVariant",
                loc: { start: 675, end: 689 },
              },
              loc: { start: 675, end: 689 },
            },
            loc: { start: 674, end: 690 },
          },
          directives: [],
          loc: { start: 664, end: 690 },
        },
      ],
      loc: { start: 551, end: 692 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 698, end: 703 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 693, end: 703 },
    },
  ],
  loc: { start: 0, end: 704 },
} as unknown as DocumentNode;
