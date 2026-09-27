import css from './FriendList.module.css';

function FriendList({ friends }) {
    return <ul className={css.friendList}>

        <h2>Friends list</h2>

        {friends.map(({ avatar, name, isOnline }) => {
            return (
                <li className={css.item}>
                    <span className={isOnline? css.statusOnline : css.statusOfline}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            )
        })}

    </ul>;
}

export default FriendList;
