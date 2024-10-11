import FormComponent from '../components/FormComponent';
const fields = [
    ['text', 'Resposta Curta'],
    ['picker', 'Área', [
        'Área 1',
        'Área 2'
    ]],
    ['picker', 'Local', [
        'Local 1',
        'Local 2'
    ]],
    ['textarea', 'Descrição'],
    ['upload', 'Imagem'],
];
const handleSubmit = async () => {
    await saveFormData(formData);
    // Limpar os campos após o envio
    setFormData(initialState);
};
