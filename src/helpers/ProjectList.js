export const projectList = [
    {
        name: "Common Cents",
        description: "Personal finanace and budgeting webapp built on the 50-30-20 principle of budgeting",
        features: [
            "Created a personal finance app built on the 50-30-20 principle of budgeting for an intuitive and low-effort approach to tracking monthly spending vs. income that requires no prior financial knowledge.",
            "Utilized React for the UI and routing, Express.js and Node.js for the server-side logic, GraphQL for CRUD operations, and MongoDB for storage of user, expense, and income data.",
            "Through JWT authentication and secure password hashing with BCrypt, users can securely log in, and have their financial data stored safely.",
            "With integrated charting library Chart.js, users can view their spending habits via dynamic pie and bar charts. This assists in quickly identifying high-expenditure categories."
                 ],
        technologies: "React.js, MongoDB, GraphQL, Node.js, Express.js, Json Web Token, BCrypt, Heroku, AtlasDB, Agile Development",
        github: "https://github.com/cbigham25/common-cents",
        live: "https://common-cents-bootcamp-fc6fba95f1fb.herokuapp.com/",
    },
    {
        name: "Job Board",
        description: "A secure job board application featuring comprehensive listings, secure user authentication, and personalized job saving capabilities.",
        features: [
            "Led a team of three developers in building a comprehensive Job Board Application using agile development methodology, providing clear and efficient communication, and managing tasks effectively.",
            "Utilized Node.js and Express.js to handle back-end operations, Handlebars.js for templating, and MySQL with Sequelize ORM for database management, demonstrating a strong understanding of full-stack development.",
            "Implemented user authentication using express-session and cookies, increasing the security and personalization of the application.",
            "Integrated the application with Heroku and JawsDB for seamless deployment and database management, showcasing my abilities in DevOps.",
            "Managed sensitive data and API keys securely through the use of environment variables, ensuring the safety of user data and project integrity.",
                 ],
        technologies: "JavaScript, Node.js, Express.js, Handlebars.js, MySQL, Sequelize ORM, Express-Session, Heroku, JawsDB, Agile Development",
        github: "https://github.com/bantonneau/jobBoard",
        live: "https://ancient-dusk-05754-ae43192e47d1.herokuapp.com/",
    },
    {
        name: "React Portfolio",
        description: "A portfolio website showcasing my projects and skills, developed using React and Material UI. The portfolio is interactive, responsive, and has a clean, intuitive interface.",
        features: [
            "Architected a dynamic personal portfolio website leveraging React, emphasizing adeptness in modern frontend web development and component-based architectures.",
            "Harnessed the power of React's `useState` and `useEffect` hooks, underscoring a comprehensive understanding of state management and React's lifecycle.",
            "Prioritized responsive design, ensuring the portfolio's impeccable display across a myriad of devices, reflecting attention to detail and UI/UX considerations.",
            "Structured a vibrant `Projects.js` section that dynamically renders projects, highlighting my expertise in handling dynamic data and component rendering.",
            "Successfully deployed the website, exemplifying skills in deployment, website maintenance, and ensuring public accessibility."
        ],               
        technologies: "React, react-router-dom, Material UI, Responsive Design",
        github: 'https://github.com/bantonneau/webdevportfolio'
    },    
    {
        name: "Social Media Api",
        description: "A server-side API application serving as the backend for a social network site with capabilities to manage users, thoughts, and reactions.",
        features: [
        "Solely developed a robust server-side application for a Social Network site, showcasing excellent problem-solving skills and understanding of backend development.",
        "Built an Express.js server to handle API routing, demonstrating proficiency in server-side JavaScript development.",
        "Leveraged Mongoose to interact with a MongoDB database for managing users, thoughts, and reactions, illustrating my strong abilities in database management and operations.",
        "Implemented comprehensive API routes to perform CRUD operations on users, thoughts, and reactions, improving the usability and functionality of the application.",
        "Employed testing tools like Insomnia Core or Postman to ensure the seamless functionality of all API endpoints.",
        "Integrated the Moment.js library for parsing, validating, manipulating, and formatting dates, enhancing the user experience and application performance.",
        ],
        technologies: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Moment.js",
        github: "https://github.com/bantonneau/social_media_api",
        demo: "https://drive.google.com/file/d/1pOJ8mVfuiFHi4Fim06i2g3Y4osy4F5a5/view"
    },
    {
        name: "eCommerce Backend",
        description: "A server-side application serving as the backend for an e-commerce platform with capabilities to manage products, categories, and tags.",
        features: [
        "Developed a comprehensive server-side application for an E-commerce platform, demonstrating proficiency in backend development and data management.",
        "Utilized Sequelize to interact with a MySQL database, effectively managing products, categories, and tags in the platform's database.",
        "Set up Express.js server to handle API routing, providing a solid infrastructure for server-side operations.",
        "Implemented extensive API routes to perform CRUD operations on products, categories, and tags, increasing the functionality and versatility of the platform.",
        "Leveraged testing tools such as Insomnia Core or Postman to verify the functionality of all API endpoints, ensuring a high-quality, bug-free application.",
        "Enabled smooth setup and usage through clear installation instructions, database seeding, and the usage of npm scripts, demonstrating attention to user experience even at the development stage.",
        ],
        technologies: "JavaScript, Node.js, Express.js, MySQL, Sequelize, MySQL2",
        github: "https://github.com/bantonneau/eCommerceBackEnd",
        demo: "https://drive.google.com/file/d/1ENwC57uN6ZnqxB2cRNklyxZSXICojuIV/view"
    },
    {
        name: "Employee Tracker",
        description: "A command-line application interacting with user input to manage an employee database, providing various functionalities like viewing departments, roles, and employees, as well as adding new entities or updating existing records.",
        features: [
            "Developed a command-line application for employee management, showcasing my skills in Node.js, MySQL, and command-line interfaces.",
            "Designed an application capable of interacting with user input to manage a MySQL database consisting of departments, roles, and employees in a company.",
            "Created a comprehensive suite of functionalities including viewing all departments, roles, and employees, adding new departments, roles, or employees, and updating an employee's role.",
            "Implemented a robust and interactive command-line interface with prompts for different operations, improving user experience and ease of use.",
            "Established a MySQL database schema to structure and organize data effectively, demonstrating my understanding of relational databases.",
            "Produced clear installation and usage instructions, along with a video tutorial to guide users through the setup and usage of the application, demonstrating good documentation practices.",
        ],
        technologies: "JavaScript, Node.js, MySQL",
        github: "https://github.com/bantonneau/Employee_Tracker",
        demo: "https://drive.google.com/file/d/12tYyxaFsXtM8KS8Pe8GqHA7Gj5-muEy3/view"
    },
    {
        name: "Note Taker",
        description: "A web-based application that allows users to create, manage, save, view, and delete notes. The app provides an intuitive user interface and leverages a server-side API for handling note data, enabling access from any device with internet connectivity.",
        features: [
            "Developed a web-based NoteTaker application, showcasing my skills in JavaScript, Node.js, and Express.js.",
            "Implemented an application that provides a user-friendly interface for writing, saving, viewing, and deleting notes, improving user experience and productivity.",
            "Built a server-side API to handle note data, facilitating access from any device with internet connectivity and ensuring a consistent user experience.",
            "Employed Heroku for application deployment, enabling users to access the app from a web browser without any local setup.",
            "Managed note data in a JSON file, demonstrating an understanding of JSON data format and file-based data management.",
            "Provided clear and concise installation and usage instructions, ensuring users can easily setup and use the application."
        ],
        technologies: "JavaScript, Node.js, Express.js, Heroku",
        github: "https://github.com/bantonneau/Note-Taker",
        live: "https://note-taker-by-ben-antonneau.herokuapp.com/"
    }
]