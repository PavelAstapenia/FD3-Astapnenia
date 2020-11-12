let TextBlock = React.createClass({

    displayName: 'TextBlock',

    propTypes: {
        text: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                text: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        ),
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

        return React.DOM.div({ className: 'TextBlock' },
            React.DOM.textarea({ className: 'Text' }, this.props.text.text),
        );

    },

});