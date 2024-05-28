export const Revendeurs = {
    title: "Revendeurs",
    name: "revendeurs",
    type: "document",
    fields: [
        {
            title: "Page revendeurs (titre seulement pour sanity)",
            name: "titlePage",
            type: "string"
        },
        {
            name: "headerTitleMap",
            title: "Titre texte au-dessus de la map",
            type: "object",
            fields: [
                {
                    name: 'richText',
                    title: 'Texte enrichi centre',
                    type: 'array',
                    of: [{type: 'block'}],
                }
            ]
        },
        {
            name: "footerTitleMap",
            title: "Titre texte cta en-dessous de la map",
            type: "object",
            fields: [
                {
                    name: "image",
                    title: "Image à gauche",
                    type: "image"
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