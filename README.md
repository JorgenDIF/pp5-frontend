![alt text](src/assets/restlog.png)

Welcome to Rest in Ease, your safe space on social media. Here, you can share your favorite safe spots and express how you’re feeling at any moment. Sometimes, simply sharing how you feel can make a big difference. At Rest in Ease, no one will judge you—this is a community built on understanding and support. Whether you’re looking for a place to vent, seek comfort, or connect with others who understand, Rest in Ease is here for you. Join us and find solace in knowing that you’re not alone. The site is live here [RestInEase](https://rest-in-ease-b95ec6911ae6.herokuapp.com/)

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
- [User Stories](#user-stories)
- [Am I Responsive](#am-i-responsive)
- [Project Overview](#project-overview)
  - [Learning Objectives](#learning-objectives)
  - [Assignment Requirements](#assignment-requirements)
  - [Self-Assessment](#self-assessment)
  - [Reusable Components](#reusable-components)
- [Features](#features)
  - [The Features](#gifs)
  - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
  - [Tools](#tools)
  - [Languages](#languages)
  - [Frameworks & Libraries](#frameworks-and-libraries)
-  [Testing](#testing)
   - [Validation](#validation)
   - [Lighthouse Test](#lighthouse)
   - [Browser Test](#browser-test)
   - [Wave](#wave)
   - [Bugs](#bugs)
- [Setup and deployment](#setup-and-deployment)
  - [Create Repository](#create-repository)
  - [Version Control](#version-control)
  - [Deployment to Heroku](#deployment)
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

- To Do: Tasks that are planned and ready to be worked on.
- In Progress: Tasks that are currently being worked on.
- Done: Completed tasks.
- Bugs: Identified issues that need to be fixed.
- Future Features: Ideas and features planned for future implementation.
- Won’t Have: Tasks and features that have been decided against including.

Using the Kanban board has helped me maintain a clear overview of the project, ensuring that tasks are properly tracked, prioritized, and completed efficiently. While the Kanban board focuses on higher-level planning and project progress, I have also developed detailed user stories for each specific feature of the application, documenting how different parts of the project align with user needs and goals.

This approach allows for both a broader view of the project timeline and detailed insight into how individual functionalities are built and integrated.

I find this combination of Kanban and detailed user stories essential for staying organized and focused, and I look forward to further developing these skills in future projects!
You can visit the Knaban board here:
[Kanban](https://github.com/users/JorgenDIF/projects/7)

## <a id="api">API</a>

The Rest In Ease social media app utilizes an API built with Django Rest Framework. For more details, please visit the
[repository](https://github.com/JorgenDIF/PP5-RestInEase-API)

## <a id="user-experience-ux">User Experience (UX)</a>

### <a id="the-strategy">The Strategy</a>

<details>
<summary>Read The Strategy</summary>
The goal of the Rest In Ease social media app is to create a platform where users can share their safe spots and express their feelings. Users can post and comment to convey their emotions, fostering meaningful connections through shared emotional experiences. The focus is on providing a space where emotional expression is encouraged, helping users connect with others and share their current state of mind.
</details>

### <a id="the-scope">The Scope</a>

<details>
<summary>Read The Scope</summary>
The scope of the Rest In Ease social media app includes:

1. User Profiles:

- Allow users to create and customize their profiles.
- Enable users to follow and interact with other users.

2. Posts:

- Enable users to add photos and express their feelings.
- Allow users to choose a category for their photos and share posts with images and text.
- Implement features for liking, commenting, and sharing posts.

3. Comments:

- Allow users to comment on posts.
- Enable users to express their feelings in comments.

4. Likes:

- Implement a feature for users to like posts.
- Display the number of likes on each post.
- Allow users to view who liked their posts.

5. User Interaction:

- Implement features for users to follow other users.


6. Search and Explore:

- Implement search functionality to find posts by keywords and users by name.
- Provide an explore feature to discover popular and recent posts.

 </details>

### <a id="the-structure">The Structure</a>

<details>
<summary>Read The Structure</summary>
The structure of the Rest In Ease social media app will include the following components:

1. Front-End:

- User Interface: Designed with a focus on user experience and ease of use.
- React Components: Modular components for posts, comments, profile pages, and navigation.

2. Back-End:

- Django Rest Framework API: Handles user authentication, data storage, and API requests.
- Database: Stores user data, posts, comments, and interactions.
</details>

### <a id="the-skeleton">The Skeleton</a>

<details>
<summary>Read The Skeleton</summary>
The skeleton of the Rest In Ease social media app outlines the basic structure and layout of the application based on the provided ERD (Entity-Relationship Diagram). The diagram shows the relationships between users, profiles, posts, comments, likes, and followers, which guide the overall structure of the app.

1. **Home Page:**

- **Feed of Recent and Popular Posts:**
- Display a list of posts fetched from the API.
- Include post details like title, content, image, mood, and the number of likes.

- **Search Bar:**
- Allow users to search for posts and users by keywords.

2. **Profile Page:**

- User Information:
- Display user details such as username, profile image, name, and bio.

- **User’s Posts and Interactions:**
- List all posts created by the user.

- **Followers and Following:**
- Display the list of users who follow the current user.
- Show the list of users the current user is following.

3. **Post Page:**

- **Detailed View of Individual Posts:**

- Display post details like title, content, image, mood, category, and number of likes.
- Show the owner of the post and the post’s creation and update dates.

- **Comments Section:**

- Allow users to view and add comments to the post.

- Display each comment’s owner, content, and mood.

4. **Create Post Page:**

- Form for Creating New Posts:
- Provide fields for the post title, content, image, mood, image filter, and category.
- Allow users to express their current feelings.

5. Likes and Follower Functionality:

- **Likes:**

- Allow users to like posts.
- Display the number of likes on each post and the users who liked the post.

- **Followers:**
- Allow users to follow and unfollow other users.
- Display the number of followers and following on the user profile page.
</details>

### The Wireframes can be found here:

<details>
<summary>Sign Up</summary>

![Sign Up](/src/assets/wireframes/sign-up-page.png)

</details>

<details>
<summary>Sign Up Iphone</summary>

![Sign Up Iphone](/src/assets/wireframes/sign-up-iphone.png)

</details>

<details>
<summary>Profile Page</summary>

![Profile Page](/src/assets/wireframes/profile-page.png)

</details>

<details>
<summary>Profile Iphone</summary>

![Profile Iphone](/src/assets/wireframes/profilepage-iphone.png)

</details>

<details>
<summary>Post Page</summary>

![Post Page](/src/assets/wireframes/post-page.png)

</details>

<details>
<summary>Post Iphone</summary>

![Post Iphone](/src/assets/wireframes/post-page-iphone.png)

</details>

<details>
<summary>Posts Page</summary>

![Posts Page](/src/assets/wireframes/posts-page.png)

</details>

<details>
<summary>Posts Iphone</summary>

![Posts Iphone](/src/assets/wireframes/posts-iphone.png)

</details>

### <a id="the-surface">The Surface</a>

<details>
<summary>The Surface</summary>
The visual design of the Rest In Ease application is aimed at creating a calming and inviting environment where users feel comfortable sharing their emotions and safe spots. Below is a breakdown of the key design elements that contribute to the app’s aesthetic and user experience.

**Typography**

The design of the Rest In Ease app uses a clean, modern aesthetic with soft, soothing colors to create a calming user experience. The primary typefaces are Lato for body text, providing clarity and readability, and Roboto for headings, offering a modern and bold contrast.

**Color Scheme**

- Primary colors like white (#ffffff) and light gray (#f8f6fc) create a clean and neutral background.
- 	Accent colors include:
-	Pink (#fecddf) for warmth in the logo and background elements.
- Blue (#3fa5dc) for interactive elements like buttons and links, adding a calming tone.
- Green (#28dba5) for important actions, bringing energy to key interactions.
- Dark navy (#1f173d) for strong contrast in text and buttons, ensuring readability.

These choices combine to create a simple, welcoming, and easy-to-navigate interface.

This palette shows my colors

![Palette](src/assets/palette.png)

**Visual Elements**

- Icons: Simple, universally understood icons are utilized throughout the app to represent emotions (e.g., smiling face, heart, and tears), guiding users through their posts and comments.
- Images: Users are encouraged to upload high-quality images of their safe spaces, giving the app a personal and intimate feel.
- Emotional Expressions: Each post and comment features a visual representation of the user’s mood, using emoji icons paired with descriptive text, helping users easily connect through shared emotional experiences.

**Layout**

- Consistency: Uniform layouts across all pages to provide a seamless user experience. The navigation structure remains the same across the app to ensure familiarity.
- Spacing: Ample white space between elements to keep the design clean and easy to read. The balance between elements enhances the visual experience without overwhelming the user.
- Responsive Design: The app is fully responsive, adjusting to different screen sizes on mobile devices, tablets, and desktops, ensuring usability across all platforms.

**User Interface Components**

- Buttons: Rounded buttons with soft shadows are used for interaction, making it clear where users can engage (e.g., “Post”, “Comment”, “Like”). Favicon-sized icons are integrated into these buttons, adding a visually engaging touch that enhances user interaction and navigability. Favicons are also used for menu selections and options like “Like” and “Comment,” providing intuitive visual cues for user actions.
- Forms: User-friendly forms with spacious input fields and clear labels. Input validation ensures users receive real-time feedback on any errors.
- Menus: Dropdown menus for editing or deleting posts,comments and editing profiles, along with a hamburger navigation for mobile users, provide easy access to various features without cluttering the interface. These streamlined options ensure that users can manage their content efficiently while maintaining a clean, organized layout.

These design elements are carefully selected to create a peaceful, intuitive, and emotionally engaging environment for users, aligning with the platform’s goal of fostering safe, meaningful emotional expression.

</details>

## <a id="am-i-responsive">Am I Responsive</a>

Showing of the responsiveness of the website on different devices.

<details>
<summary>Click to show image</summary>

![Responsive](src/assets/responsive.png)
</details>

## <a id="user-stories">User Stories</a>
<details>
<summary>User Stories</summary>

| Feature                         | User Story                                                                                                                       | Acceptance Criteria                                                                                                                                                  | Components Used                                                |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| **Navbar View on Every Page**    | As a user, I want to see a navigation bar on every page so that I can easily navigate between different sections of the site.     | 1. The navbar is consistently displayed on every page. <br> 2. The user can click links to navigate to different pages.                                               | `NavBar`, `NavLink`                                             |
| **Sign Up for New Account**      | As a user, I want to create a new account so that I can access all the features available to registered users.                    | 1. A sign-up form is implemented. <br> 2. Users can successfully create an account and log in.                                                                       | `SignUpForm`,`Form`, `Button`                      |
| **Sign In to Access Features**   | As a user, I want to sign in to the app so that I can access functionality for logged-in users.                                   | 1. The sign-in form is implemented. <br> 2. Users can log in with their credentials.                                                                                 | `SignInForm`, `useSetCurrentUser`, `Form`, `Button`             |
| **Search Posts by Keywords**     | As a user, I want to search for posts using keywords so that I can find specific posts based on titles, content, or categories.   | 1. A search bar is implemented. <br> 2. Posts are searchable by title, content, and category. <br> 3. The search results are updated in real-time based on input.     | `PostsPage`,`Form`, `Input`, `SearchBar`           |
| **Create New Posts**             | As a logged-in user, I want to create new posts with images and descriptions so that I can share my content with other users.     | 1. A form for creating new posts is available. <br> 2. Users can add a title, content, image, and select mood and category.                                           | `PostCreateForm`, `Form`, `Button`, `Image`         |
| **Edit My Post Details**         | As a post owner, I want to edit my post's title, description, mood, and category so that I can update my content after creation.  | 1. A dropdown menu (MoreDropdown) is available on the post page. <br> 2. Users can click the dropdown and select "Edit" to modify the post. <br> 3. Changes saved.   | `MoreDropdown`, `PostEditForm`, `axiosReq`                      |
| **Delete My Post**               | As a post owner, I want to delete my post so that I can remove it from the application.                                           | 1. A dropdown menu (MoreDropdown) is available on the post page. <br> 2. Users can click the dropdown and select "Delete" to remove the post. <br> 3. Post deleted.   | `MoreDropdown`,`PostDelete`                        |
| **View Post Details**            | As a user, I want to view the details of individual posts so that I can see the full content and any associated comments.         | 1. Post details are displayed, including title, image, and content. <br> 2. Users can see the mood and category associated with the post.                             | `Post`,`Image`, `Mood`, `Category`                 |
| **Like a Post**                  | As a logged-in user, I want to like a post so that I can show appreciation for its content.                                       | 1. A "like" button is available for each post. <br> 2. The like count updates when the user clicks the button.                                                       | `LikeButton`, `axiosReq`                                        |
| **Add Comments to Posts**        | As a logged-in user, I want to add comments to a post so that I can share my thoughts about the post.                             | 1. Users can add comments to posts using a comment form. <br> 2. Comments are saved and displayed in real-time. <br> 3. Users can add a "feeling" (mood) to comments. | `CommentCreateForm`, `Form`, `Button`               |
| **Edit My Comments**             | As a comment owner, I want to edit my comments so that I can update my content after it has been posted.                         | 1. A dropdown menu (MoreDropdown) is available on the comment. <br> 2. Users can click the dropdown and select "Edit" to modify the comment. <br> 3. Changes saved.   | `MoreDropdown`, `CommentEditForm`,                  |
| **Delete My Comments**           | As a comment owner, I want to delete my comments so that I can remove them from the application.                                  | 1. A dropdown menu (MoreDropdown) is available on the comment. <br> 2. Users can click the dropdown and select "Delete" to remove the comment. <br> 3. Comment deleted. | `MoreDropdown`, `CommentDelete`                     |
| **Edit My Profile**              | As a logged-in user, I want to edit my profile so that I can update my name, bio, and profile picture.                            | 1. A profile edit form is available. <br> 2. Users can update their profile information and image.                                                                   | `ProfileEditForm`,  `Form`, `Button`                 |
| **View User Profiles**           | As a user, I want to view the profile of other users so that I can see their posts and learn more about them.                    | 1. Profile page shows the user’s details, posts, and statistics. <br> 2. User stats include followers, following, and post counts.                                   | `ProfilePage`, `Profile`                          |
| **Infinite Scroll**              | As a user, I want to continuously scroll through the list of posts without needing to load new pages so that browsing is smooth.  | 1. New posts are loaded automatically as the user scrolls. <br> 2. The scroll continues until all posts are loaded.                                                  | `InfiniteScroll`, `Post`                           |
| **Landing Page (PostsPage)**     | As a user, I want to land on a page where I can see the most recent posts and have the ability to search and browse posts.        | 1. The landing page shows all the most recent posts. <br> 2. Users can search for posts using keywords. <br> 3. The page supports infinite scrolling for posts.      | `PostsPage`, `Post`, `SearchBar`, `InfiniteScroll`, 
| **Follow/Unfollow Users**       | As a logged-in user, I want to follow or unfollow other users so that I can see or stop seeing their posts in my feed.                                      | 1. A "Follow" button appears on profiles I don’t follow. <br> 2. A "Unfollow" button appears on profiles I already follow. <br> 3. Followers count updates.   | `Button`, `Profile`, `useSetProfileData` |
| **View Most-Followed Users**    | As a user, I want to see the most-followed users so that I can discover popular profiles to follow.                                                        | 1. A list of the most-followed users is visible. <br> 2. The list is ordered by the number of followers.                                                     | `PopularProfiles`, `Profile`     |
 **Like Posts (Except Own)**     | As a logged-in user, I want to like posts so that I can show appreciation for others’ content, but not be able to like my own posts.                       | 1. A “like” button is visible on posts that aren’t mine. <br> 2. Users can like and unlike posts, but not their own. <br> 3. Like count updates in real-time. | `Post`,`OverlayTrigger`, `Tooltip` 

</details>

## <a id="project-overview">Project Overview</a>

### <a id="learning-objectives">Learning Objectives</a>

Learning Objectives

This project focuses on achieving the following learning and development goals:
<details>
<summary>Click to show Learning objectives</summary>

1.	Mastery of Full-Stack Development: Build a solid foundation in both frontend (React, Bootstrap) and backend (Django REST Framework) technologies, ensuring seamless interaction between client and server-side functionalities.
2.	Proficiency in API Consumption: Learn to effectively consume and integrate APIs in the frontend, leveraging React for dynamic user interactions.
3.	Responsive Web Design: Ensure the application adjusts to different device screen sizes using Bootstrap, providing a smooth user experience across all platforms.
4.	Component Reusability: Develop a modular and maintainable codebase by creating reusable components and separating logic within the application.
5.	Project Management and Version Control: Employ Git and GitHub for efficient version control and task tracking throughout the project lifecycle.
6.	Security and Best Practices: Focus on securing the application, including API key management, authentication, and user access control.
7.	Testing and Deployment: Engage in manual and automated testing to ensure the application is free of bugs and issues before deployment. Additionally, deploy the application to a cloud platform like Heroku for real-world accessibility.

</details>

### <a id="assignment-requirements">Assignment Requirements</a>



Assignment Requirements

A breakdown of the essential requirements for the project, as outlined by the educational curriculum:
<details>
<summary>Click to show Assignment Requirements </summary>

1.	Full-Stack Web Application: Develop a functional web application that allows users to create, edit, and interact with posts, including likes, comments, and followers.
2.	User Authentication: Implement secure user authentication using Django REST Framework and React, allowing users to register, sign in, and manage their profiles.
3.	API-Driven Development: Build a comprehensive REST API for posts, comments, followers, and profile management, ensuring proper CRUD functionality and data validation.
4.	Responsive Design: Ensure that the frontend adapts smoothly across different screen sizes using Bootstrap for a responsive and accessible UI.
5.	Interactive User Experience: Design an intuitive and user-friendly interface where users can interact with the application’s features (e.g., posts, comments) in real time.
6.	Comprehensive Documentation: Document the project thoroughly, including the API structure, frontend and backend setup, and deployment process in the README files.
7.	Version Control and Commit Messages: Use Git for source control, ensuring consistent and meaningful commit messages to track the development process.
8.	Manual Testing and User Feedback: Implement thorough manual testing across different browsers and platforms, and gather feedback to refine the application.

</details>

### <a id="self-assessment">Self-Assessment</a>

Self-Assessment

This section provides an evaluation of the project development process, including challenges faced, lessons learned, and areas for improvement.
<details>
<summary>Click to show Self-Assessment </summary>

1.	Learning Reflection: This project has greatly enhanced my understanding of full-stack development, particularly with React on the frontend and Django REST Framework on the backend. Implementing the API and integrating it with the React components was a rewarding challenge.
    - Highlights: One of the most valuable lessons was learning how to structure a React application with reusable components, especially in handling forms and API integration. This allowed me to build a more modular and scalable frontend. Moreover, the authentication process using Django REST Framework gave me hands-on experience with securing an application.
    - Challenges: The most significant challenge was managing state in React, particularly when dealing with complex forms (e.g., post creation with mood and category fields). Additionally, configuring and securing API endpoints to ensure proper data validation required additional focus.
    - Achievements: Successfully deploying the full application, with both frontend and backend seamlessly connected via the API, stands out as a major achievement. Implementing dynamic forms and secure user authentication added depth to the project.
2.	Areas for Improvement: While I have made progress, there are areas for improvement, especially in optimizing API performance and managing complex state in React. Future enhancements could include implementing real-time updates with WebSockets for features like comments and likes, and refactoring the hardcoded mood and category data into a more flexible backend-driven solution.

</details>

### <a id="reusable-components">Reusable Components</a>

This application features reusable components, which help maintain scalability and efficiency. Below are examples:
<details>
<summary>Click to show components</summary>

#### NavBar Component:

- Purpose: Provides navigation across the application, showing sign-in options, user profile 
  links, and post creation.
- Reusability: The NavBar is used across all app routes to maintain consistent navigation.
- Props: Displays dynamic links based on user authentication status.

#### MoreDropdown Component:

- Purpose: Allows users to edit or delete posts/comments.
- Reusability: Used in post, profile, and comment components to manage user-specific actions.
- Props: Functions like handleEdit, handleDelete.

#### Avatar Component:

- Purpose: Displays user profile images.
- Reusability: Used across the app to consistently display user images in posts, comments, and 
  profiles.
- Props: src, height, text.

#### Profile Component:

- Purpose: Displays user profile details, including follow/unfollow actions.
- Reusability: Used on the profile page and in the PopularProfiles component to maintain 
  consistent display.
- Props: profile, imageSize, mobile.

</details>
</br>

## <a id="features">Features</a>

### <a id="the-features">The Features</a>

<details>
<summary>Click to show features</summary>

#### Home Page
When you enter the site, you’re greeted with a list of posts and clear options to Sign In or Sign Up. The page is designed to make you feel welcome and encourage exploration, providing an easy entry point to engage with the app.
<details>
<summary>Click to show home image</summary>

  ![Home](src/assets/Features/home1.png)

</details>
</br>

####  Sign Up Page

This is where you can create an account for the Rest In Ease app.
<details>
<summary>Click to show sign up image</summary>

![Sign Up](src/assets/Features/signup.png)

</details>
</br>

#### Sign In Page

This is where you log in after creating an account. 

<details>
<summary>Click to show sign in image</summary>

![Sign In](src/assets/Features/signin.png)

</details>
</br>

#### Home Page Signed In
This is what the Home Page looks like after signing in.

<details>
<summary>Click to show signed in homepage image</summary>

![Signed In](src/assets/Features/home-signin.png)

</details>
</br>

#### Feed

This is the user’s feed where you can see posts from users you follow.

<details>
<summary>Click to show feed image</summary>

![Feed](src/assets/Features/feed.png)

</details>
</br>

#### Liked
Here, the user can view the posts they have liked.

<details>
<summary>Click to show liked image</summary>

![Liked](src/assets/Features/liked.png)

</details>
</br>

#### Profile

This is the user’s profile page.

<details>
<summary>Click to show profile image</summary>

![Profile](src/assets/Features/profile.png)

</details>
</br>

#### Dropdown Profile

This displays the dropdown menu for the profile.

<details>
<summary>Click to show profile dropdown image</summary>

![Dropdwon Profile](src/assets/Features/dropdown-profile.png)

</details>
</br>

#### Edit Profile

This is where the user can edit their profile, update their bio, and change their photo.

<details>
<summary>Click to show edit profile image</summary>

![Edit Profile](src/assets/Features/edit-profile.png)

</details>
</br>

##### Create Post

This is where the user can create a post. They are required to select a category and mood. 

<details>
<summary>Click to show create post image</summary>

![alt text](src/assets/Features/create-post.png)

</details>
</br>

#### Single Post

This is where you land when you click on one of your posts.

<details>
<summary>Click to show create single post image</summary>

![Single Post](src/assets/Features/single-post.png)

</details>
</br>

#### Dropdown Post

This is the dropdown menu for a user’s post, where you can edit or delete it.

<details>
<summary>Click to show post dropdown image</summary>

![Dropdown Post](src/assets/Features/dropdown-post.png)

</details>
</br>

#### Edit Post

This is the page where you can edit a post.

<details>
<summary>Click to show edit post image</summary>

![Edit Post](src/assets/Features/edit-post.png)

</details>
</br>

#### Create Comment

This is the page where you can create a comment. The user is required to select a feeling.

<details>
<summary>Click to show create comment image</summary>

![Create Comment](src/assets/Features/create-comment.png)


</details>
</br>

#### Dropdown Comment

This is the dropdown menu for a comment created by the user.

<details>
<summary>Click to show dropdown comment image</summary>

![Dropdown Comment](src/assets/Features/dropdown-comment.png)

</details>
</br>

#### Edit Comment

This is the page where you can edit or delete a comment.

<details>
<summary>Click to show edit comment image</summary>

![Edit Comment](src/assets/Features/edit-comment.png)

</details>
</br>

#### Most Followed Profiles

Here you can see the most followed profiles

<details>
<summary>Click to show Popular profiles image</summary>

![Popular profiles](src/assets/Features/most-followed-profies.png)

</details>
</br>

#### Mobile mode

Two GIFs showing the app in iPhone mode, highlighting its main interface and mobile responsiveness.

<details>
<summary>Click to show iphone gif-1</summary>

![Gif 1](src/assets/Features/iphone-mode.gif)

</details>
</br>

<details>
<summary>Click to show iphone gif-1</summary>

![Gif 1](src/assets/Features/iphone-mode-2.gif)

</details>
</br>

</details>

### <a id="future-features">Future Features</a>
**Important**
- As the project progressed, I initially added fields such as mood, category, and feeling directly to the models in the backend. However, as I worked through the development, I realized that a more dynamic approach—by managing these fields separately as general models—would offer greater flexibility and scalability. This change in thinking came as I started to envision how much easier it would be to update and reuse these fields across different parts of the application without hardcoding them in the frontend. Given the time constraints, I kept the current implementation, but I plan to refactor it in the future to fully support dynamic and reusable fields for moods, categories, and feelings, as part of a more scalable solution. This improvement is part of my future roadmap for the project.

**More Future Feauters**
<details>
<summary>Click to show more Future Features</summary>

1.	Direct Messaging:
     - Allow users to send and receive private messages between one another. This feature would include:
    - A messaging interface for users to manage conversations.
    -	Notifications for new messages.
    - The ability to block users from sending messages.
2.	Notifications System:
    - Implement a notification system to inform users about various activities such as:
    - New followers.
    - Comments on their posts.
    - Likes on their posts.
    -	Mentions in posts or comments.
    - Direct messages.
3.	Set Mood in Profile:
    - Add the ability for users to set their current mood on their profile.
    - This mood would be displayed publicly, reflecting their emotional state.
    - Users can change their mood at any time and see a history of previous moods.
4.	Add Video Support:
    - Allow users to upload and share videos in their posts, alongside or instead of images.
    - This would include:
    - Support for common video formats (e.g., MP4, AVI).
    - A video player interface embedded in posts for easy playback.
    - Options to set thumbnails for video posts.

</details>

## <a id="technologies-used">Technologies Used</a>

<details>
<summary>Click to show technologies</summary>

1. Axios (v0.24.0): A promise-based HTTP client that facilitates communication between the frontend and backend. Axios simplifies making HTTP requests to the REST API and manages headers automatically. In addition, it supports interceptors, which help handle token refreshing for user authentication, improving the user experience by allowing users to stay logged in without frequent re-authentication.
2. React Bootstrap (v2.0.0): A frontend framework for React that provides pre-built responsive components. This was chosen to accelerate development by offering an array of customizable components like forms, buttons, and dropdowns, enabling focus on core functionality rather than building components from scratch.
3. JWT-Decode (v3.1.2): Used to decode JSON Web Tokens (JWT) in the authentication process. This helps maintain secure user sessions by verifying the authenticity of tokens and extracting user information from them.
4. React (v17.0.2): The core JavaScript library used for building the user interface. React enables the creation of reusable components and handles dynamic updates to the UI efficiently.
5. React Router (v6.0.2): A routing library that allows for seamless navigation between different pages of the app. It improves the user experience by managing the app’s routes in a declarative and flexible way.
6. CSS Modules: A method for writing modular, scoped CSS to prevent style conflicts across the application. This ensures that styles are only applied to the component they are meant for, improving maintainability.
	
8.	Git & GitHub: Used for version control, tracking changes, and collaborating on the project. GitHub also serves as the repository for storing the codebase.

</details>

### <a id="languages">Languages</a>

<details>
<summary>Click to show languages</summary>

1.	HTML – used for structuring the content of the React components.
2.	CSS – used for styling the web application.
3.	JavaScript – the main programming language used with React to build dynamic web applications.

</details>

### <a id="tools">Tools</a>

<details>
<summary>Click to show Tools</summary>

-	GitPod Enterprise: A cloud-based development environment used for coding and testing. I switched from VS Code to GitPod during the project to better utilize Tutor Support.
-	Git: Used for version control, enabling tracking of changes and collaboration through branches and commits.
- GitHub: A platform for hosting the project’s Git repositories, also used for managing tasks and issues.
- ESLint: A tool used for identifying and fixing code quality and syntax errors in JavaScript, ensuring consistent code standards.
- Balsamiq: Employed to design wireframes, helping plan the layout and user interface before development began.
- Heroku: A cloud platform used to deploy the application, making it accessible online.
- Cloudinary: A cloud-based image management service, used for uploading and delivering images efficiently.

</details>

### <a id="frameworks-and-libraries">Frameworks & Libraries</a>

<details>
<summary>Click to show Frameworks</summary>

- React 17.0.2: The core JavaScript library used for building the user interface of the app, especially for creating reusable components.
- React Bootstrap 1.6.6: Integrated to provide ready-made UI components following the Bootstrap framework, allowing for responsive and consistent design.
- React Router 5.3.4: A client-side routing library for React, enabling smooth navigation between pages without reloading.
- Axios 0.21.1: A promise-based HTTP client used for making requests to the REST API, simplifying data fetching and sending.
- jwt-decode 3.1.2: A library for decoding JSON Web Tokens (JWT), used for handling authentication tokens in the app.
- react-infinite-scroll-component: Enables infinite scrolling functionality to load additional content dynamically as the user scrolls through the page.

</details>



## <a id="testing">Testing</a>

Manual testing were preformed. The results are shown here
[Test](TEST.md)

### <a id="validation">Validation</a>

- The React code was validated using ESLint. You can view the results here.
![ESLint](src/assets/validation/eslint.png)

- The HTML code was validated with https://jigsaw.w3.org/css-validator/.

<details>
<summary>Click to show HTML validation</summary>

![alt text](src/assets/validation/htmlvalidate.png)
Note: During the validation of the index.html file, there are some warnings related to the usage of %PUBLIC_URL%. This placeholder is used in React applications created with Create React App (CRA) to correctly reference resources (such as icons and manifests) from the public directory. These warnings do not affect the functionality of the application and are resolved when the app is built for production, as %PUBLIC_URL% is replaced with the correct path.

</details>
</br>

- The CSS code was validated with https://jigsaw.w3.org/css-validator/#validate_by_input All the results looked like this:
<details>
<summary>Click to show CSS validation</summary>

![CSS](src/assets/validation/css.png)

</details>

### <a id="lighthouse">Lighthouse Test</a>

Lighthouse test was made for a number of pages with the following results:
<details>
<summary>Click to show Home Lighthouse test</summary>

![Home](src/assets/lighthouse/home-lighthouse.png)

</details>
<details>
<summary>Click to show Sign Up Lighthouse test</summary>

![Sign Up](src/assets/lighthouse/sign-up-lighthouse.png)
</details>

<details>
<summary>Click to show Sign In Lighthouse test</summary>

![Sign In](src/assets/lighthouse/login-lighthouse.png)
</details>
<details>
<summary>Click to show Create a Post Lighthouse test</summary>

![Create a Post](src/assets/lighthouse/create-post-lighthouse.png)
</details>
<details>
<summary>Click to show Profile Lighthouse test</summary>

![Profile](src/assets/lighthouse/profile-lighthouse.png)
</details>

### <a id="browser-test"> Browser Test </a>

I tested the application on following browsers:
| **Browser**        | **Operating System** | **Result**         |
|--------------------|----------------------|--------------------|
| Google Chrome      | macOS Sonoma         | Passed             |
| Mozilla Firefox    | Windows 10           | Passed             |
| Microsoft Edge     | Windows 10           | Passed with minor UI variation |
| Safari             | macOS Sonoma         | Passed             |
| Opera              | Windows 10           | Passed             |
| Safari             | iOS 17               | Passed             |

### <a id="wave">Wave</a>
 I tested the home page with wave. This is the result:
 
 <details>
<summary>Click to show Wave</summary>

 ![Wave](src/assets/wave.png)

</details>

### <a id="bugs">Bugs</a>

The bugs are shown in the [Kanban](https://github.com/users/JorgenDIF/projects/7) board 

## <a id="setup-and-deployment">Setup and Deployment</a>

### <a id="create-repository">Create Repository</a>


Step-by-step guide on creating a new repository from the Gitpod Full Template by Code Institute.
<details>
<summary>Click to expand</summary>

**Log in to GitHub:**
1. Open your web browser and navigate to GitHub.
2. If you are not already logged in, enter your GitHub username and password to log in.

**Access the Gitpod Full Template:**
1. Go directly to the Gitpod Full Template repository.

**Create a New Repository Using the Template:**
1. On the template repository page, look for the green button that says "Use this template". Click on this button.
2. You will be redirected to the "Create a new repository from gitpod-full-template" page.

**Configure Your New Repository:**
1. Repository name: Enter a name for your new repository.
2. Repository description (optional): Provide a brief description of your repository.
3. Privacy settings: Choose whether the repository should be Public (anyone can see this repository) or Private (you choose who can see this repository).
4. Leave the "Include all branches" checkbox unchecked if you just need the main branch; check it if you need all branches from the template.

**Create the Repository from the Template:**
1. Click the "Create repository from template" button to create your new repository with the contents of the Gitpod Full Template.

**Access Your New Repository:**
1. Once the repository is created, you will be redirected to your new repository page on GitHub.
</details>

### <a id="version-control">Initialize in VS Code</a>
<details>
<summary>Version Control</summary>
<br>
The site was created using the Gitpod editor and pushed to github to the remote repository ‘pixavibe-frontend’.
The following git commands were used throughout development to push code to the remote repo:

- `git add <file>` - This command was used to add the file(s) to the staging area before they are committed.
- `git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.
- `git push` - This command was used to push all committed code to the remote repository on github.
</details>

### <a id="deployment">Deployment to Heroku</a>

<details>
 <summary>To deploy the project to Heroku</summary>
 
 <br>

**Preparing the Application**

- Create and add the 'Procfile' to your application's root directory `echo web: node index.js > Procfile`. Heroku relies on this file to determine how to run your application, ensuring the correct setup of your web server. Use commands like web: `gunicorn PROJ_NAME.wsgi` in the 'Procfile' to instruct Heroku on starting your web server with Gunicorn
- Ensure you have a requirements.txt file listing all project dependencies.
- Set up necessary configuration variables in Heroku setting tab > Config Vars (eg. SECRET_KEY, DATABASE_URL, etc.).
- In your app's 'settings.py' add Heroku to ALLOWED_HOSTS

**Initial set-up**

- Sign up for a [Heroku](https://heroku.com/) account at Heroku's website.
- Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.
- Or use Heroku Web interface.

**Create Heroku App**

- Sign in or sign up to [Heroku](https://heroku.com/).
- Click the button that says "Create new app."
- Enter a unique app name.
- Choose your region from the dropdown menu.
- Click the "Create app" button.
- Scroll further down on the page, select Add Buildpack. The buildpacks will install further dependencies that are not included in the 'requirements.txt'. <br>
  It's crucial to arrange the build packs correctly! First, choose Python and then Node.js. If they're not in this sequence, you can reorder them by dragging.

**Deployment**

- Deploy by either push your code to Heroku or by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
- (if applicable) Run database migrations using the Heroku CLI.
- For deploying this project, we're using GitHub as our method. After choosing GitHub, make sure to confirm the connection. Then, search for your repository name and once Heroku finds your repository - click "connect"
- Scroll down to the section "Automatic Deploys".
- Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy.
- Click "Deploy branch" wait for the app to be built. Once this is done, a message should appear letting us know that the app was successfully deployed.
- Click the button "View" to see the app.

**Final Steps**

- Enable the Web Dyno, make sure the web dyno is up and running after deployment.
- Open your application from the Heroku dashboard or using the CLI command heroku open.
</details>

## <a id="credits">Credits</a>

### <a id="content">Content</a>

- This project was primarily developed by following the Moments Walkthrough project from Code Instiute.

- Inspiration and learning about React came primarily from [Net Ninja](https://www.youtube.com/watch?v=j942wKiXFu8)

- This Tutorial taught me about Postman testing [Postman](https://www.youtube.com/watch?v=cGn_LTFCif0&list=PLhW3qG5bs-L9P22XSnRe4suiWL4acXG-g)

- This tutorial showed me more about Django Rest Framework [Django REST Framework](https://www.youtube.com/watch?v=zpz5OeNKUug&list=PLx-q4INfd95FWHy9M3Gt6NkUGR2R2yqT8)

- [React](https://react.dev/learn) Also learned alot from here
- [Django Rest framework](https://www.django-rest-framework.org/) Learned alot from here
- Bootstrap was used across the project [Bootstrap documentation](https://getbootstrap.com/).
- The logo was made using [Loka](https://looka.com/?_gl=1*14hkpy7*_up*MQ..&gclid=CjwKCAjw0aS3BhA3EiwAKaD2ZWQZ81yQ06iOQvnWnFO9dGcVdTFZIEqbcKCQxvXftfePKWk0ifJcWxoC1ogQAvD_BwE)
- I referred to the README structure and documentation from the [Pixavibe Project](https://github.com/JaqiKal/pixavibe-frontend/blob/main/README.md) as an excellent example of clear, detailed project documentation, and it served as inspiration for formatting my own.

### <a id="thank-you">Thank You</a>

- A Big thank you to my mentor Dich Vlaanderen for the support and help along the way
- My wife and family for the love and support
- The slack community and mainly the Swedish Channel. Truly special
