player_q1 = localStorage.getItem("q_1");
player_q2 = localStorage.getItem("q_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_q1 + ":";
document.getElementById("player2_name").innerHTML = player_q2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_q1 ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_q2 ;

function send(){
    number_1 = document.getElementById("num_1").value;
    number_2 = document.getElementById("num_2").value;
    act_ans = parseInt(number_1) * parseInt(number_2);

    quest_nos = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    in_box = "<br> Answer : <input type = 'number' id ='input_check_box'>";
    btn_ch = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>"
    row = quest_nos + in_box + btn_ch;
    document.getElementById("final").innerHTML = row;
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";
}