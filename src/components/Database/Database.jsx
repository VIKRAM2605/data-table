import React, { useEffect } from 'react'
import { use } from 'react';
import {useState} from 'react'
import { useRef } from 'react';
import useStore from '../../Store';
export default function Database() {
    const{username,islogin}=useStore();
    const [Name,setName]=useState("");
    const [Whole,setWhole]=useState([['NAME','ENGLISH','MATHS','BIOLOGY','CHEMISTRY','PHYSICS']]);
    const [Data, setData] = useState([]);
    const [Data1,setData1]=useState("");
    const [Data2,setData2]=useState("");
    const [Data3,setData3]=useState("");
    const [Data4,setData4]=useState("");
    const [Data5,setData5]=useState("");
    console.log(username)
    console.log(islogin)
    const change=(e)=>{
        setName(e.target.value)
    }
    const change1=(e)=>{
        setData1(e.target.value)
    }
    const change2=(e)=>{
        setData2(e.target.value)
    }
    const change3=(e)=>{
        setData3(e.target.value)
    }
    const change4=(e)=>{
        setData4(e.target.value)
    }
    const change5=(e)=>{
        setData5(e.target.value)
    }
    useEffect(() => {
        console.log(Data, Whole);
    }, [Data,Whole])
    useEffect(() => {
        if (Data.length > 0) {
          setWhole(w => [...w, Data]);
          setData(d=>[]);
        }
      }, [Data]);
    
    const submit=()=>{
            if(Name!=""&&Data1!=""&&Data2!=""&&Data3!=""&&Data4!=""&&Data5!=""){
           setData(d=>[Name,Data1,Data2,Data3,Data4,Data5])
           setName("");
           setData1("");
           setData2("");
           setData3("");
           setData4("");
           setData5("");}
}
return (
    <div>
        <div>
            <h2 className='text-5xl'>Welcome : {username}!,</h2>
        </div>
        <div className='relative left-80 border-2 border-black w-fit rounded-2xl shadow-black shadow-sm h-fit mt-5'>
        <form className='' action="">
         <label htmlFor="text" className='pl-3 pt-1.5'>NAME</label>
         <input type="text" placeholder='Name'  value={Name} required onChange={change} className='ml-11 border-2 border-black mt-4' /><br />
        <label htmlFor="text" className='pl-3 pt-1.5'>ENGLISH</label>
        <input type="number" placeholder='Data1'  value={Data1} required onChange={change1} className='ml-6.5 border-2 border-black mt-1' /><br />
        <label htmlFor="text" className='pl-3 pt-1.5'>MATHS</label>
        <input type="number" placeholder='Data2'  value={Data2} required onChange={change2 } className='ml-9 border-2 border-black mt-1'/><br />
        <label htmlFor="text" className='pl-3 pt-1.5'>BIOLOGY</label>
        <input type="number" placeholder='Data3'  value={Data3} required onChange={change3} className='ml-6 border-2 border-black mt-1'/><br />
        <label htmlFor="text" className='pl-3 pt-1.5'>CHEMISTRY</label>
        <input type="number" placeholder='Data4'  value={Data4} required onChange={change4} className='relative right-0.5 ml-2 border-2 border-black mt-1' /><br />
        <label htmlFor="text" className='pl-3 pt-1.5'>PHYSICS</label>
        <input type="number" placeholder='Data5'  value={Data5} required onChange={change5} className='ml-7 border-2 border-black mt-1' /><br />
        <button className='ml-3 p-1 border-2 rounded-2xl border-black mb-2' onClick={()=>{submit();}}>Submit</button></form>
        </div>
        <div className='border-black border-2 border-b-0 ml-10 mt-20 h-fit mr-4' >
            {Whole.map((item, index) =><div className='grid grid-cols-6 border-black border-b-2 ' key={index}>
                {item.map((data,indexx)=>
                <p className='' key={indexx} id={indexx}>{data}</p>)}
            </div>
            )}
        </div>
    </div>
  )
}
