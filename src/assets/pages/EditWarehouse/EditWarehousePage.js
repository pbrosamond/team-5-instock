// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import data from '../../data/warehouses.json';


const EditWarehousePage = () => {
    const warehouse = data[0];
    const [currentWarehouse, setWarehouse] = useState(warehouse)
    // const { warehouseID } = useParams()
    console.log(warehouse);


    return (
        <>
        <form>
    

        </form>
        
        </>
       
    )

}

export default EditWarehousePage
