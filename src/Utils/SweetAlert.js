import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const mostrarDialogoConfirmacion = (titulo, msj) => {
  let confirmacion = false;

  Swal.fire({
    title: titulo,
    text: msj,
    showDenyButton: true,
    confirmButtonText: 'Aceptar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      confirmacion = true
    } else if (result.isDenied) {
      confirmacion = false
    }
  })

  return confirmacion;
}

