var app = app || {};

/* TODO: SOURCES */

(function() {
    'use strict';

    app.SourceComponent = React.createClass({
        displayName: 'SourceComponent',
        render: function() {
            return (
                React.createElement('rect', {
                    className: 'block',
                    x: '0',
                    y: '0',
                    width: '10',
                    height: '10'
                })
            )
        }
    })
})();
