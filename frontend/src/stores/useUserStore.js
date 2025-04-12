import { create } from "zustand";
import axios from "../utils/axios";
import toast from "react-hot-toast";

export const useUserStore = create((set,get)=>({
    user:null,
    laoding:false,
    checkingAuth:true,

    signup: async ({name,email,password,confirmPassword}) => {
        set({loading:true})
        if(password !== confirmPassword){
            set({loading:false})
            return toast.error("Passwords do not match")
        }
        console.log("typed")
        try{
         const res = await axios.post("/auth/signup",{name,email,password});
         set({user: res.data,loading:false});

        }catch(error){
         set({loading:false})
         toast.error(error?.response?.data?.message || "An error ocurred try again");
        }
    },
}))