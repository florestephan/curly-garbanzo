export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'collection',
            type: 'reference',
            to: [{type: 'collection'}],
            title: 'Collection',
        },
        {
            name: 'type',
            type: 'reference',
            to: [{type: 'jewelryType'}],
            title: 'Type de bijoux',
        },
        {
            name: 'stone',
            type: 'reference',
            to: [{type: 'stone'}],
            title: 'Pierre',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'larefe',
            type: 'string',
            title: 'Ref'
        },
        {
            name: 'keyvalueoption',
            title: 'Popup répéteur',
            type: "object",
            fields: [
                {
                    name: 'title',
                    title: 'Titre',
                    type: 'string'
                },
                {
                    name: 'entryone',
                    title: 'Entrée 1',
                    type: 'string',
                },
                {
                    name: 'optionone',
                    title: 'Valeur 1',
                    type: 'string',
                },
                {
                    name: 'entrytwo',
                    title: 'Entrée 2',
                    type: 'string',
                },
                {
                    name: 'optiontwo',
                    title: 'Valeur 2',
                    type: 'string',
                },
                {
                    name: 'entrythree',
                    title: 'Entrée 3',
                    type: 'string',
                },
                {
                    name: 'optionthree',
                    title: 'Valeur 3',
                    type: 'string',
                },
                {
                    name: 'entryfour',
                    title: 'Entrée 4',
                    type: 'string',
                },
                {
                    name: 'optionfour',
                    title: 'Valeur 4',
                    type: 'string',
                },
                {
                    name: 'sliderPopup',
                    title: 'Image slider',
                    type: "object",
                    fields: [
                        {
                            name: 'blocks',
                            type: 'array',
                            of: [
                                {
                                    type: 'image',
                                    title: 'Image slider',
                                    name: "slideimage",
                                }
                            ]
                        }
                    ]
                },
            ]
        },
    ],
};