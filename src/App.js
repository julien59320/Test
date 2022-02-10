import  Counter from "./Counter";
import Input from "./Input"
import { React, useState } from 'react'
import Api from "./Api"




function App() {
  
  return (
    <section className="container">
        <Counter />
        <Input />
        <Api />
    </section>
  );
}

export default App;
