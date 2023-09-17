// Get references to the modal and close button
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");

// Get reference to the button that opens the modal
const openModalButton = document.querySelector(".plus button");

// When the button is clicked, open the modal
openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
});

// When the close button (X) is clicked, close the modal
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const library = [];

function Book(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function AddBooktoLib(title, author, numPages, read){
    let newBook = new Book(title, author, numPages, read);
    library.push(newBook);
}

const mainDiv = document.querySelector('.main');

function DisplayLib(arr){
    arr.forEach(book => {
        const newRow = document.createElement('div');
        newRow.classList.add('cardBooks');
        const RowTitle = document.createElement('div');
        RowTitle.textContent = book.title;
        const RowAuthor = document.createElement('div');
        RowAuthor.textContent = book.author;
        const rowPages = document.createElement('div');
        rowPages.textContent = book.numPages.toString();
        /*
        const rowRead = document.createElement('input');
        rowRead.classList.add('form-check-input');
        rowRead.type = "checkbox";
        rowRead.role = "switch";
        rowRead.id = "flexSwitchCheckDefault";
        */
        const rowReadContainer = document.createElement('div');
        rowReadContainer.classList.add('custom-control', 'custom-switch');
        const rowRead = document.createElement('input');
        rowRead.classList.add('custom-control-input');
        rowRead.type = 'checkbox';
        rowRead.id = 'switch-' + book.title.replace(/\s/g, ''); // Unique ID based on book title
        const rowReadLabel = document.createElement('label');
        rowReadLabel.classList.add('custom-control-label');
        rowReadLabel.setAttribute('for', rowRead.id);
        rowReadContainer.appendChild(rowRead);
        rowReadContainer.appendChild(rowReadLabel);
        const rowDelete = document.createElement('button');
        rowDelete.classList.add('btn', 'btn-danger');
        rowDelete.textContent = "Delete";
        newRow.appendChild(RowTitle);
        newRow.appendChild(RowAuthor);
        newRow.appendChild(rowPages);
        newRow.appendChild(rowReadContainer);
        newRow.appendChild(rowDelete);
        mainDiv.appendChild(newRow);
    });
}

AddBooktoLib('Hobbit', 'J.K. Rowling', 500, false);
DisplayLib(library);