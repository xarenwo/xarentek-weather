var React = require('react');

$('p')

var About = React.createClass( {
    render:function () {
        return(
            <div>
            <h3>About</h3>
                <p>Xarentek weather is a simple meteo application using NodeJS/ReactJS and Webpack</p>
            </div>
        );
    }
});


module.exports = About;