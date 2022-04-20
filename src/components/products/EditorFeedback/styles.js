import styled from 'styled-components';


const EditorFeedbackStyles  = styled.aside`
    width:80%
    margin:4rem auto 0;
    text-align:center;

`;

const FeedbackMessage  = styled.div`
    font-size:1.75rem;
    font-weight:600;
    color:#a3e635
`;

const Feedback  = styled.div`
  
`;

const FeedbackOption  = styled.div`
    margin-top:1rem;
  button {
      width: fit-content;
  }
`;

export {EditorFeedbackStyles, FeedbackMessage, Feedback, FeedbackOption}