
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Comment } from './Comment';
import { fetchComments } from './commentsSlice';
import './style.css';



export function Comments(props) {
    // const [commets, setComments] = useState('');
    // const dispatch = useDispatch();

    // const test = dispatch(fetchComments(props.permalink));
    // console.log(test )

// console.log(props.permalink);
    
    return (
        <div id={props.id} className="comments">
            <hr></hr>
            {props.comments.map((comment) => {return <Comment author={comment.data.author} text={comment.data.body} time={comment.data.created_utc}/>})}
        </div>
    );
}