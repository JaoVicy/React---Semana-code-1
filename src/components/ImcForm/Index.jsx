import { useState } from 'react';
import './imcForm.css';

const ImcForm = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [result, setResult] = useState(null);
    const [clasifc, setClasifc] = useState('');
    const [showResult, setShowResult] = useState(false); // Estado para controlar a exibição do resultado

    const calcIMC = (e) => {
        e.preventDefault();

        // Conversão de valores
        const altMet = parseFloat(altura) / 100;
        const pesKg = parseFloat(peso);

        // Calculo de IMC
        const imc = pesKg / (altMet * altMet);
        setResult(imc.toFixed(2)); // Armazena resultado

        // Classificação do IMC:
        let clasifcIMC = '';

        if (imc < 16) {
            clasifcIMC = 'Magreza Grave';
        } else if (imc >= 16 && imc < 17) {
            clasifcIMC = 'Magreza Moderada';
        } else if (imc >= 17 && imc < 18.5) {
            clasifcIMC = 'Magreza Leve';
        } else if (imc >= 18.5 && imc < 25) {
            clasifcIMC = 'Saudável';
        } else if (imc >= 25 && imc < 30) {
            clasifcIMC = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            clasifcIMC = 'Obesidade Grau I';
        } else if (imc >= 35 && imc <= 40) {
            clasifcIMC = 'Obesidade Grau II';
        } else if (imc > 40) {
            clasifcIMC = 'Obesidade Grau III';
        }

        setClasifc(clasifcIMC);

        // Garante que a animação será vista
        setShowResult(false);
        setTimeout(() => {
            setShowResult(true); // Define showResult como true após um pequeno atraso para iniciar a animação
        }, 100);
    };

    return (
        <div className="imc-container">
            <form onSubmit={calcIMC}>
                <div>
                    <h2>Cálculo do IMC</h2>
                    <label>Altura (cm): </label>
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Peso (kg): </label>
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calcular IMC</button>
            </form>

            {result && (
                <div className={`resultado ${showResult ? 'show' : ''}`}>
                    <h3>Seu IMC: {result}</h3>
                    <h4>Classificação: {clasifc}</h4>
                </div>
            )}
        </div>
    );
};

export default ImcForm;
