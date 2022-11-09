
import { useSelector } from 'react-redux';
import { Loading } from '../loading/Loading';
import { Comment } from './Comment';
import './style.css';

export function Comments(props) {
const comments = useSelector((state) => state.comments.comments[props.id])

return (
    <div id={props.id} className="comments">
           { comments.status === 'succeeded' ? comments.commentsArr.map((comment) => {return <Comment key={comment.data.id} author={comment.data.author} text={comment.data.body} time={comment.data.created_utc}/>}) 
           : comments.status === 'error' ? <p style={{color: 'red', textAlign: 'center'}}>{comments.errorMessage}</p> : (<Loading />)}
        </div>
    );
}