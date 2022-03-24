import React from 'react'
import { Slider } from '@mui/material';
import "../styles/Password.css"
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function Password() {
    let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_',
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const [myPass, setMyPass] = React.useState('---')
    const [myPass1, setMyPass1] = React.useState('---')
    const [myPass2, setMyPass2] = React.useState('---')
    const [myPass3, setMyPass3] = React.useState('---')
    const [sliderValue, setSliderValue] = React.useState(10)
    const [myCopy, setMyCopy] = React.useState('Copy')
    const [myCopy1, setMyCopy1] = React.useState('Copy')
    const [myCopy2, setMyCopy2] = React.useState('Copy')
    const [myCopy3, setMyCopy3] = React.useState('Copy')
    const [isTrue, setIsTrue] = React.useState(true)
    function handleChangeSlider(event, newValue) {
        setSliderValue(newValue)
    }
    function randomNum() {
        setMyPass('')
        setMyPass1('')
        setMyPass2('')
        setMyPass3('')
        for (let i = 0; i < sliderValue; i++) {
            let index = Math.floor(Math.random() * myArray.length);
            setMyPass(prevState => prevState + myArray[index])
            let index1 = Math.floor(Math.random() * myArray.length);
            setMyPass1(prevState => prevState + myArray[index1])
            let index2 = Math.floor(Math.random() * myArray.length);
            setMyPass2(prevState => prevState + myArray[index2])
            let index3 = Math.floor(Math.random() * myArray.length);
            setMyPass3(prevState => prevState + myArray[index3])
        }
    }
    React.useEffect(() => {
        setMyCopy("Copy")
        setMyCopy1("Copy")
        setMyCopy2("Copy")
        setMyCopy3("Copy")
    }, [myPass]);
    function generatePassword() {
        setIsTrue(prevState => !prevState)
        randomNum()
        console.log(myPass)
    }
    function copied() {
        setMyCopy("Copied")
    }
    function copied1() {
        setMyCopy1("Copied")
    }
    function copied2() {
        setMyCopy2("Copied")
    }
    function copied3() {
        setMyCopy3("Copied")
    }
    return (

        <div id="password-modal">
            <div className='center-password-modal'>
                <div className='align-button-password'>
                    <div className='top-password'>
                        <p id="generate-a" className='myP'>Generate a</p>
                        <p id="random-pass" className='myP'>Random Password</p>
                        <p id="third-p" className='myP'>Never use an insecure password again.</p>
                        <div className='slider-button'>
                            <button onClick={generatePassword} className="bottom-password">Generate Password</button>
                            <div className='slider'>
                                <Slider min={10} max={20} value={sliderValue} onChange={handleChangeSlider} />
                                <div className='slider-value'>{sliderValue}</div>
                            </div>
                        </div>
                    </div>
                    <hr className='myHr' />
                    <div className="bottom-modal">
                        <div className='pass'><CopyToClipboard text={myPass}>
                            <div className='password-button-modal'>
                                <p className={isTrue ? "animation3" : "animation4"} id="one" onClick={copied}>{myPass}<span className="tooltiptext" id="myTooltip">{myCopy}</span>
                                </p>
                            </div>
                        </CopyToClipboard></div>
                        <div className='pass'>
                            <CopyToClipboard text={myPass1}>
                                <div className='password-button-modal'>
                                    <p id="two" className={isTrue ? "animation3" : "animation4"} onClick={copied1}>{myPass1}<span className="tooltiptext" id="myTooltip">{myCopy1}</span></p>
                                </div>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="bottom-modal">
                        <div className='pass'><CopyToClipboard text={myPass2}>
                            <div className='password-button-modal'>
                                <p id="three" className={isTrue ? "animation3" : "animation4"} onClick={copied2}>{myPass2}<span className="tooltiptext" id="myTooltip">{myCopy2}</span></p>
                            </div>
                        </CopyToClipboard></div>
                        <div className='pass'>
                            <CopyToClipboard text={myPass3}>
                                <div className='password-button-modal'>
                                    <p id="four" className={isTrue ? "animation3" : "animation4"} onClick={copied3}>{myPass3}<span className="tooltiptext" id="myTooltip">{myCopy3}</span></p>
                                </div>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
