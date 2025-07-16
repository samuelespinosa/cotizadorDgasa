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
      key: "estantillos",
      label: "ESTANTILLOS",
      type: "",
      id: PRODUCT_ID_MAP.estantillos.default,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.estantillos),
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
      key: "aisladorDePaso",
      label: "AISLADOR DE PASO",
      type: "",
      id: PRODUCT_ID_MAP.aisladorDePaso.default,
      unit: "PAQUETE",
      qty: Math.ceil(quantities.aisladorDePaso),
    },
    {
      key: "cantidadTensores",
      label: "LLAVE TENSORA",
      type: "",
      id: PRODUCT_ID_MAP.cantidadTensores.default,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.cantidadTensores),
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
      key: "cantidadBarras",
      label: "BARRAS DE TIERRA",
      type: quantities.largoBarraCopperweld ? `${quantities.largoBarraCopperweld} METROS` : "",
      id:
        PRODUCT_ID_MAP.cantidadBarras[`${quantities.largoBarraCopperweld} METROS`] ??
        PRODUCT_ID_MAP.cantidadBarras.default,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.cantidadBarras),
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
      key: "numeroKitFalsos",
      label: "KIT PARA FALSO TIPO BUNGEE",
      type: "",
      id: PRODUCT_ID_MAP.numeroKitFalsos.default,
      unit: "UNIDAD",
      qty: Math.ceil(quantities.numeroKitFalsos),
    },
    {
      key: "voltimetro",
      label: "VOLTÍMETRO DE LUCES",
      type: "",
      id: PRODUCT_ID_MAP.voltimetro.default,
      unit: "UNIDAD",
      qty: 1,
    },
    {
      key: "cuchilla",
      label: "CUCHILLA DE DOBLE TIRO",
      type: "",
      id: PRODUCT_ID_MAP.cuchilla.default,
      unit: "UNIDAD",
      qty: 1,
    }
  ];
}