import React, { useState, useEffect, lazy, Suspense } from 'react';
// import Allproducts from '../../components/Allproducts'
import mail from '../Products/assets/mail.png';
const Allproducts = lazy(() => import('../../components/Allproducts'))
// const FormRegister = lazy(() => import('../../components/FormRegister'))



export default function Products() {

    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState([]);

    function getProdutos() {
        async function showProdutos() {
            const url = "http://localhost:4444/products";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setProdutos(resultado);
        }
        showProdutos();
    }

    useEffect(() => { getProdutos() }, []);

    useEffect(() => { }, [produtos]);

    function selectCategoria(e) {
        setCategoria("");
        setCategoria(e.target.value)
        return (console.log(categoria))
    }

    return (
        <div className="container-fluid">

            <h3 className="text-white">Products</h3>

            <div className="row text-white">

                <div className="col-sm-2">
                    <h3 >Categories</h3>
                    <ul className="list-group">
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value=''>All(12)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value='heavymetal'>Heavy Metal(3)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value='blackmetal'>Black Metal(1)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value='thrashmetal'>Thrash Metal(4) </button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value='progressivemetal'>Progressive Rock(1) </button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value='folkmetal'>Folk Metal (1)</button>
                        <button className="list-group-item list-group-item-action" onClick={selectCategoria} value='hardrock'>Hard Rock (2)</button>
                    </ul>

                </div>
 
                 <div className="col-sm-10">

                <Suspense fallback={<h2 style={{color:'black'}} >Caregando...</h2>}>
                    <Allproducts dados={categoria} />
                </Suspense>

                </div>
            </div>
        </div>
    );
}
