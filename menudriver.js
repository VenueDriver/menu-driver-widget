(function($, window, document, undefined) {

    $.fn.menuedriver = function(options) {

        // Default options
        var settings = $.extend({
            venue: 'yauatcha-riyadh',
            domain: 'https://menus.hakkasangroup.com/'
        }, options);

        return this.each(function() {

            // Variables
            var wrapper = $(this);

            $.ajax({
                url: settings.domain + settings.venue,
                type: 'GET',
                success: function(data) {
                    var
                        styles = $('<div>').append(data).find('style'),
                        scripts = $('<div>').append(data).find('script'),
                        menu = $('<div>').append(data).find('.menu-content');

                    $(scripts).each(function() {
                        if (this.src != null) {
                            this.parentNode.removeChild(this);
                        }
                    });

                    var fullmenu = $.merge(menu, styles, scripts);
                    wrapper.html(fullmenu);
                }
            });

        });

    };

}(jQuery, window, document));
