// Calculate Percentage of Y
function calculatePercentage() {
    const x = parseFloat(document.getElementById('valueX').value);
    const y = parseFloat(document.getElementById('valueY').value);

    if (isNaN(x) || isNaN(y) || y === 0) {
        document.getElementById('percentageResult').innerText = "Please enter valid numbers, and Y should not be 0.";
        return;
    }

    const percentage = (x / y) * 100;
    document.getElementById('percentageResult').innerText = `X is ${percentage.toFixed(2)}% of Y.`;
}

// Calculate Percentage Change
function calculateChange() {
    const oldValue = parseFloat(document.getElementById('oldValue').value);
    const newValue = parseFloat(document.getElementById('newValue').value);

    if (isNaN(oldValue) || isNaN(newValue)) {
        document.getElementById('changeResult').innerText = "Please enter valid numbers.";
        return;
    }

    const change = ((newValue - oldValue) / oldValue) * 100;
    document.getElementById('changeResult').innerText =
        `The percentage change from X to Y is ${change.toFixed(2)}%.`;
}

// Add X% to Y
function calculateAddition() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    const baseValue = parseFloat(document.getElementById('baseValue').value);

    if (isNaN(percentage) || isNaN(baseValue)) {
        document.getElementById('additionResult').innerText = "Please enter valid numbers.";
        return;
    }

    const result = baseValue + (baseValue * (percentage / 100));
    document.getElementById('additionResult').innerText = 
        `Adding ${percentage}% to Y results in ${result.toFixed(2)}.`;
}
