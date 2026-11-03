let Dashboard=({transactions})=>{
  let income = transactions
  .filter(transaction => transaction.amount > 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);
  let expenses= transactions
  .filter(transaction => transaction.amount < 0)
  .reduce((acc, transaction) => acc -transaction.amount, 0);
  let balance=transactions.reduce((acc,transaction)=>acc+transaction.amount,0)
  
 return (
  <>
  <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="bg-emerald-400 p-6 rounded-lg">
          <h1 className="text-white fomt-bold text-2xl">{income}</h1>
          <h2 className="font-bold text-xl text-white">Total Income</h2>
        </div>
        <div className="bg-red-400 p-6 rounded-lg">
          <h1 className="text-white fomt-bold text-2xl">{expenses}</h1>
          <h2 className="font-bold text-xl text-white">Total Expenses</h2>
        </div>
        <div className="bg-emerald-400 p-6 rounded-lg">
          <h1 className="text-white fomt-bold text-2xl">{balance}</h1>
          <h2 className="font-bold text-xl text-white">Savings</h2>
        </div>
      </div>
  </>
 )
}
export default Dashboard