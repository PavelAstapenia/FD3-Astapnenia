let FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        sortSeted: React.PropTypes.bool.isRequired,
        filterText: React.PropTypes.string.isRequired,
        cbSetSort: React.PropTypes.func.isRequired,
        cbFilterChanged: React.PropTypes.func.isRequired,
        cbFuncReset: React.PropTypes.func.isRequired,
    },

    setSort: function (EO) {
        this.props.cbSetSort(EO.target.checked);
    },

    filterChanged: function (EO) {
        this.props.cbFilterChanged(EO.target.value);
    },

    funcReset: function (EO) {
        this.props.cbFuncReset();
    },

    render: function () {
        return React.DOM.div(null,
            React.DOM.label({ className: 'FilterBlock' },
                React.DOM.input({ type: 'checkbox', name: 'textsort', onChange: this.setSort, checked: this.props.sortSeted }),
                React.DOM.input({ type: 'text', name: 'textfilter', className: 'TextFilter', onChange: this.filterChanged, value: this.props.filterText }),
                React.DOM.input({ type: 'button', value: 'Сброс', onClick: this.funcReset }),
            )
        );

    },

});