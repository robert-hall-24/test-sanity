// File: schemas/documents/navigation.ts
//File name: navigation.js
//File location: schemas/documents

import {GrNavigate} from 'react-icons/gr'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: GrNavigate,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Navigation items',
      of: [{type: 'navigationItem'}],
    },
  ],
}
