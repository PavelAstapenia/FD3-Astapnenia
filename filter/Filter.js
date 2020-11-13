let Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        text: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    },

    getInitialState: function () {
        return {
            sortSeted: false,   //initial value of checkbox
            filterText: '',     //initial value of filter
            initialText: this.props.text,
            newText: this.props.text
        };
    },

    // answerSelected: function (code) {
    //     console.log('выбран ответ с кодом ' + code);
    //     this.setState({ selectedAnswerCode: code });
    // },

    sortSeted: function (checked) {
        console.log('Filter: checkbox status - ' + checked);
        this.setState((prevState) => { return { sortSeted: prevState.sortSeted = checked } });
        console.log(this.state.sortSeted);
        console.log(checked);
        if (checked) {
            this.modifyArr();
        }
    },

    filterChanged: function (value) {
        console.log('Filter: filter text - ' + value);
        this.setState({ filterText: value });
        if (value != '') {
            this.modifyArr();
        }
    },

    modifyArr: function () {
        let arr = this.state.initialText;
        let fText = this.state.filterText;
        if (fText != '') {
            arr = arr.filter(function (fText, el) {
                return el.includes(fText);
            })
        };

        if (this.state.sortSeted == 'true') {
            arr.sort();
        };

        this.setState({ newText: arr });

        console.log(this.state.newText);

    },

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
        console.log(this.state.sortSeted);

        return React.DOM.div({ className: 'Filter' },
            React.createElement(FilterBlock, { filterText: this.state.filterText, sortSeted: this.state.sortSeted, cbSetSort: this.sortSeted, cbFilterChanged: this.filterChanged }),
            React.createElement(TextBlock, { text: this.state.newText }),
        );

    },

});