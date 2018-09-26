class Render {
    constructor(){
        this.result = document.querySelector('#result');
    }
    setValue(value){
        this.result.innerHTML = value;
    }
}

const render = new Render();