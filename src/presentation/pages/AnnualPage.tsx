import { calculateAnnual, type SimulationData, formatMoney } from "../../utils/finance";

interface Props {
  datos: SimulationData;
}

export default function AnnualPage({ datos }: Props) {

  const projection = calculateAnnual(
    datos.deposit,
    datos.rate,
    datos.years
  );

  return (
    <div className="w-full">

      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        Proyección Anual
      </h2>


      <div className="overflow-x-auto bg-white rounded-xl shadow-md">

        <table className="w-full text-left">

          <thead className="bg-slate-800 text-white">

            <tr>

              <th className="p-3">
                Año
              </th>


              <th className="p-3">
                Saldo acumulado
              </th>


              <th className="p-3">
                Interés generado
              </th>

            </tr>

          </thead>


          <tbody>

            {projection.map((item) => (

              <tr 
                key={item.year}
                className="border-b"
              >

                <td className="p-3">
                  {item.year}
                </td>


                <td className="p-3">
                  {formatMoney(item.saldo)}
                </td>


                <td className="p-3 text-green-600 font-semibold">
                  + {formatMoney(item.interest)}
                </td>


              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}