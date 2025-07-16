import React from "react";

const TableMock = () => {
  const productLabels = [
    "ENERGIZADOR",
    "ALAMBRE GALVANIZADO",
    "ESTANTILLOS",
    "AISLADOR DE ESQUINA",
    "AISLADOR DE PASO",
    "LLAVE TENSORA",
    "CABLE DE ALTA TENSIÓN",
    "BARRAS DE TIERRA",
    "SWITCH CORTA CORRIENTE",
    "KIT PARA FALSO TIPO BUNGEE",
    "VOLTÍMETRO DE LUCES",
    "CUCHILLA DE DOBLE TIRO",
  ];

  return (
    <div>
    <table className="table-results">
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
        {productLabels.map((label, index) => (
          <tr key={index}>
            <td>{label}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
    <button disabled={true} className="btn-download-pdf">
        Descargar PDF
    </button>
    </div>
  );
};

export default TableMock;