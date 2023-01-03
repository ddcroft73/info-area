
class InfoArea extends HTMLElement {
    constructor () {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");

        // user controlled attributes, allows more control.
        const title = this.getAttribute("title");
        const backGroundColorTitle = this.hasAttribute("background-color-title")
            ? this.getAttribute("background-color-title")
            : "rgb(241, 166, 16)";
        const titleColor = this.hasAttribute("title-color")
            ? this.getAttribute("title-color")
            : "rgb(241, 245, 249)";
        const infoColor = this.hasAttribute("info-color")
            ? this.getAttribute("info-color")
            : "black";
        const backGroundColorInfo = this.hasAttribute("background-color-info")
            ? this.getAttribute("background-color-info")
            : "rgb(253, 243, 219)";
        const fontSizeInfo = this.hasAttribute("font-size-info")
            ? this.getAttribute("font-size-info")
            : ".7em";
        const fontSizeTitle = this.hasAttribute("font-size-title")
            ? this.getAttribute("font-size-title")
            : "18px";
        const maxWidth = this.hasAttribute("max-width")
            ? this.getAttribute("max-width")
            : "100%";
        const border = this.hasAttribute("border-width")
            ? this.getAttribute("border-width")
            : "0px";
        const borderColor = this.hasAttribute("border-color")
            ? this.getAttribute("border-color")
            : "black";

        // initial component container
        const container = document.createElement("div");
        container.setAttribute("class", "info-container");

        style.textContent = `
        .info-container {
            display:flex;            
            width: 100%;
            height: 100%;
            max-width: ${maxWidth};
            min-height: 75px;
            border: ${border} solid ${borderColor};
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
           background-color: ${backGroundColorTitle};
           border-top-left-radius: 10px;
           border-bottom-left-radius: 10px;
        }
        .right {            
            display: flex;
            justify-content:center;
            align-items: center;
            flex: 10 auto;
            
            background-color: ${backGroundColorInfo};
            padding: 8px;
            
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        #text {
            font-size: ${fontSizeInfo};            
            font-family:Arial, Helvetica, sans-serif;
            margin-left: 12px;
            line-height: 18px;
            padding-right: 10px;
            color: ${infoColor};
        }
        #title {
            font-style: italic;
            font-family:'Times New Roman', Times, serif;
            font-size: ${fontSizeTitle};
            color:${titleColor};
            text-shadow: 2px 2px 5px rgb(14, 14, 14);
        }`;

        container.innerHTML = `
        <div class="left">
            <div id="title">${title}</div>
        </div>
        <div class="right">
            <div id="text"><slot></slot></div> <!--${this.innerHTML} Why not just use this than <slot>? -->
        </div>`;
        
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }
}

customElements.define('info-area', InfoArea);