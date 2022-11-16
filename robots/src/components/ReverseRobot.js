import React, { useState } from "react";

const ReverseRobot = (props) => {
const reverse = (banana) => {

    let arrayed = banana.split("")
    let reversed = arrayed.reverse()
    let stringed = reversed.join("")

    return stringed
}
    return <>
     {reverse(props.input)}
    </>
}

export default ReverseRobot;
