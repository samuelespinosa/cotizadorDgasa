import React, { useState, useEffect } from "react";
import ProductResults from "./components/ProductResults";
import FormCotizacion from "./components/Form";
import Steps from "./components/Steps"; // Import the new component
import { getProductMap } from "./Logic/productMap";
import './App.css';
import { useDataContext } from "./dataContext";

export default function App() {
  const [cotizacion, setCotizacion] = useState(null);
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(false);
  const data = useDataContext();
  console.log("Data from context:", data);

  useEffect(() => {
    if (!cotizacion) return;
    const productMap = getProductMap(cotizacion.cantidades);
    const ids = productMap.map((prod) => prod.id).filter(Boolean);

    if (!ids.length) return;

    // Try to get cached prices from localStorage
    const cachedPrices = JSON.parse(localStorage.getItem("productPrices") || "{}");
    const missingIds = ids.filter(id => !(id in cachedPrices));

    if (missingIds.length === 0) {
      setPrices(cachedPrices);
      return;
    }

    setLoading(true);
    fetch(`${data.siteUrl}/wp-json/custom/v1/products?ids=${missingIds.join(',')}`)
      .then((res) => res.json())
      .then((data) => {
        const newPrices = { ...cachedPrices };
        data.forEach((item) => {
          newPrices[item.id] = item.price;
        });
        localStorage.setItem("productPrices", JSON.stringify(newPrices));
        setPrices(newPrices);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [cotizacion]);

  const productMap = cotizacion ? getProductMap(cotizacion.cantidades) : [];
  return (
    <div className="cotization-container">
      <FormCotizacion onCotizar={setCotizacion} />
      {cotizacion ? (
        loading ? (
          <div style={{ textAlign: "center", display:"flex", placeItems:"center", height:"100vh", placeContent:"center"}}>Cargando precios...</div>
        ) : (
          <ProductResults productMap={productMap.map(prod => ({
            ...prod,
            price: prices[prod.id] || 0
          }))} tipoCerca={cotizacion.formData.tipoDeCerca} />
        )
      ) : (
        <Steps /> // Render the TableMock component when no cotizacion
      )}
    </div>
  );
}