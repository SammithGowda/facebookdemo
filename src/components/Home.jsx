import "../App.css";
export const Home = () => {
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
              <button onClick={() => alert("yes")}>
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
          </div>
        </div>
      </div>
    </div>
  );
};
