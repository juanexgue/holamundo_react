function Titulo() {
    const nombre = "Chanchito Feliz";
    if (nombre) {
        return <p>Hola {nombre}</p>
    }
    return <p>Hola Mundo</p>
}

export default Titulo;