import fetch from "isomorphic-fetch"
export const MUSIC_LIST = "MUSIC_LIST"
export function list(){
  return async (dispatch)=>{
    let data = await (await fetch("/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=2&size=20&offset=0")).json()
    dispatch({
      type: MUSIC_LIST,
      data: data.song_list
    })
  }
}