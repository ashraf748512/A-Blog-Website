import React ,{ useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Button,Input,Logo} from "./index"
import authService from '../appwrite/auth'

const SignUp = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [error,setError]=useState("")
    const {register,handleSubmit}=useForm();

    const create= async(data)=>{
        setError("");
        try {
            const session=await authService.CreateAccount(data)
            if(session){
               const userData= await authService.getCurrentUser()
               if(userData)dispatch(authLogin(userData));
               navigate("/")
            }
        } catch (error) {
           setError(error.message)
        }
        }
  return (
    <div className="w-full items-center justify-center flex">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 border rounded-xl p-10 border-black/10`}>
            <div className="flex mb-2 justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%"/>
                    </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign Up to your Account
            </h2>
            <p className="text-center mt-2 text-black/60 text-base">
            
                Already have an Account ?<Link
                 to="/login"
                 className='font-medium text-primary transition-all duration-200 hover:underline'
                >Sign In</Link>
            </p>
            {error&&<p className='text-center text-red-600 mt-8'>{error}</p>}
        <form onSubmit={handleSubmit(create) } className='w-full'>
        <div className="space-y-5">
        <Input
            lable="FullName: "
            placeholder="Enter your FullName"
            type="text"
            {...register("fullName",{
                required:true,
            })}
            />
            <Input
            lable="Email: "
            placeholder="Enter your Email"
            type="email"
            {...register("email",{
                required:true,
                validate:{
                    matchPatern:(value)=>{
                        /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value)||
                        "Email address must be valid email address"
                    }
                }
            })}
            />
            <Input
            lable="Password: "
            placeholder="Enter your Password"
            type="Password"
            {...register("password",{
                required:true,
                
            })}
            />
            <Button
            type="submit"
            className='w-full'
            children="Sign Up"
            />
            </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp