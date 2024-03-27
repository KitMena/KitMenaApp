var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/KitMena/KitMenaApp.git',
        user: {
            name: 'KitMena',
            email: 'kitmena4@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)