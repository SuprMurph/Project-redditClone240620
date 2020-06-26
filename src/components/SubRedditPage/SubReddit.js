import React from "react";
import Post from "./Post";
import SubCard from "./SubCard";

class SubReddit extends React.Component {
  state;
  render() {
    return (
      <div className="SubReddit">
        <div className="main-wrapper">
          <div className="Post-List">
            <Post name="jon_snow" text="Nice Quote"  image="https://i.redd.it/08ndaio276751.jpg"/>
            <Post name="lolipop" text="Check this out!" image="https://i.redd.it/479p6n7mp3651.jpg" />
            <Post name="van_halen" text="Scary story"  image=" https://i.redd.it/kkjuy0i28v651.jpg"/>
            <Post name="prince" text= "Come on Jim"image="https://www.reddit.com/r/DunderMifflin/comments/hcdor8/cmon_jim/" />
          </div>
          <SubCard />
        </div>
      </div>
    );
  }
}
export default SubReddit;
