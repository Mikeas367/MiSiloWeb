import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const URL = 'http://localhost:8000/silos/'

const ComShowSilos = () => {
    const[silos, setSilo] = useState([])
    useEffect(()=>{
        getSilos()
    },[])

    // MOSTRAR TODOS LOS SILOS
    const getSilos = async ()=> {
        const res = await axios.get(URL)
        console.log('Esto obtengo de la DB',res.data)
        setSilo(res.data)
    }

    // ELIMINAR UN SILO
    const deleteSilo = async (id)=>{
        if (window.confirm('¿Estas Seguro de eliminar este Silo?')){
            await axios.delete(`${URL}${id}`)
            getSilos()
        }
    }

    return(
        <div className='conteiner'>
            <Link to='/create' className='btn btn-primary mb-5'>Nuevo Silo</Link>
            <div className='row'>
               <div className='col'>
                    <table className="table table-striped">
                        <thead className=''>
                            <tr>
                                <th>Nombre del Silo</th>
                                <th>Campo</th>
                                <th>Contenido</th>
                                <th>Cantidad</th>
                                <th>Tipo de Silo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {silos.map((s)=>(
                                <tr key={s.id}>
                                    <td>{s.nombre}</td>
                                    <td>{s.Campo?.nombre}</td>
                                    <td>{s.Semilla?.nombre}</td>
                                    <td>{s.cantidad} kg</td>
                                    <td>{s.TipoSilo?.nombre}</td>
                                    <td>
                                        <button onClick={()=> deleteSilo(s.id)}className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
               </div> 
            </div>
        </div>
    )
}

export default ComShowSilos