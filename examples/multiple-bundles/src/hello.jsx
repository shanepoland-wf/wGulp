var React = require('react');

var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

exports.Hello = Hello;
