import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './ItemCard.css';

class ItemCard extends React.Component {

    static propTypes = {
        // item: PropTypes.shape({
        //     // itemCode: PropTypes.number.isRequired,
        //     name: PropTypes.string.isRequired,
        //     price: PropTypes.number.isRequired,
        //     URL: PropTypes.string.isRequired,
        //     stock: PropTypes.number.isRequired
        // }),
        cbEditingCard: PropTypes.func.isRequired,
        cbSaveItem: PropTypes.func.isRequired,
        cdCancelEdit: PropTypes.func.isRequired,
        itemCardMode: PropTypes.string.isRequired,
        editingCardStatus: PropTypes.bool.isRequired
    };

    state = {
        name: this.props.item.name,
        price: this.props.item.price,
        URL: this.props.item.URL,
        stock: this.props.item.stock,
        editedItem: {},
        nameErr: '',
        priceErr: '',
        URL_ERR: '',
        stockErr: '',
        validStatus: true, //статус валидации формы
        editingCardStatus: this.props.editingCardStatus, //статус редактирования товара
        itemSelectedObj: {},  //объект выбранного товара
    };


    changeName = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.name) {
            this.setState({ name: newData });
            this.setState({ editingCardStatus: true });
            this.props.cbEditingCard(true);
        };
        this.checkValue();
    }

    changePrice = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.price) {
            this.setState({ price: newData });
            this.setState({ editingCardStatus: true });
            this.props.cbEditingCard(true);
        };
        this.checkValue();
    }

    changeURL = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.URL) {
            this.setState({ URL: newData });
            this.setState({ editingCardStatus: true });
            this.props.cbEditingCard(true);
        };
        this.checkValue();
    }

    changeStock = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.stock) {
            this.setState({ stock: newData });
            this.setState({ editingCardStatus: true });
            this.props.cbEditingCard(true);
        };
        this.checkValue();
    }

    checkValue = () => {
        let validation = true;

        if (this.state.name != '') {
            this.setState({ nameErr: '' });
        } else {
            this.setState({ nameErr: 'Please, fill the field. Value must be a string' });
            validation = false;
        }

        if (this.state.price != '') {
            this.setState({ priceErr: '' });
        } else {
            this.setState({ priceErr: 'Please, fill the field. Value must be a number' });
            validation = false;
        }

        if (this.state.URL != '') {
            this.setState({ URL_ERR: '' });
        } else {
            this.setState({ URL_ERR: 'Please, fill the field. Value must be a link' });
            validation = false;
        }

        if (this.state.stock != '') {
            this.setState({ stockErr: '' });
        } else {
            this.setState({ stockErr: 'Please, fill the field. Value must be a number' });
            validation = false;
        }

        this.setState({ validStatus: validation });
    }

    saveItem = () => {
        this.props.cbSaveItem({
            itemCode: this.props.item.itemCode,
            name: this.state.name,
            price: this.state.price,
            URL: this.state.URL,
            stock: this.state.stock,
        });
    }

    addItem = (EO) => {
        this.props.cbAddItem(this.props.item.itemCode);
    }

    cancelEdit = () => {
        this.props.cdCancelEdit();
    }

    cancelAdd = (EO) => {
        this.props.cbAddItem(this.props.item.itemCode);
    }

    render() {
        switch (this.props.itemCardMode) {
            case 'view':
                return (
                    <div>
                        <span className='ItemName'>{this.props.item.name}</span>
                        <div className='ItemPrice' >{'Price: ' + this.props.item.price}</div>
                        <span className='ItemStock'>{'Stock: ' + this.props.item.stock}</span>
                    </div>
                );
                break;

            case 'edit':
                return (
                    <Fragment>
                        <div><span className='editName'>{'Edit existing Product'}</span></div>
                        <table className='tableEdit'>
                            <tbody >
                                <tr>
                                    <th><label className='labelText'>{'ItemCode:' + this.props.item.itemCode}</label></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th><label className='labelText'>{'Name'}</label></th>
                                    <th><input value={this.state.name} onChange={this.changeName} onBlur={this.checkValue}></input></th>
                                    <th><span className='spanErr' id='nameErr' >{this.state.nameErr}</span></th>
                                </tr>
                                <tr>
                                    <th><label className='labelText'>{'Price'}</label></th>
                                    <th><input value={this.state.price} onChange={this.changePrice} onBlur={this.checkValue}></input></th>
                                    <th><span className='spanErr' id='priceErr' >{this.state.priceErr}</span></th>
                                </tr>
                                <tr>
                                    <th><label className='labelText'>{'URL'}</label></th>
                                    <th><input value={this.state.URL} onChange={this.changeURL} onBlur={this.checkValue}></input></th>
                                    <th><span className='spanErr' id='urlErr' >{this.state.URL_ERR}</span></th>
                                </tr>
                                <tr>
                                    <th><label className='labelText'>{'Stock'}</label></th>
                                    <th><input value={this.state.stock} onChange={this.changeStock} onBlur={this.checkValue}></input></th>
                                    <th><span className='spanErr' id='stockErr'>{this.state.stockErr}</span></th>
                                </tr>
                            </tbody>
                        </table>
                        {
                            (this.state.validStatus == true)
                                ?
                                <input className='Btn' type='button' value='Save' onClick={this.saveItem} />
                                :
                                <input className='Btn' type='button' value='Save' disabled='disabled' />
                        }
                        <input className='Btn' type='button' value='Cancel' onClick={this.cancelEdit} />
                    </Fragment >
                );
                break;

        }
    }
}

export default ItemCard;