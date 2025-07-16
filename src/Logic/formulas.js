export const calculateQuantities = (data) => {
  const area = parseFloat(data.tamanoFinca) || 0;
  const hilos = parseInt(data.numHilos) || 1;
  const potreros = parseInt(data.numPotreros) || 1;
  const energizador = determineEnergizer(area, data.tipoFuente);
  const estantillos = calculateEstantillos(area, data.tipoDeTerreno, potreros);
  const candtidadTensores = calculateCantidadTensores(hilos, potreros);
  const alambrePorPotrero = calculateAlambrePorPotrero(hilos, data.calibreAlambre);
  const alambreSegunHectarea = calculateAlambreSegunHectarea(area, data.calibreAlambre);
  const totalAlambre = (alambreSegunHectarea + alambrePorPotrero) * hilos;
  return {
    areaACercar: area,
    energizador:data.tipoFuente + " " + energizador,
    cantidadAlambre: totalAlambre,
    numeroTramos: calculateNumeroTramos(area, data.tipoTensor),
    cantidadTensores: candtidadTensores,
    AisladorEsquinilla: calculateAisladorEsquinilla(potreros, candtidadTensores, data.tipoTensor),
    estantillos,
    aisladorDePaso: calculateAisladorDePaso(estantillos, hilos),
    aisladorPuntilla: calculateAisladorPuntilla(estantillos, hilos),
    cableAislador: calculateCableAislador(potreros),
    switches: Math.ceil(hilos / 2),
    largoBarraCopperweld: calculateLargoBarraCopperweld(data.tipoDeSuelo),
    cantidadBarras: calculateCantidadBarras(energizador),
    numeroKitFalsos: potreros * 1.2,
    alambreSegunHectarea,
    alambrePorPotrero,
    alambrePorHilo: hilos,
    calibreAlambre: data.calibreAlambre,
    totalAlambre,
  };
};

const calculateAisladorPuntilla = (estantillos, hilos) => {
    return Math.ceil(estantillos * hilos / 100);
}
const calculateLargoBarraCopperweld = (terreno) => {
    return terreno === "SECO" ? 1.8 : 1.5;
};

const determineEnergizer = (area, tipoFuente) => {
  const energizerMap = {
    "110AC": [
      { maxArea: 10, value: "10 KM" },
      { maxArea: 50, value: "50 KM" },
      { maxArea: 120, value: "120 KM" },
    ],
    "12V": [
      { maxArea: 30, value: "30 KM" },
      { maxArea: 50, value: "50 KM" },
      { maxArea: 80, value: "80 KM" },
      { maxArea: 120, value: "120 KM" },
      { maxArea: 200, value: "200 KM" },
      { maxArea: 300, value: "300 KM" },
    ],
    "110AC/12V": [
      { maxArea: 50, value: "50 KM" },
      { maxArea: 80, value: "80 KM" },
      { maxArea: 150, value: "150 KM" },
      { maxArea: 200, value: "200 KM" },
    ],
    "KIT12V CON PANEL SOLAR": [
      { maxArea: 30, value: "30 KM" },
      { maxArea: 50, value: "50 KM" },
      { maxArea: 80, value: "80 KM" },
      { maxArea: 120, value: "120 KM" },
      { maxArea: 200, value: "200 KM" },
      { maxArea: 300, value: "300 KM" },
      { maxArea: Infinity, value: "500 KM" },
    ],
    "KIT110AC/12V CON PANEL SOLAR": [
      { maxArea: 50, value: "50 KM" },
      { maxArea: 80, value: "80 KM" },
      { maxArea: 150, value: "150 KM" },
      { maxArea: 200, value: "200 KM" },
    ],
  };

  const options = energizerMap[tipoFuente] || [];
  for (const option of options) {
    if (area <= option.maxArea) {
      return option.value;
    }
  }
  return "";
};

const calculateAlambreSegunHectarea = (area, calibreAlambre) => {
  if (area < 1) return 0;
  if (area <= 5) return 1;
  if (["12", "14"].includes(calibreAlambre)) {
    return area < 20 ? 2 : Math.floor((area - 20) / 20 + 3);
  } else if (calibreAlambre === "13") {
    return area < 30 ? 2 : Math.floor((area - 30) / 30 + 3);
  }
  return 0;
};

const calculateNumeroTramos = (area, tipoTensor) => {
  const tensorDivisors = {
    "PEQUEÑO": 250,
    "GRANDE": 500,
    "AISLADOR": 1000,
  };
  const divisor = tensorDivisors[tipoTensor] || 1;
  return Math.ceil((area * 100) / divisor);
};

const calculateCantidadTensores = (hilos, potreros) => {
  return hilos * 4 * potreros;
};

const calculateAisladorEsquinilla = (potreros, cantidadTensores, tipoTensor) => {
  
  let baseEsquinilla;
  switch (tipoTensor) {
    case "PEQUEÑO":
    case "GRANDE":
      baseEsquinilla = Math.ceil((cantidadTensores * 2) / 50);
      break;
    case "AISLADOR":
      baseEsquinilla = Math.ceil((cantidadTensores * 1) / 50);
      break;
    default:
      baseEsquinilla = 44;
  }
  return Math.ceil(baseEsquinilla + ((potreros * 8) / 50));
};

const calculateEstantillos = (area, terreno, potreros) => {
  let divisor;
  switch (terreno) {
    case "PLANO":
      divisor = 15;
      break;
    case "SEMIPLANO":
      divisor = 8;
      break;
    case "INCLINADO":
      divisor = 5;
      break;
    case "APRISCO":
      divisor = 2;
      break;
    default:
      divisor = 0;
  }

  const baseEstantillos = divisor ? (area * 100) / divisor : 0;
  return Math.ceil(baseEstantillos + potreros * 27);
};

const calculateAisladorDePaso = (estantillos, hilos) => {
  return Math.ceil(estantillos * hilos / 50);
};

const calculateCableAislador = (potreros) => {
  return Math.ceil((potreros * 6 + 30) / 50);
};

const calculateCantidadBarras = (energizador) => {
  switch (energizador) {
    case "10 KM":
    case "30 KM":
      return 5;
    case "50 KM":
      return 6;
    case "80 KM":
    case "120 KM":
      return 7;
    case "150 KM":
      return 8;
    case "200 KM":
      return 9;
    case "300 KM":
      return 10;
    case "500 KM":
      return 12;
    default:
      return 0;
  }
};

const calculateAlambrePorPotrero = (hilos, calibreAlambre) => {
  if (["12", "14"].includes(calibreAlambre)) {
    return Math.floor(hilos / 3);
  } else if (calibreAlambre === "13") {
    return Math.floor(hilos / 4);
  }
  return 0;
};