import Badge from 'react-bootstrap/Badge'

const MyBadge = (props) => {
    return (
        <h1>
            <Badge variant={props.color}>{props.text}</Badge>
        </h1>
    )
}

export default MyBadge