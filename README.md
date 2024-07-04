![alt text](src/assets/restlog.png)

Welcome to Rest in Ease, your safe space on social media. Here, you can share your favorite safe spots and express how you’re feeling at any moment. Sometimes, simply sharing how you feel can make a big difference. At Rest in Ease, no one will judge you—this is a community built on understanding and support. Whether you’re looking for a place to vent, seek comfort, or connect with others who understand, Rest in Ease is here for you. Join us and find solace in knowing that you’re not alone.


## Table of Contents
- [Introduction](#introduction)
- [Agile Methodology](#agile-methodology)
- [API](#api)
- [User Experience (UX)](#user-experience-ux)
  - [The Strategy](#the-strategy)
  - [The Scope](#the-scope)
  - [The Structure](#the-structure)
  - [The Skeleton](#the-skeleton)
  - [The Surface](#the-surface)
- [Am I Responsive](#am-i-responsive)
- [Project Overview](#project-overview)
   - [Learning Objectives](#learning-objectives)
   - [Assignment Requirements](#assignment-requirements)
   - [Self-Assessment](#self-assessment)
- [Features](#features)
    - [Gifs](#gifs)
    - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
    - [Tools](#tools)
    - [Languages](#languages)
    - [Frameworks & Libraries](#frameworks-and-libraries)
    - [Design](#design)
- [Testing](#testing)
    - [Bugs](#bugs)
- [Setup and deployment](#setup-and-deployment)
    - [Create Repository](#create-repository)
    - [Intalize in VS Code](#intalize-in-vs-code)
    - [Create React App](#create-react-app)
    - [Deployment](#deployment)
- [Documentation](#documentation)
    - [Project documentation](#project-documentation)
- [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Thank You](#thank-you)

## <a id="introduction">Introduction</a>

## <a id="agile-methodology">Agile Methodology</a>

This is my Kanban board for this project.
 This project is divided into 7 milestones with specific due dates and includes 32 user stories.

The Kanban board is an essential tool for tracking progress and ensuring efficient project management. It is organized into several columns: To Do, In Progress, Done, Bugs, Future Features, and Won’t Have.

  * To Do: Tasks that are planned and ready to be worked on.
  * In Progress: Tasks that are currently being worked on.
  *	Done: Completed tasks.
  * Bugs: Identified issues that need to be fixed.
  * Future Features: Ideas and features planned for future implementation.
  * Won’t Have: Tasks and features that have been decided against including.

Using the Kanban board helps maintain a clear overview of the project, ensuring that all tasks are accounted for and that progress is visible at a glance. This method enhances organization, prioritization, and efficiency.

I find the Kanban board invaluable for staying on track and look forward to exploring and learning more about Kanban in the future!
You can visit it here:
[Kanban](https://github.com/users/JorgenDIF/projects/7)

## <a id="api">API</a>
The Rest In Ease social media app utilizes an API built with Django Rest Framework. For more details, please visit the
[repository](https://github.com/JorgenDIF/PP5-RestInEase-API)



## <a id="user-experience-ux">User Experience (UX)</a>
### <a id="the-strategy">The Strategy</a>
<details>
<summary>Read The Strategy</summary>
The goal of the Rest In Ease social media app is to create a platform where users can share their safe spots and express their current feelings. Users should be able to see and share posts that convey their emotions, and these feelings should be prominently displayed on their profiles and within the comments on posts. The focus is on providing a space where emotional expression is valued and highlighted, helping users to connect with others and share their mental state.
</details>

### <a id="the-scope">The Scope</a>
<details>
<summary>Read The Scope</summary>
The scope of the Rest In Ease social media app includes:

1.	User Profiles:
*	Allow users to create and customize their profiles.
* Display users’ current feelings on their profiles.
* Enable users to follow and interact with other users.
2.	Posts:
* Enable users to create posts sharing their safe spots and feelings.
* Allow users to add images and text to their posts.
* Implement features for liking, commenting, and sharing posts.
3.	Comments:
* Allow users to comment on posts.
* Enable users to express their feelings in comments.
4.	Likes:
* Implement a feature for users to like posts.
* Display the number of likes on each post.
* Allow users to view who liked their posts.
5.	User Interaction:
* Implement features for users to follow other users.
* Enable notifications for new posts, comments, likes, and interactions.
6.	Search and Explore:
* Implement search functionality to find posts by keywords and users by name.
* Provide an explore feature to discover popular and recent posts.
   
 </details>

### <a id="the-structure">The Structure</a>
<details>
<summary>Read The Structure</summary>
The structure of the Rest In Ease social media app will include the following components:

1.	Front-End:
*	User Interface: Designed with a focus on user experience and ease of use.
*	React Components: Modular components for posts, comments, profile pages, and navigation.
2.	Back-End:
*	Django Rest Framework API: Handles user authentication, data storage, and API requests.
*	Database: Stores user data, posts, comments, and interactions.
</details>

### <a id="the-skeleton">The Skeleton</a>


<details>
<summary>Read The Skeleton</summary>
The skeleton of the Rest In Ease social media app outlines the basic structure and layout of the application based on the provided ERD (Entity-Relationship Diagram). The diagram shows the relationships between users, profiles, posts, comments, likes, and followers, which guide the overall structure of the app.

1.	**Home Page:**
* **Feed of Recent and Popular Posts:**
* Display a list of posts fetched from the API.
* Include post details like title, content, image, mood, and the number of likes.

* **Search Bar:**
* Allow users to search for posts and users by keywords.

2.	**Profile Page:**
* User Information:
* Display user details such as username, profile image, name, mood, and bio.

* **User’s Posts and Interactions:**
* List all posts created by the user.
* Show the user’s current feelings prominently.

* **Followers and Following:**
* Display the list of users who follow the current user.
* Show the list of users the current user is following.

3.	**Post Page:**
* **Detailed View of Individual Posts:**

* Display post details like title, content, image, mood, category, and number of likes.
* Show the owner of the post and the post’s creation and update dates.

* **Comments Section:**

* Allow users to view and add comments to the post.

* Display each comment’s owner, content, and mood.
4.	**Create Post Page:**

* Form for Creating New Posts:
* Provide fields for the post title, content, image, mood, image filter, and category.
* Allow users to express their current feelings.
5.	Likes and Follower Functionality:
* **Likes:**

* Allow users to like posts.
* Display the number of likes on each post and the users who liked the post.

* **Followers:**
* Allow users to follow and unfollow other users.
* Display the number of followers and following on the user profile page.
</details>

### <a id="the-surface">The Surface</a>

## <a id="am-i-responsive">Am I Responsive</a>


## <a id="project-overview">Project Overview</a>

### <a id="learning-objectives">Learning Objectives</a>

### <a id="assignment-requirements">Assignment Requirements</a>

### <a id="self-assessment">Self-Assessment</a>

## <a id="features">Features</a>

### <a id="gifs">Gifs</a>

### <a id="future-features">Future Features</a>

## <a id="technologies-used">Technologies Used</a>
### <a id="languages">Languages</a>

### <a id="tools">Tools</a>

### <a id="frameworks-and-libraries">Frameworks & Libraries</a>

### <a id="design">Design</a>

## <a id="testing">Testing</a>

### <a id="bugs">Bugs</a>

## <a id="setup-and-deployment">Setup and Deployment</a>
### <a id="create-repository">Create Repository</a>

### <a id="intalize-in-vs-code">Initialize in VS Code</a>

### <a id="create-react-app">Create React App</a>

### <a id="deployment">Deployment</a>

## <a id="credits">Credits</a>

### <a id="content">Content</a>

### <a id="media">Media</a>

### <a id="thank-you">Thank You</a>

