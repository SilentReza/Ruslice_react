// hook
import {useEffect} from "react";
// navigate
import {useNavigate} from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/');
        console.log('salam')
    });
    return (
        <></>
    )
}

export default Redirect