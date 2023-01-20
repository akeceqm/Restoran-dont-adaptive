$(document).ready(function () {

    //Открытие виджета по клику

jQuery('body').on('click', '.callback-button-phone', function (e) {

                   e.preventDefault();

                   jQuery('.widget-callback').toggleClass('widget-callback-form-open');

    });

});
