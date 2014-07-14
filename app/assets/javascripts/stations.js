$(document).on('page:change', function(){
  var station = $('#station'),
      result  = $('ul#results'),
      query,
      url;

  station.on('keyup', function(){
    query = this.value; // return new input value
    result.html(''); // clear result div
    station.addClass('loading'); // add preload gif

    if(query.length >= 1 ) {
      url = '/stations/'+ query +'.json';

      $.getJSON(url).success(function(data){

        _.each(data, function(station){
          result.prepend('<li data-station-id="' + station.station_id + '"><a href="#" class="text-ellipsis">' + station.name + '</a></li>');
        });

        station.removeClass('loading'); // remove preloader gif

      });
    } else {
      station.removeClass('loading'); // remove preloader gif
    }

  });

  $(result).on('click', 'li', function(e){
    e.preventDefault();
    e.stopPropagation();

    var _this      = $(this),
        station_id = _this.data('station-id'),
        url        = '/stations/'+ station_id +'/trains.json';

    $.getJSON(url).success(function(data){
      $('.station-title').html(data[station_id].station.name);
        // console.log();
        console.log()
      _.each(data[station_id].trains, function(train){
        console.log(train);
      });
    });

  });

});