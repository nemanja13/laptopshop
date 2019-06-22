$(document).ready(function () {
    $(".dropdown-trigger").dropdown()
});
$(document).ready(function(){
    $('.sidenav').sidenav();
});
$(document).ready(function(){
    $('.slider').slider();
});
$(document).ready(function(){
    $('.modal').modal();
});
var limitSlider = document.getElementById('slider-limit');

noUiSlider.create(limitSlider, {
    start: [25000, 200000],
    limit: 200000,
    behaviour: 'drag',
    connect: true,
    range: {
        'min': 25000,
        'max': 200000
    }
});
var limitFieldMin = document.getElementById('slider-limit-value-min');
var limitFieldMax = document.getElementById('slider-limit-value-max');

limitSlider.noUiSlider.on('update', function (values, handle) {
    (handle ? limitFieldMax : limitFieldMin).innerHTML = values[handle];
});