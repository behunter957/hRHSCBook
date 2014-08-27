/**
 * 
 */
function refreshCourts() {
	// get the current selection values
	$('#courtlisttable tbody > tr').remove();
	$.getJSON( "http://www.bhsquashclub.com/Reserve/IOSTimesJSON.php?scheddate=2014-09-02&courttype=All&include=YES&uid=bhunter", function( data ) {
		var items = [];
		$.each( data.courtTimes, function( i, courttime ) {
			items.push( "<tr><td>" + courttime.booking_id + "</td></tr>" );
		});
		$('#courtlisttable').find('tbody').append(items.join(""));
	});
}