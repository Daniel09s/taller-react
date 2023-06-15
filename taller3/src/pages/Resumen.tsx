import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";


const Resumen = ()=>{

    const dispatch = useDispatch();
    const selector = useSelector(state=>state);

    const datosRegistrados = Object.entries(selector);
    const navigate = useNavigate();

    return(
        <div className="container text-center">
            <h4>Datos Registrados: </h4>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Datos</th>
                            <th scope="col">Datos Diligenciados</th>
                        </tr>
                    </thead>
                

            {
                datosRegistrados.map(([key, value])=>{
                    return(
                            <tbody>
                                <tr>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            </tbody>
                    )
                })
            }
                </table>

                <button className="btn btn-primary text-center" onClick={ ()=>{
                    alert("Datos enviados")
                    navigate("/finapp")
                }}
                style={{padding: '5px', marginRight: '5px'}}
                >Enviar Datos
                </button>

                <button className="btn btn-primary text-center" onClick={ ()=>{
                    navigate("/paso1")
                }}
                style={{padding: '5px'}}
                >Modificar Datos
                </button>

        </div>
    )
}

export default Resumen;