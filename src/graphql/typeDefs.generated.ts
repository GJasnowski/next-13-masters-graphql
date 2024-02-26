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
                  value: "ID",
                  loc: { start: 419, end: 421 },
                },
                loc: { start: 419, end: 421 },
              },
              directives: [],
              loc: { start: 412, end: 421 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 425, end: 432 },
              },
              loc: { start: 425, end: 432 },
            },
            loc: { start: 424, end: 433 },
          },
          directives: [],
          loc: { start: 343, end: 433 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productsCount",
            loc: { start: 436, end: 449 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categorySlug",
                loc: { start: 450, end: 462 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 464, end: 470 },
                },
                loc: { start: 464, end: 470 },
              },
              directives: [],
              loc: { start: 450, end: 470 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "needle",
                loc: { start: 472, end: 478 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 480, end: 486 },
                },
                loc: { start: 480, end: 486 },
              },
              directives: [],
              loc: { start: 472, end: 486 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 489, end: 492 } },
            loc: { start: 489, end: 492 },
          },
          directives: [],
          loc: { start: 436, end: 492 },
        },
      ],
      loc: { start: 293, end: 494 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductVariant",
        loc: { start: 501, end: 515 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 520, end: 522 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 524, end: 526 },
              },
              loc: { start: 524, end: 526 },
            },
            loc: { start: 524, end: 527 },
          },
          directives: [],
          loc: { start: 520, end: 527 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 530, end: 534 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 536, end: 542 },
              },
              loc: { start: 536, end: 542 },
            },
            loc: { start: 536, end: 543 },
          },
          directives: [],
          loc: { start: 530, end: 543 },
        },
      ],
      loc: { start: 496, end: 545 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 552, end: 559 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 564, end: 566 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 568, end: 570 },
              },
              loc: { start: 568, end: 570 },
            },
            loc: { start: 568, end: 571 },
          },
          directives: [],
          loc: { start: 564, end: 571 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 574, end: 578 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 580, end: 586 },
              },
              loc: { start: 580, end: 586 },
            },
            loc: { start: 580, end: 587 },
          },
          directives: [],
          loc: { start: 574, end: 587 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 590, end: 594 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 596, end: 602 },
              },
              loc: { start: 596, end: 602 },
            },
            loc: { start: 596, end: 603 },
          },
          directives: [],
          loc: { start: 590, end: 603 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 606, end: 617 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 619, end: 625 },
              },
              loc: { start: 619, end: 625 },
            },
            loc: { start: 619, end: 626 },
          },
          directives: [],
          loc: { start: 606, end: 626 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 629, end: 634 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 636, end: 639 },
              },
              loc: { start: 636, end: 639 },
            },
            loc: { start: 636, end: 640 },
          },
          directives: [],
          loc: { start: 629, end: 640 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 643, end: 648 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 650, end: 656 },
              },
              loc: { start: 650, end: 656 },
            },
            loc: { start: 650, end: 657 },
          },
          directives: [],
          loc: { start: 643, end: 657 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "variants",
            loc: { start: 660, end: 668 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ProductVariant",
                loc: { start: 671, end: 685 },
              },
              loc: { start: 671, end: 685 },
            },
            loc: { start: 670, end: 686 },
          },
          directives: [],
          loc: { start: 660, end: 686 },
        },
      ],
      loc: { start: 547, end: 688 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 694, end: 699 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 689, end: 699 },
    },
  ],
  loc: { start: 0, end: 700 },
} as unknown as DocumentNode;
