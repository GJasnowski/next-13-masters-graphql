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
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 49, end: 57 },
                  },
                  loc: { start: 49, end: 57 },
                },
                loc: { start: 49, end: 58 },
              },
              loc: { start: 48, end: 59 },
            },
            loc: { start: 48, end: 60 },
          },
          directives: [],
          loc: { start: 22, end: 60 },
        },
      ],
      loc: { start: 0, end: 62 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 69, end: 77 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 82, end: 84 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 86, end: 88 } },
              loc: { start: 86, end: 88 },
            },
            loc: { start: 86, end: 89 },
          },
          directives: [],
          loc: { start: 82, end: 89 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 92, end: 96 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 98, end: 104 },
              },
              loc: { start: 98, end: 104 },
            },
            loc: { start: 98, end: 105 },
          },
          directives: [],
          loc: { start: 92, end: 105 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 108, end: 112 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 114, end: 120 },
              },
              loc: { start: 114, end: 120 },
            },
            loc: { start: 114, end: 121 },
          },
          directives: [],
          loc: { start: 108, end: 121 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 124, end: 132 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 135, end: 142 },
                  },
                  loc: { start: 135, end: 142 },
                },
                loc: { start: 135, end: 143 },
              },
              loc: { start: 134, end: 144 },
            },
            loc: { start: 134, end: 145 },
          },
          directives: [],
          loc: { start: 124, end: 145 },
        },
      ],
      loc: { start: 64, end: 147 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 160, end: 165 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 170, end: 181 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 182, end: 186 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 188, end: 194 },
                },
                loc: { start: 188, end: 194 },
              },
              directives: [],
              loc: { start: 182, end: 194 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Collection",
                    loc: { start: 198, end: 208 },
                  },
                  loc: { start: 198, end: 208 },
                },
                loc: { start: 198, end: 209 },
              },
              loc: { start: 197, end: 210 },
            },
            loc: { start: 197, end: 211 },
          },
          directives: [],
          loc: { start: 170, end: 211 },
        },
      ],
      loc: { start: 148, end: 213 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 220, end: 230 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 235, end: 237 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 239, end: 241 },
              },
              loc: { start: 239, end: 241 },
            },
            loc: { start: 239, end: 242 },
          },
          directives: [],
          loc: { start: 235, end: 242 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 245, end: 249 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 251, end: 257 },
              },
              loc: { start: 251, end: 257 },
            },
            loc: { start: 251, end: 258 },
          },
          directives: [],
          loc: { start: 245, end: 258 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 261, end: 265 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 267, end: 273 },
              },
              loc: { start: 267, end: 273 },
            },
            loc: { start: 267, end: 274 },
          },
          directives: [],
          loc: { start: 261, end: 274 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 277, end: 285 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 288, end: 295 },
                  },
                  loc: { start: 288, end: 295 },
                },
                loc: { start: 288, end: 296 },
              },
              loc: { start: 287, end: 297 },
            },
            loc: { start: 287, end: 298 },
          },
          directives: [],
          loc: { start: 277, end: 298 },
        },
      ],
      loc: { start: 215, end: 300 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 313, end: 318 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 323, end: 330 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 331, end: 333 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 335, end: 337 },
                  },
                  loc: { start: 335, end: 337 },
                },
                loc: { start: 335, end: 338 },
              },
              directives: [],
              loc: { start: 331, end: 338 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 341, end: 348 },
            },
            loc: { start: 341, end: 348 },
          },
          directives: [],
          loc: { start: 323, end: 348 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 351, end: 359 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categorySlug",
                loc: { start: 360, end: 372 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 374, end: 380 },
                },
                loc: { start: 374, end: 380 },
              },
              directives: [],
              loc: { start: 360, end: 380 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 382, end: 386 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 388, end: 391 },
                },
                loc: { start: 388, end: 391 },
              },
              directives: [],
              loc: { start: 382, end: 391 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 393, end: 397 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 399, end: 402 },
                },
                loc: { start: 399, end: 402 },
              },
              directives: [],
              loc: { start: 393, end: 402 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "needle",
                loc: { start: 404, end: 410 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 412, end: 418 },
                },
                loc: { start: 412, end: 418 },
              },
              directives: [],
              loc: { start: 404, end: 418 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "notId",
                loc: { start: 420, end: 425 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 427, end: 429 },
                },
                loc: { start: 427, end: 429 },
              },
              directives: [],
              loc: { start: 420, end: 429 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 433, end: 440 },
                  },
                  loc: { start: 433, end: 440 },
                },
                loc: { start: 433, end: 441 },
              },
              loc: { start: 432, end: 442 },
            },
            loc: { start: 432, end: 443 },
          },
          directives: [],
          loc: { start: 351, end: 443 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productsCount",
            loc: { start: 446, end: 459 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categorySlug",
                loc: { start: 460, end: 472 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 474, end: 480 },
                },
                loc: { start: 474, end: 480 },
              },
              directives: [],
              loc: { start: 460, end: 480 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "needle",
                loc: { start: 482, end: 488 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 490, end: 496 },
                },
                loc: { start: 490, end: 496 },
              },
              directives: [],
              loc: { start: 482, end: 496 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 499, end: 502 },
              },
              loc: { start: 499, end: 502 },
            },
            loc: { start: 499, end: 503 },
          },
          directives: [],
          loc: { start: 446, end: 503 },
        },
      ],
      loc: { start: 301, end: 505 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductVariant",
        loc: { start: 512, end: 526 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 531, end: 533 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 535, end: 537 },
              },
              loc: { start: 535, end: 537 },
            },
            loc: { start: 535, end: 538 },
          },
          directives: [],
          loc: { start: 531, end: 538 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 541, end: 545 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 547, end: 553 },
              },
              loc: { start: 547, end: 553 },
            },
            loc: { start: 547, end: 554 },
          },
          directives: [],
          loc: { start: 541, end: 554 },
        },
      ],
      loc: { start: 507, end: 556 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 563, end: 570 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 575, end: 577 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 579, end: 581 },
              },
              loc: { start: 579, end: 581 },
            },
            loc: { start: 579, end: 582 },
          },
          directives: [],
          loc: { start: 575, end: 582 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 585, end: 589 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 591, end: 597 },
              },
              loc: { start: 591, end: 597 },
            },
            loc: { start: 591, end: 598 },
          },
          directives: [],
          loc: { start: 585, end: 598 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 601, end: 605 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 607, end: 613 },
              },
              loc: { start: 607, end: 613 },
            },
            loc: { start: 607, end: 614 },
          },
          directives: [],
          loc: { start: 601, end: 614 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 617, end: 628 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 630, end: 636 },
              },
              loc: { start: 630, end: 636 },
            },
            loc: { start: 630, end: 637 },
          },
          directives: [],
          loc: { start: 617, end: 637 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 640, end: 645 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 647, end: 650 },
              },
              loc: { start: 647, end: 650 },
            },
            loc: { start: 647, end: 651 },
          },
          directives: [],
          loc: { start: 640, end: 651 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 654, end: 659 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 661, end: 667 },
              },
              loc: { start: 661, end: 667 },
            },
            loc: { start: 661, end: 668 },
          },
          directives: [],
          loc: { start: 654, end: 668 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "variants",
            loc: { start: 671, end: 679 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductVariant",
                    loc: { start: 682, end: 696 },
                  },
                  loc: { start: 682, end: 696 },
                },
                loc: { start: 682, end: 697 },
              },
              loc: { start: 681, end: 698 },
            },
            loc: { start: 681, end: 699 },
          },
          directives: [],
          loc: { start: 671, end: 699 },
        },
      ],
      loc: { start: 558, end: 701 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 707, end: 712 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 702, end: 712 },
    },
  ],
  loc: { start: 0, end: 713 },
} as unknown as DocumentNode;
