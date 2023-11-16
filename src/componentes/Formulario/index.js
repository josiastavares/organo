import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return (
        <section className='formulario'> 
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario