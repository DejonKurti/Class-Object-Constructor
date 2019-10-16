//****View */ class for the UI which contains methods

//creates/insert the HTML for the UI  [DISPLAY]

//clear fields method

//remove something/object



//controller combines UI and model
//event handler w/ function
//get values


//instantiate new class/object with variable name


//instantiate a new UI const ui = new UI()

//call relevant methods

//seperate event handler for removing/deleting

class Scientist {
    constructor(name, field, birthYear, birthCountry, nobelWinner, image) {
        this.name = name;
        this.field = field;
        this.birthYear = birthYear;
        this.age = function () {
            return new Date().getUTCFullYear() - this.birthYear;
        }
        this.birthCountry = birthCountry;
        this.nobelWinner = nobelWinner;
        this.image = image;
    }
};

//instantiate
//const Einstein = new Scientist('Albert Einstein', 'Theoretical Physics', 2018, 'Austria', true);
//console.log(newScientist); 

class UI {
    addScientistToList(scientist) {
        const display = document.querySelector('.display');

        let html = `<div class="display-scientist">
            <div class="display-full-name">
                Albert Einstein
            </div>
            <div class="display-field">
                Theoretical Physics
            </div>
            <div class="display-age">
                140
            </div>
            <div class="display-birth-country">
                Austria
            </div>
            <div class="display-nobel>
                True
            </div>
            <div class="display-image">
                <img src="https://cdn.mos.cms.futurecdn.net/c7dppKDbG3JXuMfybV5tUX.jpg">
            </div>
            <div class="remove-scientist">
                <p class="remove-scientist">Remove Scientist &#10006;</p>
            </div>
        </div>`;

        let newHtml = html.replace('%full-name%', Scientist.name);
        newHtml = newHtml.replace('%field%', Scientist.field);
        newHtml = newHtml.replace('%age-today%', Scientist.age);
        newHtml = newHtml.replace('%birth-country%', Scientist.birthCountry);
        newHtml = newHtml.replace('%nobel%', Scientist.nobelWinner);
        //console.log('is the event firing?');
        newHtml = newHtml.replace('%url%', Scientist.image);
        display.insertAdjacentHTML('beforeend', newHtml);
    }

    clearForm(form) {
        form.reset();
    }

    removeScientist(e) {
        if (e.target.parentElement.classList.contains('remove-scientist')) {
            e.target.parentElement.parentElement.remove();
            //console.log(e.target.parentElement);
        }
    };
}

//put the following into the controller--separate function with an event listener
document.getElementById('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const field = document.getElementById('field').value;
    const birthYear = document.getElementById('birthYear');
    const birthCountry = document.getElementById('birthCountry');
    const nobelWinner = document.getElementById('nobelWinner');
    const image = document.getElementById('image');

    const Scientist = new Scientist(name, field, birthYear, birthCountry, nobelWinner, image);

    const UI = new UI();
    console.log(ui);

    ui.addScientistToList(scientist);
    ui.clearForm();
    e.preventDefault;
});

/* function eventListeners() {
    form.addEventListener('submit', displayScientist);
    form.addEventListener('submit', clearForm);
    display.addEventListener('click', removeScientist);
}
eventListeners();   */

/*
function eventListeners(){
    form.addEventListener('submit', displayScientist);
    form.addEventListener('submit', clearForm);
    display.addEventListener('click', removeScientist);
}
eventListeners();
}
*/