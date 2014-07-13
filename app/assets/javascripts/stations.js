$(document).on('page:change', function(){
  var station = $('#station'),
      result  = $('ul#results'),
      query;

  station.on('keyup', function(){
    query = this.value; // return new input value
    result.html(''); // clear result div
    station.addClass('loading'); // add preload gif

    var url;
    if(query.length >= 1 ) {
      url = '/stations/'+ query +'.json';
      $.getJSON(url).success(function(data){

        _.each(data, function(station){
          result.prepend('<li><a href="#" class="text-ellipsis">' + station.name + '</a></li>');
        });

        station.removeClass('loading'); // remove preloader gif

      });
    } else {
      station.removeClass('loading'); // remove preloader gif
    }

  });

});