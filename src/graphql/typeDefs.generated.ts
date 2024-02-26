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
          directives: [],
          loc: { start: 124, end: 144 },
        },
      ],
      loc: { start: 64, end: 146 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 159, end: 164 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 169, end: 180 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "slug",
                loc: { start: 181, end: 185 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 187, end: 193 },
                },
                loc: { start: 187, end: 193 },
              },
              directives: [],
              loc: { start: 181, end: 193 },
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
                    loc: { start: 197, end: 207 },
                  },
                  loc: { start: 197, end: 207 },
                },
                loc: { start: 197, end: 208 },
              },
              loc: { start: 196, end: 209 },
            },
            loc: { start: 196, end: 210 },
          },
          directives: [],
          loc: { start: 169, end: 210 },
        },
      ],
      loc: { start: 147, end: 212 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 219, end: 229 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 234, end: 236 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 238, end: 240 },
              },
              loc: { start: 238, end: 240 },
            },
            loc: { start: 238, end: 241 },
          },
          directives: [],
          loc: { start: 234, end: 241 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 244, end: 248 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 250, end: 256 },
              },
              loc: { start: 250, end: 256 },
            },
            loc: { start: 250, end: 257 },
          },
          directives: [],
          loc: { start: 244, end: 257 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 260, end: 264 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 266, end: 272 },
              },
              loc: { start: 266, end: 272 },
            },
            loc: { start: 266, end: 273 },
          },
          directives: [],
          loc: { start: 260, end: 273 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 276, end: 284 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Product",
                  loc: { start: 287, end: 294 },
                },
                loc: { start: 287, end: 294 },
              },
              loc: { start: 287, end: 295 },
            },
            loc: { start: 286, end: 296 },
          },
          directives: [],
          loc: { start: 276, end: 296 },
        },
      ],
      loc: { start: 214, end: 298 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 311, end: 316 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 321, end: 328 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 329, end: 331 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 333, end: 335 },
                  },
                  loc: { start: 333, end: 335 },
                },
                loc: { start: 333, end: 336 },
              },
              directives: [],
              loc: { start: 329, end: 336 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 339, end: 346 },
            },
            loc: { start: 339, end: 346 },
          },
          directives: [],
          loc: { start: 321, end: 346 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 349, end: 357 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categorySlug",
                loc: { start: 358, end: 370 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 372, end: 378 },
                },
                loc: { start: 372, end: 378 },
              },
              directives: [],
              loc: { start: 358, end: 378 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "take",
                loc: { start: 380, end: 384 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 386, end: 389 },
                },
                loc: { start: 386, end: 389 },
              },
              directives: [],
              loc: { start: 380, end: 389 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 391, end: 395 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 397, end: 400 },
                },
                loc: { start: 397, end: 400 },
              },
              directives: [],
              loc: { start: 391, end: 400 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "needle",
                loc: { start: 402, end: 408 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 410, end: 416 },
                },
                loc: { start: 410, end: 416 },
              },
              directives: [],
              loc: { start: 402, end: 416 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "notId",
                loc: { start: 418, end: 423 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 425, end: 427 },
                },
                loc: { start: 425, end: 427 },
              },
              directives: [],
              loc: { start: 418, end: 427 },
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
                    loc: { start: 431, end: 438 },
                  },
                  loc: { start: 431, end: 438 },
                },
                loc: { start: 431, end: 439 },
              },
              loc: { start: 430, end: 440 },
            },
            loc: { start: 430, end: 441 },
          },
          directives: [],
          loc: { start: 349, end: 441 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productsCount",
            loc: { start: 444, end: 457 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categorySlug",
                loc: { start: 458, end: 470 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 472, end: 478 },
                },
                loc: { start: 472, end: 478 },
              },
              directives: [],
              loc: { start: 458, end: 478 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "needle",
                loc: { start: 480, end: 486 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 488, end: 494 },
                },
                loc: { start: 488, end: 494 },
              },
              directives: [],
              loc: { start: 480, end: 494 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 497, end: 500 },
              },
              loc: { start: 497, end: 500 },
            },
            loc: { start: 497, end: 501 },
          },
          directives: [],
          loc: { start: 444, end: 501 },
        },
      ],
      loc: { start: 299, end: 503 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductVariant",
        loc: { start: 510, end: 524 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 529, end: 531 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 533, end: 535 },
              },
              loc: { start: 533, end: 535 },
            },
            loc: { start: 533, end: 536 },
          },
          directives: [],
          loc: { start: 529, end: 536 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 539, end: 543 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 545, end: 551 },
              },
              loc: { start: 545, end: 551 },
            },
            loc: { start: 545, end: 552 },
          },
          directives: [],
          loc: { start: 539, end: 552 },
        },
      ],
      loc: { start: 505, end: 554 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 561, end: 568 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 573, end: 575 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 577, end: 579 },
              },
              loc: { start: 577, end: 579 },
            },
            loc: { start: 577, end: 580 },
          },
          directives: [],
          loc: { start: 573, end: 580 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 583, end: 587 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 589, end: 595 },
              },
              loc: { start: 589, end: 595 },
            },
            loc: { start: 589, end: 596 },
          },
          directives: [],
          loc: { start: 583, end: 596 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 599, end: 603 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 605, end: 611 },
              },
              loc: { start: 605, end: 611 },
            },
            loc: { start: 605, end: 612 },
          },
          directives: [],
          loc: { start: 599, end: 612 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 615, end: 626 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 628, end: 634 },
              },
              loc: { start: 628, end: 634 },
            },
            loc: { start: 628, end: 635 },
          },
          directives: [],
          loc: { start: 615, end: 635 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 638, end: 643 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 645, end: 648 },
              },
              loc: { start: 645, end: 648 },
            },
            loc: { start: 645, end: 649 },
          },
          directives: [],
          loc: { start: 638, end: 649 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 652, end: 657 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 659, end: 665 },
              },
              loc: { start: 659, end: 665 },
            },
            loc: { start: 659, end: 666 },
          },
          directives: [],
          loc: { start: 652, end: 666 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "variants",
            loc: { start: 669, end: 677 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ProductVariant",
                  loc: { start: 680, end: 694 },
                },
                loc: { start: 680, end: 694 },
              },
              loc: { start: 680, end: 695 },
            },
            loc: { start: 679, end: 696 },
          },
          directives: [],
          loc: { start: 669, end: 696 },
        },
      ],
      loc: { start: 556, end: 698 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 704, end: 709 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 699, end: 709 },
    },
  ],
  loc: { start: 0, end: 710 },
} as unknown as DocumentNode;
