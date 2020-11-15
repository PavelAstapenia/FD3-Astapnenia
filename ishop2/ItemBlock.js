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
        cbDeletItem: React.PropTypes.func.isRequired,
    },

    getDefaultProps: function () {
        return { question: "No data available" }
    },

    getInitialState: function () {
        return {
            itemSelected: 0,
        };
    },

    selectRow: function (EO) {
        console.log('data ' + EO.target.getAttribute('data-id'));
        let n = EO.target.getAttribute('data-id');
        if (n !== null) {
            this.setState((prevState) => { return { itemSelected: prevState.itemSelected = n } });
        };
        console.log('state' + this.state.itemSelected);
    },

    deletItem: function (EO) {
        console.log('data-id-del ' + EO.target.getAttribute('data-id-del'));
        let n = EO.target.getAttribute('data-id-del');
        this.props.cbDeletItem(+n);

    },

    render: function () {

        let itemsCode = this.props.items.reduce((prevVal, current) => {
            let name = '';
            (this.state.itemSelected == current.itemCode) ? name = 'tableRow_red' : name = 'tableRow';

            prevVal.push(
                React.DOM.tr({ key: current.itemCode, className: name, onClick: this.selectRow, 'data-id': current.itemCode },
                    React.DOM.th({ className: 'columnName', 'data-id': current.itemCode }, current.name),
                    React.DOM.th({ className: 'columnPrice', 'data-id': current.itemCode }, current.price),
                    React.DOM.th({ className: 'columnURL', 'data-id': current.itemCode },
                        React.DOM.a({ className: 'URL', target: "_blank", href: current.URL, 'data-id': current.itemCode }, current.URL)),
                    React.DOM.th({ className: 'columnStock', 'data-id': current.itemCode }, current.stock),
                    React.DOM.th({ className: 'columnControl' },
                        React.DOM.input({ type: 'button', value: 'Delet', onClick: this.deletItem, 'data-id-del': current.itemCode }))
                )
            );
            return prevVal;
        }, []);

        return React.DOM.tbody({ className: 'TItems' }, itemsCode);
    },
});