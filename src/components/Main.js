import React from 'react'

export default function Main() {
    const run = ()=>{
        let htmlCode = document.getElementById('html-code').value;
        let cssCode = document.getElementById('css-code').value;
        let jsCode = document.getElementById('js-code').value;
        let outputCode = document.getElementById('output-text');
    
        outputCode.contentDocument.body.innerHTML = htmlCode + "<style>" +cssCode+ "</style>";
        outputCode.contentWindow.eval(jsCode);
    
    }
    return (
        <>
            <div className="d-flex flex-row justify-content-around align-self-center">
                <div className="conatinerMain d-flex flex-column justify-content-center align-self-center">
                    <div className="card m-2">
                        <div className="card-header">
                            <i className="fa-brands fa-html5 mx-2"></i>HTML
                        </div>
                        <div className="card-body">
                            <textarea className="p-2" id="html-code" spellcheck="false" autocomplete="on" onKeyUp={run}></textarea>
                        </div>
                    </div>
                    <div className="card m-2">
                        <div className="card-header">
                            <i className="fa-brands fa-css3-alt mx-2"></i>CSS
                        </div>
                        <div className="card-body">
                            <textarea className="p-2" id="css-code" spellcheck="false" autocomplete="on" onKeyUp={run}></textarea>
                        </div>
                    </div>
                    <div className="card m-2">
                        <div className="card-header">
                            <i className="fa-brands fa-square-js mx-2"></i>JavaScript
                        </div>
                        <div className="card-body">
                            <textarea className="p-2" id="js-code" spellcheck="false" autocomplete="on" onKeyUp={run}></textarea>
                        </div>
                    </div>
                </div>
                <div className="output">
                    <div className="card m-2">
                        <div className="card-header cusor-pointer" onClick={run}>
                            <i className="fa-solid fa-play mx-2"></i>Output
                        </div>
                        <div className="card-body">
                            <iframe title="myFrame" id="output-text"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
