export const mlleBarro =
    {
        title: "Mlle Barro",
        name: "mllebarro",
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
                name: 'richText',
                title: 'Texte enrichi centre',
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
                name: 'language',
                type: 'string',
                readOnly: true,
                hidden: true,
            },
            {
                name: 'selectionBlock',
                title: 'Block sélection',
                type: "object",
                fields: [
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
                ]
            },
            {
                name: 'imgRepeater',
                title: 'Image répéteur',
                type: "object",
                fields: [
                    {
                        name: 'blocks',
                        type: 'array',
                        of: [
                            {
                                type: 'object',
                                title: 'Grande image à gauche',
                                name: "leftImgBlock",
                                fields: [
                                    {
                                        name: 'imageLeft',
                                        title: 'Image gauche (grande)',
                                        type: 'image',
                                        options: {hotspot: true}
                                    },
                                    {
                                        name: 'imageRight',
                                        title: 'Image droite (petite)',
                                        type: 'image',
                                        options: {hotspot: true}
                                    },
                                ],
                                preview: {
                                    select: {
                                        media: 'imageLeft'
                                    },
                                    prepare({media}) {
                                        return {
                                            title: 'Grande image à gauche',
                                            media: media
                                        };
                                    }
                                }
                            },
                            {
                                type: 'object',
                                title: 'Grande image à droite',
                                name: "rightImgBlock",
                                fields: [
                                    {
                                        name: 'imageRight',
                                        title: 'Image Droite (grande)',
                                        type: 'image',
                                        options: {hotspot: true}
                                    },
                                    {
                                        name: 'imageLeft',
                                        title: 'Image gauche (petite)',
                                        type: 'image',
                                        options: {hotspot: true}
                                    }
                                ],
                                preview: {
                                    select: {
                                        media: 'imageRight'
                                    },
                                    prepare({media}) {
                                        return {
                                            title: 'Grande image à droite',
                                            media: media
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            },

        ]
    }
