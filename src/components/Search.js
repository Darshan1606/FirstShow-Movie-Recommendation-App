import React, {useState} from "react";

import "./search.css"


export default function Search ({search}) {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <div>
      <div class="search">
        <form>
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            value={text}
            placeholder="Search here"
          />
        </form>
      </div>
    </div>
    );
};

