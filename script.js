function volume_sphere() {
   
    let radius = document.getElementById("radius").value;

    radius = parseFloat(radius);

    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return false;
    }
	if (isNaN(radius) || radius < 0) {
       document.getElementById("volume").value = "";
       return false;
   }

    // Formula: (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    volume = volume.toFixed(4);

    document.getElementById("volume").value = volume;

    return false; 
}
