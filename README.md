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

    Use ```bash
    sudo service postgresql start
    ```
    Type in your sudo password and press enter
    Type ```bash 
    sudo -i -u postgres
    ``` and press enter
    Type ```bash
    cd /BackendDir
    ``` ( this will vary depending on where you installed the file. [On WSL you can prepend your route with ```bash
    /mnt/
    ```])
    Type ```bash
    rails db:migrate
    ``` and press enter
    Type ```bash
    rails s
    ``` and press enter
    Open a new terminal, and cd to the *frontend*
    Type ```bash
    npm start
    ``` in the frontend and press ```bash
    y
    ``` this will start the server on another port

* Database creation

    If the database looks weird in any way we reccomend running rails db:rollback to Version=0
    Then run ```bash
    rails db:migrate
    ``` and ```bash
    rails db:seed
    ```

* Database initialization

    Run ```bash
    rails db:migrate
    ``` and ```bash
    rails db:seed
    ```

* Services (job queues, cache servers, search engines, etc.)

    Allows for user creation with a name and email, allows for a user for deposit and then post a sell/buy with available balance.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


* Windows Subsytem for Linux Installation Guide from Microsoft

    https://docs.microsoft.com/en-us/windows/wsl/install