document.addEventListener("DOMContentLoaded", function() {
    const diseaseForm = document.getElementById("diseaseForm");

    function submitForm(event) {
        event.preventDefault(); 

        const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
            .map(checkbox => checkbox.value);

        const diseaseConditions = [
            { symptoms: ["Fever", "Chills", "Sweating", "Nausea", "Vomiting", "Joint pain", "Headache", "Fatigue"], url: "Malaria.html" },
            { symptoms: ["Fever", "Fatigue", "Sore throat", "Chills", "Shortness of breath", "Cough"], url: "Bronchitis.html" },
            { symptoms: ["Fever", "Chills", "Fatigue", "Loss of appetite", "Shortness of breath", "Cough"], url: "Pleurisy.html" },
            { symptoms: ["Cough", "Fever", "Chills", "Nausea", "Vomiting", "Fatigue"], url: "Pneumonia.html" },
            { symptoms: ["Cough", "Headache", "Sore throat", "Fatigue", "Loss of taste or smell", "Fever"], url: "Sinusitis.html" },
            { symptoms: ["Sore throat", "Fever", "Rashes", "Headache", "Nausea", "Vomiting"], url: "Strep_Throat.html" },
            { symptoms: ["Fever", "Cough", "Fatigue", "Headache", "Sore throat"], url: "Influenza.html" },
            { symptoms: ["Rashes", "Loss of appetite", "Fever", "Headache", "Fatigue"], url: "Typhoid.html" },
            { symptoms: ["Fever", "Headache", "Joint pain", "Fatigue"], url: "Dengue.html" },
            { symptoms: ["Nausea", "Fever", "Fatigue", "Vomiting"], url: "Diaarhea.html" },
            { symptoms: ["Joint pain", "Fatigue", "Mood Swings", "Headache"], url: "Fibromyalgia.html" },
            { symptoms: ["Fatigue", "Joint pain", "Mood Swings", "Memory Loss"], url: "Hypothyroidism.html" },
            { symptoms: ["Vomiting", "Nausea", "Fever", "Headache"], url: "Gastroenteritis.html" },
            { symptoms: ["Shortness of breath", "Cough", "Fatigue"], url: "COPD.html" },
            { symptoms: ["Nausea", "Vomiting", "Loss of appetite"], url: "Gastritis.html" },
            { symptoms: ["Irregular Heartbeat", "Fatigue", "Anxiety"], url: "Hyperthyroidism.html" },
            { symptoms: ["Mood Swings", "Memory Loss"], url: "Alzheimer.html" },
            { symptoms: ["Joint pain", "Fatigue"], url: "Arthiritis.html" },
            { symptoms: ["Joint pain", "Swelling and Redness at a joint"], url: "Gout.html" },
            { symptoms: ["Joint pain", "Stiffness"], url: "Osteoarthritis.html" },
            { symptoms: ["Extreme Hunger", "Slow Wound Healing"], url: "Diabetes.html" },
            { symptoms: ["Shortness of breath", "Fatigue", "Nausea", "Indigestion"], url: "Cad.html" },
            { symptoms: ["Loss of appetite", "Fatigue", "Nausea", "Fever","Dark Urine"], url: "Hepatitis.html" },
        ];

        const matchingCondition = diseaseConditions.find(condition => condition.symptoms.every(symptom => selectedSymptoms.includes(symptom)));

        if (matchingCondition) {
            window.location.href = matchingCondition.url;
        } else {
            alert("No matching disease condition found.");
        }
    }

    diseaseForm.addEventListener("submit", submitForm);
});