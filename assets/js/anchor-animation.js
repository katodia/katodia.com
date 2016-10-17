// Anchor animation

// Bootstrap 4 breakpoints   xs: 0, sm: 544px, md: 768px, lg: 992px, xl: 1200px
const xs = 0, sm = 544, md = 768, lg = 992, xl = 1200;
const breakpoints = [xl, lg, md, sm, xs];
var currentOffset = 0;


jQuery(document).ready(function () {
    var $root = jQuery('html, body');

    // Calculate offset
    if (jQuery(window).width() <= md) {
        currentOffset = parseInt(jQuery('#navbar-header').height());
    }

    // Enables scrolling in large and medium devices
    if (jQuery(window).width() >= md) {
        jQuery('a.nav-link').click(function () {

            var anchorName = jQuery(this).attr('href').substr(1);
            var y = 0;

            if (anchorName.length > 0) {
                y = jQuery('a[name="' + anchorName + '"]').offset().top;
            }

            $root.animate({ scrollTop: y - currentOffset }, 'slow', function () {
                $root.clearQueue();
            });
        });
    }

    // scrollspy via javascript
    jQuery('body').scrollspy({
        target: '#navbar-header',
        offset: currentOffset + parseInt(jQuery('#navbar-header').css('line-height'))
        // Navbar's height must be added'
    });
});