import React,{useId,forwardRef} from 'react'

const Select = ({
    label,
    options=[],
    className="",
    ...props
},ref) => {
    const id=useId()
  return (
    <>
    {label&&<label htmlFor={id} className=''></label>}

    <select
     id={id}
     ref={ref}
     {...props}
     className={`px-3 py-2 rounded-lg bg-white focus:bg-gray-50 
        duration-200 border border-b-gray-200 w-full text-black
         outline-none${className}`}
     >
        {options?.map((option)=>(
        <option key={option} value={option}>
            {option}
        </option>
        ))}
    
    </select>
    </>
    
  )
}

export default forwardRef(Select)