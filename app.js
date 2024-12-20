document.getElementById('calculateBtn').addEventListener('click', function() {
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    const steps = parseInt(document.getElementById('steps').value);

    if (isNaN(initialValue) || isNaN(percentage) || isNaN(steps) || steps <= 0) {
        alert("Please enter valid inputs!");
        return;
    }

    let results = "";
    let currentValue = initialValue;
    
    for (let i = 1; i <= steps; i++) {
        currentValue += currentValue * (percentage / 100);
        results += `Step ${i}: ${currentValue.toFixed(2)}\n`;
    }
    
    document.getElementById('results').textContent = results;
});