import React from 'react';
import { Button } from 'ui/buttons';
import{AiOutlineCheckCircle , AiOutlineCloudUpload} from 'react-icons/ai'

import {EditorFeedbackStyles, Feedback, FeedbackMessage, FeedbackOption} from './styles'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
  return (
        <EditorFeedbackStyles  {...props}>
           {
             !status 
             ?
             <Feedback>
              <AiOutlineCheckCircle color="d9f99d" size="12rem" />
              <FeedbackMessage>
                Product Uploaded Successfully
              </FeedbackMessage>
            </Feedback>
            :
            <Feedback>
             <AiOutlineCloudUpload color="d9f99d" size="12rem" />
             <FeedbackMessage>
              Uploading New Product
             </FeedbackMessage>
           </Feedback>

           }
           <FeedbackOption>
             <Button 
              bc="tomato" 
              color="d9f99d"
              onClick={()=>writeCompleted(false)}
              disabled={status}
              >Another Product</Button>
             <Button 
              bc="cornflowerblue" 
              color='white'
              onClick={()=>navigator('/dashboard')}>View All Products</Button>
           </FeedbackOption>
        </EditorFeedbackStyles>
  )
}

export default EditorFeedback