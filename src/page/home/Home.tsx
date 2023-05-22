import Form from "./components/Form";
import Table from "./components/Table";
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Gear } from 'phosphor-react'

export function Home() {
    return(
        <div className="w-full ">
            <header className="flex ">
                <div className="flex justify-center basis-1/6 items-center">
                    <p>Área de Gestão</p>
                </div>
                <div className="flex flex-1 h-40 justify-center items-center">
                    <img src={Logo} alt="logo" className="w-36"/>
                </div>
            </header>
            <div className="flex border  ">
                <aside className="flex flex-col gap-8 basis-1/6  h-screen p-6">
                  
                    <ul className="flex flex-col gap-8  ">
                            <NavLink to="#" className="flex items-center gap-2 hover:bg-slate-200 hover:">
                                <Gear className="text-gray-800"/>
                                Gerenciar usuários
                            </NavLink>
                            <NavLink to="#" className="flex items-center gap-2 hover:bg-slate-200 hover:">
                                <Gear />
                                Gerenciar expositores
                            </NavLink>
                            <NavLink to="#" className="flex items-center gap-2 hover:bg-slate-200 hover:">
                                <Gear/>
                                Gerenciar visitantes
                            </NavLink>
                        </ul>
                    <button className="bg-error w-full p-2 rounded-sm text-white hover:bg-red-400">Sair</button>
                </aside>
                <main  className="flex flex-1 flex-col  bg-slate-300 p-6">
                    <Form />
                    <div className="">
                        <Table />
                    </div>
                </main>
            </div>
        </div>
    )
}