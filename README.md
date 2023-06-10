# :heavy_check_mark:Todo List
This project is to develop a simple Todo list application *(written in React using Vite)* that allows users to create, edit, and delete tasks. It is built using the latest ReactJS features, including hooks and state management. The application is divided into two main components: the **Todo list** and the **task editor**. 

- The to-do list component displays a list of all the tasks in the application.
- The task editor component allows users to edit and delete tasks.

Implemented features include: <br>
- Add a new task by entering a title and description.
- Edit the title and description of an existing task by clicking on the task.
- Mark a task as completed.
- Delete a task.
− Filter tasks based on their completion status (completed, pending, or all).
- Use local storage to save the tasks so they persist upon page refresh.
- Set a due date using a date picker for tasks.

## :thought_balloon:How to run?
> Get the code
```
$ git clone https://github.com/hieptth/to-do-list.git
$ cd to-do-list
```
> Start the app in VSCode (optional)
```
$ code .        # This step is optional, you may choose other editor.
$ npm i         # Install the dependencies
$ npm run dev   # Start the developer build
```
Visit the **link** provided in the terminal. The app should be up & running.

![Demo](public/assets/demo-img.png)

## :nut_and_bolt:Code-based Structure
The project has a super simple structure, represented as below:
```
< PROJECT ROOT >
|
│--- .eslintrc.cjs
│--- .gitignore
│--- index.html
│--- main.css
│--- package-lock.json
│--- package.json
│--- README.md
│--- tsconfig.json
│--- tsconfig.node.json
│--- vite.config.ts
│ 
├───public
│   │--- site.webmanifest
│   │--- 
│   └───assets
│       | --- *.png
│
└───src
    │--- App.css
    │--- App.tsx
    │--- main.tsx
    │--- vite-env.d.ts
    │
    ├───assets
    └───components
        | --- AddCard.tsx
        | --- Card.tsx
        | --- CardDetail.tsx
        | --- TodoWrapper.tsx
```

## :soon:Deployment
You can check out the deployed product via the [link](https://hieptth-to-do-list.netlify.app/).