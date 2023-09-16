// import jsPDF from 'jspdf';
// import '../../assets/images-logo.jpg'

// export const generarPDF = (datosOrden,Afiliado,Comercio) => {
//   const {fecha_solicitud,fecha_vencimiento,monto_credito} = datosOrden
//   let {name,lastname,dni} = Afiliado
//   let{name:nameComercio} = Comercio
//   const nombreMutual = 'A.M.P.M'
  
//   const pdf = new jsPDF()
//   pdf.setTextColor(0, 0, 0) 
//   pdf.setFontSize(14)

//   const xRecuadro = 10;
//   let yRecuadro = 20;
//   const anchoRecuadro = 95;
//   const altoRecuadro = 30;
//   const separacionColumnas = anchoRecuadro + 5;

//   const numColumnas = 2


//   let columnaActual = 1;

//   let xTexto = xRecuadro + 5;
//   let yTexto = yRecuadro ;

 
//   yRecuadro += altoRecuadro
 
//   const agregarDatosEnRecuadro = (titulo, contenido) => {
//     pdf.rect(xTexto, yTexto, anchoRecuadro, altoRecuadro) 
//     pdf.text(titulo, xTexto + 2, yTexto + 5) 
//     pdf.text(contenido, xTexto + 2, yTexto + 15) 
//   }

//   agregarDatosEnRecuadro('Fecha emision:', fecha_solicitud)
//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   agregarDatosEnRecuadro('Mutual', nombreMutual)

//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   agregarDatosEnRecuadro('Afiliado:', `${name} ${lastname}`)
//   console.log(name)
//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   agregarDatosEnRecuadro('DNI: ', dni)
//   console.log(dni)
//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual 


//   agregarDatosEnRecuadro('Comercio:', nameComercio)
//   console.log(nameComercio)
//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   agregarDatosEnRecuadro('Monto de Crédito:', `$${monto_credito}`)
//   console.log(monto_credito)
//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   agregarDatosEnRecuadro('Fecha de pago:', `${fecha_vencimiento}`)
//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   agregarDatosEnRecuadro('Firma del Afiliado:', '...................')

//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   agregarDatosEnRecuadro('Firma p/A.M.P.M:', '......................')
//   if (columnaActual === numColumnas) {
//     xTexto = xRecuadro + separacionColumnas
//   } else {
//     xTexto = xRecuadro + 5
//     yTexto += altoRecuadro + 5
//   }
//   columnaActual = 3 - columnaActual

//   pdf.output('dataurlnewwindow')
// };

import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generarPDF = (datosOrden, Afiliado, Comercio) => {
  const { fecha_solicitud, fecha_vencimiento, monto_credito } = datosOrden;
  let { name, lastname, dni } = Afiliado;
  let { name: nameComercio } = Comercio;
  const nombreMutual = 'A.M.P.M';
  console.log(nameComercio)
  
  const pdf = new jsPDF();
  pdf.setTextColor(0, 0, 0); // Texto en negro
  pdf.setFont('Arial', 'normal');
  pdf.setFontSize(12);

  const detalles = [
    ['Descripción', 'Valor'],
    ['Fecha de Emisión', fecha_solicitud],
    ['Mutual', nombreMutual],
    ['Afiliado', `${name} ${lastname}`],
    ['DNI', dni],
    ['Comercio', nameComercio],
    ['Monto de Crédito', `$${monto_credito}`],
    ['Fecha de Pago', fecha_vencimiento],
    ['Firma del Afiliado', ''],
    ['Firma p/A.M.P.M', ''],
  ];

  pdf.autoTable({
    startY: 20, 
    head: [detalles[0]], 
    body: detalles.slice(1), 
    theme: 'grid', 
    styles: {
      font: 'Arial',
      fontSize: 10,
      textColor: [0, 0, 0], 
      cellPadding: 3,
      halign: 'center', 
    },
  });

  const nombreArchivo = 'factura.pdf';
  pdf.save(nombreArchivo);
};