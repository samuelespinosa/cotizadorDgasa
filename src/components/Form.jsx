import { useForm } from "react-hook-form";
import { calculateQuantities } from "../Logic/formulas";

export default function FormCotizacion({ onCotizar }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    const cantidades = calculateQuantities(data);
    onCotizar({ cantidades, formData: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form form_ctz">
      <h3>Diligencie Los Siguientes datos:</h3>
      <div className="item_ctz">
        <label>1. Tipo de cerca eléctrica ganadera</label>
        <select id="tipoDeCerca" defaultValue="" {...register("tipoDeCerca", { required: "Seleccione el tipo de cerca" })}>
          <option value="" disabled>Seleccione el tipo de cerca</option>
          <option value="MOVIL">Móvil</option>
          <option value="FIJA">Fija</option>
          <option value="MIXTA">Mixta</option>
        </select>
        {errors.tipoDeCerca && <span className="error">{errors.tipoDeCerca.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>2. Tamaño de la finca (Ha) </label>
        <input type="number" id="tamanoFinca" {...register("tamanoFinca", { required: "Ingrese el tamaño de la finca", min: { value: 1, message: "El tamaño debe ser mayor que 0" }, max:{ value: 1000, message: "El tamaño debe ser menor que 1000" } })} placeholder="Tamaño de la Finca (ha)"
        />
        {errors.tamanoFinca && <span className="error">{errors.tamanoFinca.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>3. Tipo de Terreno</label>
        <select id="tipoDeTerreno" defaultValue="" {...register("tipoDeTerreno", { required: "Seleccione el tipo de terreno" })}>
          <option value="" disabled>Seleccione el tipo de terreno</option>
          <option value="PLANO">Plano</option>
          <option value="SEMIPLANO">Semiplano</option>
          <option value="INCLINADO">Inclinado</option>
          <option value="APRISCO">Aprisco</option>
        </select>
        {errors.tipoDeTerreno && <span className="error">{errors.tipoDeTerreno.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>4. Energía de entrada</label>
        <select id="tipoFuente" defaultValue="" {...register("tipoFuente", { required: "Seleccione Energías de entrada" })}>
          <option value="" disabled>Seleccione el tipo de fuente</option>
          <option value="110AC">110AC</option>
          <option value="12V">12V</option>
          <option value="110AC/12V">110AC/12V</option>
          <option value="KIT12V CON PANEL SOLAR">KIT12V CON PANEL SOLAR</option>
          <option value="KIT110AC/12V CON PANEL SOLAR">KIT110AC/12V CON PANEL SOLAR</option>
        </select>
        {errors.tipoFuente && <span className="error">{errors.tipoFuente.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>5. Tipo de suelo</label>
        <select id="tipoDeSuelo" defaultValue="" {...register("tipoDeSuelo", { required: "Seleccione el tipo de suelo" })}>
          <option value="" disabled>Seleccione el tipo de suelo</option>
          <option value="SECO">Seco</option>
          <option value="HUMEDO">Húmedo</option>
        </select>
        {errors.tipoDeSuelo && <span className="error">{errors.tipoDeSuelo.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>6. Número de hilos de la cerca</label>
        <input type="number" id="numHilos" {...register("numHilos", { required: "Ingrese el número de hilos", min: { value: 1, message: "Debe haber al menos 1 hilo" } , max: { value: 5, message: "El número máximo de hilos es 5" } })} placeholder="Seleccione el número de hilos de la cerca" />
        {errors.numHilos && <span className="error">{errors.numHilos.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>7. Alambre Triple galvanizado</label>
        <select id="calibreAlambre" defaultValue="" {...register("calibreAlambre", { required: "Seleccione el calibre del alambre" })}>
          <option value="" disabled>Seleccione el calibre del alambre</option>
          <option value="12">Cal 12</option>
          <option value="13">Cal 13</option>
          <option value="14">Cal 14</option>
        </select>
        {errors.calibreAlambre && <span className="error">{errors.calibreAlambre.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>8. Tipo de aislador interno</label>
        <select id="tipoAislador" defaultValue="" {...register("tipoAislador", { required: "Seleccione el tipo de aislador" })}>
          <option value="" disabled>Seleccione el tipo de aislador</option>
          <option value="PASO">Paso</option>
          <option value="PUNTILLA">Puntilla</option>
        </select>
        {errors.tipoAislador && <span className="error">{errors.tipoAislador.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>9. Tipo de tensor</label>
        <select id="tipoTensor" defaultValue="" {...register("tipoTensor", { required: "Seleccione el tipo de tensor" })}>
          <option value="" disabled>Seleccione el tipo de tensor</option>
          <option value="PEQUEÑO">Tensor Pequeño</option>
          <option value="GRANDE">Tensor Grande</option>
          <option value="AISLADOR">Tensor Con Aislador</option>
        </select>
        {errors.tipoTensor && <span className="error">{errors.tipoTensor.message}</span>}
      </div>
      
      <div className="item_ctz">
        <label>10. Número de potreros</label>
        <input type="number" id="numPotreros" {...register("numPotreros", { required: "Ingrese el número de potreros", min: { value: 1, message: "Debe haber al menos 1 potrero" } })} placeholder="Seleccione el número de potreros" />
        {errors.numPotreros && <span className="error">{errors.numPotreros.message}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting} className="btn-submit">Calcular Cotización</button>
    </form>
  );
}