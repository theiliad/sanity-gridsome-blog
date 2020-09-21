export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f68d76c3d363e1270bbb0b8',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-1ay1meyg',
                  apiId: '911bb20b-251e-4114-a461-ad1cb42df567'
                },
                {
                  buildHookId: '5f68d76c96cc2e11415b5507',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-hfpmmwzv',
                  apiId: '371ca6c1-e150-4adf-8d0a-906b2454404a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theiliad/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-hfpmmwzv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
