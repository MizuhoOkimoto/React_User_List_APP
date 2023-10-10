import styles from "./UsersList.module.css";
import Card from "./UI/Card";

function UsersList(props) {
  return (
    <div>
      {props.usersData.length > 0 && (
        <Card className="card">
          {props.usersData.map((users) => (
            <div className={styles.container} key={users.id}>
              <p className={styles.items}>
                {users.userName} ({users.userAge} years old)
              </p>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
}
export default UsersList;

// For outout props data
//   <div>
//     <pre>{JSON.stringify(props.usersData, null, 2)}</pre>
//   </div>
