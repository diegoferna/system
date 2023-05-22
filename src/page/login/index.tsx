import { useState } from "react"
import { Navigate } from 'react-router-dom'

type User =  {
    id: number, 
    type: string, 
    name: string,
    cpf: string,
    telfone: string,
    email: string,
    empresa: string,
    cnpj: string,
    segmento: Array<{name: string}> 
}

export default function Login(){
    const [data, setData] = useState<User>()
    const [authentic, setAuthentic] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const isAuthenticated = (event: any) => {
        event.preventDefault()
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(data => {
               data.map((e: User) => e.name.toString() === name.toString() ? setAuthentic(true) : setAuthentic(false))
            })
            .catch(error => {
                console.error('Erro:', error);
        });
    }



    return(
        <div className="container h-screen flex bg-slate-200 ">
            {
                authentic && <Navigate to={"/home"} />
            }
            <form onSubmit={isAuthenticated} className="w-80 p-6 flex flex-col gap-3 bg-slate-300 mx-auto my-auto border rounded-lg">
                <label htmlFor="name" className="font-thin text-sm">nome</label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="nome" 
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 rounded-md bg-slate-400 text-gray-100 focus:border-collapse"
                />
                
                <label htmlFor="password" className="font-thin text-sm">senha</label>
                <input 
                    id="password" 
                    type="password" 
                    placeholder="senha" 
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded-md bg-slate-400 text-gray-100 focus:border-collapse"
                />
                <button className="w-full p-2 mt-4 bg-primary rounded-md text-background hover:bg-blue-700">Login</button>
            </form>
        </div>
    )
}