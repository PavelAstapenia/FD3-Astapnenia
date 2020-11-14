let TextBlock = React.createClass({

    displayName: 'TextBlock',

    propTypes: {
        text: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    },

    render: function () {

        let text1 = '';
        this.props.text.forEach(element => {
            text1 = text1 + element + '\n';
        });

        return React.DOM.div({ className: 'TextBlock' },
            React.DOM.textarea({ className: 'Text', value: text1 }),
        );

    },

});