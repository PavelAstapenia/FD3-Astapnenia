let ItemBlock = React.createClass({

    displayName: 'ItemBlock',

    propTypes: {
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
            itemSelected: 2,
        };
    },

    selectRow: function (EO) {
        console.log(EO.target.getAttribute('dataId'));
    },


    render: function () {

        let itemsCode = this.props.items.reduce((prevVal, current) => {
            let name = '';
            (this.state.itemSelected == current.itemCode) ? name = 'tableRow_red' : name = 'tableRow';

            prevVal.push(
                React.DOM.tr({ key: current.itemCode, className: name, onClick: this.selectRow, dataId: current.itemCode },
                    React.DOM.th({ className: 'columnName' }, current.name),
                    React.DOM.th({ className: 'columnPrice' }, current.price),
                    React.DOM.th({ className: 'columnURL' },
                        React.DOM.a({ className: 'URL', target: "_blank", href: current.URL }, current.URL)),
                    React.DOM.th({ className: 'columnStock' }, current.stock),
                    React.DOM.th({ className: 'columnControl' },
                        React.DOM.input({ type: 'button', value: 'Delet', onClick: this.deletItem }))
                )
            );
            return prevVal;
        }, []);

        return React.DOM.tbody({ className: 'TItems' }, itemsCode);
    },
});