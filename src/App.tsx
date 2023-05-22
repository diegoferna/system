
import { useState } from 'react'
import Login from './page/login'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

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

function App() {
  const [authenticated, setAuthenticated ] = useState(true)

  const [data, setData] = useState<User>()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


    const isAuthenticated = (event: any) => {
        event.preventDefault()
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(data => {
                setData(data) // Aqui você pode usar os dados recebidos
            })
            .catch(error => {
                console.error('Erro:', error);
        });
    }
  

  return(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
