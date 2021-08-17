var say_answer = [
    {"question": "안녕", "answer": "안녕~ 만나서 반가워~냥~!"},
    {"question": "뭐해?" , "answer": "당신의 이야기를 들어주고 있어~냥~!"},
    {"question": "심심해" , "answer": "그럼 우리 뭐하고 놀까~냥?"},
    {"question": "좋아하는 음식" , "answer": "흠.. 우유 먹고 싶다냥~"},
    {"question": "놀아줘" , "answer": "냥~? 지금도 놀고 있잖냥~"},
    {"question": "귀여워" , "answer": "나도 내가 귀여운건 안다냥~"},
    {"question": "피곤해" , "answer": "피곤할 땐 자는게 최고다냥~!"},
    {"question": "배고파" , "answer": "나랑 맛난거 먹으러 가자냥~!"},
    {"question": "노래 불러줘" , "answer": "냥냥냥냥~냥~♬"},
    {"question": "공부" , "answer": "화이팅~! 열심히 공부하자~냥~"},
    {"question": "시험" , "answer": "헉! 시험 잘 볼 수 있을거다냥! 내가 응원한다냥~"}
]

var n = 0; // 상황 제어 변수
var lightnum = 1; // 불 제어 변수

var question = ""; // 질문을 임시로 저장하는 변수
var answer = ""; // 대답을 임시로 저장하는 변수
var learn = 0; // 말을 배우는 상황 여부를 판별하는 변수

function catsay(){
    var say = document.getElementById("text_say").value;
    var light = document.getElementById("bodyTag");
    var printSay = document.getElementById("cat_says");

    //고양이에게 말을 가르쳐주는 코드

    if(learn == 1){
		if(say == "네"){
			printSay.innerHTML = "대답을 입력하라냥~!";
			learn = 2;
		}
		else{
			printSay.innerHTML = "냥~~! 알려주는게 아니구냥~~";
			learn = 0;
		}
		return;
	}

	if (learn == 2){
		answer = say; 
		push_say_answer(); 
        return;
	}

    //say_answer 내에 정해진 고양이의 대답 코드

    for (let i = 0; i < say_answer.length; i++){
        if (say == say_answer[i].question){
            printSay.innerHTML = say_answer[i].answer;
            return;
        }
    }

    if (say == "불꺼줘"){ // say == "불꺼줘"일 경우 상황 제어
        if (lightnum == 0){
            printSay.innerHTML = "불 이미 꺼져 있다냥~";
        }
        else{
            if (n==0){
                n++;
                printSay.innerHTML = "냥냥?";
            }
            else if(n==1){
                n++;
                printSay.innerHTML = "냥냥? 시렁시렁~냥~";
            }
            else if(n==2){
                n++;
                printSay.innerHTML = "불을 껐어냥..! 근데 너무 어두운걸~냥?"
                light.style.backgroundColor = "grey";
                lightnum = 0;
            }
            else{
                printSay.innerHTML = "냥~";
                n = 0;
            }
        }
    }
    else if(say == "불켜줘"){ // say == "불켜줘"일 경우 상황 제어
        if (lightnum == 1){
            printSay.innerHTML = "불 이미 켜져 있다냥~";
        }
        else{
            if (n==0){
                n++;
                printSay.innerHTML = "냥~?";
            }
            else if(n==1){
                n++;
                printSay.innerHTML = "난 어두운게 좋다냐옹~";
            }
            else if(n==2){
                n++;
                printSay.innerHTML = "불을 켰어냥~ 너무 눈부셔~냥~!"
                light.style.backgroundColor = "white";
                lightnum = 1;
            }
            else{
                printSay.innerHTML = "냥~";
                n = 0;
            }
        }
    }
    else if (say == false) { //사용자가 아무것도 입력하지 않은 경우
        printSay.innerHTML = "뭐라고 하는 지 모르겠다냥~";
        
        var typing = document.getElementById('typing');
        var typewriter = new Typewriter(typing, {
            loop: false
        });
        
        typewriter
            .typeString("음 .. 고양이는 당신이 뭐라고 하는 지 알아듣지 못한 것 같다.")
            .pauseFor(250)
            .deleteAll()
            .typeString("다시 한 번 고양이에게 말을 걸어보자.")
            .pauseFor(250)
            .start()
            .deleteAll();
    }
    else{
        printSay.innerHTML = "말을 알려줄거냥~?(네 or 아니요를 입력하라냥!)";
        question = say; 
        learn = 1;
    }
}

function push_say_answer(){
    say_answer.push({question: `${question}`, answer: `${answer}`}); 
	document.getElementById("cat_says").innerHTML = "말을 배웠다 냥!";
	learn = 0;
}
