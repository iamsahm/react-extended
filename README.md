# Gig listing front end application

This program runs a front-end for a gig listing api hosted on the Maker's Academy render server.
[It is deployed here](https://gig-list.onrender.com/)

It:

-   Displays a list of gigs
-   Allows a user to favourite/unfavourite a gig and see the favourites updated in the list.
-   Has links to each gig's individual listing which also has a favourite feature.

It is built and runs in development mode using React and Vite, styled with bespoke CSS.

## Installation

[The back end is deployed here](https://makers-gig-backend.onrender.com)
In the event that the deployed backend is not running, you can run it locally:

-   Clone this repo and navigate to the root directory

-   ````
    cd api
    npm i
    npm start```

    ````

-   In a new terminal window, navigate to the root directory and run:

```
npm i
npm run local
```

### Running in Development Mode

Running this command will start the server pointing at the deployed backend.

```zsh
npm run dev
```

### Running Tests

```zsh
npm run test
```

### Linting

```zsh
npm run lint
```

### Building for Production

```zsh
npm run build
```
