import React, { useEffect} from 'react'
import { useState } from 'react'
import Image from 'next/image';

export default function QuestionPanel({question}) {


    return (
        <div>
            <img src={`${question}`} alt="question image" width={500} height={200} className="rounded-xl" />
        </div>
    )
}


// http://marcconrad.com/uob/smile/api.php