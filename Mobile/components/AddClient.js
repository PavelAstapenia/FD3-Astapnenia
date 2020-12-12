import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './AddClient.css';
import { clientEvents } from './events';

class AddClient extends React.Component {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            surname: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            middle_name: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    state = {
        client: {
            id: '',
            surname: '',
            name: '',
            middle_name: '',
            balance: '',
        },
        idErr: 'Please, fill the field. Value must be a number',
        surnameErr: 'Please, fill the field. Value must be a string',
        nameErr: 'Please, fill the field. Value must be a string',
        middle_nameErr: 'Please, fill the field. Value must be a string',
        balanceErr: 'Please, fill the field. Value must be a number',
        validStatus: false, //статус валидации формы
        // editingCardStatus: this.props.editingCardStatus, //статус редактирования клиента
    };

    // *******ID**********
    newTextID = null;
    setNewIDRef = (ref) => {
        this.newTextID = ref;
    }
    setNewTextID = () => {
        if (this.newTextID) {
            let newData = this.newTextID.value;
            if (newData != this.state.client.id) {
                let newArr = { ...this.state.client, id: +newData };
                this.setState({ client: newArr });
                this.setState({ editingCardStatus: true });
                // clientEvents.emit('EEditingClient', true);
            };
            this.checkValue();
        }
    }
    // *******Surname**********
    newTextSurname = null;
    setNewSurnameRef = (ref) => {
        this.newTextSurname = ref;
    }
    setNewTextSurname = () => {
        if (this.newTextSurname) {
            let newData = this.newTextSurname.value;
            if (newData != this.state.client.surname) {
                let newArr = { ...this.state.client, surname: newData };
                this.setState({ client: newArr });
                this.setState({ editingCardStatus: true });
                // clientEvents.emit('EEditingClient', true);
            };
            this.checkValue();
        }
    }
    // *******Name**********
    newTextName = null;
    setNewNameRef = (ref) => {
        this.newTextName = ref;
    }
    setNewTextName = () => {
        if (this.newTextName) {
            let newData = this.newTextName.value;
            if (newData != this.state.client.name) {
                let newArr = { ...this.state.client, name: newData };
                this.setState({ client: newArr });
                this.setState({ editingCardStatus: true });
                // clientEvents.emit('EEditingClient', true);
            };
            this.checkValue();
        }
    }
    // *******Middle_name**********
    newTextMiddle_name = null;
    setNewMiddle_nameRef = (ref) => {
        this.newTextMiddle_name = ref;
    }
    setNewTextMiddle_name = () => {
        if (this.newTextMiddle_name) {
            let newData = this.newTextMiddle_name.value;
            if (newData != this.state.client.middle_name) {
                let newArr = { ...this.state.client, middle_name: newData };
                this.setState({ client: newArr });
                this.setState({ editingCardStatus: true });
                // clientEvents.emit('EEditingClient', true);
            };
            this.checkValue();
        }
    }
    // *******Balance**********
    newTextBalance = null;
    setNewBalanceRef = (ref) => {
        this.newTextBalance = ref;
    }
    setNewTextBalance = () => {
        if (this.newTextBalance) {
            let newData = this.newTextBalance.value;
            if (newData != this.state.client.balance) {
                let newArr = { ...this.state.client, balance: +newData };
                this.setState({ client: newArr });
                this.setState({ editingCardStatus: true });
                // clientEvents.emit('EEditingClient', true);
            };
            this.checkValue();
        }
    }

    checkValue = () => {
        let validation = true;

        if (this.newTextID.value != '' && !Number.isNaN(Number(this.newTextID.value))) {
            this.setState({ idErr: '' });
        } else {
            this.setState({ idErr: 'Please, fill the field. Value must be a number' });
            validation = false;
        }

        if (this.newTextSurname.value != '') {
            this.setState({ surnameErr: '' });
        } else {
            this.setState({ surnameErr: 'Please, fill the field. Value must be a string' });
            validation = false;
        }

        if (this.newTextName.value != '') {
            this.setState({ nameErr: '' });
        } else {
            this.setState({ nameErr: 'Please, fill the field. Value must be a string' });
            validation = false;
        }

        if (this.newTextMiddle_name.value != '') {
            this.setState({ middle_nameErr: '' });
        } else {
            this.setState({ middle_nameErr: 'Please, fill the field. Value must be a string' });
            validation = false;
        }

        if (this.newTextBalance.value != '' && !Number.isNaN(Number(this.newTextBalance.value))) {
            this.setState({ balanceErr: '' });
        } else {
            this.setState({ balanceErr: 'Please, fill the field. Value must be a number' });
            validation = false;
        }

        this.setState({ validStatus: validation });
    }

    addClient = () => {
        clientEvents.emit('EAddClient', this.state.client);
    }

    cancelAdd = () => {
        clientEvents.emit('ECancelAddClient');
    }

    render() {
        console.log("ClientAddCard render");

        return (
            <div>
                <div><span className='editName'>{'Введите информацию о клиенте'}</span></div>
                <table className='tableEdit'>
                    <tbody >
                        <tr>
                            <th><label className='labelText'>{'ID'}</label></th>
                            <th><input defaultValue={this.state.client.id} ref={this.setNewIDRef} onBlur={this.setNewTextID}></input></th>
                            <th><span className='spanErr' id='idErr' >{this.state.idErr}</span></th>
                        </tr>
                        <tr>
                            <th><label className='labelText'>{'Фамилия'}</label></th>
                            <th><input defaultValue={this.state.client.surname} ref={this.setNewSurnameRef} onBlur={this.setNewTextSurname}></input></th>
                            <th><span className='spanErr' id='nameErr' >{this.state.surnameErr}</span></th>
                        </tr>
                        <tr>
                            <th><label className='labelText'>{'Имя'}</label></th>
                            <th><input defaultValue={this.state.client.name} ref={this.setNewNameRef} onBlur={this.setNewTextName}></input></th>
                            <th><span className='spanErr' id='priceErr' >{this.state.nameErr}</span></th>
                        </tr>
                        <tr>
                            <th><label className='labelText'>{'Отчество'}</label></th>
                            <th><input defaultValue={this.state.client.middle_name} ref={this.setNewMiddle_nameRef} onBlur={this.setNewTextMiddle_name}></input></th>
                            <th><span className='spanErr' id='urlErr' >{this.state.middle_nameErr}</span></th>
                        </tr>
                        <tr>
                            <th><label className='labelText'>{'Баланс'}</label></th>
                            <th><input defaultValue={this.state.client.balance} ref={this.setNewBalanceRef} onBlur={this.setNewTextBalance}></input></th>
                            <th><span className='spanErr' id='stockErr'>{this.state.balanceErr}</span></th>
                        </tr>
                    </tbody>
                </table>
                {
                    (this.state.validStatus == true)
                        ?
                        <input className='Btn' type='button' value='Добавить' onClick={this.addClient} />
                        :
                        <input className='Btn' type='button' value='Добавить' disabled='disabled' />
                }
                <input className='Btn' type='button' value='Отмена' onClick={this.cancelAdd} />
            </div >
        );
    }
}

export default AddClient;