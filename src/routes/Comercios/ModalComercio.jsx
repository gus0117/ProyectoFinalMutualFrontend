import { useForm } from 'react-hook-form'
import { IconClose } from '../../components/Icons'
import { mostrarDialogoConfirmacion } from '../../Utils/SweetAlert'
import '../Afiliados/Modal.css'

export const ModalComercio = ({ closeModal, selectedRowData, onUpdateData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { name, cuit, phone, barrio, calle, numero, localidad } = selectedRowData

    const onSubmit = async (data) => {
        const confirmacion = await mostrarDialogoConfirmacion("¿Estás seguro de editar este Comercio?");
        if (confirmacion) {
            onUpdateData({ id_comercio, ...data })
            closeModal()
        } else {
            closeModal()
        }
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <button className='modal-button' onClick={closeModal}>
                    <IconClose />
                </button>
                <h2 className='modal-title'>Editar Comercio</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-input-afiliado'>
                        <input
                            type='hidden'
                            id='id_comercio'
                            {...register('id_comercio', { value: selectedRowData.id_comercio })}
                        />
                        <input type='text' className='input-order' placeholder='Nombre del comercio'
                            {
                            ...register('name', {
                                required: 'Debe ingresar un nombre de comercio válido.'
                            })
                            }
                            defaultValue={name}
                        />
                        <p>{errors.name?.message}</p>
                        <input type='number' placeholder='N° de CUIT' className='input-order'
                            {
                            ...register('cuit', {
                                required: 'Debe ingresar el N° de CUIT del comercio'
                            })
                            }
                            defaultValue={cuit}
                        />
                        <p>{errors.cuit?.message}</p>
                        <input type='number' placeholder='Número de teléfono' className='input-order'
                            {
                            ...register('phone', {
                                required: 'Debe ingresar el N° de CUIT del comercio'
                            })
                            }
                            defaultValue={phone}
                        />
                        <p>{errors.phone?.message}</p>
                        <input type='text' placeholder='Barrio' className='input-order'
                            {
                            ...register('barrio', {
                                required: 'Debe ingresar el nombre del barrio.'
                            })
                            }
                            defaultValue={barrio}
                        />
                        <p>{errors.cuit?.message}</p>
                        <input type='text' placeholder='Calle' className='input-order'
                            {
                            ...register('calle', {
                                required: 'Debe ingresar un nombre de la calle.'
                            })
                            }
                            defaultValue={calle}
                        />
                        <p>{errors.name?.message}</p>
                        <input type='number' placeholder='Número' className='input-order'
                            {
                            ...register('numero', {
                                required: 'Debe ingresar el número del domicilio.'
                            })
                            }
                            defaultValue={numero}
                        />
                        <p>{errors.name?.message}</p>
                        <input type='text' placeholder='Localidad' className='input-order'
                            {
                            ...register('localidad', {
                                required: 'Debe ingresar el nombre de la localidad.'
                            })
                            }
                            defaultValue={localidad}
                        />
                        <p>{errors.name?.message}</p>

                    </div>
                    <button className='btn-form-modal' type='submit'>
                        Modificar
                    </button>
                </form >
            </div>
        </div>
    )
}
