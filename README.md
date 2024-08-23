# fullstack-6 Quiz App

### Setup

Follow the instructions linked below to get the app up and running!

- [Server README](server/README.md)
- [Client README](client/README.md)

### What is the concept/ what are you building?

We are building a Pub Quiz app that allows users to generate quizzes, answer multiple-choice questions, and get their scores. The app will potentially include features such as different categories for quiz questions, a scoreboard, user login for tracking progress and some functionality to share the score.

MVP objectives

Frontend structure: 
- Creating a user-friendly interface for generating and taking quizzes.
- Home page with welcome message, instructions, and a ‘generate quiz’ button.
- Quiz page with multiple choice questions and checkboxes for answers. Providing instant feedback on quiz answers.
- Score page displaying results of the quiz.
- Accessible
 
Backend: 
- User's answers (checkboxes) are compared to correct answers 
- Score is calculated and displayed 
- Unit testing of individual components is implemented 
- At this stage we won’t connect to the API, BUT we will use the same JSON structure as used in the Trivia API for our ‘mock’ questions and answers (e.g. https://opentdb.com/api.php?amount=10)  

SHOULD HAVE 
- Connect to Trivia API https://opentdb.com/api_config.php and check functionality still works 
- Add buttons/dropdown menu to allow users to choose different categories of quiz question 
 
COULD HAVE 
- Login - connected to database 
- Scoreboard - connected to database
- Timed Questions with a visual  timer
- Functionality to share somehow (paper copy or virtually) 

### Who will this help? Who’s your target audience?

This app will primarily help trivia enthusiasts who enjoy pub quizzes and want a convenient way to play them at home or on the go. Our target audience includes individuals who enjoy testing their knowledge, groups looking for an engaging activity, and educators seeking a fun way to conduct quizzes. Additionally, the app will cater to people who want to improve their general knowledge or knowledge on a particular subject, people who prefer not to socialise, and those who have limited spare time.

### How will you be working?  What tools will help with that? 

We will work using a combination of Agile methodologies and version control practices to ensure smooth collaboration and iteration. 

Applying Agile Methodologies:

- During our meetings, we will define and prioritise tasks and assign them to team members. Each task should be clear and well-defined. Each team member will briefly discuss what they worked on, what they plan to work on, and any blockers they are facing. This helps keep everyone aligned and aware of the project’s progress.

 - We will break down the project requirements into user stories, which are simple descriptions of a feature from the perspective of the end-user. Each user story will be divided into smaller tasks.

- We will follow an iterative development approach, where features are developed in small increments and integrated frequently. 

- Code reviews will be conducted for every pull request to ensure code quality and knowledge sharing. Pair programming sessions can be considered for complex tasks to encourage collaboration and improve code quality.
	
Tools:

- Visual Studio Code for coding.
- Jira for project management and tracking progress. Each user story and task will be created and assigned in Jira.
- Slack and Zoom for daily communication, group meetings, and quick problem-solving discussions.
- Git and GitHub for version control, code reviews, and collaboration on the codebase.
- Figma for designing the user interface.


How are you going to organise the workload? Who does what and when?
The workload will be divided based on team members’ strengths and preferences. A rough breakdown is as follows:

- Frontend Development: Responsible for creating the user interface.
- Backend Development: Responsible for implementing the logic and server-side operations.
- API Integration: Connecting to the Trivia API and ensuring functionality.
- Testing: Writing unit tests and ensuring the app is bug-free.
- Project Management: Overseeing the project timeline and ensuring milestones are met.

To ensure efficient task management, tasks will be added to the Kanban board with details of what is needed to complete each task, including deadlines. Responsibilities will be discussed in meetings, where team members will be assigned specific tasks on the Kanban board.

### What are the main features of your project?
- Home Page: Displays a welcome message, instructions, and a ‘generate quiz’  button.
- Quiz Page: Presents multiple-choice questions with checkboxes for answers.
- Score Page: Shows the results of the quiz.
- API Integration: (Future feature) Fetches questions from the Trivia API.
- Category Selection: (Future feature) Allows users to choose different categories for quiz questions.
- User Login: (Future feature) Enables users to log in and track their progress.
- Scoreboard: (Future feature) Displays scores and ranks of users.
- Sharing Functionality: (Future feature) Allows sharing quiz results either physically or virtually.

