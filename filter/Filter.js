let Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        text: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    },

    // getInitialState: function () {
    //     return {
    //         selectedAnswerCode: null,
    //         freeanswertext: this.props.deffreeanswertext,
    //     };
    // },

    // answerSelected: function (code) {
    //     console.log('выбран ответ с кодом ' + code);
    //     this.setState({ selectedAnswerCode: code });
    // },

    // freeAnswerTextChanged: function (fat) {
    //     console.log('VotesBlock: текст свободного ответа изменён - ' + fat);
    //     this.setState({ freeanswertext: fat });
    // },

    render: function () {

        // var answersCode = this.props.answers.map(v =>
        //     React.createElement(VotesAnswer, {
        //         key: v.code,
        //         text: v.text, count: v.count, code: v.code,
        //         freeanswer: v.freeanswer, freeanswertext: this.state.freeanswertext,
        //         cbSelected: this.answerSelected,
        //         cbFreeAnswerTextChanged: this.freeAnswerTextChanged,
        //         workMode: this.props.workMode,
        //     })
        // );

        return React.DOM.div({ className: 'Filter' },
            React.createElement(FilterBlock),
            React.createElement(TextBlock, { text: this.props.text }),
        );

    },

});