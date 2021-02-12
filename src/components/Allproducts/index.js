import React, { useState, useEffect } from 'react';

export default function Allproducts(props) {

  const [produtos, setProdutos] = useState([]);

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


  return (
    <div className="products_c">
      {produtos && produtos.map(row => {

        if (props.dados === row.categories) {
          return (
            <div className="box_products text-dark pro" id={props.dados} >
              <img alt="" src={require(`${row.images}`).default} width={182} id="imagem" />
              <p className="descripton text-dark paragrafo">{row.descripton}</p>
              <p className="text-danger paragrafo">${row.price} </p>
              <p className="price text-dark paragrafo">${row.finalprice}</p>
            </div>)

        } else if (props.dados == 0) {
          return (
            <div className="box_products text-dark pro" id={props.dados} >
              <img alt="" src={require(`${row.images}`).default} width={182} id="imagem" />
              <p className="descripton text-dark paragrafo">{row.descripton}</p>
              <p className="text-danger paragrafo">${row.price} </p>
              <p className="price text-dark paragrafo">${row.finalprice}</p>

            </div>
          )
        }
      }
      )}
    </div>
  );
}
