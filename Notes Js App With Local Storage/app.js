document.addEventListener("DOMContentLoaded", () => {
    const $form = document.querySelector("form");
    const $notesContainer = document.querySelector("#notes-container");
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const renderNotes = () => {
        $notesContainer.innerHTML = "";
        notes.forEach((note, i) => {
            const $el = document.createElement("div");
            $el.id = `note-${i}`;
            $el.classList.add("note", "alert", "alert-primary");
            $el.innerHTML = `
                <div>${note}</div>
                <div><button id="delete-${i}" class="btn btn-danger">Delete</button></div>
            `;

            $notesContainer.appendChild($el);
        });  
    };

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = e.target.note.value;
        if (value === "") {
            return;
        }
        notes.push(value);
        localStorage.setItem("notes", JSON.stringify(notes));
        e.target.note.value = "";
        renderNotes();
    });


    $notesContainer.addEventListener("click", (e) =>{
        e.preventDefault();
        if(e.target.className.includes("btn")) {
            const id = e.target.id;
            const stringParts = id.split("-");
            const index = parseInt(stringParts[1]);
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        }
    });

    renderNotes();

});