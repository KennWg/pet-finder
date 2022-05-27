import { useStoreContext } from '../../utils/GlobalState';
function Report() {
    const { state, dispatch } = useStoreContext();
    // console.log("HERE it is: ^^^^^^^^^ ", state)
    return (

        <div>GOOD CALL</div>

        // <div class="report-card">
        //     <h1>Functional Provider</h1>
        //     <ul>
        //         {users.map((user) => (
        //             <li key={user.username}>
        //                 {user.username}'s email address is: {user.email}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    )
}

export default Report;