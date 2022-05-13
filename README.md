# Scooped

[Scooped](https://aa-scooped.herokuapp.com/login) is a clone of [Untappd](https://untappd.com/home) where users can view a wide variety of ice creams, explore their descriptions and even submit new ice creams to be added. Create an account to be able to leave reviews on ice creams and have your own profile to keep your ice cream submissions in order.
![](/react-app/public/add_comment.gif)

## Technologies

**Frontend**

- Node, HTML, REACT REDUX, CSS3,

**Backend**

- Python, Flask, PostgreSQL database

**Others**

- Docker
- Deployed with [Heroku](https://www.heroku.com/)

## Features
### IceCream
![IceCream Create](https://user-images.githubusercontent.com/13339377/168336338-cfecc24d-8fa6-49e6-97f8-2760fc495d65.JPG)
Users can begin creating IceCream pages with their reviews for others to see once signed in. They can add an IceCream by clicking on the "Add iceCream" button to bring up a modal where they will fill in all the required information. Once created, the user can view their page on the home screen.

### Reviews
![IceCream Review](https://user-images.githubusercontent.com/13339377/168336339-129693fc-4861-4e8f-a54f-3491251ecfee.JPG)
Once an IceCream has been created successfully, other users can access that particular IceCream by clicking on that IceCream from the main page. When the user is inside the IceCream page of their choice, they can add a review by clicking the "Add review" button where a modal will pop up requesting a review message as well as a rating. What makes this page unique is that all the reviews from all the users will be accounted for giving the IceCream an average rating.

### Review Feed
![Review Feed](https://user-images.githubusercontent.com/13339377/168336336-c48b3d12-f0ce-439a-bfee-4fd0de99d72f.JPG)
Users can access their Review Feed by clicking on the "My Profile" button located on the navigation bar once signed in. The Review Feed will display all of the users reviews as well as their associated comments/ratings. Clicking on the comment's picture will redirect the user to the IceCream page to view all other reviews to that particular IceCream. Users can also delete their reviews from the feed by clicking on the "Delete" button should they no longer wish to have them.

### Profile
![Profile Edit](https://user-images.githubusercontent.com/13339377/168336335-a429d053-91f0-49d8-a5bb-a67d444e9c6c.JPG)
Users can access their profile information by clicking on the "My Profile" button on the navigation bar once signed in.
At the top of the page will display the users information with their associated Username and Email. Users can change their information by clicking on the "Edit" button located below the user's email which will bring up a page to modify their data.

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/dcaicedo87/Scooped.git
   ```

2. Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, cd into the `react-app` directory and run your react app

   ```bash
   npm start
   ```

7. Navigate to http://localhost:3000/

<!--
# Flask React Project

This is the starter for the Flask React project.

## Getting started
### Dev Containers (M1 Users, follow this guide)

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed.
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer.
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```
4. Open the repo in VS Code.
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner.
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app.

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

### Standard (Traditional)

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Helpful commands
|    Command            |    Purpose    |
| -------------         | ------------- |
| `pipenv shell`        | Open your terminal in the virtual environment and be able to run flask commands without a prefix |
| `pipenv run`          | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands  |
| `flask db upgrade`    | Check in with the database and run any needed migrations  |
| `flask db downgrade`  | Check in with the database and revert any needed migrations  |
| `flask seed all`      | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details |

## Deploy to Heroku

### Abstract
This repo comes configured with Github Actions. When you push to your main branch, Github will automatically pull your code, package and push it to Heroku, and then release the new image and run db migrations.

### Writing your Dockerfile
In order for the Github action to work effectively, it must have a configured docker file. In order to effectively deploy your site you need to code out the notes found in this [docker file](./Dockerfile)

### Configuring Production Environment Variables

1. In your Heroku app settings you should have two environment variables set.

   |    Key          |    Value    |
   | -------------   | ----------- |
   | `DATABASE_URL`  | Autogenerated when adding postgres to Heroku app |
   | `SECRET_KEY`    | Random string full of entropy |

2. In your Github Actions Secrets you should have two environment variables set. You can find this webpage at the following address: *github.com/userID/repoName/settings/secrets/actions*

   |    Key            |    Value    |
   | -------------     | ----------- |
   | `HEROKU_API_KEY`  | Heroku Oauth Token |
   | `HEROKU_APP_NAME` | Heroku app name    |

3. To get an Oauth token for Heroku, run the following command in your terminal already authenticated to the Heroku CLI and pull out the string on the Token key.
   ```bash
   heroku authorizations:create
   ```
   ``` -->
