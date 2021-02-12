import React, { useState, useEffect } from 'react';

export default function Profile() {

    const [comentarios, setComentarios] = useState([]);

    function getComentario() {
        async function showComentarios() {
            const url = "http://localhost:4444/usuarios";
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
            <p>Em construção</p>
        </div>
    );
}