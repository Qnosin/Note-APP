const newNote = document.querySelector('.start-btn')
const placeForNotes = document.querySelector('main')

function createNode() {
    //create objects
    const btn = document.createElement('div')
    const textArea = document.createElement('textarea')
    const newPlaceForNotes = document.createElement('div');

    //adding placefornote to main
    newPlaceForNotes.classList.add('notes');
    placeForNotes.append(newPlaceForNotes);

    //ading to .notes exitbtn and textarea
    textArea.classList.add('notes-place')
    textArea.setAttribute('spellcheck', 'false')
    btn.classList.add('exit-btn')
    newPlaceForNotes.append(textArea, btn);
    btn.addEventListener('click', () => {
        placeForNotes.removeChild(newPlaceForNotes);
    })
}
newNote.addEventListener('click', createNode);