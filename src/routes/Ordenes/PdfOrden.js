import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generarPDF = (datosOrden, Afiliado, Comercio) => {
  const { fecha_solicitud, fecha_vencimiento, monto_credito } = datosOrden;
  let { name:nameA, lastname, dni } = Afiliado;
  let {id_comercio, name} = Comercio;
  const nombreMutual = 'A.M.P.M';

  const pdf = new jsPDF();
  pdf.setTextColor(0, 0, 0); 
  pdf.setFont('Arial', 'normal');
  pdf.setFontSize(12);

  const detalles = [
    ['Descripción', 'Valor'],
    ['Fecha de Emisión', fecha_solicitud],
    ['Mutual', nombreMutual],
    ['Afiliado', `${nameA} ${lastname}`],
    ['DNI', dni],
    ['Comercio', name],
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




