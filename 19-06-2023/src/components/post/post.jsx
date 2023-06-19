import "./index.css"

const Post = ({user, post}) => {

    let selUserId = post[1].userId
    

    const selectedUser = user.find(element => 
       element.userId === selUserId)
       console.log(selectedUser)




    return (
        <div className="single__post">
        <div className="post__header">
            <p>{selectedUser.username}</p>
            <p>{selectedUser.from}</p>

            </div>
            <div className="post__img">
                {post?.map((singelePost) => {
                    return (
                        <div className="general--post__div">
                            <div className="post__container">
                                <img src={singelePost.media.src} alt={singelePost.media.description} />
                            </div>
                            <div className="description__container">
                                <h4 className="user__name">
                                    {singelePost.username}
                                </h4>
                                <p>
                                    {singelePost.description}
                                </p>

                            </div>

                        </div>
                      
                    )
                })}

            </div>
        </div>
    )
}

export default Post;