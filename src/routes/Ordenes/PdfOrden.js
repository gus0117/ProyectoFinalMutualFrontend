import jsPDF from 'jspdf';
export const generarPDF = (datosOrden) => {
  // Crea un nuevo documento PDF
  const pdf = new jsPDF();

  // Agrega el contenido al PDF
  pdf.text('Detalles de la Nueva Orden', 10, 10);
  pdf.text(`Código de Afiliado: ${datosOrden.id_afiliado}`, 10, 20);
  pdf.text(`Código de Comercio: ${datosOrden.id_comercio}`, 10, 30);
  pdf.text(`Monto de Crédito: ${datosOrden.monto_credito}`, 10, 40);
  pdf.text(`Fecha de Emisión: ${datosOrden.fecha_solicitud}`, 10, 50);
  pdf.text(`Fecha de Vencimiento: ${datosOrden.fecha_vencimiento}`, 10, 60);

  // Guarda o descarga el PDF
  pdf.output('dataurlnewwindow');
};