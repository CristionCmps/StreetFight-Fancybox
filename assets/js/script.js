// $(document).ready(function () {
//     // ABRIR BOX MENU MOBILE
//     $('.mobile-menu-icon').click(function () {
//         $('.mobile-menu ul').toggleClass("active");
//         console.log($('.mobile-menu ul'))
//         console.log('Teste');
//     });
// });

$(document).ready(function () {
    // ABRIR BOX MENU MOBILE
    $('.mobile-menu').click(function() {
        $('.container__menu--mobile').toggleClass('active');
    });
  });