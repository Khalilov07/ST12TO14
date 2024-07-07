import React, { useEffect, useState } from 'react';
import './aboutpage.css'

const AboutPage = () => {

    // узнайте что такое хуки и узнайте про хук useState()

    // useState() - это состояние которые может хранить в себе разные данные, и изменять
    // состояние с течением времени

    // count - сама переменная, setCount - это функция которая изменяет состояние 
    const [count, setCount] = useState(0)
    const [sides, setSides] = useState(["L", "R"])

    const handlePlus = () => {
        setCount( count + 1 )
    }

    const handleMinus = () => {
        setCount( count - 1 )
    }

    const handleZero = () => {
        setCount(0)
    }
    
    const handleLeft = () => {
        setSides(sides.concat('L'))
    }

    const handleRight = () => {
        setSides(sides.concat('R'))
    }  

    return (
        <div className='counter'>
            <h1 className='counter__text'>{count}</h1>
            <div className="counter__buttons">
                <button onClick={handlePlus} className='counter__button'>+</button>
                <button onClick={handleMinus} className='counter__button'>-</button>
                <button onClick={handleZero} className='counter__button'>ZERO</button>
            </div>
            <div className="counter__buttons" style={{ marginTop: 50 }}>
                <button onClick={handleLeft} className='counter__button'>LEFT</button>
                <button onClick={handleRight} className='counter__button'>RIGHT</button>
            </div>
            <h1 style={{ marginTop: 20 }}>{sides.join(" , ")}</h1>
        </div>
    );
};

export default AboutPage;