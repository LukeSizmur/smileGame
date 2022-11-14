import React, { useEffect} from 'react'
import { useState } from 'react'

export default function BoardPageApi() {
    // sets a default state
    const state = useState(0);

    useEffect(() => {
        // fetch(`https://cataas.com/cat`).then(
        //     (response) => console.log(response)
        // );
        const response = fetch('https://cataas.com/cat');
        console.log(response)
    }, []);


    return (
        <div>

        </div>
    )
}


// http://marcconrad.com/uob/smile/api.php