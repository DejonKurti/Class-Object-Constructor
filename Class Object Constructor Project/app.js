class Scientist {
    constructor(name, field, birthYear, birthCountry, image) {
        this.name = name;
        this.field = field;
        this.birthYear = birthYear;
        this.birthCountry = birthCountry;
        this.image = image;
    }
}

class UI {
    addScientistToList(scientist) {
        const display = document.querySelector('.display');

        let html = '<div class="display-scientist"><div class="display-name">%name%</div><div class="display-field">%field%</div><div class="display-birthYear">%birthYear%</div><div class="display-birthCountry">%birthCountry%</div><div class="display-image"><img src="%image%"alt=""></div><div class="remove-scientist">Remove Scientist X</div>'
        let newHtml = html.replace('%name%', scientist.name);
        newHtml = newHtml.replace('%field%', scientist.field);
        newHtml = newHtml.replace('%birthYear%', scientist.birthYear);
        newHtml = newHtml.replace('%birthCountry%', scientist.birthCountry);
        newHtml = newHtml.replace('%image%', scientist.image);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
    }

    clearForm(){
        form.reset();
    } 

    removeScientist(target){
        if (target.className === 'remove-scientist') {
            target.parentElement.remove();
        }
    } 
}

document.getElementById('form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const field = document.getElementById('field').value;
    const birthYear = document.getElementById('birthYear'.value);
    const birthCountry = document.getElementById('birthCountry'.value);
    const image = document.getElementById('image'.value);

    const scientist = new Scientist(name, field, birthYear, birthCountry, image);
    console.log(scientist);
    const ui = new UI();

    ui.addScientistToList(scientist);

    ui.clearForm();

    e.preventDefault;
});

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();

    ui.removeScientist(e.target);

    ui.clearForm();

    e.preventDefault();
})





