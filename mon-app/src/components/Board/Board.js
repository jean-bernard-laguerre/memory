import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Clock from '../clock/clock';
import { saveScore } from '../../functions/tools';

function Board() {

    const [ boardState , setBoardState ] = useState([])
    const [ memory, setMemory ] = useState([])
    const [ turns, setTurns] = useState(0)
    const [ gameOn, setGameOn ] = useState(false)
    const [ clock, setClock ] = useState(0)

    useEffect(()=> {

        let timer;

        if(memory.length === 2 && gameOn) {
            memoryCheck()
            winCheck()
        }

        if (gameOn === true) {
            timer = setTimeout(() =>  setClock(clock + 1), 1000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [boardState, memory, clock, gameOn])

    const shuffle = (array) => { 
        return array.sort(() => Math.random() - 0.5); 
    }; 

    const resetBoard = () => {

        let numPool = []

        for (let i = 0; i < 8; i++) {
            numPool = [...numPool, {state: 0, value: i}]
            numPool = [...numPool, {state: 0, value: i}]  
        }
        
        setBoardState(shuffle(numPool))
        setGameOn(true)
        setTurns(0)
        setClock(0)
    }

    const memoryCheck = () => {

        let newBoard = boardState

        let card1 = newBoard[memory[0].index]
        let card2 = newBoard[memory[1].index]
        
        setTimeout(() => {
            if (card1.value !== card2.value) {
                newBoard[memory[0].index].state = 0
                newBoard[memory[1].index].state = 0
                setBoardState(newBoard)
            }            
        }, 300);
        
        setMemory(memory.slice(2))
        setTurns(turns+1)
        
    }

    const winCheck = () => {

        let win = true;

        boardState.forEach(card => {

            if (card.state === 0) {
                win = false
            }
        })
        if(win) {
            alert("Victoire")
            saveScore(clock, turns)
            setGameOn(false)
        }
    }

    const cardClick = (i) => {

        if (boardState[i].state === 0) {

            let newBoard = boardState
            newBoard[i].state = 1
            setBoardState(newBoard)

            setMemory([...memory, {index: i, value:boardState[i]}]);
        }
    }

    return (
        <>
            <Button handleClick={resetBoard} text="New Game" />
            {gameOn &&
                <>
                    <Clock time={clock} />
                    <div>{`Turns: ${turns}`}</div>
                    <div className='Board'>
                        {boardState.map((item, index)=>{
                            return <Card
                                handleClick={()=>{cardClick(index)}}
                                value={item.value}
                                state={item.state}
                                key = {index}
                            />
                        })}
                    </div>
                </>
            }
            {!gameOn && 
                <>
                    {localStorage.best_score &&
                        <div className='Best-Score'>
                            <h4>Best Score</h4>
                            <Clock time={JSON.parse(localStorage.best_score).time} />
                            <p>Turns: {JSON.parse(localStorage.best_score).turns}</p>
                        </div>
                    }
                </>
            }
        </> 
    )
}

export default Board;