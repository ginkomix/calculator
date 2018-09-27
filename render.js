class Render {
    constructor(){
        this.action = document.querySelector('#action');
        this.result = document.querySelector('#result');
    }
    setValue(value){
        this.result.innerHTML = value.slice(0,11);
    }
    setAction(value = '') {
        this.action.innerHTML = value;
    }
}

const render = new Render();