1400 + 1 9 3 8 2 6 7 4 5
1100 + 1 4 6 3 7 8 2 5 9
800 + 1 3 6 7 9 2 4 5 8

function tileOrder() {
if ($(window).width > 1400) {
  $("#tile9").detach().appendTo($("#tile1"));
}};
// else if ($(window).width < 1400 && $(window).width > 1100){
//   $("#tile9").appendTo($("#tile1"))
//
// }
//
// };
//

// function tileOrder() {
//   if ($(window).width > 1400) {
//     $("#tile9").appendTo($("#tile1"));
//     $("#tile8").appendTo($("#tile3"));
//     $("#tile2").appendTo($("#tile8"));
//     $("#tile4").appendTo($("#tile7"));
//     $("#tile5").appendTo($("#tile4"));
//   }};
