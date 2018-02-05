var search = instantsearch({
  appId: 'RJWECUZDCJ',
  apiKey: '6d7adf175b409666823b0fb4a4c135b4',
  indexName: 'Questions',
  urlSync: false
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#q',
    autofocus: false,
    placeholder: 'Ask a question'
  })
);

var hitTemplate = `<div class="question">
  <div class="questionBorder"></div>
  <div class="questionContents">
    <h2>{{{_highlightResult.question.value}}}</h2>
    <p>{{{answer}}}</p>
  </div>
</div>`

var noResultsTemplate =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';


search.addWidget(
  instantsearch.widgets.hits({
    container: '.questions',
    hitsPerPage: 11,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    },
    transformData: function(hit) {
      return hit;
    }
  })
);

// select the target node
var target = document.getElementById('questions');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    genQuestionBorder();
  });
});

// configuration of the observer:
var config = { subtree: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);


search.start();
