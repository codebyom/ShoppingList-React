import React from 'react'
import Form from './Form'
import Table from './Table'

function Home({items,addItem,deleteItem,editTodoItem,editItem,updatItem}) {
  return (
    <>
        <div className='main-div'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-4 col-md-4 col-11">
                        <Form addItem={addItem} editItem={editItem} updatItem={updatItem}/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-11">
                        <Table items={items} deleteItem={deleteItem} editTodoItem={editTodoItem}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home