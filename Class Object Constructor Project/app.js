/* class Person {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
    calculateBirthYear(){
    return 2019 - this.age;
}};

const Winny = new Person(17, 'Winny');


 */

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
    constructor(name, field, ageToday, birthCountry, nobelWinner){
        this.name = name;
        this.field = field;
        this.ageToday = ageToday;
        this.birthCountry = birthCountry;
        this.nobelWinner = nobelWinner;
    }
    calculateBirthYear(){
    return 2019 - this.ageToday;
}};

const Einstein = new Scientist('Albert Einstein', 'Theoretical Physics', 140, 'Austria', true);

console.log(Einstein);


/* class UI {
    ui.addScientisttoList
} */
