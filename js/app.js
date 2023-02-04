const form = document.querySelector("#formulario");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = form.elements["persona"].value;
    const contacto = form.elements["contacto"].value;
    const detalles = form.elements["descripcion"].value;

    const data = { nombre, contacto, detalles };

    fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (res.status === 200) {
                console.log("Datos enviados exitosamente");
            } else {
                console.error("Error al enviar los datos");
            }
        });
});
