const handleAddInlineField = () => {
    setInlineFields(prevFields => [...prevFields, { id: Date.now(), value: '' }]);
};

const handleRemoveInlineField = (id) => {
    setInlineFields(prevFields => prevFields.filter(field => field.id !== id));
};
