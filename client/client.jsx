import React from "react";
import ReactDOM from "react-dom";
import { App } from './App'
import {handleModifyAnswerVotes} from '../shared/utility';

let state = undefined;

fetch("http://localhost:7777/data")
.then(data => 
    data.json())
.then(json => {
    state =json;
    console.log("Got the state", state)
    render();
});

function handleVote(answerId, increment){

    state.answers = handleModifyAnswerVotes(state.answers, answerId, increment);

    fetch(`vote/${answerId}?increment=${increment}`);

    render();

};
// ReactDOM.render(<App></App>, document.querySelector('#container'))

// function handleModifyAnswerVotes(answerId, increment){

//     state.answers = state.answers.map(answer => {
//         if(answer.answerId !== answerId) {
//             return answer;
//         }else{
//             return {...answer, upvotes: answer.upvotes + increment}
//         }
//     })

    // fetch(`vote/${answerId}?increment=${increment}`);

//     render();

// };
function render(){

    console.info("Client:: Rendering application with remote data", state);
    ReactDOM.hydrate(<App {...state} handleModifyAnswerVotes={handleVote}/>, document.querySelector("#Container"));
}
