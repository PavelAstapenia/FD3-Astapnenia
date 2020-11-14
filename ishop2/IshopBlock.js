let StockBlockDiv = React.createClass({

    displayName: 'StockBlock',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                itemCode: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                URL: React.PropTypes.string.isRequired,
                stock: React.PropTypes.number.isRequired
            })
        ),
    },

    getDefaultProps: function () {
        return { question: "No data available" }
    },

    getInitialState: function () {
        return {
            items: this.props.items.slice(),
        };
    },

    deletItem: function (id) {
        let arr1 = this.state.items.filter(function (item) {
            return item.itemCode !== id;
        });
        this.setState((prevState) => { return { items: prevState.items = arr1 } });
    },

    render: function () {





        let tableHeadCode =
            React.DOM.tr({ className: 'tableHead' },
                React.DOM.th({ className: 'columnName' }, "Name"),
                React.DOM.th({ className: 'columnPrice' }, "Price"),
                React.DOM.th({ className: 'columnURL' }, "URL"),
                React.DOM.th({ className: 'columnStock' }, "Stock"),
                React.DOM.th({ className: 'columnControl' }, "Control"));

        return React.DOM.div({ className: 'StockBlock' },
            React.DOM.div({ className: 'ShopName' }, this.props.shopName),
            React.DOM.table({ className: 'Table' },
                React.DOM.thead({ className: 'Thead' }, tableHeadCode),
                React.createElement(ItemBlock, { items: this.state.items, cbDeletItem: this.deletItem })
            ),
        );
    },
});