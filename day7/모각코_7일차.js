    var h = document.getElementById('hour');
    var m = document.getElementById('min');
    var s = document.getElementById('sec');

    var hour=0;
    var min=0;
    var sec=0;

    function stopWatch(){ //스톱워치 시작
        SetTimer=setInterval(function() {
            sec++; //sec을 1씩 증가시킴
            if (sec>=60){ //sec이 60보다 커지는 경우
                min++;
                sec=0;
            }
            if (min>=60){ //min이 60보다 커지는 경우
                hour++;
                min=0;
            }

            //sec
            if (sec<10){
                s.innerHTML = '0'+sec; 
            }
            else{
                s.innerHTML = sec;
            }

            //min
            if(min<10){
                m.innerHTML = '0'+min;
            }
            else{
                m.innerHTML = min;
            }

            //hour
            if(hour<10){
                h.innerHTML = '0'+hour;
            }
            else{
                h.innerHTML = hour;
            }    
        }, 1000);
    }
    
    function stop(){ //스톱워치 중지
        clearInterval(SetTimer);
    }

    function reset(){ //스톱워치 리셋
        hour=0;
        min=0;
        sec=0;

        h.innerHTML = '0'+hour;
        m.innerHTML = '0'+min;
        s.innerHTML = '0'+sec;
        clearInterval(SetTimer); //초기화 후, START 버튼을 누르기 전까지 스톱워치가 시작하지 않도록 함.
    }