# chesbro-exchange
My mock cryptocurrency exchange.
# README
This application requires Ruby, Rails, NodePackageManager, Postgresql and if you are on Windows, for the linux environment to be configured.
Link to install each will be at the bottom.



## Ruby on Rails/Startup Guide
#### See Configuration


* Ruby version

    ruby 2.6.1p33 (2019-01-30 revision 66950) [x86_64-linux]

* System dependencies

    You must be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11.

* Configuration

    Use `sudo service postgresql start `
    Type in your sudo password and press enter
    Type `sudo -i -u postgres` and press enter
    Type `cd /BackendDir` ( this will vary depending on where you installed the file. [On WSL you can prepend your route with `/mnt/`])
    Type `rails db:migrate` and press enter
    Type `rails s` and press enter
    Open a new terminal, and cd to the *frontend*
    Type `npm start` in the frontend and press `y` this will start the server on another port

* Database creation

    If the database looks weird in any way we reccomend running rails db:rollback to Version=0
    Then run `rails db:migrate` and `rails db:seed`

* Database initialization

    Run `rails db:migrate` and `rails db:seed`

* How to run the test suite


* Services (job queues, cache servers, search engines, etc.)

    Allows for user creation with a name and email, allows for a user for deposit and then post a sell/buy with available balance.

# Npm/Startup Guide

  *Startup
    If you have the Ruby on Rails API running you should be able to run `npm start` and press \*\*`y`\*\*
    If this does not work please refer to the **Ruby On Rails/Startup Guide**
    Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
    The page will reload if you make edits. (Check **Possible Configs** if you see errors)

  *Possible Configs
    If you're on WSL and the page doesn't reload you may need to add `CHOKIDAR_USEPOLLING=true` in a .env file you create in the frontend.


## Npm Paste

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
  To learn React, check out the [React documentation](https://reactjs.org/).


## Useful Installation Links

* Node Version Manager Tutorial

  [NVM NPM NodeJs Installation](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/#installing-nodejs-and-npm-using-nvm)

* Windows Subsytem for Linux Installation Guide from Microsoft

  [WSL Installation](https://docs.microsoft.com/en-us/windows/wsl/install)

* Ruby Installation

  Run `\curl -sSL https://get.rvm.io | bash -s stable --ruby` to download the stable version of RVM with Ruby
  Run `rvm install 2.6.1`