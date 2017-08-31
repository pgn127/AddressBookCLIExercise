
# Pair Programming Exercise: Address Book using Command Line Arguments

## Goal

The goal of this exercise is to build a command line Address Book manager

## Intro to the command line

Many things you can do with a graphical user interface can be done through a text-only interface in the command line. Since NodeJS frees up JavaScript to run outside the browser, you can now create JavaScript applications that run from your terminal!

In this exercise we will build a command line tool in JavaScript and use NodeJS to run it. Similar to other command line tools we have been using (think git or npm), we can change the behavior of our application by passing in arguments or flags (`npm install` compared to `npm install --save`). In the `npm install --save` we call `install` an argument to the npm command and `--save` a flag. Notice how the save flag changes the behavior of the `npm install` command. We will use flags and arguments to specify behavior in our application as well.


### Flags

**Flags** are boolean values that are set by being included when calling the program.
`node myProgram.js --cookies` is calling `myProgram.js` with the flag `cookies
= true` and the flag `milk = false` because it is not present.

Flags normally have shortened versions, so `--cookies` is equivalent to `-c`.
`node myProgram.js -c`

### Arguments

**Arguments** We can pass also pass strings or numbers into our program to be used as arguments or parameters.
`node myProgram.js square 4` contains the arguments `square` and `4` but we think of `square` as a command and `4` as the argument or parameter for that specific command.

Flags, commands, and parameters are all specific kind of arguments. A flag is usually setting a Boolean and starts with a `-` , a command usually follows the main program and modifies or specifies the specific behavior (`square` and `add` in the calculator example above), and a parameter is usually what the command is taking in as its input.



## Introduction - The Address Book
Our Address Book data is stored in the file called data.json. The address book is an array objects. Each object represents a Contact and has three properties:
 1. name: a string (letters only!), name of the contact
 2. number: a number (numbers only!), phone number of contact
 3. email: an email, email of contact


Our Address Book can be accessed from within addressBook.js using our `data` variable (this is already done for you at the top of the file):

<img src="./img/datafile.png" width="350">


