var blog = {};
blog.articles = [];

blog.sortArticles = function() {
    blog.rawData.sort(function(a,b) {
        return a.publishedOn < b.publishedOn;
    });
};

blog.importArticles = function () {
    blog.rawData.forEach(function(ele) {
        blog.articles.push(new Article(ele));
    });
};

blog.appendArticles = function(a) {
    $('#articles').append(a.toHtml());
};

blog.setTeasers = function() {
    $('.article-body p:nth-of-type(n+2)').hide();
    $('#articles').on('click', 'a.read-on', function(e) {
        e.preventDefault();
        $(this).parent().find('p').show();
        $(this).hide();
    });
};

blog.populateFilters = function() {
    $('article').each(function() {
        if (!$(this).hasClass('draft')) {
            var val = $(this).find('address a').text();
            var option = '<option value="' + val + '">' + val + '</option>';
            $('#author-filter').append(option);

            val = $(this).data('category');
            option = '<option value="' + val + '">' + val + '</option>';
            if ($('#category-filter option [value=' + val + ']').length === 0) {
                $('#category-filter').append(option);
            }
        }
    });
};
