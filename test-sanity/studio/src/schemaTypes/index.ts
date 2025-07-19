import blockContent from './objects/blockContent'
import post from './documents/post'
import navItem from './objects/navItem'
import navigation from './documents/navigation'
import link from './objects/link'
import page from './documents/page'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [post, page, blockContent, link, navItem, navigation]
