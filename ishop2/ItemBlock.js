let ItemBlock = React.createClass({

    displayName: 'ItemBlock',

    propTypes: {
        itemCode: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        URL: React.PropTypes.string.isRequired,
        stock: React.PropTypes.number.isRequired,
        cbDeletItem: React.PropTypes.func.isRequired,
        cbSelectedItem: React.PropTypes.func.isRequired,
        cssNameTr: React.PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return { question: "No data available" }
    },

    // getInitialState: function () {
    //     return {
    //         itemSelected: this.props.itemSelected,
    //     };
    // },

    // selectRow: function (EO) {
    //     console.log('data ' + EO.target.closest('tr').getAttribute('data-id'));
    //     let n = EO.target.closest('tr').getAttribute('data-id');
    //     if (n !== null) {
    //         this.setState((prevState) => { return { itemSelected: prevState.itemSelected = n } });
    //     };
    //     console.log('state select ' + this.state.itemSelected);
    // },

    selectRow: function (EO) {
        let n = EO.target.closest('tr').getAttribute('data-id');
        this.props.cbSelectedItem(n);
    },

    deletItem: function (EO) {
        EO.stopPropagation();
        let n = EO.target.closest('tr').getAttribute('data-id');
        this.props.cbDeletItem(+n);
    },

    render: function () {
        // let name = '';
        // (this.state.itemSelected == this.props.itemCode) ? name = 'tableRow_red' : name = 'tableRow';

        return React.DOM.tr({ key: this.props.itemCode, className: this.props.cssNameTr, onClick: this.selectRow, 'data-id': this.props.itemCode },
            React.DOM.th({ className: 'columnName' }, this.props.name),
            React.DOM.th({ className: 'columnPrice' }, this.props.price),
            React.DOM.th({ className: 'columnURL' },
                React.DOM.a({ className: 'URL', target: "_blank", href: this.props.URL }, this.props.URL)),
            React.DOM.th({ className: 'columnStock' }, this.props.stock),
            React.DOM.th({ className: 'columnControl' },
                React.DOM.input({ type: 'button', value: 'Delet', onClick: this.deletItem }))
        );
    },
});