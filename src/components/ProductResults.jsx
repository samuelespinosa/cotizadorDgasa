import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import PDFCotizacionTemplate from "./PDFCotizacionTemplate";

export default function ProductResults({ productMap }) {
  const pdfRef = useRef();
  const [loading, setLoading] = useState(false); // Loading state

  let total = 0;
  productMap.forEach((prod) => {
    total += (Number(prod.price) || 0) * prod.qty;
  });

  const handleDownloadPDF = () => {
    setLoading(true); // Set loading to true when PDF generation starts
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4"
    });
    doc.html(pdfRef.current, {
      callback: function (doc) {
        doc.save("cotizacion.pdf");
        setLoading(false); // Set loading to false after PDF is saved
      },
      margin: 0, // reduced margins for more space
      autoPaging: true,
      x: 0,
      y: 0,
      width: 595 // match compact CSS
    });
  };

  return (
    <div>
      <div style={{ display: "none" }}>
        <PDFCotizacionTemplate ref={pdfRef} productMap={productMap} total={total} />
      </div>
      {/* Visible table as before */}
      
      <table className="table-results">
        <thead>
          <tr>
            <th>PRODUCTO</th>
            <th>TIPO</th>
            <th>CANTIDAD</th>
            <th>UNIDAD</th>
            <th>PRECIO UNITARIO</th>
            <th>PRECIO TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {productMap.map((prod, idx) => {
            const unitPrice = Number(prod.price) || 0;
            const totalPrice = prod.qty * unitPrice;
            return (
              <tr key={prod.key}>
                <td>{prod.label}</td>
                <td>{prod.type}</td>
                <td>{prod.qty}</td>
                <td>{prod.unit}</td>
                <td>${unitPrice}</td>
                <td>${totalPrice}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={5} style={{ textAlign: "right", fontWeight: "bold" }}>TOTAL</td>
            <td style={{ fontWeight: "bold" }}>${total}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleDownloadPDF} disabled={!productMap.length || loading} className="btn-download-pdf">
        {loading ? "Cargando..." : "Descargar PDF"}
      </button>
    </div>
  );
}