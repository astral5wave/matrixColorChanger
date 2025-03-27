import { useState } from "react";

function App() {
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    const [list,setList]=useState([]);
    const changeColor = async (id) => {
      document.getElementById(id).style.backgroundColor = "green";
      list.push(id);
      if(list.length%9===0){
        while(list.length!=9){
          list.shift();
        }
        for(let i=0;i<list.length;i++){
          document.getElementById(list[i]).style.backgroundColor = "orange";
          await delay(200);
        }
      }
    }
    return (
      <>
        <div className="flex items-center justify-center h-[100vh] w-[100vw] relative">
          <div className="grid grid-cols-3 gap-5">
            {
              [...Array(9)].map((_,index) => (
                <div id={`matrix${index}`} className="h-30 w-30 border-slate-400 bg-[#E0E0E0]" onClick={() => changeColor(`matrix${index}`)}></div>
              ))
            }
          </div>
          <button className="absolute bottom-30 right-30 bg-red-700 rounded-md px-4 py-2 text-2xl text-white"
          onClick={() => {
            for(let i of list){
              document.getElementById(i).style.backgroundColor = "#E0E0E0";
            }
            setList([]);
          }}>
            Reset
          </button>
        </div>
  
      </>
    )
  }
  
  export default App
  