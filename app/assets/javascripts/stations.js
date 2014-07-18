$(document).on('page:change', function(){
  var station   = $('#station'),
      result    = $('ul#results'),
      resultArr = [],
      query,
      url;

  station.on('keyup', function(){
    query = this.value; // return new input value
    result.html(''); // clear result div
    station.addClass('loading'); // add preload gif

    // if(query.length <= 1){
    //   if(resultArr.length === 0){
    //     url = '/stations/'+ query +'.json';

    //     $.getJSON(url).success(function(data){

    //       _.each(data, function(station){
    //         result.prepend('<li data-station-id="' + station.station_id + '"><a href="#" class="text-ellipsis">' + station.name + '</a></li>');
    //         resultArr.push(station);
    //       });

    //       station.removeClass('loading'); // remove preloader gif

    //     });
    //   }else{
    //     console.log(resultArr);
    //   }
    // }else{
    //   _.each(resultArr, function(station){
    //     // console.log(station);
    //     // result.prepend('<li data-station-id="' + station.station_id + '"><a href="#" class="text-ellipsis">' + station.name + '</a></li>');
    //   });
    // }

    if(query.length >= 1) {
      url = '/stations/'+ query +'.json';

      $.getJSON(url).success(function(data){

        console.log(data);

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

    var station_id = $(this).data('station-id'),
        url        = '/stations/'+ station_id +'/trains.json';

    $.getJSON(url).success(function(data){
      stationTitle(data.station.name);
      lineGroup(data.station.trains);
      trainBound(data.station.trains);
    });

  });

  function stationTitle(title){
    station_title = $('.station-title');
    station_title.html(title);
  }

  function lineGroup(data){
    line_group = $('.line-group');
    line_group.html('');

    _.each(data, function(train){
      line_group.append('<span class="line">'+ train.name +'</span>');
    });
  }

  function trainBound(data){
    $('h3.north').html(data);
  }

});