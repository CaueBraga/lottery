import { useEffect, useState } from "react";
import imgURL from "./assets/Sidebar.svg";
import imgURLogo from "./assets/Logo_Sena.svg";
import { Dropdown } from "./components/Dropdown";
import { Ball } from "./components/Ball";
import axios from "axios";

function App() {
  const [lotos, setLotos] = useState<any>([]);
  const [concursos, setConcursos] = useState<any>([]);
  const [selectedLotoId, setSelectedLotoId] = useState<any>();
  const [numbers, setNumbers] = useState<any>([]);

  useEffect(() => {
    const callApi = async () => {
      // {loteriaId: 1, concursoId: '5534'}
      const concurso = concursos.find(
        (element: any) => element.loteriaId === selectedLotoId
      );

      const response = await axios(
        `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${concurso.concursoId}`
      );
      console.log("setando numbers: ", response.data.numeros);
      setNumbers(response.data.numeros);
    };

    if (selectedLotoId || selectedLotoId === 0) {
      callApi();
    }
  }, [selectedLotoId]);

  useEffect(() => {
    const callApi = async () => {
      const responseLotos = await axios(
        "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
      );
      setLotos(responseLotos.data);
      const responseConcursos: any = await axios(
        "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos/"
      );
      setConcursos(responseConcursos.data);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <div className="bg-[url('./assets/Sidebar.svg')] w-1/3 h-screen bg-right flex flex-col justify-between items-baseline pt-20 pb-20 pl-20">
        <Dropdown setSelectedLotoId={setSelectedLotoId} lotos={lotos} />

        <div className="flex  justify-center items-center gap-4 uppercase text-white font-bold text-3xl ">
          <img src={imgURLogo} alt="" />
          <div>{lotos[selectedLotoId].nome}</div>
        </div>

        <div className="uppercase text-white  ">
          <div className="text-sm ">concurso</div>
          <div className="text-xl ">4531 - 07/04/2020</div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex gap-8 font-bold text-2xl ml-20">
          {numbers.length > 0 && <Ball numbers={numbers} />}
        </div>
      </div>
    </div>
  );
}

export default App;
