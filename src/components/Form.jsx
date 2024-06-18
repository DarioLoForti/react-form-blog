import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

export default function () {

    
    const [content, setContent] = useState([]);
    const [error, setError] = useState('');
    const defaultData = {
        title: '',
        description: ''
    }
    const [data, setData] = useState(defaultData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.title.trim()){
            setContent([data, ...content]);
            setData(defaultData);
            setError('');
        } else {
          setError('Please enter a title');
        }
    }

    const remuveItem = (index) => {
        setContent(content => content.filter((_, i) => i !== index));
    }

    const changeData = (key, newValue) => {
        setData(data => ({...data, [key]: newValue}));
    }

    console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit} id="articleForm">
                <div className='form-control'>
                    <label> Title </label>
                    <input 
                        type="text"
                        value={data.title}
                        onChange={(e) => changeData('title', e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label> Description </label>
                    <input 
                        type="text"
                        value={data.description}
                        onChange={(e) => changeData('description', e.target.value)}
                    />
                </div>
                    <button>Submit</button>
                
            </form>

            <h2 className='list'>Posts:</h2>

            <ul>
                {content.map(({title, description}, index) => (
                    <li key={`content${index}`} 
                    onClick={()=>remuveItem(index)}> 
                   {title} <br /> {description}
                    <FaRegTrashAlt />
                    </li>
                ))}
            </ul>
        </>
    )

}
        