import React from 'react';
import PropTypes from 'prop-types';

import './IshopBlock.css';

import ItemBlock from './ItemBlock';
import ItemCard from './ItemCard';
import AddItem from './AddItem';

class IshopBlock extends React.Component {

    static propTypes = {
        shopName: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                itemCode: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                URL: PropTypes.string.isRequired,
                stock: PropTypes.number.isRequired
            })
        ),
    };

    state = {
        items: this.props.items.slice(),
        itemSelected: 0, //код выбранного товара
        itemSelectedObj: {},  //объект выбранного товара
        itemCardMode: 'not selected', //not selected, view, edit, add
        editingCardStatus: false, //статус редактирования товара
    };

    newProduct = () => {
        this.setState({ itemCardMode: 'add' });
        this.setState({ editingCardStatus: true });
        this.setState({ itemSelected: 0 });
    }


    saveItem = (newItem) => {
        this.setState({ itemCardMode: 'not selected' });
        this.setState({ editingCardStatus: false });
        this.setState({ itemSelected: 0 });
        let arr = [];
        arr = this.state.items.map(elem => (elem.itemCode == newItem.itemCode) ? newItem : elem);
        this.setState({ items: arr });
    }

    cancelEdit = () => {
        this.setState({ itemCardMode: 'not selected' });
        this.setState({ editingCardStatus: false });
        this.setState({ itemSelected: 0 });
    }

    addItem = (newItem) => {

        this.setState({ itemCardMode: 'not selected' });
        this.setState({ editingCardStatus: false });
        this.setState({ itemSelected: 0 });
        let arr = [];
        arr = this.state.items.slice();
        arr.push(newItem);
        this.setState({ items: arr });
    }

    cancelAdd = () => {
        this.setState({ itemCardMode: 'not selected' });
        this.setState({ editingCardStatus: false });
        this.setState({ itemSelected: 0 });
    }

    deletItem = (id) => {
        let deletedItem = this.state.items.find(item => item.itemCode == id).name;

        if (confirm('Вы действительно хотите удалить ' + deletedItem + '?') == true) {
            let arr1 = this.state.items.filter(function (item) {
                return item.itemCode !== id;
            });
            this.setState({ items: arr1 });
        };
    }

    editingCard = (n) => {
        this.setState({ editingCardStatus: n });
    }

    editItem = (n) => {
        this.setState({ itemSelected: n });
        let itemObj = this.state.items.filter(elem => {
            return elem.itemCode == n;
        });

        this.setState({ itemSelectedObj: itemObj[0] });
        this.setState({ itemCardMode: 'edit' });
    }

    selectedItem = (n) => {
        this.setState({ itemSelected: n });
        let itemObj = this.state.items.filter(elem => {
            return elem.itemCode == n;
        });

        this.setState({ itemSelectedObj: itemObj[0] });
        this.setState({ itemCardMode: 'view' });
    }

    render() {

        let tableHeadCode =
            <tr className='tableHead'>
                <th className='columnName'>Name</th>
                <th className='columnPrice'>Price</th>
                <th className='columnURL'>URL</th>
                <th className='columnStock'>Stock</th>
                <th className='columnControl'>Control</th>
            </tr>;

        let tableBodyCode = this.state.items.map(elem => {
            let cssNameTr = '';
            (this.state.itemSelected == elem.itemCode) ? cssNameTr = 'tableRow_red' : cssNameTr = 'tableRow';
            return (
                <ItemBlock
                    key={elem.itemCode}
                    itemCode={elem.itemCode}
                    name={elem.name}
                    price={elem.price}
                    URL={elem.URL}
                    stock={elem.stock}
                    cbEditItem={this.editItem}
                    cbDeletItem={this.deletItem}
                    cbSelectedItem={this.selectedItem}
                    itemSelected={this.state.itemSelected}
                    cssNameTr={cssNameTr}
                    editingCardStatus={this.state.editingCardStatus}
                />
            );
        }
        );

        let itemCardCode = < ItemCard
            key={this.state.itemSelected}
            item={this.state.itemSelectedObj}
            cbEditingCard={this.editingCard}
            cbSaveItem={this.saveItem}
            cdCancelEdit={this.cancelEdit}
            itemCardMode={this.state.itemCardMode}
            editingCardStatus={this.state.editingCardStatus}
        />;

        let addItemCode = < AddItem
            cdCancelAdd={this.cancelEdit}
            cbAddItem={this.addItem}
            itemCode={this.state.items[this.state.items.length - 1].itemCode + 1}
        />;

        if (this.state.itemCardMode == 'not selected') {
            return (
                <div className='StockBlock' >
                    <div className='ShopName' >{this.props.shopName}</div>
                    <table className='Table'>
                        <thead className='Thead'>{tableHeadCode}</thead>
                        <tbody className='TItems'>{tableBodyCode}</tbody>
                    </table>
                    <input className='BtnNewProduct' type='button' value='New product' onClick={this.newProduct} />
                </div>
            );
        } else if (this.state.itemCardMode == 'view') {
            return (
                <div className='StockBlock' >
                    <div className='ShopName' >{this.props.shopName}</div>
                    <table className='Table'>
                        <thead className='Thead'>{tableHeadCode}</thead>
                        <tbody className='TItems'>{tableBodyCode}</tbody>
                    </table>
                    <input className='BtnNewProduct' type='button' value='New product' onClick={this.newProduct} />
                    <div className='ItemCard'>{itemCardCode}</div>
                </div>
            );
        } else if (this.state.itemCardMode == 'edit') {
            return (
                <div className='StockBlock' >
                    <div className='ShopName' >{this.props.shopName}</div>
                    <table className='Table'>
                        <thead className='Thead'>{tableHeadCode}</thead>
                        <tbody className='TItems'>{tableBodyCode}</tbody>
                    </table>
                    <div className='ItemCard'>{itemCardCode}</div>
                </div>
            );
        } else if (this.state.itemCardMode == 'add') {
            return (
                <div className='StockBlock' >
                    <div className='ShopName' >{this.props.shopName}</div>
                    <table className='Table'>
                        <thead className='Thead'>{tableHeadCode}</thead>
                        <tbody className='TItems'>{tableBodyCode}</tbody>
                    </table>
                    <div className='AddItem'>{addItemCode}</div>
                </div>
            );
        }
    }
}

export default IshopBlock;

