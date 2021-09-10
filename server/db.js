export const Data = {
  'technical skills': [
    {
      type: 'frontend',
      technologies:
        [
          'Javascript',
          'Typescript',
          'React.js',
          'GraphQL',
          'Redux',
          'styled-components',
          'HTML5',
          'CSS'
        ]
    },
    {
      type: 'backend',
      technologies:
        [
          'Node.js',
          'Express.js',
          'GraphQL',
          'Service Oriented Architecture (SOA)',
          'AWS / EC2 / S3',
          'Heroku',
          'CircleCI',
          'NGINX',
          'Memcached',
          'Cloudflare'
        ]
    },
    {
      type: 'libraries',
      technologies:
        [
          'Underscore.js',
          'Mocha',
          'Chai',
          'Jest',
          'Enzyme'
        ]
    },
    {
      type: 'databases',
      technologies:
        [
          'MySQL',
          'PostgreSQL',
          'MongoDB',
          'Sequelize ORM',
          'Mongoose ORM' 
        ]
    },
    {
      type: 'tools',
      technologies:
        [
          'Webpack',
          'Babel',
          'Git',
          'Agile Methodology',
          'VSCode',
          'Ubuntu',
          'Arch Linux'
        ]
    }
  ],
  'applications': [
    {
      name: 'Classera',
      url: 'https://github.com/Charlotte-Badger',
      technologies: ['Javascript', 'React', 'Node', 'Express', 'S3', 'EC2', 'PM2', 'Jest', 'Enzyme', 'MongoDB', 'Mongoose', 'Microservices', 'WebAPIs'],
      description: [
        '• Built a user facing component using service oriented architecture (SOA) that is responsible for course content.', 
        '• Architected a multi-tiered, nested MongoDB schema resulting in high performance and availability.', 
        '• Scripted database seeding with async / await to correctly generate and synchronize educational resources.', 
        '• Automated testing with Jest, Enzyme, and CircleCI to achieve sufficient unit test coverage.', 
        '• Consolidated database retrieval methods to minimize initial render speeds.', 
        '• Prepared and maintained detailed service documentation to support future development.'
      ]
    },
    {
      name: 'Perceptible',
      url: 'https://github.com/rpt27-sdc-ldap',
      technologies: ['Javascript', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'S3'],
      description: [
        '• Engineered a multi-layered backend system using NGINX to reliably meet service level agreement of 1000 RPS with less than 1500ms response duration.',
        '• Optimized performance of PostgreSQL database containing 10M records by 200%, enabling join queries to complete in under 2ms.',
        '• Implemented Memcached memory caching, reducing compute load on individual services as well as reducing response times.',
        '• Implemented horizontal scaling techniques, increasing fault tolerance and system availability, and reliably handling extended load periods of 1000 RPS, up to 2500 RPS.'
      ]
    },
    {
      name: 'kylejohnson.xyz',
      url: 'https://github.com/kage1414/kylejohnson.xyz',
      technologies: ['Typescript', 'React', 'Node', 'Express', 'AWS', 'Cloudflare'],
      description: [
        '• Developed single page resume-portfolio with Typescript.',
        '• Implement local data pipline.',
        '• Deploy to AWS and manage DNS through cloudflare.',
        '• Instantiated SSL encryption using Certbot.'
      ]
    },
    {
      name: 'Bike Lockr',
      url: 'https://github.com/kage1414/mvp',
      technologies: ['Javascript', 'React', 'Node', 'Express', 'MongoDB', 'Axios', 'Heroku'],
      description: [
        '• Developed a single page app as a minimum viable product, and implemented new features to enhance product.',
        '• Implement data pipeline using Google Geolocation and Bikewise API to determine the user’s current location and retrieve bicycle theft data.',
        '• Contact OpenWeatherMap API to inform the user of precipitation in the forecast.',
        '• Save new results to MongoDB Atlas as backup.',
        '• Deploy to Heroku.'
      ]
    },
    {
      name: 'LT Data Collection',
      url: 'https://github.com/kage1414/dataCollection',
      technologies: ['Javascript', 'React'],
      description: [
        '• Implemented a data pipeline using Google APIs for staff to understand student performance using React.',
        '• Filter various aspects of student performance and provide insight without manual input.',
        '• Architected a customizable data scheme, allowing for the processing of data in a variety of formats.',
        '• Answer to staff constraints and pre-existing infrastructure.'
      ]
    }
  ],
  'experience': [
    {
      employer: 'LyricKeeper',
      position: 'Full Stack Software Engineer (Volunteer)',
      description: [
        '• Diagnosed communication disjunctions between front and back end servers and implemented meaningful and unambiguous error handling which resulted in higher user retention.',
        '• Deployed virtual agent to keep backend services active, reducing errors during user creation.'
      ],
      time: 'August 2021 - Present'
    },
    {
      employer: 'Lawrence North High School',
      position: 'Ensemble Director, Collaborative Pianist, Technical Assistant',
      description: [
        '• Direct, rehearse, and perform with combo band to accompany Show Choirs.',
        '• Collaborate with the choir director to produce award-winning shows.',
        '• Coordinate the transportation, setup, and teardown of equipment.',
        '• Implement student data collection workflow using Google Forms and jQuery.',
        '• Record, edit, and produce videos using Adobe Premiere and Logic Pro X in lieu of live performances during the Covid-19 pandemic.',
        '• Design and run live sound and lighting to improve audience experience of in-house performances.'
      ],
      time: 'August 2017 - August 2021'
    },
    {
      employer: 'Woodcrafters Woodshop',
      position: 'Assistant Carpenter',
      description: [
        '• Program CNC for optimal material usage and time efficiency.',
        '• Optimize toolpaths to significantly decrease total program runtime by 5 minutes.',
        '• Increase production by ~20%.',
        '• Construct and assemble final product.',
        '• Deliver products to customers.'
      ],
      time: 'June 2015 - July 2017'
    }
  ],
  'education': [
    {
      school: 'Hack Reactor',
      time: 'December 2020 - September 2021',
      certificate: 'Advanced Software Engineering Immersive'
    },
    {
      school: 'Millikin University',
      time: 'August 2013 - May 2017',
      degree: 'B.M. Music Education'
    }
  ],
  'general': []
}