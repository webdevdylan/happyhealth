import styled from 'styled-components';
import { useState } from 'react';
import AccordionQuestions from '../../data/Accordion/AccordionQuestions';

const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = (id) => {
    showAnswer === id ? setShowAnswer(null) : setShowAnswer(id);
  };

  return (
    <Container>
      {AccordionQuestions.map((item) => (
        <SectionWrapper key={item.id} onClick={() => toggleAnswer(item.id)}>
          <QuestionWrapper reverse={item.reverse}>
            <p>{item.question}</p>
          </QuestionWrapper>
          <AnswerWrapper showAnswer={showAnswer} id={item.id}>
            <p>{item.answer}</p>
          </AnswerWrapper>
        </SectionWrapper>
      ))}
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  /* border: 1px solid black; */
  height: 400px;
  background-color: #fff;
  width: 600px;
  padding: 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  border: 1px solid black;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

const SectionWrapper = styled.div`
  /* display: flex; */
  /* border: 1px solid blue; */
`;

const QuestionWrapper = styled.div`
  /* border: 1px solid white; */
  padding: 0.2rem 0;
  height: 20%;
  background-color: ${({ reverse }) =>
    reverse ? 'var(--mainPurple)' : 'var(--mainBlue)'};
  /* margin: 0 auto; */
  border-radius: 0.5rem;
  margin: 1rem 0;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  /* border-bottom: 1px solid black; */

  p {
    font-size: 1.5rem;
    color: #fff;
  }
`;

const AnswerWrapper = styled.div`
  max-height: ${({ showAnswer, id }) => (showAnswer === id ? '20%' : '0')};
  opacity: ${({ showAnswer, id }) => (showAnswer === id ? '1' : '0')};
  /* overflow-y: hidden; */
  /* background-color: var(--mainBlue); */
  margin: 0 auto;
  border-radius: 0.5rem;
  transition: all 0.4s ease-in-out;
  display: flex;
  justify-content: center;

  p {
    font-size: 1.5rem;
    color: #000;
  }
`;