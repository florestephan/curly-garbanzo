import {defineField} from "sanity";

export const Home =
    {
        title: "Homepage",
        name: "homepage",
        type: "document",
        fields: [
            {
                title: "Titre hero",
                name: "titrehero",
                type: "string"
            },
            {
                name: 'image',
                title: 'Image centre',
                type: 'image'
            },
            {
                name: 'imageRight',
                title: 'Image droite',
                type: 'image'
            },
            {
                name: 'leftBlock',
                title: 'Block de texte gauche',
                type: "object",
                fields: [
                    {
                        name: 'richText',
                        title: 'Texte enrichi',
                        type: 'array',
                        of: [{type: 'block'}],
                    },
                    {
                        name: "navItems",
                        type: "array",
                        title: "Lien et texte CTA",
                        of: [{type: "navItem"}]
                    }
                ]
            },
            {
                name: 'selectionBlock',
                title: 'Block sélection',
                type: "object",
                fields: [
                    {
                        name: 'richText',
                        title: 'Texte enrichi',
                        type: 'array',
                        of: [{type: 'block'}],
                    },
                    {
                        name: "image1",
                        type: "image",
                        title: "Image 1",
                    },
                    {
                        name: "text1",
                        type: "string",
                        title: "Texte 1",
                    },
                    {
                        name: "image2",
                        type: "image",
                        title: "Image 2",
                    },
                    {
                        name: "text2",
                        type: "string",
                        title: "Texte 2",
                    },
                    {
                        name: "image3",
                        type: "image",
                        title: "Image 3",
                    },
                    {
                        name: "text3",
                        type: "string",
                        title: "Texte 3",
                    },
                    {
                        name: "image4",
                        type: "image",
                        title: "Image 4",
                    },
                    {
                        name: "text4",
                        type: "string",
                        title: "Texte 4",
                    },
                    {
                        name: "image5",
                        type: "image",
                        title: "Image 5",
                    },
                    {
                        name: "text5",
                        type: "string",
                        title: "Texte 5",
                    },
                    {
                        name: "navItems",
                        type: "array",
                        title: "Lien et texte CTA",
                        of: [{type: "navItem"}]
                    }
                ]
            },
            {
                name: 'mademoiselleBlock',
                title: 'Block mademoiselle',
                type: "object",
                fields: [
                    {
                        name: 'richText',
                        title: 'Texte enrichi',
                        type: 'array',
                        of: [{type: 'block'}],
                    },
                    {
                        name: "navItems",
                        type: "array",
                        title: "Lien et texte CTA",
                        of: [{type: "navItem"}]
                    },
                    {
                        name: "image1",
                        type: "image",
                        title: "Image 1",
                    },
                    {
                        name: "image2",
                        type: "image",
                        title: "Image 2",
                    }
                ]
            },
            {
                name: 'revendeurs',
                title: 'Block partenaires',
                type: "object",
                fields: [
                    {
                        name: 'richText',
                        title: 'Texte enrichi',
                        type: 'array',
                        of: [{type: 'block'}],
                    },
                    {
                        name: 'slider',
                        type: 'array',
                        of: [
                            {
                                name: 'image',
                                type: 'image',
                            },
                        ],
                    },
                ]
            },
            {
                name: 'pointdevente',
                title: 'Block points de vente',
                type: "object",
                fields: [
                    {
                        name: 'richText',
                        title: 'Texte enrichi',
                        type: 'array',
                        of: [{type: 'block'}],
                    },
                    {
                        name: "navItems",
                        type: "array",
                        title: "Lien et texte CTA",
                        of: [{type: "navItem"}]
                    },
                ]
            },

            {
                name: 'language',
                type: 'string',
                readOnly: true,
                hidden: true,
            }
        ]
    }
