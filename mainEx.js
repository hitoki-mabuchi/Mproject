var text;
var cEditor;
var result = new Array();
var result2 = new Array();
var lines;
var jsOfAnimes = new Array();
var rindex;
var animeStartIndex=0;
var textStartIndex = 0;;
var scanfname;
var scanftype;
var codeOfUser;
var encodeTime;
var consoleStatus = "";
var doTheMainfunction =0;
var htmlversion;
var introductionTexts = new Array();
var firstcom = true;
var buttonMode=1;
var buttonMode2=1;
var lastLineNumber = 0;
var mainFinishFlag = false;
var row;
var userMode = false;
var sampleMode = false;
/*function disTexetarea(){
	if(buttonMode==1){
	if(firstcom){
	cEditor.markText({line: 0 , ch: 0}, {line: 100, ch: 100}, {className: "styled-background-null"});
	cEditor.save();
	if(encodeTime>0){
		codeArrayInit();animeArrayInit();ANIME_reset();
		consoleStatus="";action_frag = true;if_cnt = 0;continueflag = false;
		document.getElementById("console").value="";
		conditions.push(true);if_end_flag.push(true);
	}
	encodeTime++;
	rindex = 0;
	firstPrintf = true;
	text = document.getElementById('text').value;
	codeOfUser = text;
	consoleStatus = document.getElementById("console").value;
	codeOfUser = text;
	row = text.split(/\r\n|\r|\n/).length;
	tre = new RegExp("line[(]"+row+"[)]","g");
	result = parser.parse(text);
	var ucode = "";
	for(var deb = 0;deb < result.length;deb++)ucode += result[deb];
	result2 = ucode.split(";");
	line_reset();
	for(var di = 0;di < result2.length;di++){
		if(result2[di].match(/push_line\([0-9]+\)/))lastLineNumber = result2[di].match(/push_line\(([0-9]+)\)/)[1];
	}
	codeArrayList();jsOfAnimes.push("line(1);");jsOfAnimes.push("line(2);");
	for(doTheMainfunction =0;doTheMainfunction < result2.length;doTheMainfunction++){
		console.log(result2[doTheMainfunction]);
		eval(result2[doTheMainfunction]);
	}
	var t = 0;
	if(lastLineNumber<row){
		for(var di = 1;di <=(row - lastLineNumber);di++){
				t = Number(di)+Number(lastLineNumber)
				jsOfAnimes.push("line("+t+")");
			}
	}
	animeArrayList();
	sign =1;
	firstcom=false
	}
	document.getElementById('button').value="次へ";
	R2();
	}
	if(buttonMode==3){
		console.log("2周目以降開始");
		playAgain();buttonMode=1;
		
	}
	if(buttonMode==2){
	console.log("もっかい見る？");
	buttonMode=3;
	}
	
};*/
var sampleAnimeArray = new Array;
function disTexetarea(){
	sampleMode = true;
	if(userMode){playAgain();userMode=false;ANIME_reset();}
	if(buttonMode==1){
		if(firstcom){
		text = document.getElementById('text').value;
		var sampleAnime;
		htmlversion = document.getElementById("ver").getAttribute("version");
		document.getElementById('button').src="img/btn_02.png"
		if(htmlversion=="e111"){sampleAnimeArray=ex_111;row=sampleAnimeArray.length}
		if(htmlversion=="e211"){sampleAnimeArray=ex_211;row=sampleAnimeArray.length;$.cookie("ex2",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e212"){sampleAnimeArray=ex_212;row=sampleAnimeArray.length;$.cookie("ex3",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e213"){sampleAnimeArray=ex_213;row=sampleAnimeArray.length;$.cookie("ex4",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e221"){sampleAnimeArray=ex_221;row=sampleAnimeArray.length;$.cookie("ex5",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e231"){sampleAnimeArray=ex_231;row=sampleAnimeArray.length;$.cookie("ex6",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e241"){sampleAnimeArray=ex_241;row=sampleAnimeArray.length;$.cookie("ex7",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e311"){sampleAnimeArray=ex_311;row=sampleAnimeArray.length;$.cookie("ex8",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e312"){sampleAnimeArray=ex_312;row=sampleAnimeArray.length;$.cookie("ex9",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e321"){sampleAnimeArray=ex_321;row=sampleAnimeArray.length;$.cookie("ex10",true, { expires: 7 , path: '/'});}
		if(htmlversion=="e331"){sampleAnimeArray=ex_331;row=sampleAnimeArray.length;$.cookie("ex11",true, { expires: 7 , path: '/'});}
		tre = new RegExp("line[(]"+row+"[)]","g");
		sign =1;
		firstcom=false
		}
		R3();
	}
	if(buttonMode==2){
		playAgain();buttonMode=1;
	}
}

function disTexetarea2(){
	userMode = true;
	if(sampleMode){playAgain();sampleMode=false;ANIME_reset();
		if(document.getElementById("ver").getAttribute("version")=="e111"){
		var rl = result.length;
		var rl2 = result2.length;
		var vs = variables.length;
		for(var st = 0;st < rl;st++)result.splice(0,1);
		for(var st2 = 0;st2 < rl2;st2++)result2.splice(0,1);
		for(var st2 = 0;st2 < vs;st2++)variables.shift();
		}
	}
	if(buttonMode2==1){
		text = document.getElementById('text').value;
		result = parser.parse(text);
		var ucode = "";
		for(var deb = 0;deb < result.length;deb++)ucode += result[deb];
		result2 = ucode.split(";");
		for(doTheMainfunction =0;doTheMainfunction < result2.length;doTheMainfunction++){
			eval(result2[doTheMainfunction]);
			if(result2[doTheMainfunction].match(/^scanf_*/)){
				rindex = doTheMainfunction;
				break;
			}
		}animeArrayList();sign =1;
		R();
	}
	if(buttonMode2==2){
	buttonMode2=1;
	playAgain();
	}
}
window.onload = function(){
	firstSetting();
	var loading = tm.app.LoadingScene({assets:ASSETS,nextScene:MainScene, }); 
	app.run();
	app.replaceScene(loading); 
	encodeTime = 0;
	document.getElementById('button').addEventListener('click', disTexetarea, false);
	SPEED=DEFAULT_SPEED;
	document.getElementById("console").readOnly=true;
	document.getElementById('button').src="img/btn_01.png";
	cEditor = CodeMirror.fromTextArea(document.getElementById("text"), {
		mode: "text/x-csrc", 
		theme: "default",
		indentUnit: 3,
		tabSize: 3,
		lineNumbers: true,
		styleActiveLine: false,
		styleSelectedText: true,
		readOnly: true,
		matchBrackets: true
	});
	cEditor.setSize(600, 250);
	htmlversion = document.getElementById("ver").getAttribute("version");
	if(htmlversion=="e211"){
		document.getElementById("click_data").click();
	}
};

var workArray=new Array();
var blockindex = 0;
function R3(){
	var presentblock;
	workArray = sampleAnimeArray[blockindex].split(";;");
	R4();
	blockindex++;
}

function playAgain(){
	ANIME_reset();
	line_reset();
	document.getElementById("cspace").innerHTML = "";consoleStatus="";
	document.getElementById("console").value="";firstPrintf = true;textStartIndex = 0;
	r4index=0;blockindex=0;
	mainFinishFlag=false;
	var wl = workArray.length;
	for(var st = 0;st < wl;st++)workArray.shift();
	document.getElementById('button').src="img/btn_01.png";

}
var r4index =0;
function R4(){
	/*for(var r4i = 0;r4i < workArray.length;r4i++)console.log("R4内の出力："+workArray[r4i]);*/
	document.getElementById("button").disabled = "disabled";
	if(r4index<workArray.length){
		if(workArray[r4index]=="sign=1"){
		sign=1;
		}
		if(sign===1){
			sign=0;
			eval(workArray[r4index]);
			if(workArray[r4index].match(/ANIME_scanf/)){sign=1;r4index++;}else{r4index++;}
			if(r4index < workArray.length)setTimeout(R4,0);
		}else{
			if(r4index < workArray.length)setTimeout(R4,0);
		}
	}
	if(r4index==workArray.length){
		r4index=0;
		var wl = workArray.length;
		for(var st = 0;st < wl;st++)workArray.shift();
	}
};


function R(){
	//console.log("現在のanimeStartIndex："+animeStartIndex)
	//console.log("アニメ配列の長さ："+jsOfAnimes.length+"現在のanimeStartIndex："+animeStartIndex+"現在実行中："+jsOfAnimes[animeStartIndex]);
	document.getElementById("button").disabled = "disabled";
	if(animeStartIndex<jsOfAnimes.length){
		if(sign===1){
			sign=0;
			eval(jsOfAnimes[animeStartIndex])
			if(jsOfAnimes[animeStartIndex].match(/ANIME_scanf/)){
				sign=1;
				animeStartIndex++;
				document.getElementById("cspace").innerHTML="何か入力してみるんじゃ！";
				document.getElementById("console").readOnly=false;
				document.getElementById("button").disabled = "";
				}
			else{animeStartIndex++;}
			if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
		}else{
			if(animeStartIndex < jsOfAnimes.length)setTimeout(R,0);
		}
	}
};
/*
var continueflag = false;
var tre;
function R2(){
	var setTextPlace = document.getElementById("com");
	console.log("アニメ配列の長さ："+jsOfAnimes.length+"現在のanimeStartIndex："+animeStartIndex+"現在のtextStartIndex："+textStartIndex);
	if(animeStartIndex<jsOfAnimes.length){
		if(sign===1){
			sign=0;
			console.log("現在："+jsOfAnimes[animeStartIndex]+"説明文："+introductionTexts[textStartIndex]);
			if((animeStartIndex+1<jsOfAnimes.length)&&!(jsOfAnimes[animeStartIndex+1].match(/line/)))continueflag = true
			if((animeStartIndex+1<jsOfAnimes.length)&&(jsOfAnimes[animeStartIndex+1].match(/line/)))continueflag = false;
			setTextPlace.innerHTML = introductionTexts[textStartIndex];
			eval(jsOfAnimes[animeStartIndex]);
			if(tre.test(jsOfAnimes[animeStartIndex]))mainFinishFlag = true;
			console.log(continueflag);
			if(jsOfAnimes[animeStartIndex].match(/ANIME_scanf/))sign=1;
			if(continueflag){console.log("連続再生");setTimeout(R2,0);document.getElementById("button").disabled = "disabled";console.log("ボタン無効！！！")}
			animeStartIndex++;
		}else if((sign == 0)&&(continueflag)){
			setTimeout(R2,0);
		}
	if(animeStartIndex == jsOfAnimes.length)animeStartIndex-=1;
	if((jsOfAnimes[animeStartIndex].match(/line/))&&(textStartIndex<introductionTexts.length-1))textStartIndex++;
	if(mainFinishFlag){
		buttonMode=2;console.log("おわりました！");
		document.getElementById('button').value="最初から見る";
		example_end();
		movenextex();
	}
	}
}*/

function return_js(value){
		mainFinishFlag =true;
		buttonMode=2;
		document.getElementById('button').value="最初から見る";
		example_end();
		movenextex();
		BUTTON_ON();
		sign=1;
}

function return_js2(){
	mainFinishFlag =true;
	example_end();
	buttonMode2=2;
	document.getElementById("button").disabled = "";
}

function scanf_js(name,type){
if(action_frag == true){
	scanfname = name;
	scanftype = type;
	jsOfAnimes.push("ANIME_scanf()");
	}
}
function newscanfnext(){
	userMode = true;
	if(sampleMode){playAgain();sampleMode=false;}
	//if(scanftype.match(/^::/))scanftype =scanftype.match(/^::(.*)::$/)[1];
	var getvalue = getNewInput()
	substitute(scanfname,getvalue);
	document.getElementById("console").value += ("\n");
	consoleStatus = document.getElementById("console").value;
	codeArrayList();
	for(doTheMainfunction = rindex+1 ;doTheMainfunction < result2.length;doTheMainfunction++){
		if(!result2[doTheMainfunction].match(/return/)){eval(result2[doTheMainfunction]);}
		else{}
		if(result2[doTheMainfunction].match(/^scanf_js.*/)){
				rindex = doTheMainfunction;
				break;
			}
		}
	animeArrayList();sign =1;
	document.getElementById("console").readOnly=true;
	R();
}

function setIntr(text){
	document.getElementById("cspace").innerHTML=String(text);
	sign=1;
	BUTTON_ON();
}
function baON(){
	document.getElementById('button').src="img/btn_02.png";
	sign=1;
	BUTTON_ON();
}
function baOFF(){
	document.getElementById('button').src="img/btn_03.png";
	sign=1;
}

function biON(){
	document.getElementById('button').src="img/btn_02.png";
	sign=1;
	BUTTON_ON();
}
function biOFF(){
	document.getElementById('button').src="img/ex_button005.png";
	sign=1;
}
function bRestart(){
	document.getElementById('button').src="img/btn_04.png";
	sign=1;
	BUTTON_ON();
}


function random_number(type){
	var vInt = new Array(0,1,2,3,4,5,6,7,8,9);
	var vDou = new Array(0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9);
	var vCha = new Array("a","b","c","d","e","f","g","h","i","j");
	var rnd = Math.floor(Math.random()*10);
	if(type == "int"){
		jsOfAnimes.push("setPrintf("+vInt[rnd]+")");
		return vInt[rnd];
	}else if(type == "double"){
		jsOfAnimes.push("setPrintf("+vDou[rnd]+")");
		return vDou[rnd];
	}else if(type == "char"){
		jsOfAnimes.push("setPrintf("+vCha[rnd]+")");
		return vCha[rnd];
	}
}

function line(line_i){
	cEditor.markText({line: line_i-1, ch: 0}, {line: line_i-1, ch: 100}, {className: "styled-background"});
	cEditor.markText({line: 0 , ch: 0}, {line: line_i -2, ch: 100}, {className: "styled-background-null"});
	sign = 1;
}
function line_2(line_i){
	cEditor.markText({line: line_i-1, ch: 0}, {line: line_i-1, ch: 100}, {className: "styled-background-red"});
	cEditor.markText({line: 0 , ch: 0}, {line: line_i -2, ch: 100}, {className: "styled-background-null"});
}
function line_p(li, ne){
	cEditor.markText({line: li-1, ch: 0}, {line: ne-1, ch: 100}, {className: " styled-background-g"});
	sign = 1;
}
function line_reset(){
	cEditor.value = text;
	cEditor.setValue(cEditor.value)
	cEditor.save();
	sign = 1;
}
function push_line(line_i){
	jsOfAnimes.push('line(' + line_i + ');');
}


var swich=0;
var switchi=0;
function advance(){
	swich = 1;
	while(swich == 1){
	 	eval(result[switchi]);
	 	document.getElementById('text').select();
	 	switchi++;
		swich = 0;
	}
	variablesList();
};

/*------------------------------------------------------*/
//||text.match(/^.*printf\('\x20*Hello\x20*World!\x20*'\);.*/)
function templat(){
alert("ボタンが押されました。");
}

function scanfnext(){
if(action_frag == true){
	firstPrintf=false;
	var p = getNewInput();
	substitute(scanfname,p);
	for(doTheMainfunction = rindex+1 ;doTheMainfunction < result2.length;doTheMainfunction++){
		eval(result2[doTheMainfunction]);
		if(result2[doTheMainfunction].match(/^scanf_js.*/)){
			rindex = doTheMainfunction;
			break;
		}
	}
	animeArrayList();
	sign =1;
	R();
	}
}

//変数を格納する配列
var variables = new Array();
//変数のクラス
function Variable(data_type,name,value){
	this.data_type = data_type;	//型
	this.name = name;				//名前
	this.value = value;				//値
};

function debugArrayList(){
	console.log("配列全部を出力するよ！")
	variablesList();codeArrayList();animeArrayList();
	console.log("--------------------条件配列の中身一覧-------------------------");
	for(var joa = 0;joa < result2.length;joa++)console.log(conditions[joa]);
	console.log("----------------------------------------------------");
	console.log("--------------------ifフラグ配列の中身一覧-------------------------");
	for(var joa = 0;joa < result2.length;joa++)console.log(if_end_flag[joa]);
	console.log("----------------------------------------------------");
}

function variablesList(){
console.log("---------------------------変数配列の中身一覧-------------------------");
	for(var deb = 0;deb < variables.length;deb++){
		console.log((deb+1)+"つ目："+variables[deb].name+"、型："+variables[deb].data_type+"、値："+variables[deb].value)
	}
	console.log("----------------------------------------------------");
}

function codeArrayList(){
console.log("--------------------パーサで書き換えたjsメソッド配列の中身一覧-------------------------");
	for(var joa = 0;joa < result2.length;joa++)console.log(result2[joa]);
	console.log("----------------------------------------------------");
}
function animeArrayList(){
console.log("---------------------------アニメ配列の中身一覧-------------------------");
	for(var joa = 0;joa < jsOfAnimes.length;joa++)console.log(jsOfAnimes[joa]);
	console.log("----------------------------------------------------");
}

function codeArrayInit(){
	if(result){
	console.log("result配列とvariables配列を初期化します。");
		var rl = result.length;
		var rl2 = result2.length;
		var vs = variables.length;
		var c = conditions.length;
		var ief = if_end_flag.length;
		for(var st = 0;st < rl;st++)result.splice(0,1);
		for(var st2 = 0;st2 < rl2;st2++)result2.splice(0,1);
		for(var st2 = 0;st2 < vs;st2++)variables.shift();
		for(var st2 = 0;st2 < c;st2++)conditions.shift();
		for(var st2 = 0;st2 < ief;st2++)if_end_flag.shift();
		ANIME_reset();
		consoleStatus="";action_frag = true;if_cnt = 0;syntaxErrorFlag = true;
		document.getElementById("console").value="";codeFinishFlag = false
	}
}

function animeArrayInit(){
	console.log("result配列を初期化します。");
	if(jsOfAnimes){
		var al = jsOfAnimes.length;
		for(var st = 0;st < al;st++){
			jsOfAnimes.shift();
		}
	}
}

var conditions = new Array();conditions.push(true);
var action_frag = true;
var if_cnt = 0;
var if_end_flag = new Array();if_end_flag.push(true);

function if_js(condition){
	if_cnt++;
	conditions.push(assess(condition));
	if(conditions[if_cnt]&&conditions[if_cnt-1]){
		if_end_flag.push(true);
		//console.log(if_end_flag.length);
		action_frag=true;
	}else{
		action_frag=false;
		conditions[if_cnt]=false;
		//if_end_flag.push(true);
		if_end_flag.push(false);
	}
}

function else_if_js(condition){
	conditions[if_cnt]=assess(condition);
	if(!(if_end_flag[if_cnt])&&conditions[if_cnt]&&conditions[if_cnt-1]){
		if_end_flag[if_cnt]=true;
		action_frag=true;
	}else{
		action_frag=false;
		conditions[if_cnt]=false;
		//if_end_flag[if_cnt]=false;
	}
}

function else_js(){
	if(!(if_end_flag[if_cnt])&&conditions[if_cnt-1]){
		if_end_flag[if_cnt]=true;
		action_frag=true
	}else{
		action_frag=false;
		if_end_flag[if_cnt]=true;
	}
}function if_js_end(){console.log("if_js_end呼ばれてるんですが…")}

function end_of_if(){
	if_cnt=if_cnt-1;
	if_end_flag.splice((if_end_flag.length-1),1);
	conditions.splice((conditions.length-1),1);
	if(conditions[if_cnt]&&conditions[if_cnt-1]){
		action_frag=true;
	}else if(if_cnt==0){
		action_frag=true;
	}else{
		action_frag=false;
	}
}

function assess(condition){
	var result = false;
	var reg;
	var numOfVariable;
	var changeVariables;
	var variableExist = false;
	reg = new RegExp("[a-z][a-zA-Z0-9]*","g");
	var tempStr = condition;
	if(condition.match(reg)){
	numOfVariable = condition.match(reg).length;
	changeVariables = condition.match(reg);
	for(var ai = 0;ai < numOfVariable;ai++){
		for(var aii = 0;aii < variables.length;aii++){
			if(changeVariables[ai] == variables[aii].name){
				tempStr = tempStr.replace(changeVariables[ai],variables[aii].value);
			}
		}
	}
	}else{}
	result = (eval(tempStr));
	return result;
}

function calc(formula){//演算処理を行う関数
if(action_frag == true){
	//console.log("calcがよびだされました。"+calcflag);
	var fArray = formula.split(":");
	var fstr ="";
	for(var i = 0; i < fArray.length; i++){
		if(fArray[i].match(/^[a-z].*/)){//指揮の中に英数字があったら…変数か？入力ミスか？
			for(var j = 0; j < variables.length; j++){
				if(variables[j].name == fArray[i]){//変数の場合
					fstr += variables[j].value;
					}else{//変数じゃなくて、英数字だった場合
					/*演算式に英語が入っているアニメ*/
					}
				}
			}else{
				fstr += fArray[i];
			}
		}
	return String(eval(fstr));
	//return String(eval(fstr));
	}
}

function getNewInput(){
if(action_frag == true){
	var previous = consoleStatus;
	var now = document.getElementById("console").value;
	var previousArray = previous.split(/\r\n|\r|\n/);
	var nowArray= now.split(/\r\n|\r|\n/);
	var pstr="";
	var nstr="";
	for(var gi = 0;gi < previousArray.length;gi++)pstr += previousArray[gi];
	for(var gi = 0;gi < nowArray.length;gi++)nstr += nowArray[gi];
	var result = String(nstr.substr((pstr.length)+(nstr.indexOf(pstr))));
	consoleStatus = nstr;
	return result;
	}
}

//宣言を行う関数
function duplication_judge(data_type,name,value){
if(action_frag == true){
	if(value == null){
		if(variables[0] == null){
			variable_declare(data_type,name,value);//console.log(name+"の宣言を最初に受け付けました。");
		} else {
			for(i = 0; i < variables.length; i++){
			//console.log(name+"と、"+variables[i].name+"を確認");
				if(variables[i].name == name){
					return false;
					/* 宣言が重複した場合のアニメ */
				}
			}
			variable_declare(data_type,name,value);
		}
	}else {//初期化されてる場合
		var fArrayStr;
		if(value.match(":")){
			var fArray = value.split(":");
			value = calc(value);
			fArrayStr = "[";
			for(var si = 0;si < fArray.length;si++){
				fArrayStr += ('"'+fArray[si]+'"');
				if(si<fArray.length-1){
					fArrayStr += ',';
				}else{
					fArrayStr +=']';
				}
			}
		}
		if(variables[0] == null){
		variable_declare_init(data_type,name,value,fArrayStr);//console.log(name+"の宣言を最初に受け付けました。");
		} else {
			for(i = 0; i < variables.length; i++){
			//console.log(name+"と、"+variables[i].name+"を確認");
			if(variables[i].name == name){
				return false;
				/* 宣言が重複した場合のアニメ */
			}
		}
		variable_declare_init(data_type,name,value,fArrayStr);
		}
	}
	//同じ変数名が宣言されていないか判定
	}
};

function plural_declaration(type,variable){
if(action_frag == true){
  //variable = variable.replace(/\x20/g,"");
  var v = variable.split(",");
  for(var i=0; i < v.length; i++){
    if(v[i].indexOf("=", 0) == -1){
      duplication_judge(type , v[i] , null );
    }else{
      var x = v[i].split("=");
      if(x[1].indexOf(":", 0) == -1){
        duplication_judge(type , x[0] , x[1] );
      }else{
        y = x[1].replace(/:/g,"");
        duplication_judge(type , x[0] , y );
		animeArrayList();
        substitute(x[0] , calc(x[1]));
      }
    }
  }
  }
}

function variable_declare(data_type,name,value){//配列を変数に代入させる関数
if(action_frag == true){
	var v = new Variable(data_type,name,value);
	jsOfAnimes.push('ANIME_sengen("'+data_type+'","'+name+'");');
	variables.push(v);
	}
};

function variable_declare_init(data_type,name,value,exp){//配列を変数に代入させる関数
if(action_frag == true){
	var v = new Variable(data_type,name,value);
	//console.log('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'");');
	if(exp){
		jsOfAnimes.push('ANIME_sengen_enzan("'+data_type+'","'+name+'",'+exp+',"'+value+'");');
	}else{
		jsOfAnimes.push('ANIME_sengen_dainyu("'+data_type+'","'+name+'","'+value+'");');//ANIME_sengen_dainyuはリテラル(数字だけ)
		}
	variables.push(v);
	}
};

function regulate_js(name,value){
	var vType;
	for(var ri = 0;ri < variables.length;ri++){
		if(variables[ri].name==name)vType = variables[ri].data_type;
	}
	if(vType=="int"){
		return Number(value).toFixed(0);
	}else if(vType=="double"){
		return Number(value).toFixed(4);
	}else if(vType=="char"){
		return value;
	}else{
		return value;
	}
}

var calcflag = false;

function substitute(name,value){//変数に数字を代入するメソッド
if(action_frag == true){
	var vtype;
	for(var si = 0;si < variables.length;si++){
		if(variables[si].name==name)vtype = variables[si].data_type;
	}
	var vflag = false;
	if(value.match(/^[a-z].*/)){
		for(var si = 0;si < variables.length;si++){
			if(variables[si].name==value){
					vflag = true;
				}
		}
	}
	if(value.match(/:/)){
		calcflag = true;
		var formula = value;
		value =calc(value);
		var fArray = formula.split(":");
		var fArrayStr = "[";
		for(var si = 0;si < fArray.length;si++){
			fArrayStr += ('"'+fArray[si]+'"');
			if(si<fArray.length-1){
				fArrayStr += ',';
			}else{
				fArrayStr +=']';
			}
		}
	}else if(vflag){
		var variablevalue;
		for(var si = 0;si <variables.length;si++){
			if(variables[si].name == value)variablevalue = variables[si].value;
		}
	}else if(value.match(/^[a-z][0-9a-zA-Z]*/)){
		var vvalue;
		for(var si = 0;si <variables.length;si++){
			if(variables[si].name == value)vvalue = variables[si].value;
		}
		if(vvalue==null&&vtype=="char"){
		}else{
			value = vvalue;
		}
	}else if(value.match(/^[0-9]*/)){
	}else if(!(type_judge(name,value))){
		return false;
	}else{
	return false;
	}
	if(calcflag)var evalue = String(eval(value));
	var i;
	for(i = 0; i < variables.length; i++){
		if(variables[i].name == name){
			if(calcflag){
				if(type_judge(name,evalue))variables[i].value = regulate_js(name,evalue);
				jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'",'+fArrayStr+',"'+regulate_js(name,evalue)+'")');
				calcflag=false;
			}else if(vflag){
				if(type_judge(name,variablevalue))variables[i].value = regulate_js(name.variablevalue);
				jsOfAnimes.push('ANIME_enzan_dainyu("'+name+'",["'+value+'"],"'+regulate_js(name.variablevalue)+'")');
				vflag=false;
			}else {
				if(type_judge(name,value))variables[i].value = value;
				jsOfAnimes.push('ANIME_dainyu("'+name+'","'+value+'")');
			}
		}
	}
	}
}

function alertScanf(){
	alert("コンソールに文字を代入してください。");sign = 1;
}
function printf_js(name,value){
if(action_frag == true){
	if(value.match(/^::/)){
		value =value.match(/^::(.*)::$/)[1];
	}
	var pstr = "";
	var nameArray = name.split(":");
	var valueArray = value.split("::");
	var inputTypeArray =new Array();
	for(var pi = 0;pi < valueArray.length;pi++){
		if(valueArray[pi].match(/^%[a-z]/))inputTypeArray.push(valueArray[pi]);
	}
	for(var pi = 0;pi < inputTypeArray.length;pi++){
		for(var pi2 = 0;pi2 <variables.length;pi2++){
			if(variables[pi2].name == nameArray[pi]){//console.log(inputTypeArray[pi]+nameArray[pi]+variables[pi2].data_type);
				if(((variables[pi2].data_type=="int")&&!(inputTypeArray[pi]=="%d"))||
					((variables[pi2].data_type=="double")&&!(inputTypeArray[pi]=="%f"))||
					((variables[pi2].data_type=="char")&&!(inputTypeArray[pi]=="%c")))syntaxErrorFlag = false;
			}
		}
	}
	var variableNumCounter = 0;
	for(var pi = 0;pi<valueArray.length;pi++){
		if(valueArray[pi].match(/^%[a-z]/)){
			for(var pi2 = 0;pi2 < variables.length;pi2++){
				if(variables[pi2].name == nameArray[variableNumCounter]){
					pstr += variables[pi2].value;
				}
			}
			variableNumCounter++;
		}else{
			pstr += valueArray[pi];
		}
	}
	var methodstr = "ANIME_printf([";
	for(var pi = 0;pi < valueArray.length;pi++){
		methodstr += ('"' + valueArray[pi] + '"');
		if(pi<valueArray.length-1){
			methodstr += ',';
		}else{
			methodstr +=']';
		}
	}methodstr += ',[';
	for(var pi = 0;pi < nameArray.length;pi++){
		methodstr += ('"' + nameArray[pi] + '"');
		if(pi<nameArray.length-1){
			methodstr += ',';
		}else{
			methodstr +=']';
		}
	}methodstr += ');';
	jsOfAnimes.push(methodstr);
	jsOfAnimes.push('setPrintf("'+pstr+'");');
	}
}

function printf_djs(dstr){
if(action_frag == true){
	jsOfAnimes.push('ANIME_printf("'+dstr+'");');
	jsOfAnimes.push('setPrintf("'+dstr+'");');
	}
}

var firstPrintf;
function setPrintf(value){
if(action_frag == true){
	//console.log("setPrintfStrは："+value);
	if(firstPrintf){document.getElementById("console").value += (value);firstPrintf=false;}
	else{document.getElementById("console").value += (value);}
	consoleStatus = document.getElementById("console").value;
	}
	sign=1;
	BUTTON_ON();
}

function type_judge(name,value){
if(action_frag == true){
	var i;
	for(i = 0; i <= variables.length; i++){
		if(variables[i].name == name){
			var data_type = variables[i].data_type;
			break;
		}
	}
	if(data_type == "int"){
	//【変数に文字が代入された場合…ミスか変数かを判断する】
		if(value.match(/^[a-z].*/)){
			for(i = 0; i < variables.length; i++){
				//【変数に変数が代入された場合】
				if(variables[i].name == value){
					if(variables[i].data_type == "int" || variables[i].data_type == "double"){
						value = variables[i].value;
						/* 変数→中身の数値に表示を切り替えるアニメ */return true;
					} else {/* doubleかint型じゃなければintに文字型を代入してしまった場合のアニメ */
					}
				/*【変数に文字列が代入された場合】*/
				} else {/* 既存の変数にはないと判断し、intに文字を代入してしまった場合のアニメ*/
				}
				if(i==variables.length)return false;
			}
		} else if(value.match(/^[0-9]+/)){/*代入するvalueが数値だった場合はそのまま代入する*/
			return true;
		}else{
			return false;
		}
	}
	if(data_type == "double"){
	//【変数に文字が代入された場合…ミスか変数かを判断する】
		if(value.match(/^[a-z].*/)){
			for(i = 0; i < variables.length; i++){
				//【変数に変数が代入された場合】
				if(variables[i].name == value){
					if(variables[i].data_type == "int" || variables[i].data_type == "double"){
						value = variables[i].value;
						/* 変数→中身の数値に表示を切り替えるアニメ */return true;
					} else {/* doubleかint型じゃなければdoubleに文字型を代入してしまった場合のアニメ */
					}
				/*【変数に文字列が代入された場合】*/
				} else {/* 既存の変数にはないと判断し、doubleに文字を代入してしまった場合のアニメ*/
				}
				if(i==variables.length)return false;
			}
		} else if(value.match(/^[0-9]+\.[0-9]+|^[0-9]+/)){/*代入するvalueが数値だった場合はそのまま代入する*/
			return true;
		}else{
			return false;
		}
	}
	if(data_type == "char"){
	//【変数に文字が代入された場合…ミスか変数かを判断する】
		if(value.match(/^[a-z].*/)){
			for(i = 0; i < variables.length; i++){
				//【変数に変数が代入された場合】
				if(variables[i].name == value){
					if(variables[i].data_type == "char"){
						value = variables[i].value;
						/* 変数→中身の数値に表示を切り替えるアニメ */return true;
					}else if(variables[i].data_type == "int" || variables[i].data_type == "double"){
					 return false;
					}
				}
			}/*変数のなかには無かった！*/
		}
		return true;
		}
	}
	
};