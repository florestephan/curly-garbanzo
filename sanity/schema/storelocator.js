export const Storelocator = {
    name: "Storelocator",
    title: "Storelocator gestion map",
    type: "document",
    fields: [
        {
            name: 'company',
            title: 'Points de vente',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Adresse",
            name: "location",
            type: "geopoint",
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'richText',
            title: 'Informations adresse',
            type: 'array',
            of: [{type: 'block'}],
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Telephone",
            name: "phone",
            type: "number"
        },
        {
            title: "Itinéraire",
            name: "route",
            type: "url"
        },
        {
            title: "Site Web",
            name: "web",
            type: "url"
        },
        {
            title: "Catégories",
            name: "cols",
            type: "string",
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    {title: "Barro", value: "Barro"},
                    {title: "Barro & Mademoiselle by Barro", value: "Barro & Mademoiselle by Barro"},
                    {title: "Mademoiselle by Barro", value: "Mademoiselle by Barro"}
                ],
                layout: "radio",
                direction: "horizontal"
            }
        }
    ]
}