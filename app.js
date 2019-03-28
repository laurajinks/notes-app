const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");
const { getNotes, addNote, removeNote } = require("./notes");

//customize yargs version
yargs.version("1.1.0");

//add, remove, read, list

//create add command

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        removeNote(argv.title);
    }
});

yargs.command({
    command: "list",
    describe: "list notes",
    handler: function() {
        console.log("List placeholder");
    }
});

yargs.command({
    command: "read",
    describe: "read notes",
    handler: function() {
        console.log("Reading notes placeholder");
    }
});

yargs.parse();
