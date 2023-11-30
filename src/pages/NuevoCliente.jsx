import { useNavigate, Form, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario'

export async function action(request){

  const formData = await request.request.formData()
  const datos = Object.fromEntries(formData)

  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son Obligatorios')
  }

  if(Object.keys(errores).length){
    return errores
  }  
}

const NuevoCliente = () => {

  const navigate = useNavigate()
  const errores = useActionData()

  return (
    <div>
        <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
        <p className="mt-3">Llena los Campos y Agrega un Nuevo Cliente</p>

        <div className="flex justify-end">
          <button
            className='bg-blue-600 text-white uppercase font-bold px-3 py-1 rounded-sm hover:bg-blue-900 transition'
            onClick={() => navigate(-1)}
          >
            volver
          </button>
        </div>

        <div className='bg-white shadow md:w-3/4 mx-auto rounded-md px-5 py-10'>
            <Form 
              method='POST'
            >
              <Formulario/>

              <input 
                type="submit" 
                className='text-white uppercase bg-blue-600 w-full py-2 rounded-sm hover:bg-blue-900 transition font-bold'
                value="Añadir Cliente"
              />
            </Form>
        </div>
    </div>
  )
}

export default NuevoCliente
