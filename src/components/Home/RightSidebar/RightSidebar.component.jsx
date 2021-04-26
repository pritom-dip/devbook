import './RightSidebar.css';
import postData from '../../../postData/postData.json';
export default function RightSidebarComponent() {
    return (
        <div className="right-sidebar-container mt-5 pt-5">
            <div>
                <h6 className="pb-3 text-center"> <strong>Suggested friends on Devbook</strong> </h6>
                {
                    postData.map(post => 
                        <div className="d-flex container mb-3 request-container">
                            <div className="text-left w-25 pt-4">
                                <img  className="w-75 rounded-circle border border-dark"  src={post.userImg} alt=""/>
                            </div>
                            <div className="request-details-container">
                                <h4> <small> <strong>{post.name}</strong> </small> </h4>
                                    <p>1 mutual friends</p>
                                    <button type="button" class="btn btn-outline-primary p-1 me-1">Add Dev</button>
                                    <button type="button" class="btn btn-outline-danger p-1 ms-1">Remove</button>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}
