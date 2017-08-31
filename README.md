
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
