$(document).on('page:change', function(){
  var station = $('#station'),
      result  = $('ul#results'),
      query;

  station.on('keyup', function(){
    query = this.value; // return new input value
    result.html(''); // clear result div

    if(query.length >= 1 ) {
      $.getJSON('/stations/'+ query +'.json').success(function(data){

        _.each(data, function(station){
          result.prepend('<li><a href="#">' + station.name + '</a></li>');
        });

      });
    }

  });

});