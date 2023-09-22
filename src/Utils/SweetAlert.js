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
export const mostrarAlerta = async (titulo, mensaje) => {
  try {
    await Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  } catch (error) {
    console.error('Error al mostrar la alerta:', error)
  }
};
