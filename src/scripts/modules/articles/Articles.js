import { getArticles } from "../API/articles";

export function showArticles() {

    // target main div
    const mainDiv = document.querySelector("#main-content-area");

    // base code framework -- needs work
    getArticles()
        .then(articlesArray => {
            articlesArray.forEach(article => {

                //Create elements
                let articleDiv = document.createElement("div");
                let articleTitle = document.createElement("h2");
                let articleUrl = document.createElement("h4");
                let articleSyn = document.createElement("p");

                //Set elements value to values in current object in loop
                articleTitle.innerHTML = article.articleTitle;
                articleUrl.innerHTML = article.url;
                articleSyn.innerHTML = article.synopsis;

                //append to div
                articleDiv.appendChild(articleTitle);
                articleDiv.appendChild(articleUrl);
                articleDiv.appendChild(articleSyn);

                //append to list div
                articleDivList.appendChild(articleDiv);

            });
            //Append all articles to main div
            mainDiv.appendChild(articleDivList);

            // eslint-disable-next-line semi
        })

}