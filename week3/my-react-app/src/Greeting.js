import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    const username = props.user;
    if (props.user && isLoggedIn) {
        return <UserGreeting name={username} />
    } else {
        return <GuestGreeting />
    }
}