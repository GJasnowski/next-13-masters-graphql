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
            value: "products",
            loc: { start: 22, end: 30 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 31, end: 33 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 35, end: 37 },
                  },
                  loc: { start: 35, end: 37 },
                },
                loc: { start: 35, end: 38 },
              },
              directives: [],
              loc: { start: 31, end: 38 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 41, end: 48 },
            },
            loc: { start: 41, end: 48 },
          },
          directives: [],
          loc: { start: 22, end: 48 },
        },
      ],
      loc: { start: 0, end: 50 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 57, end: 64 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 69, end: 71 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 73, end: 75 } },
              loc: { start: 73, end: 75 },
            },
            loc: { start: 73, end: 76 },
          },
          directives: [],
          loc: { start: 69, end: 76 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 79, end: 83 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 85, end: 91 },
              },
              loc: { start: 85, end: 91 },
            },
            loc: { start: 85, end: 92 },
          },
          directives: [],
          loc: { start: 79, end: 92 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 95, end: 99 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 101, end: 107 },
              },
              loc: { start: 101, end: 107 },
            },
            loc: { start: 101, end: 108 },
          },
          directives: [],
          loc: { start: 95, end: 108 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 111, end: 122 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 124, end: 130 },
              },
              loc: { start: 124, end: 130 },
            },
            loc: { start: 124, end: 131 },
          },
          directives: [],
          loc: { start: 111, end: 131 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 134, end: 139 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 141, end: 144 },
              },
              loc: { start: 141, end: 144 },
            },
            loc: { start: 141, end: 145 },
          },
          directives: [],
          loc: { start: 134, end: 145 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 148, end: 153 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 155, end: 161 },
              },
              loc: { start: 155, end: 161 },
            },
            loc: { start: 155, end: 162 },
          },
          directives: [],
          loc: { start: 148, end: 162 },
        },
      ],
      loc: { start: 52, end: 164 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 170, end: 175 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 165, end: 175 },
    },
  ],
  loc: { start: 0, end: 176 },
} as unknown as DocumentNode;
