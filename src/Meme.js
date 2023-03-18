import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://api.imgflip.com/get_memes",
  });
  const [allMemesImages, setAllMemesImages] = React.useState([]);

  React.useEffect(
    () => [
      fetch("https://api.imgflip.com/get_memes")
        .then((resolve) => resolve.json())
        .then((data) => setAllMemesImages(data.data.memes)),
    ],
    []
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemesImages.length);
    const url = allMemesImages[randomNumber].url;
    setMeme((prevImage) => {
      return {
        ...prevImage,
        randomImage: url,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImg} className="form-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
