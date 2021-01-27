import React from "react";
import Story from "./Story";
import './StoryReel.css'

//
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.stirworld.com/images/see/1370_XianStadium_6.jpg?47"
        profileSrc="https://images.indianexpress.com/2020/09/lionel-messi.jpg"
        title="Lionel Messi"
      />
      <Story
        image="https://previews.123rf.com/images/azulillo/azulillo1612/azulillo161200013/67238340-football-stadium-of-the-city-of-bilbao-in-spain-known-under-the-name-of-san-mames-san-mames-football.jpg  "
        profileSrc="https://dynamo.kiev.ua/media/posts/2020/06/16/cr.jpg"
        title="Cristiano"
      />
      <Story
        image="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
        profileSrc="https://icdn.psgtalk.com/wp-content/uploads/2020/08/Neymar-training-PSG-vs-Bayern-Munich-Champions-League-2020.jpg"
        title="Neymar JR"
      />
      <Story
        image="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg"
        title="Ibrahimovic"
      />
      <Story
        image="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
        profileSrc="https://images.daznservices.com/di/library/GOAL/af/3f/karim-benzema-real-madrid-2019-20_b7t0741hb50d1lcnbogjzbmbt.jpg?t=107528704&amp;quality=60&amp;w=800"
        title="K Benzema"
      />
    </div>
  );
}

export default StoryReel;
