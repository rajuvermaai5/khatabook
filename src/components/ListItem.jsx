let ListItem=({transaction,editTransaction,removeTransaction})=>{
  return (
    <>
    <li className=" relative my-4 border border-gray-400 p-4 rounded-lg shadow-md">
            <p className="text-gray-400 font-bold text-xl">{transaction.id}</p>
            <h1 className="text-4xl font-bold my-2 ">{transaction.text}</h1>
            <h2 className="text-xl font-semibold">{transaction.amount}</h2>
            <div className="absolute top-5 right-5">
            <button onClick={()=>editTransaction(transaction)} className="p-2 bg-yellow-500 font-bold text-white hover:bg-yellow-600 hover:text-xl hover:p-3 cursor-pointer mx-3">Edit</button>
            <button onClick={()=>removeTransaction(transaction.id)} className="p-2 bg-red-400 font-bold text-white hover:bg-red-600 hover:text-xl hover:p-3 cursor-pointer mx-3">Delete</button>
            </div>
        </li>
    </>
  )
}
export default ListItem