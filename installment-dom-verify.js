// Installment Dom Verify - Adding aditional Info
jQuery('.installment-show').click(function($) {
	setTimeout(function() { 
		if (jQuery(".tbl-payment-system").length) {

			var getTexts = [];
			var x = jQuery(".tbl-payment-system tr:contains(8X)");
			var resultTexts = x.add(jQuery("~ tr", x)).map(function() {
			 return jQuery("td.parcelas", this).text(function(_, text) {
			   return text.replace(/S(?=\/)/, "C")
			   })
			}).get();
			//console.log('"' + resultTexts.join('", "') + '"');

			var elements = jQuery('table td:contains(X)').parent().nextUntil().addBack().children(':first-child');
			elements.each(function() {
				jQuery(this).text(jQuery(this).text().replace('X S/JUROS', '1X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('21X S/JUROS', '2X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('31X S/JUROS', '3X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('41X S/JUROS', '4X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('51X S/JUROS', '5X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('61X S/JUROS', '6X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('71X S/JUROS', '7X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('8X S/JUROS', '8X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('9X S/JUROS', '9X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('10X S/JUROS', '10X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('11X S/JUROS', '11X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('12X S/JUROS', '12X S/JUROS'));
			});

		}
	}, 100);
});
// Installment Dom Verify - Adding aditional Info