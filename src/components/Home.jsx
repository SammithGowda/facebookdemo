import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
export const Home = () => {
  const [post, setPost] = useState("");
  const [enterd_gif, setEnterd_gif] = useState("");
  const [gifdata, setGifdata] = useState([]);
  const [displaydata, setDisplaydata] = useState([]);

  useEffect(() => {
    getgifdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enterd_gif]);
  const random = () => {
    axios
      .get(
        `https://api.giphy.com/v1/stickers/trending?api_key=nr8XmV69fFVJyrtLemHNFEfcRo93yOMY&limit=6`
      )
      .then((res) => setGifdata(res.data.data));
  };
  const getgifdata = () => {
    if (!enterd_gif) return;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=nr8XmV69fFVJyrtLemHNFEfcRo93yOMY&q=${enterd_gif}&limit=15`
      )
      .then((res) => setGifdata(res.data.data));
  };
  const clear = (e) => {
    if (e.key === "Backspace") {
      setGifdata([]);
    }
  };
  console.log(displaydata, "displaydata");
  return (
    <div className="main_div">
      <div className="app_name">
        <h2>FACEBOOK</h2>
      </div>
      <div className="second_container">
        <div className="personal_details_div">
          <img className="profile_pic" src="./blank-profile.webp" alt="" />
          <p>Name</p>
          <p>Leonardo Dicaprio</p>
          <p>DD/MM/YYYY</p>
        </div>
        <div className="post_div">
          <div className="post_input_div">
            <img src="./blank-profile.webp" alt="" />
            <input
              value={post}
              onChange={(e) => setPost(e.target.value)}
              type="text"
              placeholder="Write something here...ಇಲ್ಲಿ ಏನಾದರು ಬರೆಯಿರಿ..."
            />
          </div>
          <div className="buttons_div">
            <div>{/* incase to add those colors */}</div>
            <div className="buttons_inside_div">
              <button>
                <img
                  src="./friends.png"
                  width={"15px"}
                  height={"10px"}
                  alt="friends"
                />{" "}
                Tag friend
              </button>
              <button>
                <img
                  src="./check-in.png"
                  width={"15px"}
                  height={"10px"}
                  alt="location"
                />
                Check in
              </button>
              <button
                onClick={() =>
                  (document.getElementsByClassName("modal")[0].style.display =
                    "block")(random())
                }
              >
                <img
                  style={{ marginRight: "5px" }}
                  src="./gif.png"
                  width={"15px"}
                  height={"10px"}
                  alt=" gif"
                />
                Gif
              </button>
              <button>
                <img
                  src="./calendar.png"
                  width={"15px"}
                  height={"10px"}
                  alt=" calendar"
                />
                Tag Event
              </button>
            </div>

            {/* button modal */}
            <div class="modal">
              <div className="modal-content">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setEnterd_gif(e.target.value)}
                  onKeyDown={(e) => clear(e)}
                />

                <div
                  className="gif_content"
                  onClick={() =>
                    (document.getElementsByClassName("modal")[0].style.display =
                      "none")(setPost(""))
                  }
                >
                  {gifdata.map((el) => (
                    <>
                      <img
                        onClick={() => {
                          let obj = {
                            Post_name: post,
                            Gif_url: el.images.fixed_height.url,
                          };
                          setDisplaydata([...displaydata, obj]);
                        }}
                        src={el.images.fixed_height.url}
                        width={"90%"}
                        height={"200px"}
                        alt=""
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
            {/* button modal */}
          </div>
          {/* posts */}
          {gifdata.length !== 0 ? (
            <div className="upload_post_div">
              {displaydata.map((el) => (
                <>
                  <div className="header_div">
                    <img src="./blank-profile.webp" alt="" />
                    <p>{el.Post_name}</p>
                  </div>
                  <div className="gif_container">
                    <img src={el.Gif_url} width={"90%"} height={"90%"} alt="" />
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
