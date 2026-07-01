/* ==========================================
   COMPONENT MANAGER
========================================== */

class ComponentManager {

    constructor() {

        this.sidebar = document.getElementById("components");

        this.currentPage = document.querySelector(".page-content");

        this.components = [

            "Heading",

            "Sub Heading",

            "Paragraph",

            "Definition",

            "Remember",

            "Example",

            "Formula",

            "Important",

            "Board Question",

            "KCET Tip",

            "Table"

        ];

        this.loadSidebar();

    }

    loadSidebar() {

        this.components.forEach(component => {

            const btn = document.createElement("button");

            btn.className = "component";

            btn.innerText = component;

            btn.onclick = () => this.insert(component);

            this.sidebar.appendChild(btn);

        });

    }

    insert(type) {

        let html = "";

        switch(type){

            case "Heading":

                html=`<h1 contenteditable="true">New Heading</h1>`;

                break;

            case "Sub Heading":

                html=`<h2 contenteditable="true">Sub Heading</h2>`;

                break;

            case "Paragraph":

                html=`<p contenteditable="true">Type paragraph here...</p>`;

                break;

            case "Definition":

                html=`
                <div class="definition-box">

                    <div class="box-title">

                        📘 Definition

                    </div>

                    <p contenteditable="true">

                        Type definition...

                    </p>

                </div>`;

                break;

            case "Remember":

                html=`
                <div class="remember-box">

                    <div class="box-title">

                        💡 Remember

                    </div>

                    <p contenteditable="true">

                        Important point...

                    </p>

                </div>`;

                break;

            case "Example":

                html=`
                <div class="example-box">

                    <div class="box-title">

                        🧪 Example

                    </div>

                    <p contenteditable="true">

                        Example...

                    </p>

                </div>`;

                break;

            case "Formula":

                html=`
                <div class="formula-box">

                    <div class="box-title">

                        📐 Formula

                    </div>

                    <p contenteditable="true">

                        Formula here...

                    </p>

                </div>`;

                break;

            case "Important":

                html=`
                <div class="important-box">

                    <div class="box-title">

                        ⭐ Important

                    </div>

                    <p contenteditable="true">

                        Important concept...

                    </p>

                </div>`;

                break;

            case "Board Question":

                html=`
                <div class="board-box">

                    <div class="box-title">

                        📝 Board Question

                    </div>

                    <p contenteditable="true">

                        Write question...

                    </p>

                </div>`;

                break;

            case "KCET Tip":

                html=`
                <div class="kcet-box">

                    <div class="box-title">

                        🎯 KCET Tip

                    </div>

                    <p contenteditable="true">

                        KCET concept...

                    </p>

                </div>`;

                break;

            case "Table":

                html=`

                <table>

                    <tr>

                        <th>Heading</th>

                        <th>Heading</th>

                    </tr>

                    <tr>

                        <td contenteditable="true"></td>

                        <td contenteditable="true"></td>

                    </tr>

                </table>

                `;

                break;

        }

        this.currentPage.insertAdjacentHTML("beforeend", html);

    }

}

window.addEventListener("DOMContentLoaded",()=>{

    new ComponentManager();

});
