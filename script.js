// STEP1: select all the DOM elements you need
const reminderForm = document.querySelector('#reminderForm')
const title = document.querySelector('#title')
const note = document.querySelector('#note')
const date = document.querySelector('#date')
const startTime = document.querySelector('#startTime')
const endTime = document.querySelector('#endTime')
const priority = document.querySelector('#priority')
const amountOfReminders = document.querySelector('#amountOfReminders')
const remindersWrapper = document.querySelector('.reminders-wrapper')
let counter = 0


// console.log(reminderForm, title, note, date, startTime, endTime, 
// priority, amountOfReminders, remindersWrapper)




// STEP2: add event listener to the form
reminderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log('you are trying to add a new reminder')

    // STEP3: add new reminder to reminders-wrapper with the 
    // input data user typed in the form
    let reminder = `
    <div class="reminder">
        <div class="row">
            <h4>${title.value}</h4>
            <span class="priority">${priority.value}</span>
        </div>
        <p>${note.value}</p>
        <p>Date: ${date.value}</p>
        <div class="row">
            <p>Start Time: ${startTime.value}</p>
            <p>End Time: ${endTime.value}</p>
        </div>
    </div>`

    // console.log(reminder)

    remindersWrapper.innerHTML += reminder




    // STEP4: clear the text from all input elements

    title.value = ""
    note.value = ""
    date.value = ""
    startTime.value = ""
    endTime.value = ""
    priority.value = ""

    // STEP5: increase the total of reminders and display it 
    // in amountOfReminders
    counter = counter + 1
    amountOfReminders.textContent = counter


})