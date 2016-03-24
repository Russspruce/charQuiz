$(document).ready(function() {
  $("form#charQuiz").submit(function() {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    // var answer4 = $("input:radio[name=q4]:checked").val();
    // var answer5 = $("input:radio[name=q5]:checked").val();
    var total = 0;
    total = (answer1+answer2+answer3)
    if (3 <= total && total <=10) {
      alert("You are Iron Man!")
    } else if (11 <= total && total <=14) {
      alert("You are Captain Marvel")
    } else if (total === 15) {
      alert("You are The Incredible Hulk")
    }
  });
});
