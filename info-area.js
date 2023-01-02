
class InfoArea extends HTMLElement {
    constructor () {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");

        // user controlled attributes
        const title = this.getAttribute("title");
        const backGroundColorTitle = this.hasAttribute("background-color-title")
            ? this.getAttribute("background-color-title")
            : "rgb(241, 166, 16)";
        const backGroundColorInfo = this.hasAttribute("background-color-info")
            ? this.getAttribute("background-color-info")
            : "rgb(253, 243, 219)";
        const fontSizeInfo = this.hasAttribute("font-size-info")
            ? this.getAttribute("font-size-info")
            : ".7em";
        const fontSizeTitle = this.hasAttribute("font-size-title")
            ? this.getAttribute("font-size-title")
            : "18px";

        // initial component container    
        const container = document.createElement("div");
        container.setAttribute("class", "info-container");

        style.textContent = `
        .info-container {
            display:flex;            
            width: 100%;
            height: 100%;
            min-height: 75px;
            border: 0px solid black;
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
        .text {
            font-size: ${fontSizeInfo};            
            font-family:Arial, Helvetica, sans-serif;
            margin-left: 12px;
            line-height: 18px;
            padding-right: 10px;
        }
        .title {
            font-style: italic;
            font-family:'Times New Roman', Times, serif;
            font-size: ${fontSizeTitle};
            color:rgb(241, 245, 249);
            text-shadow: 2px 2px 5px rgb(14, 14, 14);
        }`;

        container.innerHTML = `
        <div class="left">
            <span class="title">${title}</span>
        </div>
        <div class="right">
            <span class="text">${this.innerHTML}</span>
         </div>`;

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }
}

customElements.define('info-area', InfoArea);