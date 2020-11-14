let Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        text: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    },

    getInitialState: function () {
        return {
            sortSeted: false,   //initial value of checkbox
            filterText: '',     //initial value of filter
            newText: ''
        };
    },

    sortSeted: function (checked) {
        this.setState((prevState) => { return { sortSeted: prevState.sortSeted = checked } });
    },

    filterChanged: function (value) {
        this.setState({ filterText: value });
    },

    funcReset: function () {
        this.setState({ filterText: '' });
        this.setState({ sortSeted: false });
    },

    modifyArr: function () {

        let fText = this.state.filterText;
        if (fText != '') {
            let arr1 = this.state.newText.filter(function (item) {
                return item.includes(fText);
            });
            this.state.newText = arr1;
            console.log('filter ' + this.state.newText); // проверяем как отфильтрован массив
        };

        if (this.state.sortSeted) {
            this.state.newText.sort();
            console.log('sort ' + this.state.newText);  // проверяем как отсортирован массив
        };
    },

    render: function () {

        this.state.newText = this.props.text.map(function (item) {
            return item;
        });

        if (this.state.sortSeted || this.state.filterText) {
            this.modifyArr();
        }
        console.log('render ' + this.state.newText);  // проверяем модифицированный массив в state

        return React.DOM.div({ className: 'Filter' },
            React.createElement(FilterBlock, {
                filterText: this.state.filterText, sortSeted: this.state.sortSeted,
                cbSetSort: this.sortSeted, cbFilterChanged: this.filterChanged, cbFuncReset: this.funcReset
            }),
            React.createElement(TextBlock, { text: this.state.newText }),
        );

    },

});