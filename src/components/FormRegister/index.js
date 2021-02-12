import React from 'react'

const FormRegister = () => {

  const [form, setForm] = React.useState({
    nome: "",
    msg: ""
  })

  const [response, setResponse] = React.useState(null)

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
    console.log({ [id]: value })
  }

  //enviando dados para a API
  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:4444/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    }).then((res) => {
      setResponse(res)
    })
    window.location.reload(false)
  }

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={form.nome}
          onChange={handleChange}
          className="form-control"

        /><br />

        <label htmlFor="msg">Mensagen</label>
        <input
          type="text"
          name="msg"
          id="msg"
          value={form.email}
          onChange={handleChange}
          className="form-control"

        />

        <button type="submit" className="btn btn-secondary mt-2 mb-2">Enviar</button>
      </form>
      {console.log(response)}
      {response && response.ok && alert("Menssagem enviada!")}
    </div>
  )
}

export default FormRegister
