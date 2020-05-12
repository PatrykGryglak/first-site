'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log(event, 'wyswietlaj event');

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active')

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
    console.log(activeArticle, 'delete active class from articles');
  }
  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector, 'pobralem atrybut');
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle, 'to wyświetlę');

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('clickedElement:', clickedElement);
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  function clearMessages() {
    document.getElementById('messages').innerHTML = '';
  }
  /* ... */

  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* ... */

  let html = '';

  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');
    /* ... */

    /* find the title element and get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /* ... */
console.log(linkHTML, 'link');


    /* insert link into html variable */
    html = html + linkHTML;
    console.log(html, 'co to jest');
  }

  titleList.innerHTML = html;
  
}

generateTitleLinks();




