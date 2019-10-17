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

        this.birthCountry = birthCountry;
        this.nobelWinner = nobelWinner;
        this.image = image;
    }
    age = function () {
        return new Date().getUTCFullYear() - this.birthYear;
    }
};




class UI {
    addScientistToList(Scientist) {
        const display = document.querySelector('.display');

        let html = `<div class="display-scientist">
            <div class="display-full-name">
            %full-name%
            </div>
            <div class="display-field">
            %field%
            </div>
            <div class="display-age">
            %age-today%
            </div>
            <div class="display-birth-country">
            %birth-country%
            </div>
            <div class="display-nobel>
            %nobel%
            </div>
            <div class="display-image">
                <img src="%url%">
            </div>
            <div class="remove-scientist">
                <p class="remove-scientist">Remove Scientist &#10006;</p>
            </div>
        </div>`;

        let newHtml = html.replace('%full-name%', Scientist.name);
        newHtml = newHtml.replace('%field%', Scientist.field);
        newHtml = newHtml.replace('%age-today%', Scientist.age());
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
function addForm() {
    const name = document.getElementById('full-name').value;
    const field = document.getElementById('field').value;
    //const birthYear = document.getElementById('birthYear').value;
    const birthCountry = document.getElementById('birth-country').value;
    const nobelWinner = document.getElementById('nobel').value;
    const image = document.getElementById('image').value;

    const scientist = new Scientist(name, field, 2019, birthCountry, nobelWinner, image);
    const ui = new UI();
    console.log(ui);

    ui.addScientistToList(scientist);
    ui.clearForm();
    //e.preventDefault;
}



document.getElementById('submit').addEventListener('click', addForm);
