
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  toast.configure();
  const [items,setItems]= useState([
    {
      id:1,
      itemName:"banana",
      itemQuentity:"2kg"
    },
    {
      id:2,
      itemName:"apple",
      itemQuentity:"5kg"
    }
  ])

  const [editItem,setEditItem] = useState(null);

//define a function for set item in usestate
  const addItem = (item)=>{
    setItems([...items,item])
    toast.success('👉👉 Item Added 👍👍', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }

  //define a function to delete a item

  const deleteItem = (id)=>{
    setItems(items.filter((item)=>item.id!=id));
    toast.success('👉👉 Item Deleted 👍👍', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }

  //edit function 
  const editTodoItem = (item)=>{
    setEditItem(item);
  }

  //update function
  const updatItem = (newitemData)=>{
    setItems(items.map((item)=>item.id === newitemData.id?newitemData:item));
    setEditItem(null);
    toast.success('👉👉 Item Updated👍👍', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }

  return (
    <>
      <Navbar/>
      <Home items={items} addItem={addItem} deleteItem={deleteItem} editTodoItem={editTodoItem} editItem={editItem} updatItem={updatItem}/>
    </>
  );
}

export default App;
