document.addEventListener("DOMContentLoaded", () => {

    let page = document.getElementById("page");
























})

class HtmlElement {
    constructor(element="div", id="", classes = "", styles){
        this.element = element;
        this.id = id;
        this.classes = classes;
        this.styles = styles;
    }

    getElement(){
        let elem = document.createElement(this.element);
        elem.className = this.classes;
        elem.style = this.styles
    }
}