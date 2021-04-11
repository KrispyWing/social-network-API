# Social Network API
The server side portion of social network API created using MongoDB and mongoose

## Description
This is a basic backend API setup for a social network. It is made up of 2 MongoDB Schemas one for Users and one for Thoughts.

The User Schema contains arrays that house the Id's of thoughts and friends and a virtual field to hold the friend count.

The Thought Schema contains an array which references the Reaction Schema and holds the Id's of any reactions to a thought along with a virtual field for a reaction count. The Reaction Schema is a part of the Thought Schema.

There are API routes for: 
* Viewing all users and thoughts
* Viewing a single user or thought by the Id #
* Adding new users, friends, thoughts and reactions
* Updating user data and thoughts
* Deleting users, friends, thoughts and reactions

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Technologies](#Technologies)
* [Preview](#Preview)

## Installation
This is strictly backend code so the repository needs to be copied and then the necessary packages installed by running the `npm i` command.

You must have MongoDB installed for the app to function.

## Usage
Server can be started by using the `npm start` command. Routes can be tested by using programs like Insomnia or Postman.


## Technologies
This application was made using

![Javascript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

![MongoDb](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

![Insomnia](https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) 
with the following npm packages
* `express.js`
* `mongoose` 



## Preview

### Demo Video Link

https://drive.google.com/file/d/1YT8fNoK0IQyBbhepe3e9STe5SdepErCN/view



