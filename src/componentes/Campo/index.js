import './campo.css'

const Campo = ({type = 'text', label, valor, obrigatorio, placeholder, aoAlterado}) => {

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default Campo