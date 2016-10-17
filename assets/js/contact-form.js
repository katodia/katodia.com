const validationFieldIds = [
    'email', 'subject', 'message'
];

jQuery(document).ready(function () {

    $button = jQuery('#submitter');
    $form = jQuery('form[name="contact-form"]');

    $button.click(function () {

        resetAlerts();
        $button.prop('invalid', false);

        // Validates form fields via HTML5 attributes
        var formValid = true; 
        for (i in validationFieldIds){
            if (! document.getElementById(validationFieldIds[i]).checkValidity()) {
                formValid = false;
                break;
            }    
        }

        if (formValid) {
            
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

                // Clear all fields
                for (i in validationFieldIds){
                    jQuery('#' + validationFieldIds[i]).val('').text('');   
                }

                $button.prop('invalid', false);
            });

            $request.fail(function (msj) {
                resetAlerts();
                $button.prop('disabled', false);
                jQuery('.alert-form.alert-danger').css({'display': 'block'});
            });
        } else {
            $form.find(':submit').click();
        }
    });

    function resetAlerts () {
        jQuery('.alert-form').css({'display': 'none'});
    }
});