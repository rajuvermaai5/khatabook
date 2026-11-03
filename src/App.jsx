import { useState } from "react"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import Navbar from "./components/Navbar"

let App=()=>{
  const[visibleForm,setVisibleForm]=useState(false)
  const[transactions,setTransacions]=useState([])
  const[theme,setTheme]=useState(false)

  const changeTheme=()=>{
    setTheme(!theme)
  }
  let handleShowForm=()=>{
    setVisibleForm(!visibleForm)
  }
  let addTransaction=(transaction)=>{
    // console.log(transaction)
    setTransacions([transaction,...transactions])
  }
  const[edit,setEdit]=useState({
    transaction:{},
    isEdit:false
  })
  const editTransaction=(transaction)=>{
    handleShowForm()
    setEdit({transaction:transaction,
    isEdit:true
    })
  }
  const updateTransaction=(updateTransaction)=>{
    setTransacions(transactions.map(transaction=>transaction.id===updateTransaction.id ? updateTransaction :transaction))
    setEdit({transaction:{},isEdit:false})

  }
  const removeTransaction=(id)=>{
    setTransacions(transactions.filter(transaction=>transaction.id !==id))

  }
  
  return (
    <>
     <Navbar handleShowForm={handleShowForm} visibleForm={visibleForm} />
    <div className="p-8">
      { 
        visibleForm && <Form visibleForm={visibleForm} addTransaction={addTransaction} edit={edit} updateTransaction={updateTransaction} handleShowForm={handleShowForm} changeTheme={changeTheme} theme={theme}/>
      }
      <Dashboard transactions={transactions}/>
      <ListGroup transactions={transactions} editTransaction={editTransaction} removeTransaction={removeTransaction}/>
      
      

    </div>
    </>
  )

}
export default App