import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './AddItem.css';

class AddItem extends React.Component {

    static propTypes = {
        cbAddItem: PropTypes.func.isRequired,
        cdCancelAdd: PropTypes.func.isRequired,
        itemCode: PropTypes.number.isRequired
    };

    state = {
        itemCode: '',
        name: '',
        price: '',
        URL: '',
        stock: '',
        nameErr: 'Please, fill the field. Value must be a string',
        priceErr: 'Please, fill the field. Value must be a number',
        URL_ERR: 'Please, fill the field. Value must be a link',
        stockErr: 'Please, fill the field. Value must be a number',
        validStatus: false, //статус валидации формы
    };

    changeName = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.name) {
            this.setState({ name: newData });
        };
        this.checkValue();
    }

    changePrice = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.price) {
            this.setState({ price: newData });
        };
        this.checkValue();
    }

    changeURL = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.URL) {
            this.setState({ URL: newData });
        };
        this.checkValue();
    }

    changeStock = (EO) => {
        let newData = EO.target.value;
        if (newData != this.state.stock) {
            this.setState({ stock: newData });
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

    addItem = () => {
        this.props.cbAddItem({
            itemCode: this.props.itemCode,
            name: this.state.name,
            price: this.state.price,
            URL: this.state.URL,
            stock: this.state.stock,
        });
    }

    cancelAdd = (EO) => {
        this.props.cdCancelAdd();
    }

    render() {
        return (
            <Fragment>
                <div><span className='addName'>{'Add new Product'}</span></div>
                <table className='tableAddItem'>
                    <tbody >
                        <tr>
                            <th><label className='labelText'>{'ItemCode:' + this.props.itemCode}</label></th>
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
                        <input className='Btn' type='button' value='Add' onClick={this.addItem} />
                        :
                        <input className='Btn' type='button' value='Add' disabled='disabled' />
                }
                <input className='Btn' type='button' value='Cancel' onClick={this.cancelAdd} />
            </Fragment >
        );
    }
}

export default AddItem;