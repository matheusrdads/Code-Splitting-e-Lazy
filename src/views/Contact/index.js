import React, { useState, useEffect, lazy, Suspense } from 'react';
import mail from '../Products/assets/mail.png';
import whatsapp from '../Products/assets/whatsapp.png';
const FormRegister = lazy(() => import('../../components/FormRegister'))

export default function Contact() {

    const [comentarios, setComentarios] = useState([]);

    function getComentario() {
        async function showComentarios() {
            const url = "http://localhost:4444/comments";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setComentarios(resultado);

        }
        showComentarios();
    }

    useEffect(() => { getComentario() }, []);

    useEffect(() => { }, [comentarios]);

    return (
        <div className="container-fluid">

            <h3 className="text-white">Products</h3>

            <h2>Contacts</h2>
            <hr />
            <div className="container">

                <div className="row container-fluid">

                    <div className="col-6 ">
                        <img alt="" src={mail} />
                        <font>contact@fullstackmusic.com</font>

                    </div>
                    <div className="col-6">
                        <img alt="" src={whatsapp} />
                        <font>+1 876-999-9999</font>
                    </div>

                </div>
            </div>

            <Suspense fallback={<h2>Caregando...</h2>}>
                <FormRegister />
            </Suspense>


            <div className="text-white comments">
                <div className="col-sm-9">

                    {comentarios && comentarios.map(row => {
                        if (row.productname === null) {
                            return (
                                <div className="text-dark" key={row.id}>  Usuário: {row.nome} <br />
                                                                    Mensagem: {row.msg}  <hr />
                                    {/* Data: {row.date} <hr /> */}

                                </div>
                            )

                        } else {
                            return (
                                <div className="text-dark" key={row.id}>  Usuário: {row.nome} <br />
                                                                    Mensagem: {row.msg}  <hr />
                                    {/* Produto: {row.productname} <br /> */}
                                    {/* Data: {row.date} <hr /> */}

                                </div>
                            )
                        }
                    })
                    }
                </div>
            </div>
        </div>
    );
}