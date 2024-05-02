function Translator() {
    return (<>
        <div className="wrapper">
            <div className="text-input">
                <textarea className="from-text" name="from" id="from"></textarea>
                <textarea className="to-text" name="to" id="to"></textarea>
            </div>
            <div className="controls">
                <div className="row from">
                    <div className="icons">
                        <i class="fa-solid fa-volume-high"></i>
                        <i class="fa-solid fa-copy"></i>
                    </div>
                    <select name="" id="">
                        <option value="English"></option>
                    </select>
                </div>
                <div className="exchange">
                    <i class="fa-solid fa-right-left"></i>
                </div>
                <div className="row to">
                    <select name="" id="">
                        <option value="Hindi"></option>
                    </select>
                    <div className="icons">
                        <i class="fa-solid fa-copy"></i>
                        <i class="fa-solid fa-volume-high"></i>
                    </div>

                </div>
            </div>
        </div>
        <button>Translate</button>
    </>);
}
export default Translator;