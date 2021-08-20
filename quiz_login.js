function addUser(){
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("q_1", player1);
    localStorage.setItem("q_2", player2);

    window.location = "quiz_page.html";
}