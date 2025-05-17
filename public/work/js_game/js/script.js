/**
 * Author: Natalia Guevara
 * Class: CS 1XD3
 * Date Created: 24 February 2025
 * Date Last Modified: 26 February 2025
 * Description: JavaScript file for JS Assignment. Mainly DOM manipulation that forms the game.
 */

window.addEventListener("load", function (event) {
    // Each page that may/may not be displayed to the user 
    let start_page_node = document.getElementById("start_page");
    let game_page_node = document.getElementById("game_page");
    let win_page_node = document.getElementById("win_page");
    let help_page_node = document.getElementById("help_page")

    // (Most) VARIABLES FROM THE START PAGE
    // input text nodes
    let p1_text_node = document.getElementById("p1_name");
    let p2_text_node = document.getElementById("p2_name");
    let p1_name, p2_name; // where name strings are stored for future reference

    let p1_colour_node = document.getElementById("p1_colour");
    let p2_colour_node = document.getElementById("p2_colour");

    // shows messages based on ilegal input - 1 for each input text field
    let illegal_node1 = document.getElementById("illegal_input1");
    let illegal_node2 = document.getElementById("illegal_input2");

    // the specific name rules that can be displayed if broken 
    let illegal_nodes1 = [], illegal_nodes2 = [];
    for (let i = 0; i < 4; i++) {
        illegal_nodes1[i] = document.getElementById("node1_rule" + i);
        illegal_nodes2[i] = document.getElementById("node2_rule" + i);
    }

    let submit_node = document.getElementById("submit");

    // nodes where names could be referenced
    let names1_nodes, names2_nodes;


    // (Most) VARIABLES FROM THE GAME PAGE
    let colour1, colour2;

    let feedback_node = document.getElementById("feedback");
    let feedback_fail_node = document.getElementById("feedback_fail");
    let ready_button = document.getElementById("ready");

    let p1_score_node = document.getElementById("p1_score");
    let p2_score_node = document.getElementById("p2_score");

    let total_score1_node = document.getElementById("score1");
    let total_score2_node = document.getElementById("score2");
    let turn_points_node = document.getElementById("turn_points");

    let roll_button = document.getElementById("roll");
    let pass_button = document.getElementById("pass");

    let round_score_p1 = 0, round_score_p2 = 0;
    let total_score_p1 = 0, total_score_p2 = 0;
    let roll_num = 1; // die's value 
    let current_player = 1; // automatically start with P1

    let fail_round = false;

    let die_img = document.getElementById("die");

    let turn_name_node = document.getElementById("turn_name");
    let turn_node = document.getElementById("turn");

    let winner_player = -1;

    // (Most) VARIABLES FROM THE WIN PAGE (results page)
    let winner_name_nodes = document.querySelectorAll("#winner_name");
    let winner_score_node = document.getElementById("winner_score");
    let winner_colour_node = document.getElementById("winner_colour");

    let loser_name_node = document.getElementById("loser_name");
    let loser_score_node = document.getElementById("loser_score");

    let reset_node = document.getElementById("reset"); // to play game again


    // (Most) VARIABLES FROM THE HELP PAGE (results page)
    let help_button = document.getElementById("help");
    let close_button = document.getElementById("close");


    /**
     * Event Listener for Player 1's Input Text Field 
     * - Any change should check legality for the player's name
     * - once both fields are legal, allowed to submit and enter the game
     */
    p1_text_node.addEventListener("input", function (event) {
        if (is_illegal(p1_text_node, illegal_node1, illegal_nodes1) || is_illegal(p2_text_node, illegal_node2, illegal_nodes2)) {
            submit_node.disabled = true;
        }
        else {
            submit_node.disabled = false;
        }

    });

    /**
     * Event Listener for Player 2's Input Text Field 
     * - Any change should check legality for the player's name
     * - once both fields are legal, allowed to submit and enter the game
     */
    p2_text_node.addEventListener("input", function (event) {
        if (is_illegal(p2_text_node, illegal_node2, illegal_nodes2) || is_illegal(p1_text_node, illegal_node1, illegal_nodes1)) {
            submit_node.disabled = true;
        }
        else {
            submit_node.disabled = false;
        }
    });


    /**
     * Checks legality of a string corresponding to user's name
     * For a name to be legal, must follow the following rules.
     * - Less than 10 characters
     * - no characters other than letters, hyphens, and spaces
     * - must enter a name
     * - names for P1 and P2 cannot be the same
     * Will display certain rules that are broken under the specified player's name field
     * 
     * @param {Object} node 
     * @param {Object} illegal_node 
     * @param {Object[]} illegal_nodes 
     */
    function is_illegal(node, illegal_node, illegal_nodes) {
        let name = node.value;
        let is_illegal = false;


        // NO EQUAL NAMES - always check either node, regardless of node passed in 
        if (p1_text_node.value.toLowerCase() === p2_text_node.value.toLowerCase() && name !== "") {
            illegal_nodes1[3].style.display = "block";
            illegal_nodes2[3].style.display = "block";
            is_illegal = true;
        }
        else {
            illegal_nodes1[3].style.display = "none";
            illegal_nodes2[3].style.display = "none";
        }

        // MUST ENTER A NAME
        if (name === "") {
            illegal_nodes[0].style.display = "block";
            is_illegal = true;
        }
        else {
            illegal_nodes[0].style.display = "none";
        }

        // NO NAMES > 10 CHARACTERS
        if (name.length > 10) {
            illegal_nodes[2].style.display = "block";
            is_illegal = true;
        }
        else {
            illegal_nodes[2].style.display = "none";
        }

        // ONLY LETTERS, HYPHENS, and SPACES
        for (let char of name) {
            if (!(('a' <= char && char <= 'z') || ('A' <= char && char <= 'Z')) && char !== "-" && char !== " ") {
                illegal_nodes[1].style.display = "block";
                is_illegal = true;
                break;
            }
            else {
                illegal_nodes[1].style.display = "none";
            }
        }

        if (is_illegal) {
            illegal_node.style.display = "block";
            node.style["border-color"] = "red";
        }
        else {
            illegal_node.style.display = "none";
            node.style["border-color"] = "black";
        }
        return is_illegal;

    }



    /**
     * Event Listener for Submit Button on Form
     * Once names are legal, loads game page elements
     */
    submit_node.addEventListener("click", function (event) {
        start_page_node.style.display = "none";
        game_page.style.display = "flex";

        // Stores names 
        p1_name = p1_text_node.value;
        p2_name = p2_text_node.value;

        // Places names where required on DOM
        names1_nodes = document.querySelectorAll("#name1");
        names2_nodes = document.querySelectorAll("#name2");

        for (let name of names1_nodes) {
            name.innerHTML = p1_name;
        }

        for (let name of names2_nodes) {
            name.innerHTML = p2_name;
        }

        turn_name_node.innerHTML = p1_name;

        // Stores colours 
        colour1 = p1_colour_node.value;
        colour2 = p2_colour_node.value;

        // Places colours on DOM
        p1_score_node.style["background-color"] = colour1;
        p2_score_node.style["background-color"] = colour2;
        turn_node.style["background-color"] = colour1;

        // converts colours to rgb by referring from nodes
        colour1 = p1_score_node.style["background-color"];
        colour2 = p2_score_node.style["background-color"];

        // Adds a B/W border-colour depending on chosen colour
        p1_score_node.style["border-color"] = bw_border(colour1);
        p2_score_node.style["border-color"] = bw_border(colour2);

    });

    /**
     * Depending on rgb values of colour passed in, finds a border of 
     *  better contrast, picking between Black or White
     * @param {String} rgb 
     * @returns Colour as String (B or W)
     */
    function bw_border(rgb) {
        // Parsing through string for R, G, B values respectively 
        let ending_bracket_index = rgb.indexOf(")");
        rgb = rgb.substring(4, ending_bracket_index);
        rgb = rgb.split(",");
        let r = parseInt(rgb[0]), g = parseInt(rgb[1]), b = parseInt(rgb[2]);

        if ((r * 0.299 + g * 0.587 + b * 0.114) > 186) {
            return ("black");
        }
        return ("white");
    }


    /**
     * Event Listener for "ROLL" button.
     * Will add points the round's current points. 
     * However, if rolling yields a 1, loses points and passes to other player. 
     */
    roll_button.addEventListener("click", function (event) {
        // update roll_num with Random
        roll_num = Math.floor(Math.random() * 6) + 1;

        // check if roll_num is 1 and update score appropriately 
        if (roll_num !== 1) { // NOT 1
            if (current_player === 1) { // p1
                round_score_p1 += roll_num; // updates round_score
                turn_points_node.innerHTML = round_score_p1; // Updates DOM
            }
            else { // p2
                round_score_p2 += roll_num; // updates round_score
                turn_points_node.innerHTML = round_score_p2; // updates DOM
            }
        }
        else { // rolls a 1 
            fail_round = true;

            if (current_player === 1) {
                round_score_p1 = 0;
            }
            else {
                round_score_p2 = 0;
            }

            turn_points_node.innerHTML = 0; // update DOM

            // pass to other player
            pass();
        }

        // update die image 
        die_img.innerHTML = "<img src='images/" + roll_num + ".png' >";
    });


    /**
     * Event Listener for "PASS" button. 
     * Saves round points to current player's total score (if any) and passes
     *  turn to next player.
     */
    pass_button.addEventListener("click", pass);

    /**
     * Passes turn to other player.
     * Will update DOM depending on if player passing rolled a 1.
     */
    function pass() {
        if (!fail_round) { // did not roll a 1
            if (current_player === 1) { // p1
                // update scores
                total_score_p1 += round_score_p1; 
                round_score_p1 = 0;
                total_score1_node.innerHTML = total_score_p1; // update DOM

                // Checks win condition 
                if (total_score_p1 >= 100) {
                    winner_player = current_player;
                    win();
                    return undefined; // stops function 
                }
            }
            else { // p2
                // update scores
                total_score_p2 += round_score_p2;
                round_score_p2 = 0;
                total_score2_node.innerHTML = total_score_p2; //update DOM

                // Checks win condition
                if (total_score_p2 >= 100) {
                    winner_player = current_player;
                    win();
                    return undefined; // stops function
                }
            }
        }
        else { // rolled a 1, display appropriate feedback
            feedback_fail_node.style.display = "inline";
        }

        fail_round = false;  // new round

        // With every pass, game ensures player passes device to other player to avoid accidentally playing on the wrong turn
        roll_button.style.display = "none"; // remove roll/pass buttons
        pass_button.style.display = "none";

        // wait for player to be "READY"
        ready_button.style.display = "inline";
        ready_button.disabled = true; //disables so previous player does not accidentally press
        setTimeout(enable_ready, 3000) // enables after 3 seconds

        // Updates DOM to reflecct whose turn it is
        if (current_player === 1) { // p1
            current_player = 2; // other player
            turn_name_node.innerHTML = p2_name;

            // DOM focused on current player
            p1_score_node.classList.remove("focus_turn");
            p2_score_node.classList.add("focus_turn");

            turn_node.style["background-color"] = colour2;
            feedback_node.innerHTML = "Wait! Pass to <strong>" + p2_name + "</strong>...";
        }
        else { // p2
            current_player = 1; // other player
            turn_name_node.innerHTML = p1_name;

            // DOM focused on current player
            p2_score_node.classList.remove("focus_turn");
            p1_score_node.classList.add("focus_turn");

            turn_node.style["background-color"] = colour1;
            feedback_node.innerHTML = "Wait! Pass to <strong>" + p1_name + "</string>...";
        }

        // reset turn's points
        turn_points_node.innerHTML = 0;
    }

    /**
     * Event Listener for "READY" Button.
     * Will re-enable roll/pass buttons and remove feedback on click
     */
    ready_button.addEventListener("click", enable_buttons);

    /**
     * Updates DOM so that game is playable.
     * - Roll/Pass buttons displayed
     * - remove feedback
     */
    function enable_buttons() {
        feedback_node.innerHTML = "";
        ready_button.style.display = "none";
        feedback_fail_node.style.display = "none";
        roll_button.style.display = "inline";
        pass_button.style.display = "inline";
    }

    /**
     * Enables the "READY" button after 3 seconds
     */
    function enable_ready() {
        ready_button.disabled = false;
    }


    /**
     * Event Listener for help "?" button.
     * - Displays instructions and disables game on click
     */
    help_button.addEventListener("click", function (event) {
        help_page_node.style.display = "inline";
        roll_button.disabled = true;
        pass_button.disabled = true;
    });

    /**
     * Event Listener for close "x" button.
     * - Removes instructions and enables game on click
     */
    close_button.addEventListener("click", function (event) {
        help_page_node.style.display = "none";
        roll_button.disabled = false;
        pass_button.disabled = false;
    });


    /**
     * Displays results page 
     * - Updates DOM based on which player won
     */
    function win() {
        game_page_node.style.display = "none";
        win_page_node.style.display = "flex";

        if (winner_player === 1) { //p1 won
            for (let node of winner_name_nodes) { 
                node.innerHTML = p1_name;
            }
            winner_score_node.innerHTML = total_score_p1;
            winner_colour_node.style["background-color"] = colour1;

            loser_name_node.innerHTML = p2_name;
            loser_score_node.innerHTML = total_score_p2;
        }
        else { //p2 won
            for (let node of winner_name_nodes) {
                node.innerHTML = p2_name;
            }
            winner_score_node.innerHTML = total_score_p2;
            winner_colour_node.style["background-color"] = colour2;

            loser_name_node.innerHTML = p1_name;
            loser_score_node.innerHTML = total_score_p1;
        }
    }



    /**
     * Event Listener for "Play Again?" button
     * - resets all game variables + stray DOM elements with past game info on it
     * - starts from Form Page
     */
    reset_node.addEventListener("click", clear)

    /**
     * Resets all game variables + stray DOM elements with past game info on it.
     * Starts from Form Page.
     */
    function clear() {
        p1_text_node.value = "";
        p2_text_node.value = "";

        p1_colour_node.value = "#FF0000";
        p2_colour_node.value = "#0000FF";

        p1_name = "";
        p2_name = "";
        submit_node.disabled = true;

        round_score_p1 = 0;
        round_score_p2 = 0;
        total_score_p1 = 0;
        total_score_p2 = 0;
        roll_num = 1;
        current_player = 1;

        die_img.innerHTML = "<img src='images/1.png' >";
        total_score2_node.innerHTML = 0;
        total_score1_node.innerHTML = 0;
        turn_name_node.innerHTML = p1_name;
        turn_name_node.innerHTML = 0;

        feedback_node.innerHTML.display = "none";
        turn_points_node.innerHTML = round_score_p1;

        win_page_node.style.display = "none";
        start_page_node.style.display = "flex";
    }
}); 
