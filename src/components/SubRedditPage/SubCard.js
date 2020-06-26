import React from "react";

class SubCard extends React.Component {
  render() {
    return (
      <div className="sub-info">
        <a><h4 >Today's Top Growing Communities</h4></a>
        <ol>
          <a><li id="top-li"> <img className="list-image"src="https://styles.redditmedia.com/t5_2yuqy/styles/communityIcon_8q8ca4zwx7921.jpg?width=256&format=pjpg&s=3acd595235e914b95402bf0471ce990e98854736 " /> r/TrueoffMyChest</li></a>
          <a><li > <img className="list-image"src="https://b.thumbs.redditmedia.com/6EKfzU5PYmvE4USNgMZaBR6iCS5NnJ3YFTkZyPbXnZM.png" /> r/Thelastofus</li></a>
          <a><li > <img className="list-image"src="https://styles.redditmedia.com/t5_2t7gp/styles/communityIcon_xmne5k0j68231.png?width=256&s=3939074f1b3b20f9877759b588a54ac7ea08d1e5" /> r/Funniest TrueoffMyChest</li></a>
          <a><li > <img className="list-image"src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_x3ag97t82z251.png?width=256&s=33531dceba6466953aadef3073f36cfc2e267175" /> r/Whoisthis</li></a>
          <a><li > <img className="list-image"src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_x3ag97t82z251.png?width=256&s=33531dceba6466953aadef3073f36cfc2e267175" /> r/Politics</li></a>
        </ol>
      <a> <button id="view-all"> VIEW ALL</button></a>
      <div className="bottom-buttons">
        <a ><button className="bbutton">Sports</button></a>
        <a ><button className="bbutton">News</button></a>
        <a ><button className="bbutton">Gaming</button></a>
        <a ><button className="bbutton" >Aww</button></a>
      </div>
  </div>
  

      
    );
  }
}
export default SubCard;

