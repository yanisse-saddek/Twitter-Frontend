import { useContext, useEffect } from 'react';
import { UserContext } from '../App'
import { Navigate } from 'react-router-dom'
import "../App.css"


function Tl() {
  const context = useContext(UserContext)
  return (
    <>
      <div className='page-tl'>
        <div className='tl-left'>
          <img class="logo-tl" src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="logo" />
          <div className='btn-left'>
            <button>Home</button>
            <button>Explore</button>
            <button>Notifications</button>
            <button>Messages</button>
            <button>Bookmarks</button>
            <button>lists</button>
            <button>Profile</button>
            <button>More</button>
          </div>
          <button className='tw-left'>Tweet</button>
        </div>
        <div className='tl-middle'>
          <div className="tl-top">
            <p>Home</p>
            <div className="newtweet">
              <img classname="newtweet-img" src="https://cdn.discordapp.com/attachments/938180732814258227/974599555544928276/37693-6-pokeball-photos.png" alt="pdp" />
              <div className="newtweet-right">
                <input className='input-tweet' placeholder="what's happening?" type="text" />
                <div className="btn-tweet">Tweet</div>
              </div>
            </div>
            <div className="timeline">
              <div className="card">
                <div className="img"><img src="https://cdn.discordapp.com/attachments/938180732814258227/974599555544928276/37693-6-pokeball-photos.png" alt="contenu" /></div>
                <div className="contends"></div>
              </div>
            </div>
          </div>
        </div>
        {/* {!context.Log ? <Navigate to="/" /> : null} */}
      </div>
    </>
  );
}

export default Tl;
