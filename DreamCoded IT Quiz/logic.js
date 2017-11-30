$(document).ready(function () {
	
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;

 		$.getJSON('dbase.json', function(data) {

		for(i=0;i<data.questionbase.length;i++){ 
			questionBank[i]=new Array;
			questionBank[i][0]=data.questionbase[i].question;
			questionBank[i][1]=data.questionbase[i].option1;
			questionBank[i][2]=data.questionbase[i].option2;
			questionBank[i][3]=data.questionbase[i].option3;
		}
		 numberOfQuestions=questionBank.length; 
		
		 scrambleDatabase();
		displayQuestion();
		})
 
 function scrambleDatabase(){
	for(i=0;i<50;i++){ 
	var rnd1=Math.floor(Math.random()*questionBank.length);
	var rnd2=Math.floor(Math.random()*questionBank.length); 
	var temp=questionBank[rnd1];
	questionBank[rnd1]=questionBank[rnd2];
	questionBank[rnd2]=temp;
	}
	 
 }

function displayQuestion(){
 var rnd=Math.random()*3;
rnd=Math.ceil(rnd);
 var q1;
 var q2;
 var q3;

if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}

$(stage).append('<center><i><div class="page-header">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div></i></center>');

 $('.option').click(function(){
  if(questionLock==false){questionLock=true;	
  if(this.id==rnd){
   $(stage).append('<center><div class="feedback2">CORRECT</div></center>');
   score++;
   }
  if(this.id!=rnd){
   $(stage).append('<center><div class="feedback1">WRONG</div></center>');
  }
  setTimeout(function(){changeQuestion()},1000);
 }})
}
	function changeQuestion(){
		questionNumber++;
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}

	function displayFinalSlide(){
		
		$(stage).append('<center><b><div class="page-header">Thank you for playing the DreamCoded IT Quiz!<br><br>Your results: <br><br> Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div></b></center>');
	}

	});//dbase.json keeps all questions, every first option is the correct one.