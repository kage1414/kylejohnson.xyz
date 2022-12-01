export default {
  technical_skills: [
    {
      stack: 'frontend',
      technologies: [
        'Javascript',
        'Typescript',
        'Flow',
        'React.js (Hooks and Redux)',
        'GraphQL',
        'Redux',
        'styled-components',
        'HTML5',
        'CSS3',
      ],
    },
    {
      stack: 'backend',
      technologies: [
        'Hack',
        'PHP',
        'Node.js',
        'Express.js',
        'GraphQL',
        'Relay',
        'Service Oriented Architecture (SOA)',
        'NGINX',
        'Memcached',
      ],
    },
    {
      stack: 'databases',
      technologies: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Sequelize ORM',
        'Mongoose ORM',
      ],
    },
    {
      stack: 'testing / deployment',
      technologies: [
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
        'Webpack',
      ],
    },
    {
      stack: 'other tools',
      technologies: [
        'Underscore.js',
        'Cloudflare',
        'Ubuntu',
        'Arch Linux',
        'XController (Meta)',
      ],
    },
  ],
  applications: [
    {
      name: 'Classera',
      active: true,
      url: 'https://github.com/Charlotte-Badger',
      technologies: [
        'Javascript',
        'React',
        'Node',
        'Express',
        'S3',
        'EC2',
        'PM2',
        'Jest',
        'Enzyme',
        'MongoDB',
        'Mongoose',
        'Microservices',
        'WebAPIs',
      ],
      descriptions: [
        {
          description:
            'Built a user facing component using service oriented architecture (SOA) that is responsible for course content.',
        },
        {
          description:
            'Architected a multi-tiered, nested MongoDB schema resulting in high performance and availability.',
        },
        {
          description:
            'Scripted database seeding with async / await to correctly generate and synchronize educational resources.',
        },
        {
          description:
            'Automated testing with Jest, Enzyme, and CircleCI to achieve sufficient unit test coverage.',
        },
        {
          description:
            'Consolidated database retrieval methods to minimize initial render speeds.',
        },
        {
          description:
            'Prepared and maintained detailed service documentation to support future development.',
        },
      ],
    },
    {
      name: 'Perceptible',
      active: true,
      url: 'https://github.com/rpt27-sdc-ldap',
      technologies: [
        'Javascript',
        'Node',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'S3',
      ],
      descriptions: [
        {
          description:
            'Engineered a multi-layered backend system using NGINX to reliably meet service level agreement of 1000 RPS with less than 1500ms response duration.',
        },
        {
          description:
            'Optimized performance of PostgreSQL database containing 10M records by 200%, enabling join queries to complete in under 2ms.',
        },
        {
          description:
            'Implemented Memcached memory caching, reducing compute load on individual services as well as reducing response times.',
        },
        {
          description:
            'Implemented horizontal scaling techniques, increasing fault tolerance and system availability, and reliably handling extended load periods of 1000 RPS, up to 2500 RPS.',
        },
      ],
    },
    {
      name: 'kylejohnson.xyz',
      active: true,
      url: 'https://github.com/kage1414/kylejohnson.xyz',
      technologies: [
        'Typescript',
        'React',
        'Node',
        'Express',
        'AWS',
        'Cloudflare',
      ],
      descriptions: [
        {
          description:
            'Developed single page resume-portfolio with Typescript.',
        },
        {
          description: 'Implement local data pipline.',
        },
        {
          description: 'Deploy to AWS and manage DNS through cloudflare.',
        },
        {
          description: 'Instantiated SSL encryption using Certbot.',
        },
      ],
    },
    {
      name: 'Bike Lockr',
      active: true,
      url: 'https://github.com/kage1414/mvp',
      technologies: [
        'Javascript',
        'React',
        'Node',
        'Express',
        'MongoDB',
        'Axios',
        'Heroku',
      ],
      descriptions: [
        {
          description:
            'Developed a single page app as a minimum viable product, and implemented new features to enhance product.',
        },
        {
          description:
            'Implement data pipeline using Google Geolocation and Bikewise API to determine the user’s current location and retrieve bicycle theft data.',
        },
        {
          description:
            'Contact OpenWeatherMap API to inform the user of precipitation in the forecast.',
        },
        { description: 'Save new results to MongoDB Atlas as backup.' },
        { description: 'Deploy to Heroku.' },
      ],
    },
    {
      name: 'LT Data Collection',
      active: true,
      url: 'https://github.com/kage1414/lt-data-collection',
      technologies: ['Javascript', 'React'],
      descriptions: [
        {
          description:
            'Implemented a data pipeline using Google APIs for staff to understand student performance using React.',
        },
        {
          description:
            'Filter various aspects of student performance and provide insight without manual input.',
        },
        {
          description:
            'Architected a customizable data scheme, allowing for the processing of data in a variety of formats.',
        },
        {
          description:
            'Answer to staff constraints and pre-existing infrastructure.',
        },
      ],
    },
  ],
  experience: [
    {
      employer: 'K2 Partnering Solutions at Meta',
      active: true,
      position: 'Enterprise Software Engineer',
      descriptions: [
        { description: 'Maintainer of multiple supply chain software tools.' },
        {
          description:
            'Design new data storage methods to improve data center planning initiatives.',
        },
        {
          description:
            'Migrate hardcoded data attributes to MySQL database and architect a configurable system to manage data.',
        },
        {
          description:
            'Implement defaulting logic and redesign API response to improve stability of downstream services.',
        },
        {
          description:
            'Consolidate code performing duplicate functions to follow the single responsibility principle.',
        },
        {
          description:
            'Implement high priority feature requests with little notice.',
        },
        { description: 'Analyze and remove runtime-dead code from codebase.' },
        {
          description:
            'Deploy end-to-end testing suites to maintain 80% code coverage.',
        },
      ],
      time: '2021',
    },
    {
      employer: 'Galvanize / Hack Reactor',
      active: true,
      position: 'Software Engineer Resident',
      descriptions: [
        {
          description:
            'Mentor Junior Engineers struggling with blockers and help implement solutions that allow for continued development.',
        },
        {
          description:
            'Conduct daily meetings with Junior Engineers to strengthen and clarify their understanding of technical concepts.',
        },
        {
          description:
            'Debug the codebases of Junior Engineers as needed to assess their personal growth.',
        },
        {
          description:
            'Lead Junior Engineers to develop understanding of new libraries, coding best practices, and test development strategies.',
        },
        {
          description:
            'Correct anti-patterns in Junior Engineer’s codebases to prevent additional issues in the future.',
        },
        {
          description:
            'Measure performance of Junior Engineers and report anti-patterns to management when necessary.',
        },
      ],
      time: '2021',
    },
    {
      employer: 'LyricKeeper',
      active: true,
      position: 'Full Stack Software Engineer',
      descriptions: [
        {
          description:
            'Build user settings page to upgrade and manage premium user subscriptions.',
        },
        {
          description:
            'Enhance usability with new “next / previous lyric” feature, improving and adding value to the user experience.',
        },
        {
          description:
            'Diagnose communication disjunctions between front and back end servers and implement meaningful and unambiguous error handling, resulting in higher user retention.',
        },
        {
          description:
            'Deploy virtual agent to keep backend services active, reducing errors during user creation.',
        },
      ],
      time: '2021 - Present',
    },
    {
      employer: 'Lawrence North High School',
      active: false,
      position: 'Ensemble Director, Collaborative Pianist, Technical Assistant',
      descriptions: [
        {
          description:
            'Direct, rehearse, and perform with combo band to accompany Show Choirs.',
        },
        {
          description:
            'Collaborate with the choir director to produce award-winning shows.',
        },
        {
          description:
            'Coordinate the transportation, setup, and teardown of equipment.',
        },
        {
          description:
            'Implement student data collection workflow using Google Forms and jQuery.',
        },
        {
          description:
            'Record, edit, and produce videos using Adobe Premiere and Logic Pro X in lieu of live performances during the Covid-19 pandemic.',
        },
        {
          description:
            'Design and run live sound and lighting to improve audience experience of in-house performances.',
        },
      ],
      time: '2017 - 2021',
    },
    {
      employer: 'Woodcrafters Woodshop',
      active: false,
      position: 'Assistant Carpenter',
      descriptions: [
        {
          description:
            'Program CNC for optimal material usage and time efficiency.',
        },
        {
          description:
            'Optimize toolpaths to significantly decrease total program runtime by 5 minutes.',
        },
        { description: 'Increase production by ~20%.' },
        { description: 'Construct and assemble final product.' },
        { description: 'Deliver products to customers.' },
      ],
      time: 'June 2015 - July 2017',
    },
  ],
  education: [
    {
      school: 'Hack Reactor',
      active: true,
      time: '2020 - 2021',
      certificate: 'Advanced Software Engineering Immersive',
    },
    {
      school: 'Millikin University',
      active: true,
      time: '2013 - 2017',
      degree: 'B.M. Music Education',
    },
  ],
  general: [],
};
