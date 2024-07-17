import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const URL = 'http://localhost:8000/silos/';
const URL_CAMPOS = 'http://localhost:8000/campos/';
const URL_SEMILLAS = 'http://localhost:8000/semillas/';
const URL_TIPOSILOS = 'http://localhost:8000/tipo-silo/';

const ComCreateSilo = () => {
    const [nombre, setNombre] = useState('');
    const [idCampo, setIdCampo] = useState('');
    const [idSemilla, setIdSemilla] = useState('');
    const [idTipoSilo, setIdTipoSilo] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [campos, setCampos] = useState([]);
    const [semillas, setSemillas] = useState([]);
    const [tiposilos, setTipoSilos] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getCampos();
        getSemillas();
        getTipoSilos();
    }, []);

    const getCampos = async () => {
        const res = await axios.get(URL_CAMPOS);
        setCampos(res.data);
    };

    const getSemillas = async () => {
        const res = await axios.get(URL_SEMILLAS);
        setSemillas(res.data);
    };

    const getTipoSilos = async () => {
        const res = await axios.get(URL_TIPOSILOS);
        setTipoSilos(res.data);
    };

    const createSilo = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombre,
            idCampo,
            idSemilla,
            idTipoSilo,
            cantidad
        });
        // Redirigir o limpiar el formulario después de la creación exitosa
        navigate('/')
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Nuevo Silo</h2>
                    <form onSubmit={createSilo}>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre del Silo</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required 
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Campo</label>
                            <select 
                                className='form-select' 
                                value={idCampo}
                                onChange={(e) => setIdCampo(e.target.value)}
                                required
                            >
                                <option value=''>Selecciona un campo</option>
                                {campos.map((campo) => (
                                    <option key={campo.id} value={campo.id}>{campo.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Contenido</label>
                            <select 
                                className='form-select' 
                                value={idSemilla}
                                onChange={(e) => setIdSemilla(e.target.value)}
                                required
                            >
                                <option value=''>Selecciona un contenido</option>
                                {semillas.map((semilla) => (
                                    <option key={semilla.id} value={semilla.id}>{semilla.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Tipo de Silo</label>
                            <select 
                                className='form-select' 
                                value={idTipoSilo}
                                onChange={(e) => setIdTipoSilo(e.target.value)}
                                required
                            >
                                <option value=''>Selecciona un tipo de silo</option>
                                {tiposilos.map((tipoSilo) => (
                                    <option key={tipoSilo.id} value={tipoSilo.id}>{tipoSilo.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Cantidad (kg)</label>
                            <input 
                                type='number' 
                                className='form-control' 
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                                required 
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Crear Silo</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ComCreateSilo;
