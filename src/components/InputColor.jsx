import React, { useState } from 'react';

function InputColor() {

    const [hexColor, sethexColor] = useState('');
    const [style, setbackgroundColor] = useState({
        backgroundColor: '',
        transitionProperty: 'background-color',
        transitionDuration: '1s',
        textAlign: 'center',
        width: '100vw',
        height: '100vh'
    });

    const onChange = (e) => {

        let value = e.target.value
        sethexColor(value)
        
        if (value.length === 6) {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
            if (result) {
                setbackgroundColor(prev => ({ ...prev, backgroundColor: `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` }))
            } else setbackgroundColor(prev => ({ ...prev, backgroundColor: 'ошибка' }))
        } else setbackgroundColor(prev => ({ ...prev, backgroundColor: '' }))

    }

    return (
        <div style={style}>
            <h1>КОНВЕРТЕР ЦВЕТОВ</h1>
            <div style={{ display: 'flex', flexDirection: 'column', width: '200px', alignItems: 'flex-end', margin: '0 auto' }}>
                <div style={{ backgroundColor: 'grey', display: 'flex', width: '200px', border: '1px solid black', marginBottom: '10px' }}>
                    <div style={{ width: "20%", display: "block" }}>
                        <span style = {{display: "inline-block", verticalAlign: "middle"}}>#</span>
                    </div>
                    <div style={{ width: "80%" }}>
                        <input onChange={(e) => onChange(e)} type="text" id="1" maxLength="6" value={hexColor} />
                    </div>
                </div>
                <div style={{ backgroundColor: 'grey', display: 'flex', width: '200px', border: '1px solid black' }}>
                    <div style={{ width: "20%" }}>
                        <span>rgb</span>
                    </div>
                    <div style={{ width: "80%" }}>
                        <input type="text" value={style.backgroundColor} readOnly />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InputColor
