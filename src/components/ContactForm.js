import React from 'react'
import { Button, Container, TextField } from '@material-ui/core'
import { useForm } from '../Hooks/useForm'
import Message from './Message';


const initialForm = {
    name: "",
    email: "",
    subject: ""
};
const validationsForm = (form) => {

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexSubject = /^.{1,50}$/;
    let errors = {}
    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido"
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco"
    }
    if (!form.email.trim()) {
        errors.email = "El campo 'Correo' es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Correo' es incorrecto"
    }
    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto' es requerido"
    } else if (!regexSubject.test(form.subject.trim())) {
        errors.subject = "El campo 'Asunto' no debe exceder los 50 caracteres"
    }
    return errors;
}
let styles = {
    fontWeight: "bold",
    color: "#000000",
    fontFamily: "sans-serif",
    backgroundColor: "#dc3545",
    textAlign: "Center",
    padding: "10px"
}
export const ContactForm = () => {

    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Container>
                    <h1 className="text">Formulario</h1>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type="text"
                        name="name"
                        placeholder="Escribe tu nombre"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.name}
                        required
                        fullWidth
                    />
                    {errors.name && <p style={styles}>{errors.name}</p>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type="email"
                        name="email"
                        placeholder="Escribe tu correo"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.email}
                        required
                        fullWidth
                    />
                    {errors.email && <p style={styles}>{errors.email}</p>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type="text"
                        name="subject"
                        placeholder="Escribe tu asunto"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.subject}
                        required
                        fullWidth
                    />
                    {errors.subject && <p style={styles}>{errors.subject}</p>}

                    <Button

                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                        Enviar
                    </Button>

                </Container>
            </form>
            <Container >
                {response && <Message msg="Los datos han sido enviados" bgColor="#198754" />}
            </Container>
        </>
    )
}
