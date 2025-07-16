import React from "react";
import "../PDFCotizacionTemplate.css";

const PDFCotizacionTemplate = React.forwardRef(({ productMap, total }, ref) => {
  return (
    <>
      
    <div ref={ref} className="pdf-cotizacion-root">
    <div className="pdf_header">
        <img className="pdf-logo" src="../logo-dgasa.png" alt="Company Logo" />
    </div>
      <div className="pdf-contact-info">
        <p><span style={{ fontWeight: "bold" }}> Telefono:</span> 0241-4523236</p>
        <p><span style={{ fontWeight: "bold" }}>Email:</span> info@dgasa.com</p>
      </div>
      <table className="pdf-cotizacion-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Tipo</th>
            <th>Cantidad</th>   
            <th>Unidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {productMap.map((prod) => {
            const unitPrice = Number(prod.price) || 0;
            const totalPrice = prod.qty * unitPrice;
            return (
              <tr key={prod.key}>
                <td>{prod.label}</td>
                <td>{prod.type}</td>
                <td>{prod.qty}</td>
                <td>{prod.unit}</td>
                <td>${unitPrice.toFixed(2)}</td>
                <td>${totalPrice.toFixed(2)}</td>
              </tr>
            );
          })}
          <tr className="pdf-cotizacion-total-row">
            <td colSpan={5}>TOTAL</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="pdf-cotizacion-footer">
        <div>Esta cotización es válida por 30 días.</div>
        <div>Para comprar, visita <a href="https://clientes.atmagenciadigital.com/dgasa/tienda/">nuestra tienda</a> o contacta a un asesor.</div>
        <div>¡Gracias por confiar en nosotros!</div>
      </div>
    </div>
    </>
  );
});

export default PDFCotizacionTemplate;