$(function() {
    //set up blog with raw data
    blog.sortArticles();
    blog.importArticles();

    //load articles into blogging system
    blog.articles.forEach(blog.appendArticle);

    //after 1st paragraph, set read-on feature
    blog.setTeasers();

    //add behaviors
    blog.populateFilters();
    blog.handleAuthorFilter();
    blog.handleCategoryFilter();

    blog.handleMainNav();
})
