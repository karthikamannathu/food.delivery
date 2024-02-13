
import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
console.log (err);
    return (
<div>
<h1>Oops!!!
    </h1>
    <br/>
    <h2>Somting is wrong!!</h2>{err.status+" : " +err.statusText}</div>
    )
}
export default Error;