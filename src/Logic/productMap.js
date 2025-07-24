import { PRODUCT_ID_MAP } from "./productIdMap";

export function getProductMap(quantities) {
  return [
    {
      key: "energizador",
      label: "ENERGIZADOR",
      type: quantities.energizador ? `${quantities.energizador}` : "",
      id: PRODUCT_ID_MAP.energizador[quantities.energizador] ?? null,
      unit: "UNIDAD",
      qty: 1,
    },
    {
      key: "cantidadAlambre",
      label: "ALAMBRE GALVANIZADO",
      type: quantities.calibreAlambre ? `CAL ${quantities.calibreAlambre}` : "",
      id: PRODUCT_ID_MAP.cantidadAlambre[`CAL ${quantities.calibreAlambre}`] ?? null,
      unit: "ROLLOS",
      qty: Math.ceil(quantities.cantidadAlambre),
    },
    {
      key: "cuchilla",
      label: "CUCHILLA DE DOBLE TIRO",
      type: "",
      id: PRODUCT_ID_MAP.cuchilla.default,
      unit: "UNIDAD",
      qty: 1,
    },
    {
      key: "pararrayosGenerico",
      label: "PARARRAYOS GENÉRICO",
      type: "",
      id: PRODUCT_ID_MAP.pararrayosGenerico.default,
      unit: "UNIDAD", 
      qty: 1,
    },
    {
      key: "cableAislador",
      label: "CABLE DE ALTA TENSIÓN",
      type: "",
      id: PRODUCT_ID_MAP.cableAislador.default,
      unit: "ROLLOS",
      qty: Math.ceil(quantities.cableAislador),
    },
    {
      key: "estantillos",
      label: "ESTANTILLOS",
      type: "",
      id: PRODUCT_ID_MAP.estantillos.default,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.estantillos),
    },
     {
      key: "cantidadBarras",
      label: "BARRAS DE TIERRA DE",
      type: quantities.largoBarraCopperweld ? `${quantities.largoBarraCopperweld} METROS` : "",
      id:
        PRODUCT_ID_MAP.cantidadBarras[`${quantities.largoBarraCopperweld} METROS`] ??
        PRODUCT_ID_MAP.cantidadBarras.default,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.cantidadBarras),
    },
    {
      key: "aislador",
      label: "AISLADOR DE"+ ` ${quantities.tipoAislador}`,
      type: "",
      id: PRODUCT_ID_MAP.aislador[quantities.tipoAislador] ?? null,
      unit: "PAQUETE",
      qty: quantities.tipoAislador ==='PASO'? Math.ceil(quantities.aisladorDePaso): Math.ceil(quantities.aisladorPuntilla),
    },
    {
      key: "AisladorEsquinilla",
      label: "AISLADOR DE ESQUINA",
      type: "",
      id: PRODUCT_ID_MAP.AisladorEsquinilla.default,
      unit: "PAQUETE",
      qty: Math.ceil(quantities.AisladorEsquinilla),
    },
    
    {
      key: "cantidadTensores",
      label: "LLAVE TENSORA",
      type: "",
      id: PRODUCT_ID_MAP.llaveTensora.default,
      unit: "UNIDAD",
      qty: 1,
    },
    {
      key: "tensorTipo",
      label: "TENSOR TIPO",
      type: (() => {
        if (quantities.tipoTensor === "PEQUEÑO") return "LINEA 300 METROS";
        if (quantities.tipoTensor === "GRANDE") return " LINEA 500 METROS";
        if (quantities.tipoTensor === "AISLADOR") return "AISLADOR 1500 METROS";
        return null;
      })(),
      id: PRODUCT_ID_MAP.tensor[quantities.tipoTensor] ?? null,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.cantidadTensores), // Assuming qty is 1 for this entry
    },
    {
      key: "numeroKitFalsos",
      label: "KIT PARA FALSO TIPO BUNGEE",
      type: "",
      id: PRODUCT_ID_MAP.numeroKitFalsos.default,
      unit: "UNIDAD",
      qty: quantities.numeroKitFalsos,
    },
    {
      key: "switches",
      label: "SWITCH CORTA CORRIENTE",
      type: "",
      id: PRODUCT_ID_MAP.switches.default,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.switches),
    },
    
    {
      key: "voltimetro",
      label: "VOLTÍMETRO DE LUCES",
      type: "",
      id: PRODUCT_ID_MAP.voltimetro.default,
      unit: "UNIDAD",
      qty: 1,
    }
 
  ];
}