$(function(){
  var html;
  var address = $('input#charity_address').val();
  $.getJSON('/proxy?address=' + address, function(result){
    
	console.log(result);
	
	$('#final_balance').html('<p> Total Recibidos: '+ result.final_balance + ' </p>');

    for (i in result.txs) {
      html = '<tr>' +
                '<td>' + result.txs[i].time_utc + '</td>' +
                '<td>' + result.txs[i].amount + '</td>' +
                '<td>' + result.txs[i].confirmations + '</td>' +
                '<td>' + result.txs[i].tx + '</td>' +
             '</tr>'
      $('#txs').append(html);
    }

    for (i in result.unconfirmed) {
      html = '<tr>' +
                '<td>' + result.unconfirmed[i].time_utc + '</td>' +
                '<td>' + result.unconfirmed[i].amount + '</td>' +
                '<td>' + result.unconfirmed[i].n + '</td>' +
                '<td>' + result.unconfirmed[i].tx + '</td>' +
             '</tr>'
      $('#unconfirmed').append(html);
    }

  });
});
