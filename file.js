setInterval(() => {
    dt = new Date;
    h = dt.getHours();
    m = dt.getMinutes();
    s = dt.getSeconds();
    hRot = 30 * h + m / 2;
    mRot = 6 * m;
    sRot = 6 * s;

    //transforming and rorating here
    Hhand.style.transform = `rotate(${hRot}deg)`;
    Mhand.style.transform = `rotate(${mRot}deg)`;
    Shand.style.transform = `rotate(${sRot}deg)`;

}, 1000);