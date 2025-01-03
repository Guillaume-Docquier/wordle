# Wordle

## Project structure
Wordle is a ``React.js`` app built with ``Create React App``.  
You will find the usual React code in the ``public/`` and ``src/`` folders.

The app is deployed as a [github page](https://pages.github.com/) automatically publish to the GitHub page via actions.

## Dev setup
You will need [Node.js](https://nodejs.org/en/) v16.20.2 or higher (lower may work, but I can't guarantee it).  
If you have [nvm](https://github.com/nvm-sh/nvm) installed, run `nvm install`.  
You will also need an editor. I recommend [WebStorm](https://www.jetbrains.com/webstorm/) (it is free for non-commercial use!).  
Once this is installed, run ``npm ci`` to install 3rd party libraries, then ``npm run start`` will start a local dev server.  
Pushing to the `main` branch will automatically publish to the GitHub page via actions.
