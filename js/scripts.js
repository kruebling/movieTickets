// back-end logic
function Ticket(movie, time, age, quantity) {
  this.movieName = movie;
  this.movieTime = time;
  this.movieAge = age;
  this.movieQuantity = quantity;
}

Ticket.prototype.totalPrice = function() {
  return '$' + ((this.movieName + this.movieTime) - this.movieAge) * this.movieQuantity;
}

// front-end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = parseFloat($('#movieName').val());
    var inputtedTime = parseFloat($('#movieTime').val());
    var inputtedAge = parseFloat($('#movieAdmission').val());
    var inputtedQuantity = parseFloat($('#movieQuantity').val());

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge, inputtedQuantity);

    alert(newTicket.totalPrice());

  });
});
