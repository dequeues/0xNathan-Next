import {useState} from 'react';
import Head from 'next/head'
import MarkdownToBBCode from '../markdown_to_bbcode';

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
      <div>
          <div>
              <div>
                  <h1 className="text-my-blue">Markdown</h1>
                <textarea onChange={onFormInputChange}></textarea>
              </div>
              <div>
                  <h1>BBCode (output)</h1>
                <textarea value={query.input} readOnly></textarea>
            </div>
        </div>
      </div>
  )
}
