import React,{useEffect} from"react";
import {Link} from"react-router-dom";
import {initPowerStations} from "../redux/actions/powerStationAction";
import {useDispatch, useSelector} from "react-redux";
const PowerStation = () => {
    const powerStations =useSelector((state) => state.powerStationReducer.powerStations)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initPowerStations())
    }, []);
    return(
        <div>
            <h1>PowerStation Server c fasf  faase fadsf adfasf adfasf</h1>
            <h1>PowerStation Server c fasf  faase fadsf adfasf adfasf</h1>
            <Link to={'/'}>DashBoard</Link>
            {powerStations.length==0 && <p>Loading</p>}
            {
                powerStations.map((item, index) => (
                    <h1>{item.name}</h1>
                ))}
        </div>
    )
}
export  default PowerStation
