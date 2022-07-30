import React from 'react'
import { useState,useContext,useEffect } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'

function FeedbackForm() {
    const [text,setText]=useState('')
    const [rating,setRating]=useState(10)
    const [btndisabled,setBtndisabled]=useState(true)
    const [message,setMessage]=useState('')
    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

    useEffect(()=>{
       if(feedbackEdit.edit===true){
        setBtndisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
       }
    },[feedbackEdit])

    const handleChange=(e)=>{

        if(text===''){
            setBtndisabled(true)
            setMessage(null)
        }else if(text!=='' && text.trim().length<=10){
            setBtndisabled(true)
            setMessage('Text must be atleast 10 Characters')
        }else{
            setMessage(null)
            setBtndisabled(false)
        }
        setText(e.target.value)

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating,
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText('')
        }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleChange} value={text} type='text' placeholder='write a review' />
            <Button type='submit' isDisabled={btndisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
      
    </Card>
  )
}

export default FeedbackForm
