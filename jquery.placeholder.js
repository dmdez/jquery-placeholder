(function ($) {
    $.fn.placeholder = function (options) {

        var settings = {
            'wrapperClass': 'placeholderwrap'
        };

        settings = $.extend(settings, options);

        if (typeof (this) == 'object') {

            return this.each(function () {

                var $field = $(this);
                var placeholder = $field.attr("placeholder");

                if (placeholder) {
                    var _id = $field.attr("id");

                    if (!_id) {
                        _id = 'field_' + Math.random().toString(36).substring(7);
                        $field.attr("id", _id);
                    }

                    var $label = $('<label class="placeholder" for="' + _id + '">' + placeholder + '</label>');
                    var $wrap = $('<span class="' + settings['wrapperClass'] + '" />')
                                    .css({ position: 'relative', display: 'inline-block' });

                    $field.before($label);

                    if ($field.length > 0) {

                        $label.css({ position: 'relative', top: 0, left: 0 });

                        var paddingTop = $field.css('paddingTop');
                        var marginTop = $field.css('marginTop');
                        var paddingLeft = $field.css('paddingLeft');
                        var marginLeft = $field.css('marginLeft');
                        var top = 0;
                        var left = 0;

                        if (/px/.test(paddingTop)) top += parseFloat(paddingTop.replace('px', ''));
                        if (/px/.test(marginTop)) top += parseFloat(marginTop.replace('px', ''));
                        if (/px/.test(paddingLeft)) left += parseFloat(paddingLeft.replace('px', ''));
                        if (/px/.test(marginLeft)) left += parseFloat(marginLeft.replace('px', ''));

                        $field.after($wrap);
                        $field.appendTo($wrap);
                        $label.css({ top: top, left: left, position: 'absolute', cursor: 'text' }).appendTo($wrap);

                        if ($field.val()) $label.hide();

                        $field.keyup(function () {
                            if ($(this).val())
                                $label.hide();
                            else
                                $label.show();
                        }).blur(function () {
                            if (!$(this).val()) $label.show();
                        });
                    }
                }
            });
        }
        return;
    };
})(jQuery);