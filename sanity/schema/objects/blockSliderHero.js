export default {
    name: "blockSliderHero",
    type: "object",
    title: "Slide",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image"
        },
        {
            name: "title",
            type: "string",
            title: "Texte"
        },
        {
            name: "text",
            title: "Description",
            type: "string"
        },
        {
            name: "navItems",
            type: "array",
            title: "Lien et texte CTA",
            of: [{type: "navItem"}]
        },
    ]
};