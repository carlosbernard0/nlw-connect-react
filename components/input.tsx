import React, { type ComponentProps } from 'react'

interface InputRoot extends ComponentProps<'div'>{
    error?: boolean
}

export const InputRoot = ({error, ...props}: InputRoot) => {
    return (
        <div 
            data-error={error}
            className='group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger'
            {...props}
        />
    )
}

interface InputIcon extends ComponentProps<'span'>{}

export const InputIcon = (props: InputRoot) => {
    return (
        <span 
            className='text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger'
            {...props}
        />
    )
}

interface InputFieldProps extends ComponentProps<'input'>{}

export const InputField = (props: InputFieldProps) => {
    return (
        <input 
            className='flex-1 outline-0 placeholder-gray-400'
            {...props}
        />
    )
}
