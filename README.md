# DevTo - Github Actions : Hackathon 2021 

<p> This repo and project was created as an entry into the DevTo-Github Hackthon 2021, which focused on integrating Github Actions in a project. </p>
<p> Category chosen: <b> Interesting IoT </b> </p>

## Getting Started

1. Ensure you have node installed. Find out: `node -v`
2. Clone the repo : `git clone `
3. Install dependencies : `npm install` 
4. This project uses Jovo to create the Alexa skill. Jovo provides a 'debugger' that helps to view and test interactions with Alexa. Run it using `jovo run`
5. Click Launch to start the app 
6. The Nutri Planner app must open and allow you to interact with this skill 

Note: The app currently just allows the user to choose from a given list of responses. This is extendable to accept any custom user input to mimic regular Alexa behavior. 

## Github Actions integration 

The Github Actions workflow is the `.github/workflows/node.js.yml` file
The workflow is designed to function end-to-end from build to deploy for a custom Alexa skill. 

Some of the actions used include checking out code, installing dependencies, testing, finding code coverage, building, zipping and deploying code to AWS Lambda and storing artifacts. Details are in the DEV post. 

## License
MIT
