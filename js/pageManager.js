class PageManager{

    constructor(){

        this.book=document.getElementById("book");

        this.pageCount=0;

    }

    createPage(){

        this.pageCount++;

        const page=document.createElement("div");

        page.className="page";

        page.dataset.page=this.pageCount;

        page.innerHTML=`

            <div class="page-header">

                ZENOVA EDUCATIONS

            </div>

            <div class="page-content"

                 contenteditable="true">

            </div>

            <div class="page-footer">

                Page ${this.pageCount}

            </div>

        `;

        this.book.appendChild(page);

    }

}

const manager=new PageManager();

manager.createPage();
