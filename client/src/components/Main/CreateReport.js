import { useStoreContext } from '../../utils/GlobalState.js';
function CreateReport() {
    const [ state, dispatch ]  = useStoreContext();
    const { users } = state

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

export default CreateReport;