import { useForm } from "react-hook-form";
import { calculateQuantities } from "../Logic/formulas";

export default function FormCotizacion({ onCotizar }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    const cantidades = calculateQuantities(data);
    onCotizar({ cantidades, formData: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <select id="tipoDeCerca" {...register("tipoDeCerca", { required: "Seleccione el tipo de cerca" })}>
        <option value="" disabled selected hidden>Seleccione el tipo de cerca</option>
        <option value="MOVIL">Móvil</option>
        <option value="FIJA">Fija</option>
        <option value="MIXTA">Mixta</option>
      </select>
      {errors.tipoDeCerca && <span className="error">{errors.tipoDeCerca.message}</span>}

      <input
        type="number"
        id="tamanoFinca"
        {...register("tamanoFinca", { required: "Ingrese el tamaño de la finca", min: { value: 1, message: "El tamaño debe ser mayor que 0" }, max:{ value: 1000, message: "El tamaño debe ser menor que 1000" } })}
        placeholder="Tamaño de la Finca (ha)"
      />
      {errors.tamanoFinca && <span className="error">{errors.tamanoFinca.message}</span>}

      <select id="tipoDeTerreno" {...register("tipoDeTerreno", { required: "Seleccione el tipo de terreno" })}>
        <option value="" disabled selected hidden>Seleccione el tipo de terreno</option>
        <option value="PLANO">Plano</option>
        <option value="SEMIPLANO">Semiplano</option>
        <option value="INCLINADO">Inclinado</option>
        <option value="APRISCO">Aprisco</option>
      </select>
      {errors.tipoDeTerreno && <span className="error">{errors.tipoDeTerreno.message}</span>}

      <select id="tipoFuente" {...register("tipoFuente", { required: "Seleccione el tipo de fuente" })}>
        <option value="" disabled selected hidden>Seleccione el tipo de fuente</option>
        <option value="110AC">110AC</option>
        <option value="12V">12V</option>
        <option value="110AC/12V">110AC/12V</option>
        <option value="KIT12V CON PANEL SOLAR">KIT12V CON PANEL SOLAR</option>
        <option value="KIT110AC/12V CON PANEL SOLAR">KIT110AC/12V CON PANEL SOLAR</option>
      </select>
      {errors.tipoFuente && <span className="error">{errors.tipoFuente.message}</span>}

      <select id="tipoDeSuelo" {...register("tipoDeSuelo", { required: "Seleccione el tipo de suelo" })}>
        <option value="" disabled selected hidden>Seleccione el tipo de suelo</option>
        <option value="SECO">Seco</option>
        <option value="HUMEDO">Húmedo</option>
      </select>
      {errors.tipoDeSuelo && <span className="error">{errors.tipoDeSuelo.message}</span>}

      <input
        type="number"
        id="numHilos"
        {...register("numHilos", { required: "Ingrese el número de hilos", min: { value: 1, message: "Debe haber al menos 1 hilo" } , max: { value: 5, message: "El número máximo de hilos es 5" } })}
        placeholder="Número de Hilos"
      />
      {errors.numHilos && <span className="error">{errors.numHilos.message}</span>}

      <select id="calibreAlambre" {...register("calibreAlambre", { required: "Seleccione el calibre del alambre" })}>
        <option value="" disabled selected hidden>Seleccione el calibre del alambre</option>
        <option value="12">Cal 12</option>
        <option value="13">Cal 13</option>
        <option value="14">Cal 14</option>
      </select>
      {errors.calibreAlambre && <span className="error">{errors.calibreAlambre.message}</span>}

      <select id="tipoAislador" {...register("tipoAislador", { required: "Seleccione el tipo de aislador" })}>
        <option value="" disabled selected hidden>Seleccione el tipo de aislador</option>
        <option value="PASO">Paso</option>
        <option value="PUNTILLA">Puntilla</option>
      </select>
      {errors.tipoAislador && <span className="error">{errors.tipoAislador.message}</span>}

      <select id="tipoTensor" {...register("tipoTensor", { required: "Seleccione el tipo de tensor" })}>
        <option value="" disabled selected hidden>Seleccione el tipo de tensor</option>
        <option value="PEQUEÑO">Tensor Pequeño</option>
        <option value="GRANDE">Tensor Grande</option>
        <option value="AISLADOR">Tensor Con Aislador</option>
      </select>
      {errors.tipoTensor && <span className="error">{errors.tipoTensor.message}</span>}

      <input
        type="number"
        id="numPotreros"
        {...register("numPotreros", { required: "Ingrese el número de potreros", min: { value: 1, message: "Debe haber al menos 1 potrero" } })}
        placeholder="Número de Potreros"
      />
      {errors.numPotreros && <span className="error">{errors.numPotreros.message}</span>}

      <button type="submit" disabled={isSubmitting} className="btn-submit">Calcular Cotización</button>
    </form>
  );
}