function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-4">Contacto</h2>
      <p className="text-gray-300 mb-6">
        ¿Quieres colaborar o tienes alguna pregunta? ¡Hablemos!
      </p>
      <a
        href="mailto:tuemail@example.com"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Envíame un correo
      </a>
    </div>
  );
}

export default Contact;
