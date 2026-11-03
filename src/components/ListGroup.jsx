import ListItem from "./ListItem"

let ListGroup=({transactions,editTransaction,removeTransaction})=>{
  return (
    <> 
    <ul className="my-4">
      
       {
        transactions.map(transaction=><ListItem key={transaction.id} transaction={transaction} editTransaction={editTransaction} removeTransaction={removeTransaction}/>)
       } 
        
      </ul>
    </>
  )
}
export default ListGroup