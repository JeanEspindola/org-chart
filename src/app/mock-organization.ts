import { Organization } from './organization';

export const ORGANIZATION: Organization = {
  'organization': 'Lobster',
  'location': 'Austin',
  'teams': [
    {
      'team': 'Lobster Tech',
      'location': 'Amsterdam',
      'picture': 'amsterdam.jpg',
      'members': [
        {
          'name': 'Ben Samuel',
          'age': 29,
          'role': 'Software Engineer',
          'imageUrl': 'https://randomuser.me/api/portraits/men/30.jpg'
        },
        {
          'name': 'Ana James',
          'age': 39,
          'role': 'Product Owner',
          'imageUrl': 'https://randomuser.me/api/portraits/women/68.jpg'
        },
        {
          'name': 'Edward Finn',
          'age': 23,
          'role': 'Software Architech',
          'imageUrl': 'https://randomuser.me/api/portraits/men/83.jpg'
        }
      ]
    },
    {
      'team': 'Lobster Ink',
      'location': 'Cape Town',
      'picture': 'cape-town.jpg',
      'members': [
        {
          'name': 'Sam Jones',
          'age': 49,
          'role': 'CEO',
          'imageUrl': 'https://randomuser.me/api/portraits/women/30.jpg'
        },
        {
          'name': 'Helen Anthony',
          'age': 26,
          'role': 'Recruiter',
          'imageUrl': 'https://randomuser.me/api/portraits/women/48.jpg'
        },
        {
          'name': 'Gregg Best',
          'age': 21,
          'role': 'Finance Analist',
          'imageUrl': 'https://randomuser.me/api/portraits/men/23.jpg'
        }
      ]
    }
  ]
};
