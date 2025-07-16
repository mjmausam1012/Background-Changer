import { useState } from "react"

function App() {

  const [color, setColor] = useState("purple")

  function changeColor(color) {
    setColor(color);
  }

  return (
    <>
    <div className="w-full h-screen duration-500" style={{backgroundColor : color}}>

     <div className="color-btn fixed bottom-10 inset-x-10 flex flex-wrap gap-4 bg-white justify-center rounded-xl p-2.5">
      <button onClick={() =>  changeColor("red")} className="red bg-[red] text-white font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Red</button>
      <button onClick={() =>  changeColor("green")} className="green bg-[green] text-white font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Green</button>
      <button onClick={() =>  changeColor("blue")} className="blue bg-[blue] text-white font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Blue</button>
      <button onClick={() =>  changeColor("olive")} className="olive bg-[olive] text-white font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Olive</button>
      <button onClick={() =>  changeColor("gray")} className="gray bg-[gray] text-white font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Gray</button>
      <button onClick={() =>  changeColor("yellow")} className="yellow bg-[yellow] text-black font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Yellow</button>
      <button onClick={() =>  changeColor("pink")} className="pink bg-[pink] text-black font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Pink</button>
      <button onClick={() =>  changeColor("purple")} className="purple bg-[purple] text-white font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Purple</button>
      <button onClick={() =>  changeColor("lavender")} className="lavender bg-[lavender] text-black font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Lavender</button>
      <button onClick={() =>  changeColor("white")} className="white bg-[white] text-black font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">White</button>
      <button onClick={() =>  changeColor("black")} className="black bg-[black] text-white font-bold p-1 pl-4 pr-4 rounded-2xl shadow-gray-400 shadow-md">Black</button>
     </div>

    </div>
    </>
  )
}

export default App
