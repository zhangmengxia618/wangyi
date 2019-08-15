import React, {Component, Fragment} from 'react'
import './index.scss'
import ProgressiveImage from 'react-progressive-image'
class CommentList extends Component{
  render () {
    const { commentList} = this.props;
    return (
      <Fragment>
        <div className="commentList">
          {commentList.map((item, index) => {
            return (
              <div className="commentItem" key={item.content + index}>
                <div className="userInfo">
                  <div>{'user_info' in item && 'username' in item.user_info?item.user_info.username:'匿名用户'}</div>
                  <div>{item.add_tie}</div>
                </div>
                <div className="userComment">{item.content}</div>
                <div className="commentPicList">
                    {
                      item.pic_list.map((item) => {
                        console.log(item)
                          return <ProgressiveImage src={item.pic_url} placeholder="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg">
                          {src => <img src={src} alt="an image" />}
                      </ProgressiveImage>
                          // <img src={item.pic_url} key={item.id} alt={item.id}/>
                      })
                    }
                </div>
              </div>
            )
          })}
        </div>
      </Fragment>
    )
  }
}
export default CommentList
