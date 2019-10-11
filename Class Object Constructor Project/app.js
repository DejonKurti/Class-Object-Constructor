
//one class to create the object i.e. person, album, movie **Model
//take arguments



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
        this.age = function(){
            return new Date().getUTCFullYear() - this.birthYear;
        }
        this.birthCountry = birthCountry;
        this.nobelWinner = nobelWinner;
        this.image = image;
}};

/* const Einstein = new Scientist('Albert Einstein', 'Theoretical Physics', 2018, 'Austria', true);
 */
//console.log(Einstein); 

class UI {
    //ui.addScientisttoList //make it the button and add event listener
    constructor(form, formName, formField, formBirthYear, formBirthCountry, formNobelWinner, addScientist) {
        this.form = document.querySelector('#scientist-form');
        this.formName = document.querySelector('full-name');
        this.formField = document.querySelector('#field');
        //this.formBirthYear = document.querySelector('#age')
        this.formBirthCountry = document.querySelector('#birth-country');
        this.formNobelWinner = document.querySelector('#nobel-winner');
        this.addScientist = document.querySelector('#submit');
} 