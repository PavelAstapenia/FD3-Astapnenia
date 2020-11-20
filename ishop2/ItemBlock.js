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

    selectRow: function (EO) {
        this.props.cbSelectedItem(this.props.itemCode);
    },

    deletItem: function (EO) {
        EO.stopPropagation();
        this.props.cbDeletItem(this.props.itemCode);
    },

    render: function () {

        return React.DOM.tr({ className: this.props.cssNameTr, onClick: this.selectRow, 'data-id': this.props.itemCode },
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