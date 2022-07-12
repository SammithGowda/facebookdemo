import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { clear } from "@testing-library/user-event/dist/clear";
export const Home = () => {
  const [text, setText] = useState("");
  const [gifdata, setGifdata] = useState([]);
  //   console.log(gifdata);
  useEffect(() => {
    getgifdata();
  }, [text]);
  const getgifdata = () => {
    // setGifdata([]);
    if (!text) return;
    // console.log(text);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=nr8XmV69fFVJyrtLemHNFEfcRo93yOMY&q=${text}`
      )
      .then((res) => setGifdata(res.data.data));
  };
  const clear = (e) => {
    if (e.key === "Backspace") {
      setGifdata([]);
    }
  };
  console.log(gifdata, "gifdata");
  return (
    <div className="main_div">
      <div className="app_name">
        <h2>FACEBOOK</h2>
      </div>
      <div className="second_container">
        <div className="personal_details_div">
          <img className="profile_pic" src="./blank-profile.webp" alt="" />
          <p>Leonardo Dicaprio</p>
        </div>
        <div className="post_div">
          <div className="post_input_div">
            <img src="./blank-profile.webp" alt="" />
            <input
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
                    "block")
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
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => clear(e)}
                />
                <div
                  className="gif_content"
                  onClick={() =>
                    (document.getElementsByClassName("modal")[0].style.display =
                      "none")
                  }
                >
                  {gifdata.map((el) => (
                    <>
                      <img
                        onClick={() => alert(el.images.fixed_height.url)}
                        src={el.images.fixed_height.url}
                        width={"50%"}
                        height={"100px"}
                        alt=""
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
            {/* button modal */}
          </div>
        </div>
      </div>
    </div>
  );
};
