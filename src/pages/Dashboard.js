import { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import useAxios from "../hooks/useAxios";

const Dashboard = () => {

    const [data, setData] = useState();
    const httpRequest = useAxios();

    // useEffect(() =>{
    //     httpRequest(
    //         {url:'api/form-test', method: 'GET'}
    //     ).then(response =>{setData(response.payload.data)})
    //     .catch(error =>{ console.log(error) })
    // },[])
   
    return ( 
        <div className="container">
            {data && <Form data={data} />}
        </div>
     );
}
 
export default Dashboard;