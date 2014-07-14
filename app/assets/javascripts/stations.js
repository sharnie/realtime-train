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

    var _this           = $(this),
        station_id      = _this.data('station-id'),
        url             = '/stations/'+ station_id +'/trains.json',
        content         = $('#content'),
        templateString  = [
          '<h2 class="station-title"><%= station.name %></h2>',
          '<h3>Lines</h3>',
          '<div class="line-group">',
          '  <span class="line">1</span>',
          '  <span class="line">2</span>',
          '  <span class="line">3</span>',
          '</div>',
          '<div class="train-time">',
          '  <h3>North - Harlem - 148 St</h3>',
          '  <table class="table">',
          '    <thead>',
          '      <tr>',
          '        <th class="text-center">Line</th>',
          '        <th>Status</th>',
          '        <th>Arrive</th>',
          '      </tr>',
          '    </thead>',
          '    <tbody>',
          '      <tr>',
          '        <td class="text-center">2</td>',
          '        <td>All trains running on time.</td>',
          '        <td>20 Min</td>',
          '      </tr>',
          '    </tbody>',
          '  </table>',
          '  <h3>South - New Lots Av</h3>',
          '  <table class="table">',
          '    <thead>',
          '      <tr>',
          '        <th class="text-center">Line</th>',
          '        <th>Status</th>',
          '        <th>Arrive</th>',
          '      </tr>',
          '    </thead>',
          '    <tbody>',
          '      <tr>',
          '        <td class="text-center">2</td>',
          '        <td>All trains running on time.</td>',
          '        <td>20 Min</td>',
          '      </tr>',
          '    </tbody>',
          '  </table>',
          '</div>',
        ];

    $.getJSON(url).success(function(data){
      var html = [];
      var template = _.template(templateString.join("\n"));

        html += template({station: data.station});
        content.html(html);

        _.each(data.trains, function(train){
          $('.line-group').append('<span class="line">'+ train.name +'</span>');
        });

    });

  });

});