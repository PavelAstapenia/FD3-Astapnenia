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

    // getInitialState: function () {
    //     return {
    //         sortSeted: false,   //initial value of checkbox
    //         filterText: '',     //initial value of filter
    //         newText: ''
    //     };
    // },



    render: function () {
        let tableHeadCode =
            React.DOM.tr({ className: 'tableHead' },
                React.DOM.th({ className: 'columnName' }, "Name"),
                React.DOM.th({ className: 'columnPrice' }, "Price"),
                React.DOM.th({ className: 'columnURL' }, "URL"),
                React.DOM.th({ className: 'columnStock' }, "Stock"),
                React.DOM.th({ className: 'columnControl' }, "Control"));

        // let itemsCode = this.props.items.reduce((prevVal, current) => {

        //     prevVal.push(
        //         React.DOM.tr({ key: current.itemCode, className: 'tableRow' },
        //             React.DOM.th({ className: 'columnName' }, current.name),
        //             React.DOM.th({ className: 'columnPrice' }, current.price),
        //             React.DOM.th({ className: 'columnPhoto' },
        //                 React.DOM.a({ className: 'photoURL', target: "_blank", href: current.photoURL }, "Photo")),
        //             React.DOM.th({ className: 'columnStock' }, current.stock))
        //     );
        //     return prevVal;
        // }, []);

        return React.DOM.div({ className: 'StockBlock' },
            React.DOM.div({ className: 'ShopName' }, this.props.shopName),
            React.DOM.table({ className: 'Table' },
                React.DOM.thead({ className: 'Thead' }, tableHeadCode),
                React.createElement(ItemBlock, { items: this.props.items })
                // React.DOM.tbody({ className: 'TItems' }, itemsCode)
            ),
        );
    },
});