import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

export default function () {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim()){
            setContent([title, ...content]);
            setTitle('');
            setError('');
        } else {
          setError('Please enter a title');
        }
    }

    const remuveItem = (index) => {
        setContent(content => content.filter((_, i) => i !== index));
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="articleForm">
                <div className='form-control'>
                    <label> Title </label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter title here...'
                        required
                    />
                    <button>Submit</button>
                </div>
                {error && <div className='error'>{error}</div>}
            </form>

            <h2 className='list'>Titles:</h2>

            <ul>
                {content.map((content, index) => (
                    <li key={`content${index}`} 
                    onClick={()=>remuveItem(index)}> 
                    {content} <FaRegTrashAlt />
                    </li>
                ))}
            </ul>
        </>
    )

}
        