export default {
    name: 'jewelryType',
    type: 'document',
    title: 'Type de bijoux',
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
    ],
};
