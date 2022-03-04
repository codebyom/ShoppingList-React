import React from "react";

function Item({item,deleteItem,editTodoItem}) {
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.itemName}</td>
        <td>{item.itemQuentity}</td>
        <td>
          <button className="btn btn-outline-primary mx-2" onClick={()=>editTodoItem(item)}>Edit</button>
          <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default Item;
