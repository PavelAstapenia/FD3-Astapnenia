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
            itemSelected: 0
        };
    },

    deletItem: function (id) {
        let deletedItem = this.state.items.find(item => item.itemCode == id).name;

        if (confirm('Вы действительно хотите удалить ' + deletedItem + '?') != true) {
            id = 0;  //если отмена, то код товара меняем на 0
        };

        let arr1 = this.state.items.filter(function (item) {
            return item.itemCode !== id;
        });
        this.setState((prevState) => { return { items: prevState.items = arr1 } });
    },

    selectedItem: function (n) {
        this.setState((prevState) => { return { itemSelected: prevState.itemSelected = n } });
    },

    render: function () {
        let tableHeadCode =
            React.DOM.tr({ className: 'tableHead' },
                React.DOM.th({ className: 'columnName' }, "Name"),
                React.DOM.th({ className: 'columnPrice' }, "Price"),
                React.DOM.th({ className: 'columnURL' }, "URL"),
                React.DOM.th({ className: 'columnStock' }, "Stock"),
                React.DOM.th({ className: 'columnControl' }, "Control"));

        let tableBodyCode = this.state.items.reduce((prevVal, current) => {
            let cssNameTr = '';
            (this.state.itemSelected == current.itemCode) ? cssNameTr = 'tableRow_red' : cssNameTr = 'tableRow';
            prevVal.push(
                React.createElement(ItemBlock, {
                    itemCode: current.itemCode,
                    name: current.name,
                    price: current.price,
                    URL: current.URL,
                    stock: current.stock,
                    cbDeletItem: this.deletItem,
                    cbSelectedItem: this.selectedItem,
                    itemSelected: this.state.itemSelected,
                    cssNameTr: cssNameTr
                })
            );
            return prevVal;
        }, []);


        return React.DOM.div({ className: 'StockBlock' },
            React.DOM.div({ className: 'ShopName' }, this.props.shopName),
            React.DOM.table({ className: 'Table' },
                React.DOM.thead({ className: 'Thead' }, tableHeadCode),
                React.DOM.tbody({ className: 'TItems' }, tableBodyCode)
            ),
        );
    },
});
