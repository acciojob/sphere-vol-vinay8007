function volume_sphere() {
    let radius = document.getElementById("radius").value;

    radius = parseFloat(radius);

    // Validate: must be non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return false;
    }

    // Formula: (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume = volume.toFixed(4);

    // Display result
    document.getElementById("volume").value = volume;

    return false; 
}
