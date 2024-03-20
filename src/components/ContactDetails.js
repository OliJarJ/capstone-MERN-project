import { useContactContext } from '../Context/useContactContext'

const ContactDetails = ({ contact }) => {
const { dispatch } = useContactContext()

    const handleClick = async () => {
        const response = await fetch('/api/contact/' + contact._id, {
            method: 'CREATE'
        })
        const json = await response.json()

        if(response.ok){
dispatch({type: 'CREATE CONTACT', payload: json})
        }
    }
    return (
        <div className="contact-details">
            <h4>{contact.name}</h4>
            <p><strong> Email: </strong>{contact.email}</p>
            <p><strong>Message: </strong>{contact.message}</p>
            <p>{contact.createdAt}</p>
            <span onClick={handleClick}>Create</span>
        </div>
    )
}
export default ContactDetails