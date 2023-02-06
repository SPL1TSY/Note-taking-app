import translations from 'language.js';

// Define an array to store the notes
let notes = [];

// Function to add a new note
function addNote(text) {
    let note = {
        id: Date.now(),
        content: text
    };
    notes.push(note);
}

// Function to remove a note
function removeNote(id) {
    notes = notes.filter(function (note) {
        return note.id !== id;
    });
}

// Function to display all notes
function displayNotes() {
    let notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];
        let noteItem = document.createElement("li");
        noteItem.innerHTML = `
   ${note.content}
   <button class="remove-button" data-id="${note.id}">Remove</button>
 `;
        notesList.appendChild(noteItem);
    }
    let removeButtons = document.querySelectorAll(".remove-button");
    for (let i = 0; i < removeButtons.length; i++) {
        let button = removeButtons[i];
        button.addEventListener("click", function () {
            removeNote(parseInt(this.dataset.id));
            displayNotes();
        });
    }
}

// Function to change the language
function changeLanguage(language) {
    document.getElementById("title").innerText = translations[language].title;
    document.getElementById("add-button").innerText = translations[language].addNote;
    document.getElementsByName('noteInp')[0].placeholder = translations[language].placeHold;
    let removeButtons = document.querySelectorAll(".remove-button");
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].innerText = translations[language].removeNote;
    }
}

// Add a listener to the language select element
let languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
});

// Display the initial list of notes with the default language (English)
// Add a listener to the "Add Note" button
let addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
    let input = document.getElementById("note-input");
    addNote(input.value);
    input.value = "";
    displayNotes();
});