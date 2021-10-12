import axios from 'axios';
import React, { useState, useEffect } from 'react';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text }) => {
    const [debouncedText, setDebouncedText] = useState(text);
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500)

        return () => clearTimeout(timerId)
    }, [text]);

    useEffect(() => {
        if (!debouncedText) {
            return
        }
        const translate = async () => {
            const { data } = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: KEY
                }
            })

            setTranslated(data.data.translations[0].translatedText)
        }
        translate()
    }, [language, debouncedText])

   
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;