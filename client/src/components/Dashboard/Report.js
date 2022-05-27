import { useStateContext } from '../../utils/Contexts';
function Report() {
    const { users } = useStateContext();

    return (
        <div class="report-card">
            <h1>Functional Provider</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.username}>
                        {user.username}'s email address is: {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Report;