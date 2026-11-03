let Navbar=({handleShowForm, visibleForm,theme,changeTheme})=>{
 return (
    <>
    <nav className="bg-blue-500 p-2 rounded-lg flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">KhataBook</h1>
      {
        !visibleForm && <button onClick={handleShowForm}className="font-bold bg-blue-400 p-2 text-white hover:bg-blue-600 cursor-pointer">Add Transaction</button>
        
      }
      
      
    </nav>
    </>
 )
}
export default Navbar
