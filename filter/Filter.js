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
        this.setState((prevState) => { return { filterText: prevState.filterText = value } });
        // this.setState({ filterText: value });
    },

    funcReset: function () {
        this.setState({ filterText: '' });
        this.setState({ sortSeted: false });
    },

    // modifyArr: function () {

    //     let fText = this.state.filterText;
    //     if (fText != '') {
    //         let arr1 = this.state.newText.filter(function (item) {
    //             return item.includes(fText);
    //         });
    //         this.state.newText = arr1;
    //         console.log('filter ' + this.state.newText); // проверяем как отфильтрован массив
    //     };

    //     if (this.state.sortSeted) {
    //         this.state.newText.sort();
    //         console.log('sort ' + this.state.newText);  // проверяем как отсортирован массив
    //     };
    // },

    render: function () {

        let arr = this.props.text.map(function (item) {
            return item;
        });

        let f = this.state.filterText;
        if (f != '') {
            let arr1 = arr.filter(function (item) {
                return item.includes(f);
            });
            arr = arr1;
            console.log('filter ' + arr); // проверяем как отфильтрован массив
        };

        if (this.state.sortSeted) {
            arr.sort();
            console.log('sort ' + arr);  // проверяем как отсортирован массив
        };

        console.log('render ' + arr);  // проверяем модифицированный массив

        return React.DOM.div({ className: 'Filter' },
            React.createElement(FilterBlock, {
                filterText: this.state.filterText, sortSeted: this.state.sortSeted,
                cbSetSort: this.sortSeted, cbFilterChanged: this.filterChanged, cbFuncReset: this.funcReset
            }),
            React.createElement(TextBlock, { text: arr }),
        );

    },

});