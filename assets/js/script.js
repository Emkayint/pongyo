document.addEventListener("DOMContentLoaded", () => {

    let page = document.getElementById("page");
    let heading = new HtmlElement().getElement();
    heading.innerText = "We start here";
    heading.setAttribute("style", build("header"));
    page.appendChild(heading);

})

// helps in element creation
class HtmlElement {
    constructor(element="div", id="", classes = "", styles = {}){
        this.element = element;
        this.id = id;
        this.classes = classes;
        this.styles = styles;
    }

    getElement(){
        let elem = document.createElement(this.element);
        elem.id= this.id;
        elem.className = this.classes;
        Object.assign =(elem.style, this.styles); 
        return elem;
    }
}


// styles builder
class StyleBuilder {
    constructor(theme = {}){
        this.theme = theme;
    }


    createStyleString(styles) {
        const mergedStyles = { ...this.theme.light, ...styles };
        return Object.keys(mergedStyles)
            .map(key => `${key}: ${mergedStyles[key]}`)
            .join("; ");
    }
    
    addTheme(theme) {
        this.theme = Object.assign({}, this.theme.light, theme);
    }

}

const themes = {
    light: {
        backgroundColor: "white",
        color: "black",
        fontFamily: "Helvetica Nue"
    },

    dark: {
        backgroundColor: "black",
        color: "white",
        fontFamily: "Helvetica Nue"
    },

}

const styles = {
    header: {
        color: "blue",
        backgroundColor: "red"
    },

    tail: {
        color: "blue"
    }
}


function build(name){
    let createStyles = new StyleBuilder(themes);
    let style = createStyles.createStyleString(styles.header);
    return style;
}
