let StockBlockDiv = React.createClass({

    displayName: 'StockBlock',

    getDefaultProps: function () {
        return { question: "No data available" }
    },

    render: function () {
        let tableHeadCode =
            React.DOM.tr({ className: 'tableHead' },
                React.DOM.th({ className: 'columnName' }, "Name"),
                React.DOM.th({ className: 'columnPrice' }, "Price"),
                React.DOM.th({ className: 'columnPhoto' }, "Photo"),
                React.DOM.th({ className: 'columnStock' }, "Stock"));

        let itemsCode = this.props.items.reduce((prevVal, current) => {

            prevVal.push(
                React.DOM.tr({ key: current.itemCode, className: 'tableRow' },
                    React.DOM.th({ className: 'columnName' }, current.name),
                    React.DOM.th({ className: 'columnPrice' }, current.price),
                    React.DOM.th({ className: 'columnPhoto' },
                        React.DOM.a({ className: 'photoURL', target: "_blank", href: current.photoURL }, "Photo")),
                    React.DOM.th({ className: 'columnStock' }, current.stock))
            );
            return prevVal;
        }, []);

        return React.DOM.div({ className: 'StockBlock' },
            React.DOM.div({ className: 'ShopName' }, this.props.shopName),
            React.DOM.table({ className: 'Table' },
                React.DOM.thead({ className: 'Thead' }, tableHeadCode),
                React.DOM.tbody({ className: 'TItems' }, itemsCode)
            ),
        );
    },
});