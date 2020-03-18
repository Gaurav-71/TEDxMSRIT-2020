function result() {        
    let end = new Date(Date.UTC(2020,11,04,09,00,00));
    let start = new Date();
    let remTime = end.getTime() - start.getTime();    
    let mm = Math.floor(remTime/( 1000*60));
    let hh = Math.floor(mm / 60);
    let dd = Math.floor(hh / 24);
    hh %= 24;
    mm %= 60;    
    hh = (hh < 0) ? '0' : (hh < 10) ? '0' + hh : hh;
    mm = (mm < 0) ? '0' : (mm < 10) ? '0' + mm : mm;    
    document.getElementById('dd').innerHTML = dd;
    document.getElementById('hh').innerHTML = hh;
    document.getElementById('mm').innerHTML = mm;
    setTimeout(result, 1000);
  }

