import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import { clientEvents } from './events';

class MobileClient extends React.PureComponent {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            surname: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            middle_name: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
        // editingClientStatus: PropTypes.bool.isRequired,
    };

    state = {
        info: this.props.info,
    };

    editClient = (EO) => {
        EO.stopPropagation();
        clientEvents.emit('EClientEdit', this.props.info.id);
    }

    deletClient = (EO) => {
        EO.stopPropagation();
        clientEvents.emit('EClientDelete', this.props.info.id);
    }

    render() {
        console.log("MobileClient id=" + this.state.info.id + " render");

        return (
            <tr>
                <th>{this.props.info.surname} </th>
                <th>{this.props.info.name} </th>
                <th>{this.props.info.middle_name} </th>
                <th>{this.props.info.balance} </th>
                {
                    (this.props.info.balance > 0)
                        ?
                        <th style={{ background: "green" }}>{'active'} </th>
                        :
                        <th style={{ background: "red" }}> {'blocked'} </th>
                }
                {
                    (this.props.editingClientStatus)
                        ?
                        <th><input type='button' value='Редактировать' disabled="disabled" /></th>
                        :
                        <th><input type='button' value='Редактировать' onClick={this.editClient} /></th>
                }
                {
                    (this.props.editingClientStatus)
                        ?
                        <th> <input type='button' value='Удалить' disabled="disabled" /></th>
                        :
                        <th><input type='button' value='Удалить' onClick={this.deletClient} /></th>
                }

            </tr >
        );
    }
}

export default MobileClient;