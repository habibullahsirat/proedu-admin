## Project Structure

project-root
│
├── app
│ └── api
│
├── lib
│ ├── mongodb.js
│ └── cloudinary.js
│
├── models
│ ├── Instructor.js
│ ├── Student.js
│ ├── Hero.js
│ ├── Course.js
│ ├── About.js
│ ├── SuccessfulStudent.js
│ ├── Feedback.js
│ ├── FAQ.js
│ └── Company.js
│
├── public
├── package.json
└── .env.local

## Generate JWT Secret

node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
