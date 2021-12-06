# Intro to Node

Node JS gives us the power to take JavaScript out of the browser - this means we're able to use it in servers and on the back end. Make sure you have the relevant version of Node for your OS installed from [here](https://nodejs.org/en/download/); you can choose which version you download, but the LTS version is recommended.

Let's try it out now by making a simple Node app. Everyone has something they collect, no matter how mundane or kooky. As fun as it to talk about our collection, we're busy people! Let's make an app that automates talking about all the nice things in our collection for us in a cool, colorful way.

## Part 1: Checking your setup

First of all, let's check our tools are set up correctly. Open your terminal and enter the following code.

Check your NodeJS version:

```bash
node -v
```

Check your npm version:

```bash
npm -v
```

You should see some information about the versions of both Node and npm. If you see some errors, it may mean your installation of the tools hasn't worked properly. Have a google to find out what might have gone wrong.

If you did see the version numbers, now it's time to play around in Node. In your terminal, enter `node` as the command. You should see a prompt appear - this is your NodeJS console. Try typing in some JavaScript - it is a REPL which executes the JavaScript for you.

## Part 2: Setting up and running files with Node

👉 2a. Turn the folder into a node package by using the `npm init` command and answering the questions (or using `npm init -y` if you want to be lazy). This should create you a package.json file automatically. Have a look at the file and see what's there - Google anything if you are not quite sure of what it is there for.

👉 2b. Create a file called `index.js`. In this file, and create a variable `myCollection` as an array of objects:

```js
let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!"
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory"
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)"
  }
];
```

Try and `console.log` the variable, and then run the file by bringing up the terminal (navigating to the files directory if you need to) and entering `node index.js`. You should see the array of object as output in your console.

👉 2c. Create a function called `describeItem`, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should `console.log` a message according to how many of the item you have.

If there's only one of the item in your collection, it should log "I have a `name`. Here's what I like about it: `whatILike`". If you have more than one of it, the message should log "I have `count` `name`s. Here's what I like about them: `whatILike`".

For example, the result of calling the `describeItem` function with the first item in our collection would be:
_"I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"_

Call your function below where you've defined it, handing in the first item in `myCollection`.

Now run the file again (using `node index.js`);

👉 2d. Now make a function called `describeCollection` that takes in an array as a parameter. The function should loop through the array, and for each item, it should call the `describeItem` function so it displays a message according to how many you have in your collection.

Call your function below where you've defined it, handing in the `myCollection` array.

Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. each object in your `myCollection` array).

## Part 3: Exporting and importing

Now let's neaten things up by moving the `myCollection` array to its own file. With Node's power to export and import, everything doesn't have to all be in one file, which makes for cleaner, more readable code.

👉 3a. Create a new file in the same folder called `collection.js`. Cut and paste your `myCollection` array from `index.js` to collection.js instead.

_Note: Only move the `myCollection` variable! Keep the functions in `index.js`._

👉 3b. Use Node's default exporting syntax in collection.js to export the `myCollection` variable so that it's ready to import elsewhere in your folder. To use this new import/export syntax, we need to change our `package.json` so that it has the property `"type": "module"`.

Remember that you can check Google if you can't remember the syntax, but we are using ES6 import/export syntax!

👉 3c. Now import `myCollection` at the top of `index.js`. You should be able to then call your function just as you did in part 1, but this time using `myCollection` imported from its separate file.

Use Node to run the `index.js` file again just to check that your console.logs are still coming through correctly!

## Part 4: NPM and Node packages

Now let's bring in the power of NPM (Node Package Manager), a platform where people publish Node packages, which are bundles of software that you can use NPM to import into and use in your own projects. We'll use the `chalk` module to make our console.log messages a little more snazzy! 💅🌈✨

👉 4a. We've already initialised our project folder as an NPM project. That means we can use node modules other people have created in our project... Sweet. Makes this task easy 🙂

👉 4b. Use the [chalk docs](https://www.npmjs.com/package/chalk) to find out how to install `chalk` to your project (check your dependencies in your `package.json` file if you want to check that you've installed it correctly). Follow the docs to see how you can now use chalk in `index.js`.

👉 4c. Use `chalk` to do the following in your console.logs within `describeItem`:

- Make the name of each item in your collection cyan
- Make the count of each item in your collection yellow
- Make what you like about each item in your collection green

## Bonus

🌟 Dig a bit deeper into the `chalk` module's docs and jazz up your console.logs even further, including making text bold and adding background colors as well.

🌟 There are all sorts of handy packages on the NPM website that you can use in your code. Browse and search to check out which are popular, and what they do.

🌟 If you're still hungry for more NPM practice, check out [this list](https://github.com/parro-it/awesome-micro-npm-packages) of small, easy-to-manage NPM packages and experiment! 🧪
