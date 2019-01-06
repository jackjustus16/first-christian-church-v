$(document).ready(function(){
  $.getJSON("https://victoriafirstchristianchurch.net/api/text")
  .then(addSermon);
  $.getJSON("https://victoriafirstchristianchurch.net/api/events")
  .then(addEvents);
});

function addSermon(sermon){
    let weeklySermon = $('<h3 class="red-section-head">' + sermon[0].text + '</h3><span class="red-section-sub">' + sermon[0].name + '</span>');
    $('.weekly-sermon').append(weeklySermon);
  }

function addEvents(event){
  event.forEach(function(event) {
      addEvent(event);
    });
}

  function addEvent(event){
        let events = $('<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">' +
               '<div class="img-wrap darken-pseudo" style="background-image: url(' + event.image + ');">' +
                  '<span class="iw-line-1">' +
                  '<span class="iw-line-2"></span>' +
                  '</span>' +
                  '<div class="status-event">' +
                  event.title +
                  '<div class="info-wrap">' +
                     '<div class="date">' +
                        '<div class="day">' +
                          event.day +
                           '</div>' +
                        '<div class="month-year">' +
                        event.date +
                        '</div>' +
                     '</div>' +
                     '<div class="event-details">' +
                        '<div class="event-title">' +
                           '<h3>' +
                           event.location +
                           '</h3>' +
                        '</div>' +
                        '<div class="time-address">' +
                           '<ul>' +
                              '<li class="time-address-li">' +
                                 '<i class="fa fa-map-marker" style="padding-right: 5px"></i>' +
                                 event.time +
                              '</li>' +
                           '</ul>' +
                        '</div>' +
                     '</div>' +
                  '</div>' +
               '</div>' +
            '</div>'
            );
    $('.events-row').append(events);
  }