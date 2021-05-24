import Head from 'next/head';
import MarkdownToBBCode from '../markdown_to_bbcode';
import {useState} from 'react';


export default function Home() {

    const [query, setQuery] = useState({
        input: ""
    });

    const onFormInputChange = (event: any) => {
        setQuery(prevState => ({
            ...prevState,
            input: MarkdownToBBCode(event.target.value)
        }));
    };


  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4 h-screen">
        <div className="h-5/6">
            <h2 className="text-center text-1xl text-my-blue">Markdown (input)</h2>
            <textarea className="w-full h-full" onChange={onFormInputChange}></textarea>
        </div>
        <div className="h-5/6">
            <h2 className="text-center text-1xl text-my-blue">BBCode (output)</h2>
            <textarea className="w-full h-full" value={query.input} readOnly></textarea>
        </div>
    </div>
  )
}
