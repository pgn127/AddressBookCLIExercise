"use strict";
// The node builtin filesystem library.
var fs = require('fs');
var validator = require('validator')

var JSON_FILE = 'data.json'
// If data.json file doesn't exist, create an empty one
ensureFileExists();
// This is where our Address Book is stored.
var data = JSON.parse(fs.readFileSync(JSON_FILE));



//PART1: ------PARSING COMMAND LINE INPUT----------------------------------------------
//To access what was typed into the command line, use process.argv
// If no arguments are specified print help.
if (process.argv.length === 2 || process.argv === "help" || process.argv === "-h") {
  console.log("\n\tUsage: addressBook [options] [command]\n\n\n" +"\tOptions:\n" + "\t\t-h, --help   Show this help message and quit"+"\n\n\n\tCommands:\n" + "\t\tadd       Create Contact\n" + "\t\tdisplay   Display all contacts in directory\n" + "\t\tupdate    Update existing contact\n");
}

var argv = process.argv
//console.log(process.argv) //UNCOMMENT TO SEE WHAT PROCESS.ARGV IS BEFORE WE SPLICE
argv.splice(0,2); //remove 'node' and path from args, NOTE: splicing modifies process.argv, so you will not need to do this again!



//TODO: Implement parseCommand()
//Parse and return the command from stdin, examples:
// STDIN: node addressBook.js add John 123      RETURN ----> 'add'
// STDIN: node addressBook.js update John 456   RETURN ----> 'update'
// STDIN: node addressBook.js delete John       RETURN ----> 'delete'
// STDIN: node addressBook.js                   RETURN ----> ''
//Hint: use process.argv
function parseCommand() {
  // YOUR CODE HERE
  var args = process.argv
  console.log(args);
  // args.splice(0,2)
  // args = args.slice(2,args.length)
  if(args.length == 0){
      return ""
  } else{
      return args[0]
  }
}



var input = parseCommand()
switch(input){
    case "add":
        addContact();
        break;
    case "update":
        updateContact();
        break;
    case "delete":
        deleteContact()
        break;
    case "display":
        displayContacts();
        break;
    case "help":
        break
    default:
        console.log('No actions provided',input);
}

// Arguments
// This line is part of the 'Commander' module. It tells them (Commander) to process all the
// other arguments that are sent to our program with no specific name.
// program.parse(process.argv);
//
// // If no arguments are specified print help.
// if (process.argv.length === 2) {
//   program.help();
// }



// This is a function that converts remaining unprocessed arguments into a string
// so we can create tasks using it.
function getRemainingArgs () {
    var remainingArgs = process.argv
    remainingArgs.splice(0,1)
    return remainingArgs
}




//TODO: Write a function to create a new contact
// Example: This is a function that is called to create a new contact.
// Calling `node add contactName contactNumber ` must call our function addContact.
// it should get the name and number of the Contact by calling getRemainingArgs()
//You should only create a new contact if a name is provided
//if no number is provided, store -1 as their number
function addContact() {
  var args = getRemainingArgs()
  if(args){
      var name = args[0]
    //   var number = "abc123"
      var number = args[1] || "-1"
      if(name &&  validator.isAlpha(name) && validator.isNumeric(number)){

          data.push({
            name: name,
            number: parseInt(number)
          });
          console.log("Added contact named: "+ name + ", with id: " + data.length +", and number: " + number);
      } else {
          console.log('No contact name provided');
      }
  }

}


function updateContact(){
    return
}

function deleteContact(){
    return
}

function showContacts(){
    return
}

// Write function showTasks(). It is be called when the program is called like
// 'node addressBook.js show' or 'node addressBook.js show -i 3'
// This function should output the appropriate TO-Do tasks using console.log().
// The format of the output should be exactly:
// Task #ID Priority PRIORITY: NAME
//
// Note:
// - if there is a flag value for id, the program should only display that task
// - it there is no flag id, the program should return all tasks.
// - the id of a task is its index in 'data' + 1, we count ids up from 1.
//
// ex.
//  data = [{name: "Do Laundry", priority: 3},
//          {name: "Clean dishes", priority: 2},
//          {name:"Call Mark", priority: 1}]

//  node addressBook.js show -i 2 -> "Task #2 Priority 2: Clean Dishes"
//  node addressBook.js show ->
//            "Task #1 Priority 3: Do Laundry
//             Task #2 Priority 2: Clean Dishes
//             Task #3 Priority 1: Call Mark"
function showTasks(){
  // YOUR CODE HERE
  if(program.id){
    var id = program.id-1;
    console.log("Task #"+(program.id)+" Priority "+data[id].priority+ ": "+data[id].name)
  }else{
    for (var i=0; i<data.length; i++){
      console.log("Task #"+(i+1)+" Priority "+data[i].priority+ ": "+data[i].name)
    }
  }
}


// Write a function that is called when the command `node addressBook.js delete -i 3`
// is run. Take the id from program.id and delete the element with that index from 'data'.
// Hint: use splice() here too!
// function deleteTask(){
//   // YOUR CODE HERE
//   if(program.id){
//     var id = program.id-1;
//     if (id>=0 && id<data.length){
//       data.splice(id, 1);
//       console.log("Deleted task with id: "+program.id)
//     }
//   } else{
//     console.log("No task specified")
//   }
// }

// ---Utility functions---

// We use these functions to read and modify our JSON file.
function writeFile(data) {
  fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
}

function ensureFileExists() {
  if (! fs.existsSync(JSON_FILE)) {
    writeFile([]);
  }
}


// This command writes  our tasks to the disk
writeFile(data);

//export functions for spec
module.exports = {
    parseCommand: parseCommand
}
