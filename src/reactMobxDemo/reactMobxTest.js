// observable person
var person = mobx.observable({
  firstName: 'Matt',
  lastName: 'Ruby',
  age: 37
});

var main = mobxReact.observer(function(props) {

  var inputs = _.map(props.person, function(value, key) {
    return React.DOM.input({
      name: key,
      value: value,
      onChange: function(event) {
        props.person[key] = event.target.value;
      }
    });
  });

  var outputs = _.map(props.person, function(value, key) {
    return React.DOM.div(null, key + ': ' + value);
  });

  return React.DOM.div(null, inputs, outputs);
});

ReactDOM.render(React.createElement(main, {
  person: person
}), document.getElementById('reactOutput'));