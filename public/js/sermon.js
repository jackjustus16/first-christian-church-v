$(document).ready(function(){
  $.getJSON("https://victoriafirstchristianchurch.net/api/sermons")
  .then(addSermons);
});

function addSermon(sermon){
    let sermonBlock = $('<div class="col-md-6 col-sm-12">' +
              '<div class="sermon-wrapper">' +
                '<div class="sermon-video">' +
                    '<iframe max-width="auto" width="100%" height="340" src="https://www.youtube.com/embed/' +
                    sermon.video +
                    '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                '</div>' +
                  '<div class="sermon-title">' +
                    sermon.title +
                '</div>' +
                '<div class="sermon-desc">' +
                    sermon.description +
                '</div>' +
              '</div>' +
          '</div>');
    $('.sermon-row').append(sermonBlock);
  }

function addSermons(sermon){
  sermon.forEach(function(sermon) {
      addSermon(sermon);
    });
}