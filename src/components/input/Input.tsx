type InputProps = {
    label: string
    placeholder: string
}

export function Input({label, placeholder}: InputProps) {
    return(
        <>
            <label htmlFor="">{label}</label>
            <input id="userName" type="text" placeholder={placeholder} className="bg-slate-200 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block p-2.5"/>
        
        </>
    )
}

//<input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
