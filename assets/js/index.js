const calculateDay = () => {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const result = document.getElementById('result');

    const weekday = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    const date = new Date(`${month} ${day}, ${year}`);
    const dayName = weekday[date.getDay()]


    switch (date.getDay()) {
        case 0: case 6:
            result.innerText = `${dayName}, Es fin de semana`;
            break;
        case 1: case 2: case 3: case 4: case 5:
            result.innerText = `${dayName}, Es día laboral`;
            break;
    }

}

