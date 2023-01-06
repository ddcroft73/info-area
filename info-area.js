
class InfoArea extends HTMLElement {

    // in anticipation of implementing a getter, setter interface to deal with
    // a button,.    
    static get observedAttributes() {
        return ["button"];
    };

    constructor() {
        super();

        this.state = {
            buttonVisible: false,
        };

        const shadowRoot = this.attachShadow({ mode: "open" });

        // get attribute values from getters.
        const title = this.title;
        const backGroundColorTitle = this.backGroundColorTitle;
        const titleColor = this.titleColor;
        const infoColor = this.infoColor;
        const backGroundColorInfo = this.backGroundColorInfo;
        const infoFontSize = this.infoFontSize;
        const titleFontSize = this.titleFontSize;
        const maxWidth = this.maxWidth;
        const border = this.border;
        const borderColor = this.bordeColor;

        // think about more for the button??
        const button = this.button;
        this.render();
    };

    get title() {
        return this.getAttribute('title') || 'Hey!';
    };
    get backGroundColorTitle() {
        return (
            this.getAttribute("background-color-title") || "rgb(241, 166, 16)"
        );
    };
    get titleColor() {
        return this.getAttribute("title-color") || "rgb(241, 245, 249)";
    };
    get infoColor() {
        return this.getAttribute("info-color") || "black";
    };
    get backGroundColorInfo() {
        return (
            this.getAttribute("background-color-info") || "rgb(253, 243, 219)"
        );
    };
    get infoFontSize() {
        return this.getAttribute("font-size-info") || ".7em";
    };
    get titleFontSize() {
        return this.getAttribute("font-size-title") || "18px";
    };
    get maWidth () {
        return this.getAttribute("max-width") || '100%';
    };
    get border() {
        return this.getAttribute("border-width") || "0px";
    };
    get borderColor() {
        return this.getAttribute('border-color') || 'black';
    };
    get button() {
        return this.getAttribute("button") || 'hidden';
    };


    connectedCallback() { 
        const { shadowRoot } = this;   
        
        // delete the message
        const btn = shadowRoot.querySelector("#close");  
        btn.addEventListener("click", () => {
            const container = shadowRoot.querySelector(".info-container");  
            container.style.display = "none";
        });

    };


    render() {
        const { shadowRoot } = this;
        const style = document.createElement("style");

        // initial component container
        const container = document.createElement("div");
        container.setAttribute("class", "info-container");

        // Allow the user to define the way the component looks by inserting the 
        // properties directly into the code. I think you are supposed to si this
        // with slots, but this is just easier. 
        style.textContent = `
        .info-container {
            display:flex;            
            width: 100%;
            height: 100%;
            max-width: ${this.maxWidth};
            min-height: 75px;
            border: ${this.border} solid ${this.borderColor};
            border-radius: 10px;
        }
        .left {
           display: flex;
           justify-content:center;
           align-items: center;
           flex: 1 auto;           
           border-right: 0px solid rgb(125, 122, 122);  
           padding-left: 10px;
           padding-right:5px;
           min-width: 70px;
           background-color: ${this.backGroundColorTitle};
           border-top-left-radius: 10px;
           border-bottom-left-radius: 10px;
        }
        .right {            
            display: flex;
            justify-content:center;
            flex: 10 auto;
            
            background-color: ${this.backGroundColorInfo};
            padding: 8px;
            
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        #text {
            font-size: ${this.infoFontSize};            
            font-family:Arial, Helvetica, sans-serif;
            margin-left: 12px;

            line-height: 18px;
            padding-right: 10px;
            color: ${this.infoColor};
        }
        #title {
            font-style: italic;
            font-family:'Times New Roman', Times, serif;
            font-size: ${this.titleFontSize};
            color:${this.titleColor};
            text-shadow: 2px 2px 5px rgb(14, 14, 14);
        }
        #close {
            height: 35px;
            border: none;
            background-color:  #ddc8b0;
            border-radius: 100px;
            visibility: ${this.button};
        }`;

        // define the rest of the component and insert any user defined attributes.
        container.innerHTML = `
        <div class="left">
            <div id="title">${this.title}</div>
        </div>
        <div class="right">
            <div id="text">${this.innerHTML}</div> <!--Or I could use <slot>... why though? -->
            <button id="close">✖️</button>
        </div>`;

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }
};

customElements.define("info-area", InfoArea);