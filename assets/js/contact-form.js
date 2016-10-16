jQuery(document).ready(function () {
    $button = jQuery('#submitter'); 
    $button.click(function () {
        
        //$button.prop('disabled', true);
        $contactForm = jQuery('form[name="contact-form"]');
        console.log($contactForm);

        var $request = jQuery.ajax({
            url: $contactForm.attr('action'),
            method: $contactForm.attr('method'),
            data: $contactForm.serialize(),
            dataType: "json",
            beforeSend: function() {
			    $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		    },
        });

        $request.done(function (msj) {
            console.log(msj);
        });

        $request.fail(function (msj) {
            console.log(msj);
        });
    });
});