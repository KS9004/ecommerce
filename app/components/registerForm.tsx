'use client';

import { useRouter } from "next/navigation";



const RegisterForm = () => {
     const router = useRouter()
    const handleSubmit = async (e:any) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log('Email:', formData.get('email'))
        console.log('Password:', formData.get('password'))

        router.push('/login')





    }
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl'>Register</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 border p-2 max-auto mt-8'>
        <label htmlFor='email'>Enter email</label>
        <input type='email' name='email' className='border'/>

        <label htmlFor='password'>Enter password</label>
        <input type='password' name='password' className='border'/>
    <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded'>
        Register
    </button>
        </form>
      
    </div>
  )
  
}

export default RegisterForm
