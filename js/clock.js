
      function showTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(showTime, 1000);
        
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i}; 
        return i;
      }
      showTime()
/*  prompt'a girilen ismi ekranda merhaba'nin yanina yazdirma    */
      let isim = prompt("Adınızı Yazınız.. " );
      let myName = document.querySelector("#myName")
      myName.innerHTML = isim;
      
  