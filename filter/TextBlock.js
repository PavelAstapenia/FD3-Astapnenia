let TextBlock = React.createClass({

    displayName: 'TextBlock',

    propTypes: {
        text: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    },

    getInitialState: function () {
        let text1 = '';
        this.props.text.forEach(element => {
            text1 = text1 + element + '\n';
        });
        return {
            text: text1
        };
    },

    render: function () {

        return React.DOM.div({ className: 'TextBlock' },
            React.DOM.textarea({ className: 'Text', value: this.state.text }),
        );

    },

});