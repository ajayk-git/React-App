import React, { Component } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInputComponent';
import ToDoList from './components/ToDoListComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false

  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {

      id: this.state.id,
      title: this.state.item
    }

    console.log(newItem);
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    })
  };


  clearList = () => {
    this.setState({
      items: []
    })

  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
    this.setState({
      items: filteredItems
    });
  };

  handleEdit=id=>{
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)

      const selectedItem=this.state.items.find(item=>item.id===id);

        console.log(selectedItem);

      this.setState({
        items:filteredItems,
        item:selectedItem.title,
        editItem:true,
        id:id
      });
  };


  render() {
    return (


      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto coo-md-8 mt-4">
            <h3 className='text-capitalize text-center'>todo input</h3>

            <ToDoInput item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />

            <ToDoList items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit}
              />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
