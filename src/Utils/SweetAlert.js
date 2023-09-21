import Swal from 'sweetalert2';

export const mostrarDialogoConfirmacion = async (titulo, msj) => {
  try {
    const result = await Swal.fire({
      title: titulo,
      text: msj,
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    })

    if (result.isConfirmed) {
      return true
    } else if (result.isDenied) {
      return false
    } else {
      return false
    }
  } catch (error) {
    console.error('Error al mostrar el diálogo de confirmación:', error)
    return false
  }
}

