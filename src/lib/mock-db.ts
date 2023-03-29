import { Snapshot } from './seed';

const mockDb: Snapshot = {
  technical_skills: [
    {
      stack: 'frontend',
      technologies: [
        { name: 'Next JS', url: null, priority: 1 },
        { name: 'React', url: null, priority: 1 },
        { name: 'Axios', url: null, priority: 15 },
        { name: 'CSS', url: null, priority: 7 },
        { name: 'Flow', url: null, priority: 5 },
        { name: 'HTML', url: null, priority: 8 },
        { name: 'Javascript', url: null, priority: 3 },
        { name: 'Material UI', url: null, priority: 10 },
        { name: 'Redux', url: null, priority: 14 },
        { name: 'Typescript', url: null, priority: 1 },
        { name: 'styled-components', url: null, priority: 10 },
        { name: 'Apollo GraphQL', url: null, priority: 5 },
      ],
    },
    {
      stack: 'testing',
      technologies: [
        { name: 'Chai', url: null, priority: 5 },
        { name: 'Enzyme', url: null, priority: 7 },
        { name: 'Jest', url: null, priority: 7 },
        { name: 'Jest E2E', url: null, priority: 7 },
        { name: 'Mocha', url: null, priority: 8 },
        { name: 'React Testing Library', url: null, priority: 7 },
      ],
    },
    {
      stack: 'backend',
      technologies: [
        { name: 'Express', url: null, priority: 7 },
        { name: 'Memcached', url: null, priority: 30 },
        { name: 'NGINX', url: null, priority: 20 },
        { name: 'NodeMailer', url: null, priority: 20 },
        { name: 'PHP', url: null, priority: 20 },
        { name: 'Passport JS', url: null, priority: 12 },
        { name: 'Relay', url: null, priority: 10 },
        { name: 'Service Oriented Architecture', url: null, priority: 14 },
        { name: 'WebAPIs', url: null, priority: 4 },
        { name: 'Hack', url: null, priority: 1 },
        { name: 'Node', url: null, priority: 2 },
        { name: 'NextConnect', url: null, priority: 7 },
      ],
    },
    {
      stack: 'databases',
      technologies: [
        { name: 'MySQL', url: null, priority: 10 },
        { name: 'EdgeDB', url: null, priority: 7 },
        { name: 'MongoDB', url: null, priority: 12 },
        { name: 'Mongoose', url: null, priority: 13 },
        { name: 'PostgreSQL', url: null, priority: 6 },
        { name: 'Sequelize', url: null, priority: 11 },
      ],
    },
    {
      stack: 'other tools',
      technologies: [
        { name: 'Arch Linux', url: null, priority: 30 },
        { name: 'Cloudflare', url: null, priority: 25 },
        { name: 'Git', url: null, priority: 30 },
        { name: 'Lodash', url: null, priority: 20 },
        { name: 'Ubuntu', url: null, priority: 30 },
        { name: 'XController', url: null, priority: 23 },
      ],
    },
    {
      stack: 'deployment',
      technologies: [
        { name: 'AWS', url: null, priority: 20 },
        { name: 'CircleCI', url: null, priority: 15 },
        { name: 'EC2', url: null, priority: 20 },
        { name: 'Heroku', url: null, priority: 15 },
        { name: 'PM2', url: null, priority: 35 },
        { name: 'S3', url: null, priority: 25 },
      ],
    },
  ],
  applications: [
    {
      name: 'LT Data Collection',
      url: 'https://github.com/kage1414/lt-data-collection',
      active: true,
      priority: 5,
      technologies: [
        { name: 'React', url: null, priority: 1 },
        { name: 'Heroku', url: null, priority: 15 },
        { name: 'Javascript', url: null, priority: 3 },
        { name: 'WebAPIs', url: null, priority: 4 },
      ],
      descriptions: [
        {
          description:
            'Answer to staff constraints and pre-existing infrastructure.',
          priority: null,
        },
        {
          description:
            'Architected a customizable data scheme, allowing for the processing of data in a variety of formats.',
          priority: null,
        },
        {
          description:
            'Implemented a data pipeline using Google APIs for staff to understand student performance using React.',
          priority: null,
        },
        {
          description:
            'Filter various aspects of student performance and provide insight without manual input.',
          priority: null,
        },
      ],
    },
    {
      name: 'Perceptible',
      url: 'https://github.com/rpt27-sdc-ldap/title-service',
      active: true,
      priority: 10,
      technologies: [
        { name: 'AWS', url: null, priority: 20 },
        { name: 'Axios', url: null, priority: 15 },
        { name: 'Express', url: null, priority: 7 },
        { name: 'Javascript', url: null, priority: 3 },
        { name: 'PostgreSQL', url: null, priority: 6 },
        { name: 'S3', url: null, priority: 25 },
        { name: 'Sequelize', url: null, priority: 11 },
        { name: 'Service Oriented Architecture', url: null, priority: 14 },
        { name: 'Node', url: null, priority: 2 },
      ],
      descriptions: [
        {
          description:
            'Implemented horizontal scaling techniques, increasing fault tolerance and system availability, and reliably handling extended load periods of 1000 RPS, up to 2500 RPS.',
          priority: null,
        },
        {
          description:
            'Optimized performance of PostgreSQL database containing 10M records by 200%, enabling join queries to complete in under 2ms.',
          priority: null,
        },
        {
          description:
            'Implemented Memcached memory caching, reducing compute load on individual services as well as reducing response times.',
          priority: null,
        },
        {
          description:
            'Engineered a multi-layered backend system using NGINX to reliably meet service level agreement of 1000 RPS with less than 1500ms response duration.',
          priority: null,
        },
      ],
    },
    {
      name: 'ThePlatformGuy.com',
      url: 'https://www.theplatformguy.com',
      active: true,
      priority: 1,
      technologies: [
        { name: 'Next JS', url: null, priority: 1 },
        { name: 'React', url: null, priority: 1 },
        { name: 'Heroku', url: null, priority: 15 },
        { name: 'Material UI', url: null, priority: 10 },
        { name: 'NodeMailer', url: null, priority: 20 },
        { name: 'Typescript', url: null, priority: 1 },
      ],
      descriptions: [],
    },
    {
      name: 'Bike Lockr',
      url: 'https://github.com/kage1414/Bike-Lockr',
      active: true,
      priority: 20,
      technologies: [
        { name: 'React', url: null, priority: 1 },
        { name: 'Axios', url: null, priority: 15 },
        { name: 'Express', url: null, priority: 7 },
        { name: 'Heroku', url: null, priority: 15 },
        { name: 'Javascript', url: null, priority: 3 },
        { name: 'MongoDB', url: null, priority: 12 },
        { name: 'Node', url: null, priority: 2 },
      ],
      descriptions: [
        {
          description:
            'Contact OpenWeatherMap API to inform the user of precipitation in the forecast.',
          priority: null,
        },
        { description: 'Deploy to Heroku.', priority: null },
        {
          description: 'Save new results to MongoDB Atlas as backup.',
          priority: null,
        },
        {
          description:
            'Developed a single page app as a minimum viable product, and implemented new features to enhance product.',
          priority: null,
        },
        {
          description:
            'Implement data pipeline using Google Geolocation and Bikewise API to determine the user’s current location and retrieve bicycle theft data.',
          priority: null,
        },
      ],
    },
    {
      name: 'Classera',
      url: 'https://github.com/Charlotte-Badger/Course-Content',
      active: true,
      priority: 15,
      technologies: [
        { name: 'React', url: null, priority: 1 },
        { name: 'AWS', url: null, priority: 20 },
        { name: 'Axios', url: null, priority: 15 },
        { name: 'EC2', url: null, priority: 20 },
        { name: 'Enzyme', url: null, priority: 7 },
        { name: 'Express', url: null, priority: 7 },
        { name: 'Javascript', url: null, priority: 3 },
        { name: 'Jest', url: null, priority: 7 },
        { name: 'MongoDB', url: null, priority: 12 },
        { name: 'Mongoose', url: null, priority: 13 },
        { name: 'PM2', url: null, priority: 35 },
        { name: 'S3', url: null, priority: 25 },
        { name: 'Service Oriented Architecture', url: null, priority: 14 },
        { name: 'WebAPIs', url: null, priority: 4 },
        { name: 'Node', url: null, priority: 2 },
      ],
      descriptions: [
        {
          description:
            'Built a user facing component using service oriented architecture (SOA) that is responsible for course content.',
          priority: null,
        },
        {
          description:
            'Consolidated database retrieval methods to minimize initial render speeds.',
          priority: null,
        },
        {
          description:
            'Prepared and maintained detailed service documentation to support future development.',
          priority: null,
        },
        {
          description:
            'Architected a multi-tiered, nested MongoDB schema resulting in high performance and availability.',
          priority: null,
        },
        {
          description:
            'Automated testing with Jest, Enzyme, and CircleCI to achieve sufficient unit test coverage.',
          priority: null,
        },
        {
          description:
            'Scripted database seeding with async / await to correctly generate and synchronize educational resources.',
          priority: null,
        },
      ],
    },
    {
      name: 'kylejohnson.xyz',
      url: 'https://www.kylejohnson.xyz',
      active: true,
      priority: 3,
      technologies: [
        { name: 'Next JS', url: null, priority: 1 },
        { name: 'React', url: null, priority: 1 },
        { name: 'Axios', url: null, priority: 15 },
        { name: 'Cloudflare', url: null, priority: 25 },
        { name: 'EdgeDB', url: null, priority: 7 },
        { name: 'Express', url: null, priority: 7 },
        { name: 'Heroku', url: null, priority: 15 },
        { name: 'Lodash', url: null, priority: 20 },
        { name: 'Material UI', url: null, priority: 10 },
        { name: 'NodeMailer', url: null, priority: 20 },
        { name: 'Passport JS', url: null, priority: 12 },
        { name: 'Typescript', url: null, priority: 1 },
        { name: 'Node', url: null, priority: 2 },
        { name: 'NextConnect', url: null, priority: 7 },
      ],
      descriptions: [
        {
          description: 'Deploy to Heroku and manage DNS through Cloudflare.',
          priority: null,
        },
        {
          description:
            'Developed single page resume-portfolio with Typescript.',
          priority: null,
        },
        {
          description: 'Instantiated SSL encryption using Certbot.',
          priority: null,
        },
        { description: 'Implement local data pipline.', priority: null },
        {
          description: 'Convert plain React application to NextJS',
          priority: null,
        },
        {
          description:
            'Implement local authentication strategy using Passport JS',
          priority: null,
        },
        { description: 'Migrate hardcoded data to EdgeDB', priority: null },
        {
          description: 'Snapshot and restore database from previous versions',
          priority: null,
        },
      ],
    },
  ],
  experience: [
    {
      employer: 'Crema',
      position: 'Software Development Engineer II',
      active: true,
      time: '2022 - present',
      priority: 1,
      descriptions: [],
    },
    {
      employer: 'Woodcrafters Woodshop',
      position: 'Assistant Carpenter',
      active: true,
      time: 'June 2015 - July 2017',
      priority: 25,
      descriptions: [
        { description: 'Increase production by ~20%.', priority: null },
        {
          description:
            'Program CNC for optimal material usage and time efficiency.',
          priority: null,
        },
        {
          description: 'Construct and assemble final product.',
          priority: null,
        },
        { description: 'Deliver products to customers.', priority: null },
        {
          description:
            'Optimize toolpaths to significantly decrease total program runtime by 5 minutes.',
          priority: null,
        },
      ],
    },
    {
      employer: 'LyricKeeper',
      position: 'Full Stack Software Engineer',
      active: true,
      time: '2021 - present',
      priority: 15,
      descriptions: [
        {
          description:
            'Build user settings page to upgrade and manage premium user subscriptions.',
          priority: null,
        },
        {
          description:
            'Deploy virtual agent to keep backend services active, reducing errors during user creation.',
          priority: null,
        },
        {
          description:
            'Diagnose communication disjunctions between front and back end servers and implement meaningful and unambiguous error handling, resulting in higher user retention.',
          priority: null,
        },
        {
          description:
            'Enhance usability with new “next / previous lyric” feature, improving and adding value to the user experience.',
          priority: null,
        },
      ],
    },
    {
      employer: 'K2 Partnering Solutions at Meta',
      position: 'Enterprise Software Engineer',
      active: true,
      time: '2021 - 2022',
      priority: 5,
      descriptions: [
        {
          description:
            'Consolidate code performing duplicate functions to follow the single responsibility principle.',
          priority: null,
        },
        {
          description:
            'Deploy end-to-end testing suites to maintain 80% code coverage.',
          priority: null,
        },
        {
          description: 'Analyze and remove runtime-dead code from codebase.',
          priority: null,
        },
        {
          description:
            'Implement defaulting logic and redesign API response to improve stability of downstream services.',
          priority: null,
        },
        {
          description:
            'Design new data storage methods to improve data center planning initiatives.',
          priority: null,
        },
        {
          description: 'Maintainer of multiple supply chain software tools.',
          priority: null,
        },
        {
          description:
            'Implement high priority feature requests with little notice.',
          priority: null,
        },
        {
          description:
            'Migrate hardcoded data attributes to MySQL database and architect a configurable system to manage data.',
          priority: null,
        },
      ],
    },
    {
      employer: 'Lawrence North High School',
      position: 'Ensemble Director, Collaborative Pianist, Technical Assistant',
      active: false,
      time: '2017 - 2021',
      priority: 20,
      descriptions: [
        {
          description:
            'Implement student data collection workflow using Google Forms and jQuery.',
          priority: null,
        },
        {
          description:
            'Record, edit, and produce videos using Adobe Premiere and Logic Pro X in lieu of live performances during the Covid-19 pandemic.',
          priority: null,
        },
        {
          description:
            'Coordinate the transportation, setup, and teardown of equipment.',
          priority: null,
        },
        {
          description:
            'Direct, rehearse, and perform with combo band to accompany Show Choirs.',
          priority: null,
        },
        {
          description:
            'Design and run live sound and lighting to improve audience experience of in-house performances.',
          priority: null,
        },
        {
          description:
            'Collaborate with the choir director to produce award-winning shows.',
          priority: null,
        },
      ],
    },
    {
      employer: 'Galvanize / Hack Reactor',
      position: 'Software Engineer Resident',
      active: true,
      time: '2021',
      priority: 10,
      descriptions: [
        {
          description:
            'Conduct daily meetings with Junior Engineers to strengthen and clarify their understanding of technical concepts.',
          priority: null,
        },
        {
          description:
            'Lead Junior Engineers to develop understanding of new libraries, coding best practices, and test development strategies.',
          priority: null,
        },
        {
          description:
            'Debug the codebases of Junior Engineers as needed to assess their personal growth.',
          priority: null,
        },
        {
          description:
            'Measure performance of Junior Engineers and report anti-patterns to management when necessary.',
          priority: null,
        },
        {
          description:
            'Mentor Junior Engineers struggling with blockers and help implement solutions that allow for continued development.',
          priority: null,
        },
        {
          description:
            'Correct anti-patterns in Junior Engineer’s codebases to prevent additional issues in the future.',
          priority: null,
        },
      ],
    },
  ],
  education: [
    {
      school: 'Millikin University',
      time: '2013 - 2017',
      certificate: null,
      degree: 'B.M. Music Education',
      active: true,
      priority: 2,
    },
    {
      school: 'Hack Reactor',
      time: '2020 - 2021',
      certificate: 'Advanced Software Engineering Immersive',
      degree: null,
      active: true,
      priority: 1,
    },
  ],
};

export default mockDb;
