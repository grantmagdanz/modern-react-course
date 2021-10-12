import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (formRef.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }
        document.body.addEventListener("click", onBodyClick, {capture: true})

        return () => {
            document.body.removeEventListener("click", onBodyClick, {capture: true})
        }
    }, []);

    const renderedOptions = options.map((o) => {
        if (o.value === selected.value) {
            return null;
        }

        return (
            <div key={o.value} className="item" onClick={() => onSelectedChange(o)}>
                {o.label}
            </div>
        )
    })


    return (
        <div ref={formRef} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;