import React from "react";
import Dust from "../Dust";
import Humidity from "../Humidity";
import Temperature from "../Temperature";
import Emotion from "../Emotion";
import Update from "../Update";
import "./index.scss";

function Index({ tab }) {
    console.log("asdfasd", tab);
    return (
        <div className="content-wrap">
            <div className="left-content-box">
                <Emotion emoType={tab["flag"]}></Emotion>
            </div>
            <div className="right-content-box">
                <div className="top-wrap">
                    <Dust val={Math.ceil(tab["dust"])}></Dust>
                    <Update date={"2019-12-22"}></Update>
                </div>
                <div className="bottom-wrap">
                    <Temperature val={tab["temperature"]}></Temperature>
                    <Humidity val={tab["humidity"]}></Humidity>
                </div>
            </div>
        </div>
    );
}

export default Index;
