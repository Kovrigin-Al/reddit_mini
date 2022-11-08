
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from './Comment';
import { fetchComments } from './commentsSlice';
import './style.css';

let result = [];

export function Comments(props) {
    // const [commets, setComments] = useState('');
    // const dispatch = useDispatch();

    // const test = dispatch(fetchComments(props.permalink));
    // console.log(test )

// console.log(props.permalink);
const commentsStatus = useSelector((state) => state.comments.status);
const comments = useSelector((state) => state.comments.comments)
// const commentsArray = (id = 'postId') => comments[id][0]; //.data.children
// const children = (id = 'postId') => comments[id][1].data.children
// console.log(children('yoy01u'));
// if (commentsStatus === 'succeeded') {secondObject = commentsArray.length; console.log(secondObject)};

const renderList = () => {
    const element = document.getElementsByClassName('comments');
    element.innerHTML = result;
}

useEffect(() => {
    if (commentsStatus === 'succeeded' && comments[props.id]) {
        result = comments[props.id].map(comment => comment.kind);
        console.log(result);
        renderList();
    }
}, [commentsStatus])


return (
    <div id={props.id} className="comments">
            <hr></hr>
           <p>{ commentsStatus === 'succeeded' ? result : 'sdafsfdg'}</p>
            {/* {result.map((comment) => {return <Comment author={comment.data.author} text={comment.data.body} time={comment.data.created_utc}/>})} */}
        </div>
    );
}