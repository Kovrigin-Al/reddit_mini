import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';
import './style.css';
import pluralize from 'pluralize'

export function Post (props) {
    
    function postCreatedTimeDifference() {
         const timeDifferenceUnix = Date.now() - props.created_time*1000;
         const timeDifference = new Date(timeDifferenceUnix)
        return timeDifference.getMonth() ? `${pluralize('month', timeDifference.getMonth())} ago` :
        timeDifference.getDate()-1 ? `${pluralize('day', timeDifference.getDate(), true)} ago` :
        timeDifference.getHours() ? `${pluralize('hour', timeDifference.getHours(), true)} ago` :
        timeDifference.getMinutes() ? `${pluralize('minute', timeDifference.getMinutes(), true)} ago` : 'less than a minute ago';

    }
    
    return (
        <div className='post'>
            <div className="sideBar hide">
                votes {props.ups}
            </div>
            <div className='main'>
                <div className='topBar'>
                    <h3>{props.author}</h3>
                </div>
                <div className="middleBar">
                    title: {props.title}
                    <img src={props.preview} alt='preview'/>
                </div>
                <div className='bottomBar'>
                    <p>{postCreatedTimeDifference()}</p>
                    <p>comments {props.comments}</p>
                </div>
            </div>
        </div>
    )
}