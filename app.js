function decodeVIN() {
    const vin = document.getElementById('vinInput').value.toUpperCase();
    const output = document.getElementById('output');
    if (vin.length !== 17) {
        output.innerText = "VIN musi mieć 17 znaków.";
        return;
    }

    const yearCode = vin[9];
    const yearMap = {
        A: 2010, B: 2011, C: 2012, D: 2013, E: 2014, F: 2015, G: 2016, H: 2017,
        J: 2018, K: 2019, L: 2020, M: 2021, N: 2022, P: 2023, R: 2024, S: 2025,
        T: 2026, V: 2027, W: 2028, X: 2029, Y: 2030, 1: 2001, 2: 2002, 3: 2003,
        4: 2004, 5: 2005, 6: 2006, 7: 2007, 8: 2008, 9: 2009, 0: 2010
    };

    const wmi = vin.substring(0, 3);
    const vds = vin.substring(3, 9);
    const year = yearMap[yearCode] || "Nieznany";

    output.innerHTML = `<p><strong>WMI:</strong> ${wmi}</p>
                        <p><strong>VDS:</strong> ${vds}</p>
                        <p><strong>Rok modelowy:</strong> ${year}</p>`;
}
