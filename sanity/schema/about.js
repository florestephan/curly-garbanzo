export const About =
    {
        title: "Histoire",
        name: "histoire",
        type: "document",
        fields: [
            {
                title: "Titre hero",
                name: "titrehero",
                type: "string"
            },
            {
                title: "Photo de gauche",
                type: "image",
                name: "imageleft"
            },
            {
                name: 'rightBlock',
                title: 'Block de texte droite',
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
                name: 'bulletBlock',
                title: 'Block des bulles',
                type: "object",
                fields: [
                    {
                        name: "number1",
                        type: "number",
                        title: "Chiffre bulle 1"
                    },
                    {
                        name: "text1",
                        type: "string",
                        title: "Texte bulle 1"
                    },
                    {
                        name: "number2",
                        type: "number",
                        title: "Chiffre bulle 2"
                    },
                    {
                        name: "text2",
                        type: "string",
                        title: "Texte bulle 2"
                    },
                    {
                        name: "number3",
                        type: "number",
                        title: "Chiffre bulle 3"
                    },
                    {
                        name: "text3",
                        type: "string",
                        title: "Texte bulle 3"
                    },
                ]
            },
            {
                name: 'mlleBLock',
                title: 'Titre + texte + cta & images',
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
                        title: "Image 1"
                    },
                    {
                        name: "image2",
                        type: "image",
                        title: "Image 2"
                    },
                    {
                        name: "image3",
                        type: "image",
                        title: "Image 3"
                    },
                    {
                        name: "image4",
                        type: "image",
                        title: "Image 4"
                    },
                    {
                        name: "image5",
                        type: "image",
                        title: "Image 5"
                    }
                ]
            },
            {
                name: 'speBlock',
                title: 'Titre + texte + cta',
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
                name: 'pdv',
                title: 'Titre + texte + cta',
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
                name: 'language',
                type: 'string',
                readOnly: true,
                hidden: true,
            }
        ]
    }
