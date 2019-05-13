import { getArticles } from "../API/articles";

const mainDiv = document.querySelector("#main-content-area");

console.log(mainDiv);
function addInput(inputName, inputTitle, inputType) {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = inputType;
    label.htmlFor = inputName;
    label.innerHTML = inputTitle;
    input.id = inputName;
    div.appendChild(label);
    div.appendChild(input);
    return div;
};

// make form: title, synopsis, url, save button
const formDiv = document.createElement("div");
const inputForm = document.createElement("form");

inputForm.appendChild(addInput("title", "Title", "text"));
inputForm.appendChild(addInput("synopsis", "Synopsis", "text"));
inputForm.appendChild(addInput("url", "URL", "text"));

formDiv.appendChild(inputForm);

let saveBtn = document.createElement("button");
saveBtn.innerHTML = "Save";

formDiv.appendChild(saveBtn);
mainDiv.appendChild(formDiv);

export function showArticles() {

    // target main div
    // const mainDiv = document.querySelector("#main-content-area");
    getArticles()
        .then(articlesArray => {
            articlesArray.forEach(article => {

                //Create elements
                let articleDiv = document.createElement("div");
                let articleTitle = document.createElement("h2");
                let articleUrl = document.createElement("h4");
                let articleSyn = document.createElement("p");

                //Set elements value to values in current object in loop
                articleTitle.innerHTML = article.title;
                articleUrl.innerHTML = article.url;
                articleSyn.innerHTML = article.synopsis;

                //append to div
                articleDiv.appendChild(articleTitle);
                articleDiv.appendChild(articleUrl);
                articleDiv.appendChild(articleSyn);
                // console.log(articleDiv);

                //append to list div
                // articleDivList.appendChild(articleDiv);
                mainDiv.appendChild(articleDiv);
            });
            //Append all articles to main div
            // mainDiv.appendChild(articleDiv);

            // eslint-disable-next-line semi
        })

}

// need to be able to add, delete and edit //

// import { getArticles } from "../API/articles";

// // make form: title, synopsis, url, save button
// const formDiv = document.createElement("div");
// const articleForm = document.createElement("form");

// saveBtn.innerHTML = "Save";

// articleForm.appendChild(addInput("title", "Title", "text"));
// articleForm.appendChild(addInput("synopsis", "Synopsis", "text"));
// articleForm.appendChild(addInput("url", "URL", "text"));

// formDiv.appendChild(articleForm);

// function addInput(inputTitl, inputSynopsis, inputUrl) {
//     let div = document.createElement("div");
//     let label = document.createElement("label");
//     let input = document.createElement("input");
//     input.type = inputType;
//     label.htmlFor = inputName;
//     label.innerHTML = inputTitle;
//     input.id = inputName;
//     div.appendChild(label);
//     div.appendChild(input);
//     div.appendChild(signInBtn);
//     return div;

// }

// export function showArticles() {

//     // target main div
//     const mainDiv = document.querySelector("#main-content-area");
//     getArticles()
//         .then(articlesArray => {
//             articlesArray.forEach(article => {

//                 //Create elements
//                 let articleDiv = document.createElement("div");
//                 let articleTitle = document.createElement("h2");
//                 let articleUrl = document.createElement("h4");
//                 let articleSyn = document.createElement("p");

//                 //Set elements value to values in current object in loop
//                 articleTitle.innerHTML = article.title;
//                 articleUrl.innerHTML = article.url;
//                 articleSyn.innerHTML = article.synopsis;

//                 //append to div
//                 articleDiv.appendChild(articleTitle);
//                 articleDiv.appendChild(articleUrl);
//                 articleDiv.appendChild(articleSyn);
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

// // need to be able to add, delete and edit //