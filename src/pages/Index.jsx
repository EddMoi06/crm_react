import { useLoaderData } from 'react-router-dom';
import Clientes from '../components/Clientes';

export function loader(){

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Moises',
        telefono: 31983913,
        email: "Moises@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
  ];
  return clientes;
}

const Index = () => {

  const clientes = useLoaderData()
  console.log(clientes)

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2'>Clientes</th>
                <th className='p-2'>Contacto</th>
                <th className='p-2'>Acciones</th>
              </tr>
          </thead>
          <tbody>
              {clientes.map( cliente => (
                <Clientes
                  cliente={cliente}
                  key={cliente.id}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <p>No hay Clientes Aun</p>
      )}
    </>
  )
}

export default Index
