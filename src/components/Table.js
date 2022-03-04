
import React from 'react'
import Item from './Item'

function Table({items,deleteItem,editTodoItem}) {
  return (
    <>
        <div className='main-table'>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Item Name</th>
      <th scope="col">Quentity</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
       items.map((item)=>(
           <Item item={item} deleteItem={deleteItem} editTodoItem={editTodoItem}/>
       ))
   }
  </tbody>
</table>    
        </div>
    </>
  )
}

export default Table