document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                    form.reset();
                } else {
                    throw new Error('Erro ao enviar mensagem');
                }
            })
            .catch(error => {
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
                console.error('Error:', error);
            });
        });