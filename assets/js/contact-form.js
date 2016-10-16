jQuery(document).ready(function () {

    $button = jQuery('#submitter'); 
    $button.click(function () {

        resetAlerts();
        $button.prop('disabled', true);
        $contactForm = jQuery('form[name="contact-form"]');

        var $request = jQuery.ajax({
            url: $contactForm.attr('action'),
            method: $contactForm.attr('method'),
            data: $contactForm.serialize(),
            dataType: "json",
            beforeSend: function() {
			    jQuery('.alert-form.alert-info').css({'display': 'block'});
		    },
        });

        $request.done(function (msj) {
            resetAlerts();
            $button.prop('disabled', false);
            jQuery('.alert-form.alert-success').css({'display': 'block'});
        });

        $request.fail(function (msj) {
            resetAlerts();
            $button.prop('disabled', false);
            jQuery('.alert-form.alert-danger').css({'display': 'block'});
        });
    });

    function resetAlerts () {
        jQuery('.alert-form').css({'display': 'none'});
    }
});