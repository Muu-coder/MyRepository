import './App.css';
import React from 'react';
import {marked} from 'marked';


class App extends React.Component {
  constructor(props){
    super(props);

    const defaultText="# H1 text \n## H2 text \n[link]:\nhttps://www.google.co.jp/\n[link]\n\n`inlineCode`\n```\ncode block\n```\n- istItem1\n- listItem2\n> blockQuote\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n**bold**";
    this.state={
      editor:defaultText,
      preview:marked(defaultText)
    }

    this.inputEditor = this.inputEditor.bind(this);
  }

  render(){
    return(
      <div>
      <div id="inputarea">input area</div>
      <textarea id="editor" placeholder='input text' onChange={this.inputEditor}>{this.state.editor}</textarea>
      <div id="previewarea"><div dangerouslySetInnerHTML={{ __html: this.state.preview }}/></div>
      </div>
    );
  }

  inputEditor(event){
    this.setState(()=>{
      return {
        editor:event.target.value,
        preview:marked(event.target.value)
      }
    });
  }

};

export default App;
