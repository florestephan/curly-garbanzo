// i18n.config.mjs
const languages = [
    {id: 'en', title: 'English', isDefault: false},
    {id: 'fr', title: 'French', isDefault: true}
];

export const i18n = {
    languages,
    base: languages.find(lang => lang.id)
};
