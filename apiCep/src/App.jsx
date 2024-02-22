
import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState('')
  const [cepData, setCepData] =useState(null)
  const [rua, setRua] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")



 

  const handleBuscaCep = async (event) =>{
    event.preventDefault();
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("CEP não encontrado.");
      }
      const data = await response.json();
      setCepData(data);
      setRua(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.uf)
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <>
    <div className='container'>
      <h1>Busca de endereço</h1>

      <input type="number" 
      placeholder='Digite seu CEP'
       onChange={(e) => setCep(e.target.value) } 
        value={cep} id="" />

          <input type="text" 
      placeholder='Digite sua rua'
       onChange={(e) => setRua(e.target.value) } 
        value={rua} id="" />

         <input type="text" 
        placeholder='Digite seu bairro'
         onChange={(e) => setBairro(e.target.value) } 
          value={bairro} id="" />

           <input type="text" 
      placeholder='Digite sua cidade'
       onChange={(e) => setCidade(e.target.value) } 
        value={cidade} id="" />

         <input type="text" 
      placeholder='Digite seu estado'
       onChange={(e) => setEstado(e.target.value) } 
        value={estado} id="" />
        <input type="text" 
      placeholder='Digite o numero da casa'
       onChange={(e) => setNumero(e.target.value) } 
        value={numero} id="" />

        <input type="text" 
      placeholder='Digite seu complemento (opcional)'
       onChange={(e) => setComplemento(e.target.value) } 
        value={complemento} id="" />
      <button onClick={handleBuscaCep}>
        Buscar
      </button>
      <div className='endereco  '>
        {/* {cepData ? (
          <>
          <p><b>Rua:</b> {cepData.logradouro}</p>
           <p><b>Bairro:</b> {cepData.bairro}</p>
           <p><b>Cidade:</b> {cepData.localidade}</p>
          <p><b>Estado:</b> {cepData.uf}</p>
          </>
        ) : null} */}
          

      </div>
    </div>
    </>
  )
}

export default App
