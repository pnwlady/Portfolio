$(function() {
    //Set up blog with raw data
    blog.sortArticles();
    blog.importArticles();

    //Load articles into blogging system
    blog.articles.forEach(blog.appendArticle);

    //After lead-in paragraph hide all else, add read-on button
    blog.setTeasers();

    //Add behaviors
    blog.populateFilters();
    blog.handleAuthorFilter();
    blog.handleCategoryFilter();

    blog.handleMainNav();
})
