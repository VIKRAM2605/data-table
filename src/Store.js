import {create} from "zustand"
const useStore=create((set)=>({
    username:"",
    handleChangeUsername:(e)=>
        set({username:e.target.value}),
    isloggedin:false,
    isLogin:()=>set({isloggedin:true}),
    password:"",
    handlepass:(e)=>{
        set({password:e.target.value})
    }
}))
export default useStore