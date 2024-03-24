## Patrick's Blogger Application

### Updates
Lab 2:
- Added Add Blog
- Added List Blog
- Added Index
- Installed Bootstrap navBar

Lab 3:
- Refactored code to be in MVC format
  - Created `app_server` folder
    - Retrofitted new files paths to 
  - Created `controllers` folder
  - Created `models` folder
- Integrated mongodb database.
  - implemented `db.js`
  - implemented `blogs.js`
  - implemented a `config.env` file to protect sensitive login information
    - utilizing `.gitignore` to prevent it from being uploaded to the repo.
  - Created a new database on MongoDB Atlas
  - Created dummy blog posts.
- Began List Blog implementation

- 

### Running Instructions

create and populate config.env


change to directory:
     `$ cd 421`

   install dependencies:
     `$ npm install`

   run the app:
     `nodemon`
