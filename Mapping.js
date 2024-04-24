document.addEventListener("DOMContentLoaded", function() {
    const diseaseForm = document.getElementById("diseaseForm");

    function submitForm(event) {
        event.preventDefault(); 

        const selectedSymptoms = [];
        const symptomCheckboxes = document.querySelectorAll('input[name="symptom"]:checked');
        symptomCheckboxes.forEach(function(checkbox) {
            selectedSymptoms.push(checkbox.value);
        });

        const hasFever = selectedSymptoms.includes("Fever");
        const hasHeadache = selectedSymptoms.includes("Headache");
        const hasCough = selectedSymptoms.includes("Cough");
        const hasSoreThroat = selectedSymptoms.includes("Sore throat");
        const hasFatigue = selectedSymptoms.includes("Fatigue");
        const hasNausea = selectedSymptoms.includes("Nausea");
        const hasShortnessofbreath = selectedSymptoms.includes("Shortness of breath");
        const hasLossoftasreorSmell = selectedSymptoms.includes("Loss of taste or smell");
        const hasRashes = selectedSymptoms.includes("Rashes");
        const hasVomiting = selectedSymptoms.includes("Vomiting");
        const hasLossofappetite = selectedSymptoms.includes("Loss of appetite");
        const hasJointpain = selectedSymptoms.includes("Joint pain");
        const hasMoodSwings = selectedSymptoms.includes("Mood Swings");
        const hasMemoryLoss = selectedSymptoms.includes("Memory Loss");
        const hasChills = selectedSymptoms.includes("Chills");
        const hasSweating = selectedSymptoms.includes("Sweating");
        const hasSwellingJoint = selectedSymptoms.includes("Swelling and Redness at a joint");
        const hasIrregularHeartbeat = selectedSymptoms.includes("Irregular Heartbeat");
        const hasAnxiety = selectedSymptoms.includes("Anxiety");

        if (hasMoodSwings && hasMemoryLoss) 
            window.location.href = "Alzheimer.html";

        if (hasJointpain && hasFatigue )
            window.location.href = "Arthiritis.html";

        if (hasJointpain && hasSwellingJoint )
            window.location.href = "Gout.html";
        
        if (hasShortnessofbreath && hasCough && hasFatigue )
            window.location.href = "COPD.html";

        if (hasNausea && hasVomiting && hasLossofappetite )
            window.location.href = "Gastritis.html";

        if (hasIrregularHeartbeat && hasFatigue && hasAnxiety )
            window.location.href = "Hyperthyroidism.html";
        
        if (hasFever && hasHeadache && hasJointpain && hasFatigue )
            window.location.href = "Dengue.html";

        if (hasNausea && hasFever && hasFatigue && hasVomiting)
            window.location.href = "Diaarhea.html";

        if (hasJointpain && hasFatigue && hasMoodSwings && hasHeadache )
            window.location.href = "Fibromyalgia.html";
        
        if (hasFatigue && hasJointpain && hasMoodSwings && hasMemoryLoss )
            window.location.href = "Hypothyroidism.html";

        if (hasVomiting && hasNausea && hasFever && hasHeadache )
            window.location.href = "Gastroenteritis.html";
        
        if (hasFever && hasCough && hasFatigue && hasHeadache && hasSoreThroat )
            window.location.href = "Influenza.html";

        if (hasRashes && hasLossofappetite && hasFever && hasHeadache && hasFatigue )
            window.location.href = "Typhoid.html";
        
        if (hasFever && hasFatigue && hasSoreThroat && hasChills && hasShortnessofbreath && hasCough )
            window.location.href = "Bronchitis.html";

        if (hasFever && hasChills && hasFatigue && hasLossofappetite && hasShortnessofbreath && hasCough )
            window.location.href = "Pleurisy.html";
    
        if (hasCough && hasFever && hasChills && hasNausea && hasVomiting && hasFatigue )
            window.location.href = "Pneumonia.htnl";

        if (hasCough && hasHeadache && hasSoreThroat && hasFatigue && hasLossoftasreorSmell && hasFever)
            window.location.href = "Sinusitis.html";
    
        if (hasSoreThroat && hasFever && hasRashes && hasHeadache && hasNausea && hasVomiting )
            window.location.href = "Strep_Throat.html";

        if (hasFever && hasChills && hasSweating && hasNausea && hasVomiting && hasJointpain && hasHeadache && hasFatigue )
            window.location.href = "Malaria.html";
        
}
    diseaseForm.addEventListener("submit", submitForm);
});
