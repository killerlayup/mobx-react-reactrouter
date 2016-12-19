// observable person
var person = mobx.observable({
  firstName: '',
  lastName: '',
  age: 0
});

// observe is a lower level reaction
mobx.observe(person, (change) => {
  var newValue = change.object[change.name];
  $('#' + change.name + 'Input').val(newValue);
  $('#' + change.name + 'Output').text(newValue);
});

// a transaction will wait to fire until all
// the changes have completed. 
mobx.transaction(function() {
  person.firstName = 'Matt';
  person.lastName = 'Ruby';
  person.age = 37;
});

// watch all the input for changes and update the person
// object accordingly.
$('input').on('keyup', function(event) {
  person[event.target.name] = $(this).val();
});