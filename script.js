class Calculator {
    constructor() {
        this.result = 0;
        this.value = '0';
        this.subscribeButtons();
    }

    logic(value){
        if (!isNaN(value)) {
            this.addTemporaryNumber(value);
            return;
        }
        switch (value) {
            case 'ac':
                this.actionAc();
                break;
            case 'ce':
                this.actionCe();
                break;
            default:
                return;
        }
        render.setValue(this.value);
    }

    actionCe() {
        this.value = this.value.slice(0, -1);
        if (!this.value.length) {
            this.value = '0';
        }
    }

    actionAc() {
        this.result = 0;
        this.value = '0';
    }

    addTemporaryNumber(value) {
        if (Number(this.value) === 0) {
            this.value = '';
        }
        const temporary = this.value + value;
        if (temporary.length>=10) {
            return;
        }
        this.value = temporary;
        render.setValue(this.value);
    }

    verification (event){
        const target = event.target;
        if (target.tagName !== 'BUTTON') {
            return;
        }
        this.logic(target.value);
    }

    subscribeButtons() {
        const buttons = document.querySelector('.container');
        buttons.addEventListener('click', (event) => this.verification(event));
    }

}

const calculator = new Calculator();