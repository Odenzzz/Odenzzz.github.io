$(function() {
    $('.call').magnificPopup();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
    var name,tel;
    name = $("#name").val();
    tel = $("#tel").val();
    jQuery(".call-form .button").on("click", function(){
        jQuery.ajax({
                url:'mail.php',
                type: 'POST',
                cache: false,
                data: {'name':name,"tel":tel},
                dataType: 'html',
                success: function(data) {
                    alert("Спасибо ваша заявка принята");
			         setTimeout(function() {
				    // Done Functions
				    th.trigger("reset");
			     }, 1000);
                }
            });
    });
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
