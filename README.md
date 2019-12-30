Live Demo [findanartist.netlify.com](https://findanartist.netlify.com/).

## Available Scripts

In the project directory, you can run:

### `npm install`
It will install all the dependencies.<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />

## About the app and my approach

It is a React app that allows users to search artists and their upcoming events. 

I have kept the layout very simple, sticking to the wireframes provided. Although I did add some colors and styling of my own to make the app look more lively.

Node Sass was used to write CSS for this project, because I feel that it helps writing CSS faster and cleaner. BEM naming convention was used.

No tool for state managment was used since I felt using Redux or Apollo would be an overkill for this project. I would have used Context API for state managment had the application been bigger. Since prop drilling is only 1 level deep at most instances in the application, so using a state managment didn't seem necessary.

React hooks were used throughout the project and all the components are functional components. Most of the components like Spinner, ArtistInfo and EventsInfo were coded in such a way that they can easily be reused, if needed in the future.

For making the API calls I used a package called axios since I have been using it for a while now and I find it's syntax very fimiliar. All the API calls are made using promises.

Jest and Enzyme were used to write some basic tests for this application.

## Bonus Features

The most recent artist searched is presisted in the memory using Windows Local Storage. So even if your reload the browser, You can still see your last searched artist and his/her upcoming events.

I felt like this app is something that may be used on a very regular basis, so I converted this React App in to a Progressive Web App. So whenever a user opens this website in the browser from their mobiles, they get an option to download it to their homescreen (in cae they don't, they can manually download it from the options > add to home screen). If the user accepts add to home screen, google automatically makes an .apk file of our application and installs it on the user's mobile and then it works almost like a native application on the user's mobile (it does have it's caveats).

I made two branches for this project 'master' and 'develop'. Development was done in the 'develop' branch and later deployed on a staging domain. When everything seemed fine on staging domain, then develop was merged in to the master branch. Master branch is deployed on [netlify](https://netlify.com/). Whenever something is pushed from the master branch, in netlify, netlify runs the 'npm build' command and hosts the 'build' folder on [findanartist.netlify.com](https://findanartist.netlify.com/).

Lastly, I used chrome extension called 'lighthouse' to test the overall performance score of my app. Here are the results: 

![Image of Lighthouse Test Reults](https://res.cloudinary.com/dedflteib/image/upload/v1577732463/tests_sloo5s.png)