export const legals =
    {
        title: "Legals",
        name: "legals",
        type: "document",
        fields: [
            {
                title: "Titre page",
                name: "herotitle",
                type: "string"
            },
            {
                name: 'richText',
                title: 'Texte enrichi gauche',
                type: 'array',
                of: [{type: 'block'}]
            },
            {
                name: 'richTextRight',
                title: 'Texte enrichi droite',
                type: 'array',
                of: [{type: 'block'}]
            },
            {
                name: "language",
                type: "string",
                readOnly: true,
                hidden: true
            }
        ]
    }

