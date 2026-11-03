import { useEffect, useState } from "react"

let Form=({visibleForm,addTransaction,edit, updateTransaction,handleShowForm,changeTheme,theme})=>{
  let [text,setText]=useState("")
  let [amount,setAmount]=useState("")
  let handleSubmit = (e) => {
    e.preventDefault();
    !edit.isEdit ?
   addTransaction({id:crypto.randomUUID(), text,amount:parseInt(amount)}):
   updateTransaction({id:edit.transaction.id, text ,amount:parseInt(amount)})
   
   setText("")
   setAmount("")
   handleShowForm()
  }
  useEffect(()=>{
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)
   },
   [edit])
 return (
   <>
   
         <form onSubmit={handleSubmit}className="border border-gray-400 p-6 my-2">
        <input type="number"   value={amount}
        onChange={(e)=>setAmount(e.target.value)}
         className="border border-gray-400 w-full p-2 my-2" placeholder="Enter Amount" />
        <input type="text" onChange={(e)=>setText(e.target.value)}  value={text}className="border border-gray-400 w-full p-2" placeholder="Enter Transactions" />
        <button className="bg-emerald-400 w-full p-2 my-3 font-bold text-xl text-white cursor-pointer hover:bg-emerald-600">{edit.isEdit ?"Update Transaction":"Save Transaction"}</button>
        <button onClick={()=>visibleForm()}className="bg-red-400 w-full p-2 my-3 font-bold text-xl text-white cursor-pointer hover:bg-red-600">Cancel Transaction</button>
      </form>
      
   </>
 )
}
export default Form