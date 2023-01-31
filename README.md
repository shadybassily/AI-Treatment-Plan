
# AI-Treatment-Plan-Task
A front end application that takes question inputs on the left side of the screen (google form like) and then show the response on the right side of the screen.

### Dependencies 
* `Vite` `npm create vite`, so to run the project, use `npm run dev`
*  `react-hook-form` `yup` `@hookform/resolvers` 
* `react-draft-wysiwyg` rich TextEditor.
* `react-redux` `@reduxjs/toolkit`
* `framer-motion` 
* `react-icons`

## Notes:

1. As there is no webhook to post to and get from to provide the output, Lorem ipsum text is used.

2. Login/Logout functionality is handled by setting the userAuth state to true once logged in, and to false when logged out.

3. No logic implemented on the signIn/signup form (no fields validations).

4. On the sideBar, when PLans are displayed, it will only show 4 plans, then `show more` link will appear, yet the logic is not implemented, just to demonstrate the saved plans.

5. onClick on any plan in the side bar, the text will be displayed below, the plan is saved as plain text, so if images are included/bold/italic or any other option, will be shown. soon to work on that

