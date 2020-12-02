import React from 'react';
import PropTypes from 'prop-types';

import './ItemBlock.css';

class ItemBlock extends React.Component {

    static propTypes = {
        itemCode: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        URL: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        cbEditItem: PropTypes.func.isRequired,
        cbDeletItem: PropTypes.func.isRequired,
        cbSelectedItem: PropTypes.func.isRequired,
        cssNameTr: PropTypes.string.isRequired,
        editingCardStatus: PropTypes.bool.isRequired
    };

    selectRow = (EO) => {
        if (!this.props.editingCardStatus) this.props.cbSelectedItem(this.props.itemCode);
    }

    editItem = (EO) => {
        EO.stopPropagation();
        this.props.cbEditItem(this.props.itemCode);
        console.log('edit but# ' + this.props.itemCode);
    }

    deletItem = (EO) => {
        EO.stopPropagation();
        this.props.cbDeletItem(this.props.itemCode);
    }

    render() {

        let arrBtnsActive = [];
        arrBtnsActive.push(<input key={this.props.itemCode} className='Btn' type='button' value='Edit' onClick={this.editItem} />);
        arrBtnsActive.push(<input key={this.props.itemCode + 100} className='Btn' type='button' value='Delet' onClick={this.deletItem} />);

        let arrBtnsDisabled = [];
        arrBtnsDisabled.push(<input key={this.props.itemCode} className='Btn' type='button' value='Edit' disabled="disabled" onClick={this.editItem} />);
        arrBtnsDisabled.push(<input key={this.props.itemCode + 100} className='Btn' type='button' value='Delet' disabled="disabled" onClick={this.deletItem} />);

        return (
            <tr key={this.props.itemCode} className={this.props.cssNameTr} onClick={this.selectRow} >
                <th className='columnName'>{this.props.name} </th>
                <th className='columnPrice'>{this.props.price} </th>
                <th className='columnURL'>
                    <a className='URL' target="_blank" href={this.props.URL} >
                        {this.props.URL}
                    </a>
                </th>
                <th className='columnStock'>{this.props.stock} </th>
                <th className='columnControl'>
                    {
                        (this.props.editingCardStatus)
                            ?
                            arrBtnsDisabled
                            :
                            arrBtnsActive
                    }
                </th>
            </tr>
        );
    }
}

export default ItemBlock;