$(function () {
    $('.licensor').on('click', licensorOpenDetails);
    $('.misc').on('click', miscOpenDetails);
});

function licensorOpenDetails() {
    $('#licensor-grnt').attr('open', 'open');
    $('#avd-dbt').attr('open', 'open');
}
function miscOpenDetails() {
    $('#misc').attr('open', 'open');
}