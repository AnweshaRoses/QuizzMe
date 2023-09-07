import "./edit.css"

import { Link } from "react-router-dom";


export default function EditUser() {
    return (
        <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/start">
            <button className="userAddButton">Back</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Rose Snow</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="usershowInfo">

                    <span className="userShowInfoTitle">anna</span>
                    </div>
                    <div className="usershowInfo">

                    <span className="userShowInfoTitle">03.01.2002</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="usershowInfo">

                    <span className="userShowInfoTitle">+65 88888888</span>
                    </div>
                    <div className="usershowInfo">

                    <span className="userShowInfoTitle">anna@hotmail.com</span>
                    </div>
                    <div className="usershowInfo">

                    <span className="userShowInfoTitle">Delhi|India</span>
                    </div>
                </div>
            </div>
            <div className="userupdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label >Username</label>
                            <input type="text" placeholder="anna@42" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label >Full Name</label>
                            <input type="text" placeholder="Anna Joseph" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label >email</label>
                            <input type="text" placeholder="anna@hotmail.com" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label >Phone</label>
                            <input type="text" placeholder="+65 8888 8888" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label >Address</label>
                            <input type="text" placeholder="Delhi|India" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                            <label htmlFor="file">
                                
                            </label>
                            <input type="file" name="" id="file" style={{display:"none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
