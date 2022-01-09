# The Guestbook

## Learning Objectives

- Use `useContext` to manage global application state
- Be able to spread props into children components
- Describe why context is necessary
- Use functions to expose API calls to components
- Use snapshot testing for presentational components
- Use custom hooks to share application logic
- Use props.children to pass child components into a component

## Live Example

https://alchemy-guestbook.netlify.app/

### Description

For this deliverable, we'll be making the **Guestbook** using the `useContext` hook to manage our application state globally. The `useContext` hook provides a way to pass state throughout our application through a combination of a `context Provider`, and custom hooks. This solves the problem of prop drilling by allowing us to pass data directly to the components that need it.

In the guestbook users can input their name and a guest entry. An entry is like a note in our book. Once a user signs the book their name is stored in context and we conditionally render their name and other elements.

Use the React template to start your project.

### Acceptance Criteria

- User should be able to type in their name and a guest entry
- User should see a list of entries as the form is submitted
- User should see their name in the header
- Input for name should disappear once a name has been entered
- User should have a button to change guest name

### Rubric

| Tasks                                                             | Points |
| :---------------------------------------------------------------- | -----: |
| Share the user name through context                               |      4 |
| Use a custom hook to expose our context state                     |      4 |
| Use a custom hook to expose a way to update our context           |      4 |
| Use the children prop to provide context data to child components |      2 |
| Use the user context state in at least 2 components               |      2 |
| Snapshot testing                                                  |      2 | 
| Deployed on Netlify with passing CI                               |      2 |


![Assignment 2- Add Auth- Rubric](https://user-images.githubusercontent.com/78505141/148700912-4296244c-1d47-4fd0-8304-c27e8f04be49.png)
