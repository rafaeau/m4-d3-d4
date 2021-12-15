import Badge from 'react-bootstrap/Badge'

const MyBadge = (props) => {
    return (
        <div className="text-center">
            <Badge variant={props.color} className="text-white">{props.text}</Badge>
        </div>
    )
}

export default MyBadge