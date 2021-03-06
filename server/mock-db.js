module.exports = {
  'technical_skills': [
    {
      type: 'frontend',
      technologies:
        [
          'Javascript',
          'Typescript',
          'Flow',
          'React.js (Hooks and Redux)',
          'GraphQL',
          'Redux',
          'styled-components',
          'HTML5',
          'CSS3'
        ]
    },
    {
      type: 'backend',
      technologies:
        [
          'Hack',
          'PHP',
          'Node.js',
          'Express.js',
          'GraphQL',
          'Relay',
          'Service Oriented Architecture (SOA)',
          'NGINX',
          'Memcached',
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
      type: 'testing / deployment',
      technologies:
        [
          'Jest / Jest E2E',
          'Mocha',
          'Chai',
          'Jest / Jest E2E',
          'Enzyme',
          'React Testing Library',
          'CircleCI',
          'AWS / EC2 / S3',
          'Heroku',
          'Git',
          'Webpack'
        ]
    },
    {
      type: 'other tools',
      technologies: [
        'Underscore.js',
        'Cloudflare',
        'Ubuntu',
        'Arch Linux',
        'XController (Meta)'
      ]
    }
  ],
  'applications': [
    {
      name: 'Classera',
      url: 'https://github.com/Charlotte-Badger',
      technologies: ['Javascript', 'React', 'Node', 'Express', 'S3', 'EC2', 'PM2', 'Jest', 'Enzyme', 'MongoDB', 'Mongoose', 'Microservices', 'WebAPIs'],
      description: [
        'Built a user facing component using service oriented architecture (SOA) that is responsible for course content.',
        'Architected a multi-tiered, nested MongoDB schema resulting in high performance and availability.',
        'Scripted database seeding with async / await to correctly generate and synchronize educational resources.',
        'Automated testing with Jest, Enzyme, and CircleCI to achieve sufficient unit test coverage.',
        'Consolidated database retrieval methods to minimize initial render speeds.',
        'Prepared and maintained detailed service documentation to support future development.'
      ]
    },
    {
      name: 'Perceptible',
      url: 'https://github.com/rpt27-sdc-ldap',
      technologies: ['Javascript', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'S3'],
      description: [
        'Engineered a multi-layered backend system using NGINX to reliably meet service level agreement of 1000 RPS with less than 1500ms response duration.',
        'Optimized performance of PostgreSQL database containing 10M records by 200%, enabling join queries to complete in under 2ms.',
        'Implemented Memcached memory caching, reducing compute load on individual services as well as reducing response times.',
        'Implemented horizontal scaling techniques, increasing fault tolerance and system availability, and reliably handling extended load periods of 1000 RPS, up to 2500 RPS.'
      ]
    },
    {
      name: 'kylejohnson.xyz',
      url: 'https://github.com/kage1414/kylejohnson.xyz',
      technologies: ['Typescript', 'React', 'Node', 'Express', 'AWS', 'Cloudflare'],
      description: [
        'Developed single page resume-portfolio with Typescript.',
        'Implement local data pipline.',
        'Deploy to AWS and manage DNS through cloudflare.',
        'Instantiated SSL encryption using Certbot.'
      ]
    },
    {
      name: 'Bike Lockr',
      url: 'https://github.com/kage1414/mvp',
      technologies: ['Javascript', 'React', 'Node', 'Express', 'MongoDB', 'Axios', 'Heroku'],
      description: [
        'Developed a single page app as a minimum viable product, and implemented new features to enhance product.',
        'Implement data pipeline using Google Geolocation and Bikewise API to determine the user???s current location and retrieve bicycle theft data.',
        'Contact OpenWeatherMap API to inform the user of precipitation in the forecast.',
        'Save new results to MongoDB Atlas as backup.',
        'Deploy to Heroku.'
      ]
    },
    {
      name: 'LT Data Collection',
      url: 'https://github.com/kage1414/lt-data-collection',
      technologies: ['Javascript', 'React'],
      description: [
        'Implemented a data pipeline using Google APIs for staff to understand student performance using React.',
        'Filter various aspects of student performance and provide insight without manual input.',
        'Architected a customizable data scheme, allowing for the processing of data in a variety of formats.',
        'Answer to staff constraints and pre-existing infrastructure.'
      ]
    }
  ],
  'experience': [
    {
      employer: 'K2 Partnering Solutions at Meta',
      position: 'Full Stack Software Engineer',
      description: [
        'Refactor synchronous operations in data pipelines to use async / await, improving speed and reliability.',
        'Debug controllers delivering incorrectly formatted data and modify backend code to return data in correct format.',
        'Analyze and remove runtime-dead code from Facebook codebase.',
        'Deploy end-to-end testing suites to maintain 80% code coverage.',
        'Refactor legacy PHP to utilize more reliable Hack implementations.',
        'Implement static typing to frontend React components using Flow.'

      ],
      time: '2021',
      logo: 'Meta-logo.png'
    },
    {
      employer: 'Galvanize / Hack Reactor',
      position: 'Software Engineer Resident',
      description: [
        'Mentor Junior Engineers struggling with blockers and help implement solutions that allow for continued development.',
        'Conduct daily meetings with Junior Engineers to strengthen and clarify their understanding of technical concepts.',
        'Debug the codebases of Junior Engineers as needed to assess their personal growth.',
        'Lead Junior Engineers to develop understanding of new libraries, coding best practices, and test development strategies.',
        'Correct anti-patterns in Junior Engineer???s codebases to prevent additional issues in the future.',
        'Measure performance of Junior Engineers and report anti-patterns to management when necessary.'


      ],
      time: '2021'
    },
    {
      employer: 'LyricKeeper',
      position: 'Full Stack Software Engineer',
      description: [
        'Diagnose communication disjunctions between front and back end servers and implement meaningful and unambiguous error handling utilizing React Hooks, resulting in higher user retention.',
        'Deploy virtual agent to keep backend services active, reducing errors during user creation.',
        'Enhance usability with new ???next and previous lyric??? feature, improving and adding value to the user experience.'

      ],
      time: '2021 - Present'
    },
    {
      employer: 'Lawrence North High School',
      position: 'Ensemble Director, Collaborative Pianist, Technical Assistant',
      description: [
        'Direct, rehearse, and perform with combo band to accompany Show Choirs.',
        'Collaborate with the choir director to produce award-winning shows.',
        'Coordinate the transportation, setup, and teardown of equipment.',
        'Implement student data collection workflow using Google Forms and jQuery.',
        'Record, edit, and produce videos using Adobe Premiere and Logic Pro X in lieu of live performances during the Covid-19 pandemic.',
        'Design and run live sound and lighting to improve audience experience of in-house performances.'
      ],
      time: '2017 - 2021'
    },
    // {
    //   employer: 'Woodcrafters Woodshop',
    //   position: 'Assistant Carpenter',
    //   description: [
    //     'Program CNC for optimal material usage and time efficiency.',
    //     'Optimize toolpaths to significantly decrease total program runtime by 5 minutes.',
    //     'Increase production by ~20%.',
    //     'Construct and assemble final product.',
    //     'Deliver products to customers.'
    //   ],
    //   time: 'June 2015 - July 2017'
    // }
  ],
  'education': [
    {
      school: 'Hack Reactor',
      time: '2020 - 2021',
      certificate: 'Advanced Software Engineering Immersive'
    },
    {
      school: 'Millikin University',
      time: '2013 - 2017',
      degree: 'B.M. Music Education'
    }
  ],
  'general': []
};
