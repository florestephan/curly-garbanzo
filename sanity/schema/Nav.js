import {GrNavigate} from "react-icons/gr";


export default {
    name: "nav",
    type: "document",
    title: "Navigation",
    icon: GrNavigate,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "id",
            type: "slug",
            title: "Id",
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: "navItems",
            type: "array",
            title: "Navigation items",
            of: [{type: "navItem"}]
        }
    ],
};