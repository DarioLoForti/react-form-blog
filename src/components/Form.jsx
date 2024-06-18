import { useState } from 'react';
export default function () {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setContent([...content, title]);
        setTitle('');
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
                />
            <button>Submit</button>
            </div>
            
        </form>

        <h2 className='list'>Titles:</h2>

        <ul>
            {content.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
}