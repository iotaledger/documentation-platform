//= require ../lib/_lunr
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
(function () {
  'use strict';

  var content, searchResults;
  var highlightOpts = { element: 'span', className: 'search-highlight' };

  var index = new lunr.Index();

  index.ref('id');
  index.field('title', { boost: 10 });
  index.field('body');
  index.pipeline.add(lunr.trimmer, lunr.stopWordFilter);

  $(populate);
  $(bind);

  function populate() {
    $('h1, h2').each(function() {
      var title = $(this);
      var body = title.nextUntil('h1, h2');
      index.add({
        id: title.prop('id'),
        title: title.text(),
        body: body.text()
      });
    });
  }

  function bind() {
    content = $('.content');
    searchResults = $('.search-results');

    $('#input-search').on('keyup', search);
  }

  function search(event) {
    unhighlight();
    searchResults.addClass('visible');

    // ESC clears the field
    if (event.keyCode === 27) this.value = '';

    if (this.value) {
      var results = index.search(this.value).filter(function(r) {
        return r.score > 0.0001;
      });

      if (results.length) {
        searchResults.empty();
        $.each(results, function (index, result) {
            var elem = $(document.getElementById(result.ref)),
                li = $(document.createElement("li")),
                a = $(document.createElement("a"));
            a.text(elem.text());
            a.attr("href", "#" + result.ref);
            a.click(searchScrollTo);
            li.append(a);
            searchResults.append(li);
        });
        highlight.call(this);
      } else {
          searchResults.html('<li class="no-results"></li>');
        $('.search-results li').text('No Results Found for "' + this.value + '"');
      }
    } else {
      unhighlight();
      searchResults.removeClass('visible');
    }
  }

  function highlight() {
    if (this.value) content.highlight(this.value, highlightOpts);
  }

  function unhighlight() {
    content.unhighlight(highlightOpts);
  }

    function searchScrollTo() {
        var elem = $($(this).attr("href"))[0],
            duration = 0;

        console.log(elem);

        // Once all animations on the page are complete, this callback function will be called
        $("html, body").promise().done(function () {
            // Animates the html and body element scrolltops
            $("html, body").animate({
                // Sets the jQuery `scrollTop` to the top offset of the HTML div tag that matches the current list item's `data-unique` tag
                "scrollTop": $('div[data-unique="' + $(elem).attr("id") + '"]').next().offset().top - 72 - 16 + "px"
            }, {
                // Sets the smoothScroll animation time duration to the smoothScrollSpeed option
                "duration": duration
            });
        });
    }
})();