### Steps
Sections:
1. [Parsing Command Line Arguments](#part-1-parsing-command-line-arguments)
1. [Implementing the 'display' command](#part-2-implementing-the-display-command)
1. [Implementing the 'add' command](#part-3-implementing-the-add-command)
1. [Implementing the 'update' command](#part-4-implementing-the-update-command)
1. [Implementing the 'delete' command](#part-5-implementing-the-delete-command)


### Features

Our command line Address Book manager should support the following commands:
- add
  - Example: `node addressBook.js add John 1234567` - Adds a new Contact item with name `John` and number 1234567
- update
  - Example: `node addressBook.js add John 1234567` - Adds a new Contact item with name `John` and number 1234567
- delete
  - Example: `node addressBook.js add John 1234567` - Adds a new Contact item with name `John` and number 1234567
- display
  - Example: `node addressBook.js add John 1234567` - Adds a new Contact item with name `John` and number 1234567


## Part 1: Parsing Command Line Arguments
**Commands** are arguments that specify specific actions. You can run:
`node myProgram.js doSomething`. `doSomething` is not a flag, since it doesn't begin with `--` - it is an argument or sub-command for the `node myProgram.js` command line tool. Consider if `myProgram.js` was a calculator application; then `node myProgram.js add` contains the command `add` and `node myProgram.js delete` contains the command `delete`. Commands given to a program are just special arguments that modify the behavior of the app/tool we are running.

#### Task: Implement parseCommand()
In order to for our application to determine which action/command to perform, you parse the specified command from the command line arguments.
This function should parse the command argument from the command line using `process.argv` and return it.

The command will be the first argument: <br>
`$ node addressBook.js add John 123`    parseCommand() returns 'add' <br>
`$ node addressBook.js display`         parseCommand() returns 'display' <br>
`$ node addressBook.js`                 parseCommand() returns '' <br>


> **Note:** If you need a refresher on what `process.argv` is, see [here](https://www.google.com)


## Part 2: Implementing the 'display' command
Write the function displayContacts(). It will be called in the following ways:<br>
`$ node addressBook.js display` <br>
`$ node addressBook.js display ContactName`<br>
`$ node addressBook.js display ContactNumber`<br>

This function should output the appropriate contacts using console.log() and [columnify npm package](https://www.npmjs.com/package/columnify). <br> Contacts that do not have a phone number (for which we put -1 as the placeholder), should be displayed with '-None-' in place of their number, as follows: <br>
NAME: ContactName PHONE NUMBER: -None-

#### Using columnify
Columnify is an npm package that formats console output from objects or arrays of objects into organized columns.

##### Steps
 1. `npm install --save columnify`
 2. At the top of addressBook.js `var columnify = require('columnify')`
 3. Inside displayContacts(), uncomment the line labeled 'UNCOMMENT'<br>
 <img src="./img/columnoutput.png" width="350">

 then run `$ node addressBook.js display` to see how columnify works!
<details>
<summary>Show Result</summary>
<img src="./img/terminalcolumns.png" width="400">
 </details>
 4. Use columnify so your terminal output looks like this:
    ![](./img/displaycontactsresult.png)


**NOTE**: Simply calling columnify on our entire addressBook directly will print out our contacts exactly as they are stored in our data array. There are two key things you need to fix:
- Change the columns so that they read "CONTACT_NAME" and "PHONE_NUMBER"
<details>
<summary>Hint</summary>
[Use columnify's headingTransform option](https://github.com/timoxley/columnify#transforming-column-data-and-headers)
</details>
- For contacts without phone numbers, display '-None-' instead of '-1'
<details>
<summary>Hint</summary>
Checkout [columnify's dataTransform option](https://github.com/timoxley/columnify#transforming-column-data-and-headers)
    <details>
    <summary>Super Hint</summary>
    ![](./img/datatransformhint.png)
    <details>
</details>

> **Test:** Run your tests!


### Goal

## Part 3: Implementing the 'add' command
### Goal

## Part 4: Implementing the 'update' command
### Goal

## Part 5: Implementing the 'delete' command
### Goal

1. Now we need to change what happens when a square is clicked. Since component state is always private, we can't update Board's state directly from Square.

    The usual pattern here is pass down a function from Board to Square that gets called when the square is clicked. Change renderSquare in Board again so that it reads:

    <details>
      <summary>Show Code</summary>

      ```javascript
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    ```

    </details>

> **Note:** Make sure to begin by **importing `AsyncStorage` at the top**, the same place you are importing things like `View`, `Alert`, `Button`, `StyleSheet`, etc.!

> **Tip:** If you are testing with iOS Simulator, you can change the location of the device! Go to the top menu `Debug > Location > Custom Location...` to select a custom latitude and longitude for simulated current location. Some examples are as follows:
> - **Grand Canyon:** `(36.1128, -113.9961)`
> - **Austin, TX:** `(30.2672, -97.7431)`
> - **International House, PHL:** `(39.9552515, -75.1991039)`


Sweet baby Jesus! We have location data! Now you can find out the user's
location, and share it. For now it's just a bunch of bits and bytes inside an
invisible server somewhere. But that won't be the case for long. Read on, dear
reader, to see why location data is so freaking awesome.

>**Note:** Take a moment to combine the `touchUser` and `longTouchUser` functions. Functions that share so much code like this are often best combined to reduce complexity and the total amount of code in a given file. Not to mention this makes it easier for someone new to understand your code - they don't need to wonder why you have two nearly identical functions or worse yet misread them as the same and delete one!

> **IMPORTANT:** `MapView` components have 0 height by default, make sure you add the correct styles to make them visible.

Bonus tasks:

- `node toDo.js toggleCompleted --id 3` - Marks the task with id of 3 as done.
- `node toDo.js show --completed` - Shows completed todos (you will have to add support for marking a todo as completed)
- `node toDo.js show -c` - Works exactly like `node toDo.js show --completed`

To start our application we are going to run the following commands.

### Running and testing

1. Go to `week03/day1/addressbook-cli` in your terminal and install npm dependencies

    ```bash
    npm install
    ```

2. Run tests to verify your code. As you implement functionality keep running
tests to make sure your code works.

    ```bash
    npm test
    ```

3. Open `addressBook.js` in Atom.
4. Implement the `show` command.
5. Implement the `delete` command.
6. **(Bonus)** Implement the `toggleCompleted` command and add tests in
`toDo_spec.js` to verify that it works.
7. **(Bonus)** Implement the `-c` or `--completed` flag and add tests to verify.
