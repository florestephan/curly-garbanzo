/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import {googleMapsInput} from '@sanity/google-maps-input'
import {documentInternationalization} from "@sanity/document-internationalization";
import {i18n} from "@/i18n.config";


export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({defaultApiVersion: apiVersion}),
        googleMapsInput({
            apiKey: process.env.GOOGLE_MAP_KEY
        }),
        documentInternationalization({
            // Required configuration
            supportedLanguages: i18n.languages,
            schemaTypes: ['homepage', 'histoire', 'mllebarro'],
        })
    ],
})
