export const Data = {
  'technical skills': [
    {
      type: 'frontend',
      technologies:
        [
          'Javascript',
          'Typescript',
          'React.js',
          'Redux',
          'styled-components',
          'HTML5',
          'CSS',
          'jQuery'
        ]
    },
    {
      type: 'backend',
      technologies:
        [
          'Node.js',
          'Express.js',
          'NPM',
          'AWS',
          'Heroku',
          'CircleCI',
          'Microservices'
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
          'CouchDB',
          'Sequelize ORM',
          'Mongoose ORM' 
        ]
    },
    {
      type: 'tools',
      technologies:
        [
          'CircleCI',
          'Webpack',
          'Babel',
          'cURL',
          'Git',
          'VSCode',
          'Ubuntu',
          'Arch Linux'
        ]
    }
  ],
  'projects': [
    {
      name: 'Charlotte Badger',
      url: 'https://github.com/Charlotte-Badger',
      technologies: ['Javascript', 'React', 'Node', 'Express', 'S3', 'EC2', 'PM2', 'Jest', 'Enzyme', 'MongoDB', 'Mongoose', 'Microservices', 'WebAPIs'],
      description: [
        '• Developed Udemy clone in a team, responsible for Course Content microservice.', 
        '• Deployed API to make database accessible by teammates’ services.',
        '• Automate database seeding.',
        '• Implement image data pipeline, seeding data to S3 with references in database.',
        '• Achieve sufficient unit and integration test coverage using Jest and Enzyme.',
        '• Developed a proxy combining all microservices into one, user-accessible page.',
        '• Deploy proxy, Course Content service, and API endpoints to AWS EC2.',
        '• Write and maintain detailed service documentation.'
      ]
    },
    {
      name: 'ldap',
      url: 'https://github.com/rpt27-sdc-ldap',
      technologies: ['Javascript', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'S3'],
      description: [
        '• Developed back end of a clone of the Audible book page with a team, utilizing microservice architecture.',
        '• Seeded 10 million records of mock data to a database running on a t2.micro instance',
        '• Asynchronously wrote records to CSV file and imported to PostgreSQL.',
        '• Indexed multiple columns and clustered tables to achieve sub-50ms query times.'
      ]
    },
    {
      name: 'Student Data Collection',
      url: 'https://github.com/kage1414/dataCollection',
      technologies: ['Javascript', 'jQuery', 'AJAX'],
      description: [
        '• Implemented a data pipeline using Google APIs for staff to understand student performance using jQuery.',
        '• Filter various aspects of student performance and provide insight without manual input.',
        '• Answer to staff constraints and pre-existing infrastructure.'
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
    }
  ],
  'experience': [
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
      time: 'August 2017 - PRESENT'
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
      time: 'December 2020 - Expected Graduation Date: September 11, 2021',
      certificate: 'Software Engineering Immersive'
    },
    {
      school: 'Millikin University',
      time: 'August 2013 - May 2017',
      degree: 'B.M. Music Education'
    }
  ],
  'general': []
}