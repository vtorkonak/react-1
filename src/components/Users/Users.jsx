import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, totalItemsCount, pageSize, onPageChanged, users, followingInProgress, unfollow, follow, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage}
            totalItemsCount={totalItemsCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={followingInProgress}
                    key={u.id}
                    unfollow={unfollow}
                    follow={follow}
                     />)
            }
        </div>
    </div>
}

export default Users;