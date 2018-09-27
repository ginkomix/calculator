class Calculator {
    constructor() {
        this.result = 0;
        this.value = '0';
        this.action = undefined;
        this.newAction = false;
        this.subscribeButtons();
    }

    logic(value) {
        if (!isNaN(value)) {
            this.addTemporaryNumber(value);
            return;
        }
        switch (value) {
            case 'ac':
                this.actionAc();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'ce':
                this.actionCe();
                render.setValue(this.value);
                return;
            case '=':
                this.actioneQually();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'x2':
                this.actioneXTwo();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'x3':
                this.actioneXThree();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case '10x':
                this.actioneTenX();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'sin':
                this.actioneSin();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'cos':
                this.actioneCos();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'tan':
                this.actioneTan();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'log':
                this.actioneLog();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case '√x':
                this.actioneSqrt();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'log10':
                this.actioneLogTen();
                render.setValue(this.value);
                render.setAction(this.action);
                return;
            case 'exp':
                this.actioneExp();
                render.setValue(this.value);
                render.setAction(this.action);
                return;


        }
        if (!this.action || this.newAction) {
            this.addAction(value);
            return;
        }
        this.doAction(this.action);
        this.addAction(value);
    }

    doAction(action) {
        switch (action) {
            case '/':
                this.actionDivide(this.value);
                break;
            case '*':
                this.actionMult(this.value);
                break;
            case '-':
                this.actionMinus(this.value);
                break;
            case '+':
                this.actionAdd(this.value);
                break;
            default:
                return;
        }
    }

    addAction(action) {
        this.action = action;
        this.result = this.value;
        this.newAction = true;
        render.setAction(this.action);
        render.setValue(this.value);
    }

    actioneXTwo() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.pow(Number(this.value), 2);
        this.value = String(this.result);
    }
    actioneXThree() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;

        this.result = Math.pow(Number(this.value), 3);
        this.value = String(this.result);
    }

    actioneTenX() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Number(this.value) * 10;
        this.value = String(this.result);
    }

    actioneSin() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.sin(Number(this.value));
        this.value = String(this.result);
    }
    actioneCos() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.cos(Number(this.value));
        this.value = String(this.result);
    }
    actioneTan() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.tan(Number(this.value));
        this.value = String(this.result);
    }
    actioneLog() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.log(Number(this.value));
        this.value = String(this.result);
    }
    actioneSqrt() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.sqrt(Number(this.value));
        this.value = String(this.result);
    }
    actioneLogTen() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.log10(Number(this.value));
        this.value = String(this.result);
    }
    actioneExp() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = true;
        this.result = Math.exp(Number(this.value));
        this.value = String(this.result);
    }

    actioneQually() {
        if (this.action) {
            this.doAction(this.action);
            this.action = undefined;
        }
        this.newAction = false;
        render.setAction(this.action);
        render.setValue(this.value);
    }

    actionAdd(value) {
        this.result = Number(this.value) + Number(this.result);
        this.value = String(this.result);
    }

    actionMinus(value) {
        this.result = Number(this.result) - Number(this.value);
        this.value = String(this.result);
    }

    actionDivide(value) {
        this.result = Number(this.result) / Number(this.value);
        this.value = String(this.result);
    }

    actionMult(value) {
        this.result = Number(this.result) * Number(this.value);
        this.value = String(this.result);
    }

    actionCe() {

        if (this.newAction) {
            this.value = '0';
        }
        this.value = this.value.slice(0, -1);
        if (!this.value.length) {
            this.value = '0';
        }
    }

    actionAc() {
        this.result = 0;
        this.value = '0';
        this.newAction = false;
        this.action = undefined;
    }

    addTemporaryNumber(value) {
        if (Number(this.value) === 0) {
            this.value = '';
        }
        if (this.newAction) {
            this.newAction = false;
            this.value = '';
        }
        const temporary = this.value + value;
        if (temporary.length >= 10) {
            return;
        }
        this.value = temporary;
        render.setValue(this.value);
    }

    verification(event) {
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