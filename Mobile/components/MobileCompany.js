import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';

import MobileClient from './MobileClient';
import ClientCard from './ClientCard';
import AddClient from './AddClient';
import { clientEvents } from './events';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                surname: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                surname: PropTypes.string.isRequired,
                middle_name: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired
            })
        ),
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
        clientSelectedObj: {},  //объект выбранного клиента
        clientCardMode: 'not selected', //not selected, view, edit, add
        editingClientStatus: false, //статус редактирования клиента
        filter: 'all',
    };

    componentDidMount = () => {
        clientEvents.addListener('EClientEdit', this.editClient);
        clientEvents.addListener('EClientDelete', this.deleteClient);
        clientEvents.addListener('EEditingClient', this.editingClient);
        clientEvents.addListener('ESaveClient', this.saveClient);
        clientEvents.addListener('ECancelEditClient', this.cancelEdit);
        clientEvents.addListener('EAddClient', this.addClient);
        clientEvents.addListener('ECancelAddClient', this.cancelAdd);
    };

    componentWillUnmount = () => {
        clientEvents.removeListener('EClientEdit', this.editClient);
        clientEvents.removeListener('EClientDelete', this.deleteClient);
        clientEvents.removeListener('EEditingClient', this.editingClient);
        clientEvents.removeListener('ESaveClient', this.saveClient);
        clientEvents.removeListener('ECancelEditClient', this.cancelEdit);
        clientEvents.removeListener('EAddClient', this.addClient);
        clientEvents.removeListener('ECancelAddClient', this.cancelAdd);
    };

    setName1 = () => {
        this.setState({ name: 'Velcom' });
    };

    setName2 = () => {
        this.setState({ name: 'MTS' });
    };

    newClient = () => {
        this.setState({ clientCardMode: 'add' });
        // this.setState({ editingClientStatus: true });
    }

    setAllFilter = () => { this.setState({ filter: 'all' }); }
    setActiveFilter = () => { this.setState({ filter: 'active' }); }
    setBlockedFilter = () => { this.setState({ filter: 'blocked' }); }

    saveClient = (newDate) => {
        this.setState({ clientCardMode: 'not selected' });
        this.setState({ editingClientStatus: false });
        let renderStatus = false;

        let newClients = [...this.state.clients]; // копия самого массива клиентов
        newClients.forEach((c, i) => {
            if (c.id == newDate.id) {
                let newClient = { ...c }; // копия хэша редактируемого клиента
                for (let key in newClient) { //сравниваем все поля со старыми значениями
                    if (newClient[key] != newDate[key]) {
                        newClient[key] = newDate[key];
                        renderStatus = true;
                    }
                }
                newClients[i] = newClient;
            }
        });

        if (renderStatus) { this.setState({ clients: newClients }) };
    }

    cancelEdit = () => {
        this.setState({ clientCardMode: 'not selected' });
        this.setState({ editingClientStatus: false });
        // this.setState({ itemSelected: 0 });
    }

    addClient = (newData) => {

        this.setState({ clientCardMode: 'not selected' });
        this.setState({ editingClientStatus: false });
        let newClients = [...this.state.clients]; // копия самого массива клиентов
        newClients.push(newData);
        this.setState({ clients: newClients });
    }

    cancelAdd = () => {
        this.setState({ clientCardMode: 'not selected' });
        this.setState({ editingClientStatus: false });
    }

    deleteClient = (id) => {
        let deletedClient = this.state.clients.find(item => item.id == id);
        let deletedName = deletedClient.surname + ' ' + deletedClient.name + ' ' + deletedClient.middle_name;

        if (confirm('Вы действительно хотите удалить ' + deletedName + '?') == true) {
            let arr1 = this.state.clients.filter(function (item) {
                return item.id !== id;
            });
            this.setState({ clients: arr1 });
        };
    }

    editingClient = (n) => {
        // this.setState({ editingClientStatus: n });
    }

    editClient = (id) => {
        let clientObj = this.state.clients.filter(elem => {
            return elem.id == id;
        });

        this.setState({ clientSelectedObj: clientObj[0] });
        this.setState({ clientCardMode: 'edit' });
    }

    render() {

        console.log("MobileCompany render");

        let tableHeadCode =
            <tr className='tableHead'>
                <th className='columnHead'>Фамилия</th>
                <th className='columnHead'>Имя</th>
                <th className='ccolumnHead'>Отчество</th>
                <th className='columnHead'>Баланс</th>
                <th className='columnHead'>Статус</th>
                <th className='columnHead'>Редактировать</th>
                <th className='columnHead'>Удалить</th>
            </tr>;

        let tableBodyCode = '';
        switch (this.state.filter) {
            case 'active':
                tableBodyCode = this.state.clients.map(client => {
                    if (client.balance > 0) { return <MobileClient key={client.id} info={client} /> }
                });
                break;
            case 'blocked':
                tableBodyCode = this.state.clients.map(client => {
                    if (client.balance <= 0) { return <MobileClient key={client.id} info={client} /> }
                });
                break;
            default:
                tableBodyCode = this.state.clients.map(client =>
                    <MobileClient key={client.id} info={client} />
                );
        }

        let clientCardCode = '';

        if (this.state.clientCardMode == 'edit') {

            clientCardCode = <ClientCard
                key={this.state.clientSelectedObj.id}
                info={this.state.clientSelectedObj}
            />;
        }

        return (
            <div className='MobileCompany' >
                <input type="button" value="Velcom" onClick={this.setName1} />
                <input type="button" value="MTS" onClick={this.setName2} />
                <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
                <input type="button" value="Все" onClick={this.setAllFilter} />
                <input type="button" value="Активные" onClick={this.setActiveFilter} />
                <input type="button" value="Заблокированные" onClick={this.setBlockedFilter} />
                <br></br>
                <br></br>
                <table className='Table'>
                    <thead className='Thead'>{tableHeadCode}</thead>
                    <tbody className='TItems'>{tableBodyCode}</tbody>
                </table>
                <input type='button' value='Добавить клиента' onClick={this.newClient} />

                {
                    (this.state.clientCardMode == 'edit') &&
                    <div className='ClientCard'>{clientCardCode}</div>
                }

                {
                    (this.state.clientCardMode == 'add') &&
                    < AddClient />
                }

            </div>
        );
    }
}

export default MobileCompany;

