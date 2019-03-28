const fs = require("fs");

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
    getNotes: () => {
        return "Your notes...";
    },

    addNote: (title, body) => {
        const notes = loadNotes();
        const duplicateNotes = notes.filter(function(note) {
            return note.title === title;
        });

        if (duplicateNotes.length === 0) {
            notes.push({ title, body });
            saveNotes(notes);
            console.log("New note added");
        } else {
            console.log("Note title taken");
        }
    },

    removeNote: title => {
        const notes = loadNotes();
        const index = notes.findIndex(note => note.title === title);
        if (index >= 0) {
            notes.splice(index, 1);
            saveNotes(notes);
            console.log("Note deleted");
        } else {
            console.log("Note not found");
        }
    }
};
