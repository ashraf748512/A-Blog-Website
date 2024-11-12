import React, { forwardRef ,lazy,useId} from 'react'

const Input = forwardRef(function Input({
    label="",
    type="text",
    className="",
    ...props
},ref){
  const id=useId();
    return (
        <>
       <div className="w-full">
            {label&&<label htmlFor={id} className='inline-block mb-1 pl-1'>
                {label}
            </label>}
            <input
             type={type} 
             className={`px-3 py-2 rounded-lg bg-white outline-none text-black focus:bg-gray-50 duration-200 w-full border border-b-gray-100 ${className}`} 
             ref={ref}
             id={id}
             {...props}

             />
       </div>
        </>
    )
})
 

export default Input