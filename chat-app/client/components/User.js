import react, {Component} from 'react'


class User extends Component {
Login = (e) => {
    e.preventDefault()
    
}
    render(){
        return(
        <div id = "login">
        <form>
            <lable>Username</lable><br/>
            <input type="text" id="username"/><br/>
            <input type="submit"value="Log In"/>
        </form>
        </div>
        )
    }
}
export default User;