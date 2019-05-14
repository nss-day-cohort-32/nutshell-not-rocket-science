import { getArticles } from "../API/articles";
import { postArticle } from "../API/articles";

// import { showEditModal } from "../articles/editModal";


// export function addArticle() {

//     const mainDiv = document.querySelector("#main-content-area");

//     console.log(mainDiv);
//     function addInput(inputName, inputTitle, inputType) {
//         let div = document.createElement("div");
//         let label = document.createElement("label");
//         let input = document.createElement("input");
//         input.type = inputType;
//         label.htmlFor = inputName;
//         label.innerHTML = inputTitle;
//         input.id = inputName;
//         div.appendChild(label);
//         div.appendChild(input);
//         return div;
//     };

//     // make form: title, synopsis, url, save button
//     const formDiv = document.createElement("div");
//     const inputForm = document.createElement("form");

//     inputForm.appendChild(addInput("title", "Title", "text"));
//     inputForm.appendChild(addInput("synopsis", "Synopsis", "text"));
//     inputForm.appendChild(addInput("url", "URL", "text"));

//     formDiv.appendChild(inputForm);

//     let saveBtn = document.createElement("button");
//     saveBtn.innerHTML = "Save";

//     formDiv.appendChild(saveBtn);
//     mainDiv.appendChild(formDiv);


// }
// export function showArticles() {
//     const mainDiv = document.querySelector("#main-content-area");

//     // target main div
//     // const mainDiv = document.querySelector("#main-content-area");
//     getArticles()
//         .then(articlesArray => {
//             articlesArray.forEach(article => {

//                 //Create elements
//                 let articleDiv = document.createElement("div");
//                 let articleTitle = document.createElement("h3");
//                 let articleUrl = document.createElement("h4");
//                 let articleSyn = document.createElement("p");
//                 let editBtn = document.createElement("button");

//                 //Set elements value to values in current object in loop
//                 articleTitle.innerHTML = article.title;
//                 articleUrl.innerHTML = article.url;
//                 articleSyn.innerHTML = article.synopsis;
//                 editBtn.innerHTML = "Edit";
//                 editBtn.setAttribute("Id", article.id);
//                 editBtn.addEventListener("click", (event) => showEditModal(event.target.id));

//                 //append to div
//                 articleDiv.appendChild(articleTitle);
//                 articleDiv.appendChild(articleUrl);
//                 articleDiv.appendChild(articleSyn);
//                 articleDiv.appendChild(editBtn);
//                 // console.log(articleDiv);

//                 //append to list div
//                 // articleDivList.appendChild(articleDiv);
//                 mainDiv.appendChild(articleDiv);
//             });
//             //Append all articles to main div
//             // mainDiv.appendChild(articleDiv);

//             // eslint-disable-next-line semi
//         })

// }

// need to be able to add, delete and edit //

// make form: title, synopsis, url, save button

// const formDiv = document.createElement("div");
// const articleForm = document.createElement("form");
// const addArtBtn = document.createElement("button");

// addArtBtn.innerHTML = "Add";

// articleForm.appendChild(addInput("title", "Title", "text"));
// articleForm.appendChild(addInput("synopsis", "Synopsis", "text"));
// articleForm.appendChild(addInput("url", "URL", "text"));
// articleForm.appendChild(addArtBtn);

// addArtBtn.addEventListener("click", (

// formDiv.appendChild(articleForm);

// function addInput(inputTitle, inputSynopsis, inputUrl) {
//     let div = document.createElement("div");
//     let label = document.createElement("label");
//     let input = document.createElement("input");
//     input.type = inputType;
//     input.id = inputName;
//     div.appendChild(label);
//     div.appendChild(input);
//     div.appendChild(signInBtn);
//     return div;

// }

export function showArticles() {
    const mainDiv = document.querySelector("#main-content-area");
    // target main div
    getArticles()
        .then(articlesArray => {
            articlesArray.forEach(article => {
                const artForm = `
                <form class="artForm pure-form">
                    <label for="artName">Article</label>
                    <input type="text" id="articleTitleInput" name="articleTitle" required></input>
                    <label for="artSynopsis">Synopsis</label>
                    <input type="text" id="articleSynInput" name="articleSyn" required></input>
                    <label for="artUrl">URL</label>
                    <input type="text" id="articleUrlInput" name="articleUrl" required></input>
                    <button id="postArtBtn">Add Article</button>
                </form>`;
                //Create elements
                let articleDiv = document.createElement("div");
                let articleTitle = document.createElement("h3");
                let articleUrl = document.createElement("h4");
                let articleSyn = document.createElement("p");
                let addDiv = document.createElement("div");

                //Set elements value to values in current object in loop
                articleTitle.innerHTML = article.title;
                articleUrl.innerHTML = article.url;
                articleSyn.innerHTML = article.synopsis;

                //append to div
                articleDiv.appendChild(articleTitle);
                articleDiv.appendChild(articleUrl);
                articleDiv.appendChild(articleSyn);
                addDiv.innerHTML = artForm;
                // console.log(articleDiv);

                //append to list div
                // articleDivList.appendChild(articleDiv);
                articleDiv.appendChild(addDiv);
                mainDiv.appendChild(articleDiv);
            });
            //Append all articles to main div
            // mainDiv.appendChild(articleDiv);
            return mainDiv;
        })
        .then(() => {



            // const button = document.getElementById("postArtBtn");

            // button.addEventListener("click", function () {
            //     console.log("sup");
            // });

            mainDiv.addEventListener("click", function (e) {
                e.preventDefault();
                console.log(e.target);
                if (e.target.id === "postArtBtn") {
                    console.log("button clicked");
                    let articleTitleInput = document.querySelector("#articleTitleInput");
                    let articleSynInput = document.querySelector("#articleSynInput");
                    let articleUrlInput = document.querySelector("#articleUrlInput");

                    let artTitle = articleTitleInput.value;
                    let artSyn = articleSynInput.value;
                    let articleUrl = articleUrlInput.value;
                }
            });
            let articleObj = {
                // userId: `${user.id}`,
                title: `${artTitle}`,
                synopsis: `${artSyn}`,
                url: `${articleUrl}`,
            };
            API.postData(articleObj).then(refresh);
        });

}

