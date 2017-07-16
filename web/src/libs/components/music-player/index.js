import React, {PureComponent} from "react"
import cls from "classnames"
import moment from "moment"

import "./styles.less"
export default class MusicPlayer extends PureComponent{
  state = {
    index: 0,
    current: {}
  }
  render(){
    const {cs} = this.props
    const {current} = this.state
    return (
      <div className={cls("music-player", cs)}>
        <div className="music-player-panel">
          <span className="icon icon-music"></span>
          <marquee className="music-player-panel-name">
            {current.album_title || ""} {`(${current.artist_name})`|| ""}
          </marquee>
          <div className="music-player-panel-time">
            ({"00:00/00:00"})
          </div>
        </div>
        <audio autoPlay src="http://m10.music.126.net/20170529174305/d355a1a5c03cda3239617c9ca7792882/ymusic/e0e6/d24c/1420/d24f167ef064804341d48df8c27ab719.mp3"></audio>
        <div className="music-player-panel-control">
          <div className="music-player-panel-control-btn"></div>
          <div className="music-player-panel-control-list"></div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    if(this.props.list.length){
      this.setState({
        current: this.props.list[0]
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.list.length){
      this.setState({
        current: nextProps.list[0]
      })
    }
  }
  
}