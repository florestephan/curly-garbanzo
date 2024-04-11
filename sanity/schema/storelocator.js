export const Storelocator = {
    name: "Storelocator",
    title: "storelocator",
    type: "document",
    fields: [
        {
            name: 'company',
            title: 'Points de vente',
            type: 'string',
        },
        {
            title: "Adresse",
            name: "location",
            type: "geopoint"
        },
        {
            name: 'richText',
            title: 'Informations adresse',
            type: 'array',
            of: [{type: 'block'}],
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
                    {title: "Barro", value: "barro"},
                    {title: "Barro & Mademoiselle by Barro", value: "mllebarro"},
                    {title: "Mademoiselle by Barro", value: "mlle"}
                ],
                layout: "radio",
                direction: "horizontal"
            }
        }
    ]
}