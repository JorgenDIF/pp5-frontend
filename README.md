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
- [User Stories](#user-stories)
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
- Enable notifications for new posts, comments, likes, and interactions.

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

## The Wireframes can be found here:

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

- Primary Typeface: A clean sans-serif font is used for all headings, navigation menus, and buttons to ensure clarity and accessibility across different devices.
- Secondary Typeface: A softer serif font is applied to body text for a warm and welcoming touch, enhancing the emotional tone of the app.

**Color Scheme**

- Primary Colors: Soothing tones such as soft blues and muted greens to evoke a sense of calm and serenity.
- Secondary Colors: Light grays and off-white shades are used to balance the interface, providing clarity without overwhelming the user.
- Accent Colors: Gentle pastels like light pink or lavender for action buttons and interactive elements, adding a touch of warmth to user interactions.

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
- Menus: Dropdown menus for editing or deleting posts and profiles, along with a hamburger navigation for mobile users, provide easy access to various features without cluttering the interface. These streamlined options ensure that users can manage their content efficiently while maintaining a clean, organized layout.

These design elements are carefully selected to create a peaceful, intuitive, and emotionally engaging environment for users, aligning with the platform’s goal of fostering safe, meaningful emotional expression.

</details>

## <a id="am-i-responsive">Am I Responsive</a>

## <a id="user-stories">User Stories</a>

| Feature                         | User Story                                                                                                                       | Acceptance Criteria                                                                                                                                                  | Components Used                                                |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| **Navbar View on Every Page**    | As a user, I want to see a navigation bar on every page so that I can easily navigate between different sections of the site.     | 1. The navbar is consistently displayed on every page. <br> 2. The user can click links to navigate to different pages.                                               | `NavBar`, `NavLink`                                             |
| **Sign Up for New Account**      | As a user, I want to create a new account so that I can access all the features available to registered users.                    | 1. A sign-up form is implemented. <br> 2. Users can successfully create an account and log in.                                                                       | `SignUpForm`, `axiosReq`, `Form`, `Button`                      |
| **Sign In to Access Features**   | As a user, I want to sign in to the app so that I can access functionality for logged-in users.                                   | 1. The sign-in form is implemented. <br> 2. Users can log in with their credentials.                                                                                 | `SignInForm`, `useSetCurrentUser`, `Form`, `Button`             |
| **Search Posts by Keywords**     | As a user, I want to search for posts using keywords so that I can find specific posts based on titles, content, or categories.   | 1. A search bar is implemented. <br> 2. Posts are searchable by title, content, and category. <br> 3. The search results are updated in real-time based on input.     | `PostsPage`, `axiosReq`, `Form`, `Input`, `SearchBar`           |
| **Create New Posts**             | As a logged-in user, I want to create new posts with images and descriptions so that I can share my content with other users.     | 1. A form for creating new posts is available. <br> 2. Users can add a title, content, image, and select mood and category.                                           | `PostCreateForm`, `axiosReq`, `Form`, `Button`, `Image`         |
| **Edit My Post Details**         | As a post owner, I want to edit my post's title, description, mood, and category so that I can update my content after creation.  | 1. A dropdown menu (MoreDropdown) is available on the post page. <br> 2. Users can click the dropdown and select "Edit" to modify the post. <br> 3. Changes saved.   | `MoreDropdown`, `PostEditForm`, `axiosReq`                      |
| **Delete My Post**               | As a post owner, I want to delete my post so that I can remove it from the application.                                           | 1. A dropdown menu (MoreDropdown) is available on the post page. <br> 2. Users can click the dropdown and select "Delete" to remove the post. <br> 3. Post deleted.   | `MoreDropdown`, `axiosReq`, `PostDelete`                        |
| **View Post Details**            | As a user, I want to view the details of individual posts so that I can see the full content and any associated comments.         | 1. Post details are displayed, including title, image, and content. <br> 2. Users can see the mood and category associated with the post.                             | `Post`, `axiosReq`, `Image`, `Mood`, `Category`                 |
| **Like a Post**                  | As a logged-in user, I want to like a post so that I can show appreciation for its content.                                       | 1. A "like" button is available for each post. <br> 2. The like count updates when the user clicks the button.                                                       | `LikeButton`, `axiosReq`                                        |
| **Add Comments to Posts**        | As a logged-in user, I want to add comments to a post so that I can share my thoughts about the post.                             | 1. Users can add comments to posts using a comment form. <br> 2. Comments are saved and displayed in real-time. <br> 3. Users can add a "feeling" (mood) to comments. | `CommentCreateForm`, `axiosReq`, `Form`, `Button`               |
| **Edit My Comments**             | As a comment owner, I want to edit my comments so that I can update my content after it has been posted.                         | 1. A dropdown menu (MoreDropdown) is available on the comment. <br> 2. Users can click the dropdown and select "Edit" to modify the comment. <br> 3. Changes saved.   | `MoreDropdown`, `CommentEditForm`, `axiosReq`                   |
| **Delete My Comments**           | As a comment owner, I want to delete my comments so that I can remove them from the application.                                  | 1. A dropdown menu (MoreDropdown) is available on the comment. <br> 2. Users can click the dropdown and select "Delete" to remove the comment. <br> 3. Comment deleted. | `MoreDropdown`, `axiosReq`, `CommentDelete`                     |
| **Edit My Profile**              | As a logged-in user, I want to edit my profile so that I can update my name, bio, and profile picture.                            | 1. A profile edit form is available. <br> 2. Users can update their profile information and image.                                                                   | `ProfileEditForm`, `axiosReq`, `Form`, `Button`                 |
| **View User Profiles**           | As a user, I want to view the profile of other users so that I can see their posts and learn more about them.                    | 1. Profile page shows the user’s details, posts, and statistics. <br> 2. User stats include followers, following, and post counts.                                   | `ProfilePage`, `Profile`, `axiosReq`                            |
| **Infinite Scroll**              | As a user, I want to continuously scroll through the list of posts without needing to load new pages so that browsing is smooth.  | 1. New posts are loaded automatically as the user scrolls. <br> 2. The scroll continues until all posts are loaded.                                                  | `InfiniteScroll`, `Post`, `axiosReq`                            |
| **Landing Page (PostsPage)**     | As a user, I want to land on a page where I can see the most recent posts and have the ability to search and browse posts.        | 1. The landing page shows all the most recent posts. <br> 2. Users can search for posts using keywords. <br> 3. The page supports infinite scrolling for posts.      | `PostsPage`, `Post`, `SearchBar`, `InfiniteScroll`, `axiosReq`  |


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
