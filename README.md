
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

### Commands

**Commands** are arguments that specify specific actions. You can run:
`node myProgram.js doSomething`. `doSomething` is not a flag, since it doesn't begin with `--` - it is an argument or sub-command for the `node myProgram.js` command line tool. Consider if `myProgram.js` was a calculator application; then `node myProgram.js add` contains the command `add` and `node myProgram.js delete` contains the command `delete`. Commands given to a program are just special arguments that modify the behavior of the app/tool we are running.

### Arguments

**Arguments** We can pass also pass strings or numbers into our program to be used as arguments or parameters.
`node myProgram.js square 4` contains the arguments `square` and `4` but we think of `square` as a command and `4` as the argument or parameter for that specific command.

Flags, commands, and parameters are all specific kind of arguments. A flag is usually setting a Boolean and starts with a `-` , a command usually follows the main program and modifies or specifies the specific behavior (`square` and `add` in the calculator example above), and a parameter is usually what the command is taking in as its input.


## Instructions
### The Address Book
Our Address Book data is stored in the file called data.json. The address book is an array objects. Each object represents a Contact and has three properties
    1. name: a string (letters only!), name of the contact
    2. number: a number (numbers only!), phone number of contact
    3. email: an email, email of contact

Our Address Book can be accessed from within addressBook.js using our `data` variable (this is already done for you at the top of the file):

![](./img/datafile.png)


### Steps
Sections:
1. [Install React Development Tools](#part-1-install-react-development-tools)
1. [The Square Component](#part-2-the-square-component)
1. [Lifting State Up](#part-3-lifting-state-up)
1. [Taking Turns](#part-4-taking-turns)
1. [Winner Calculator](#part-5-winner-calculation)
1. [Storing and Showing History](#part-6-storing-and-showing-history)
1. [Time Travel](#part-7-time-travel)

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

## Part 1: Implementing 'display' command
### Goal


## Part 2: Implementing 'add' command
### Goal

## Part 3: Implementing 'update' command
### Goal

## Part 4: Implementing 'remove' command
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
