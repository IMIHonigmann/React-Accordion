import { useState, Fragment } from 'react';
import './App.css';
import MyComponent from './extras.jsx';



function App() {
  return (
    <Fragment>
      <p>
        {QAContainer('What is Lorem ipsum', 'Lorem ipsum is a placeholder text commonly used in the graphic, print, and web design industries. It is used to fill space in a design layout to give an idea of how the final text will look without using actual meaningful content')}
        {QAContainer('Why is Lorem ipsum often used in design projects', 'Lorem ipsum is used in design projects because it resembles natural language without being readable, allowing designers to focus on the layout and visual aspects of their work without being distracted by the content')}
        {QAContainer('Who invented Lorem ipsum', 'The Lorem ipsum text is derived from sections of a work by the Roman philosopher Cicero, specifically his "De Finibus Bonorum et Malorum" (On the Ends of Good and Evil), written in 45 BC. The modern Lorem ipsum text used today, however, has been altered and standardized over the years')}
        {QAContainer('What is the purpose of using Lorem ipsum in design','The purpose of using Lorem ipsum in design is to present a visual representation of the layout and design elements without being influenced by the actual content. It helps to ensure that the focus remains on the aesthetics and structure of the design rather than the meaning of the text')}
        {QAContainer('What is the purpose of using Lorem ipsum in design','The purpose of using Lorem ipsum in design is to present a visual representation of the layout and design elements without being influenced by the actual content. It helps to ensure that the focus remains on the aesthetics and structure of the design rather than the meaning of the text')}
        {QAContainer('What is the purpose of using Lorem ipsum in design','The purpose of using Lorem ipsum in design is to present a visual representation of the layout and design elements without being influenced by the actual content. It helps to ensure that the focus remains on the aesthetics and structure of the design rather than the meaning of the text')}
        {QAContainer('What is the purpose of using Lorem ipsum in design','The purpose of using Lorem ipsum in design is to present a visual representation of the layout and design elements without being influenced by the actual content. It helps to ensure that the focus remains on the aesthetics and structure of the design rather than the meaning of the text')}
        {QAContainer('What is the purpose of using Lorem ipsum in design','The purpose of using Lorem ipsum in design is to present a visual representation of the layout and design elements without being influenced by the actual content. It helps to ensure that the focus remains on the aesthetics and structure of the design rather than the meaning of the text')}
      
      </p>
      <br/>
      <MyComponent />
    </Fragment>
  )
}

function QAContainer(q, a) {
  
  const [isVisible, setVisible] = useState(false);
  const question = q + '?'
  const answer = a + '.';

  const showElements = () => {setVisible(!isVisible)};

  return (
    <Fragment>
      <span className={`turnArrow ${isVisible ? 'visible' : ''}`} onClick={() => showElements()}> ➤ </span>
      <div className={`QAContainer ${isVisible ? 'visible' : ''}`} onClick={() => showElements()}>
        <h3 onClick={() => showElements()}> {question} </h3>
        <p className={isVisible ? 'visible' : ''}>
        ━━━━━━━━━━━━━━
        <br />
        {answer}
        </p>
      </div>
        </Fragment>
  )
}



export default App
