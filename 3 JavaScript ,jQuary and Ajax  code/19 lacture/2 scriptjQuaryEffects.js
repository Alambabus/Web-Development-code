$('.div').on('click', function() {
    // console.log(this);
    console.log('Clicked');
    $(this).hide();
})



$('p').on('click', function(e) {
    console.log(e.target);
    // $(e.target).siblings().show();
    // $(e.target).siblings().toggle();
    $(e.target).siblings().slideToggle();
})