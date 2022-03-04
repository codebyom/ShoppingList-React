import React from 'react'
import { useState,useEffect } from 'react'
function Form({addItem,editItem,updatItem}) {

    const [itemName,setItemName] = useState('');
    const [itemQuentity,setItemQuentity] = useState('');

        //define a onclick function to add item button
        const addtodoItem =(e)=>{
            e.preventDefault();
            if(editItem){
                updatItem({
                    id:editItem.id,
                    itemName,
                    itemQuentity
                })
                setItemName('');
                setItemQuentity('');
            }else{
                const newItem = {
                    id: Math.floor(Math.random()*100+1),
                    itemName,
                    itemQuentity
                }
                addItem(newItem);
                setItemName('');
                setItemQuentity('');
            }
        }

        useEffect(()=>{
            if(editItem){
            setItemName(editItem.itemName);
            setItemQuentity(editItem.itemQuentity);
            };
        },[editItem])

  return (
    <>
        <div className='main-form'>
            <h2>{editItem?'Update Shopping Item':'Add Shopping Item'}</h2>
            <form>
            <div className='form-group my-2'>
                <label>Item Name</label>
                <input className='form-control' value={itemName} onChange={(event)=>setItemName(event.target.value)} ></input>
            </div>
            <div className='form-group my-4'>
                <label>Item Quentity</label>
                <input className='form-control' value={itemQuentity} onChange={(event)=>setItemQuentity(event.target.value)}></input>
            </div>
            <button className='btn btn-primary btn-save' onClick={addtodoItem}>{editItem?'Update Item':'Add Item'}</button>
            </form>
        </div>
    </>

  )
}

export default Form