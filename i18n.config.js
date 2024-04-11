const languages = [
    {id: 'en', title: 'English'},
    {id: 'fr', title: 'French'}
]

// isDeafult

export const i18n = {
    languages,
    base: languages.find(item => {
        item.isDefault?.id
    })
}