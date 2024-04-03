function valid(){
    var username=document.getElementById("uname").value;
    var location=document.getElementById("loc").value;
    if(username!="" && location!=""){
        alert("Hello "+username+" from "+location);
    }
    else{
        alert("Empty username or Pass Not allowed...");
        form.uname.focus();
        form.loc.focus();
        return false;
    }
}
function sumAndPer2(){
    var math=Number(document.getElementById("math").value);
    var english=Number(document.getElementById("english").value);
    var science=Number(document.getElementById("science").value);

    var sum=math+english+science;
    document.getElementById("total").value=Number(sum);
    var per=sum/3;
    document.getElementById("percentage").value=per.toFixed(2);
    return false;
}

function appraisal(){
    var performance=document.getElementById("performance").value;
    var salary=Number(document.getElementById("salary").value);
    console.log("hello");
    if (performance=="a"){
        var bonus=salary*0.3;
        document.getElementById("bonus").value=bonus;
        document.getElementById("totalsal").value=bonus+salary;
    }
    else if (performance=="b"){
        var bonus=salary*0.1;
        document.getElementById("bonus").value=bonus;
        document.getElementById("totalsal").value=bonus+salary;
    }
    else{
        var bonus=salary*0;
        document.getElementById("bonus").value=bonus;
        document.getElementById("totalsal").value=bonus+salary;
    }
    
    return false;
}
function testResult(){
    count=0;
    var q1=document.getElementById('static1').checked;
    var q2=document.getElementById('dynamic2').checked;
    if(q1 && q2){
        count=4;
    }
    else if(q1 || q2){
        count=2;
    }
    else{
        count=0;
    }
    alert("You've got "+count+" marks!!!");
    return false;
}
function homeLoad(){
    var test=window.open("homeload.html","","toolbar=no,scrollbars=no,resizable=no,top=250,left=500,width=610,height=310");
}