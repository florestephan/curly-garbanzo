export const produitsHero = {
    name: "produitsHero",
    type: "document",
    title: "Hero produits",

    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            title: 'Slider hero',
            name: 'slider',
            type: 'array',
            of: [{type: "blockSliderHero"}],
        },
        {
            name: "informationsProducts",
            type: "string",
            title: "Informations produits"
        }
    ]
}