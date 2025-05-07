<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/ol@9.2.4/dist/ol.js"></script>
    <title>location admin</title>
    <style>
        html, body {
            font-family: monospace;
        }
        #container {
            padding: 3rem;
        }

        .userNameClick {
            color: blue;
            text-decoration: underline;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div id="container">

        <form method="post">
            <input type="submit" name="clearLocationData" class="button" value="clear locationData" />
        </form>
        <p>
            <input id="userNameInput" type="text" placeholder="userName">
        </p>
        
        <p>
            <input id="groupNameInput" type="text" placeholder="groupName">
        </p>
        <div id="dateSelector">
            <input id="date" type="date">
            <input id="time" type="time">
        </div>
        <p>
            <label for="headingInput">heading:</label>
            <input id="headingInput" type="number" min="0" max="360" placeholder="heading">
            <label for="accuracyInput">accuracy:</label>
            <input id="accuracyInput" type="number" placeholder="accuracy">
            <label for="speedInput">speed:</label>
            <input id="speedInput" type="number" placeholder="speed">
        </p>
        <p>
            <label for="xInput">x:</label>
            <input id="xInput" type="number" placeholder="1558472.8711058302" step="100">
            <label for="yInput">y:</label>
            <input id="yInput" type="number" placeholder="7760118.6729024565" step="100">
        </p>
        <p>
            <label for="latInput">lat:</label>
            <input id="latInput" type="number" placeholder="57.00000" step="0.0001">
            <label for="lngInput">lng:</label>
            <input id="lngInput" type="number" placeholder="14.00000" step="0.0001">
        </p>

        <button id="clearInput">clear inputs</button>
        <p>
            <div id="text1"></div>
        </p>
        <button id="runbutton" onclick="updateUserPosition()">update user</button>
        <button id="removebutton" onclick="removeUserPosition()">remove user</button>

        <p id="addHere"></p>

        <pre id="pre1"></pre>
    </div>


    <script>
        const date = document.getElementById("date");
        const time = document.getElementById("time");
        const userNameInput = document.getElementById("userNameInput");
        const groupNameInput = document.getElementById("groupNameInput");
        const speedInput = document.getElementById("speedInput");
        const accuracyInput = document.getElementById("accuracyInput");
        const headingInput = document.getElementById("headingInput");
        const xInput = document.getElementById("xInput");
        const yInput = document.getElementById("yInput");
        const latInput = document.getElementById("latInput");
        const lngInput = document.getElementById("lngInput");
        const text1 = document.getElementById("text1");
        const pre1 = document.getElementById("pre1");
        const runbutton = document.getElementById("runbutton");
        const clearInput = document.getElementById("clearInput");
        let setDate = new Date();
        const dateSelector = document.getElementById("dateSelector");
        date.value = (new Date().toLocaleDateString());
        time.value = (new Date().toLocaleTimeString());

        text1.innerHTML = setDate.getTime();

        clearInput.addEventListener("click", function () {
            userNameInput.value = null;
            groupNameInput.value = null;
            speedInput.value = null;
            accuracyInput.value = null;
            headingInput.value = null;
            xInput.value = null;
            yInput.value = null;
            latInput.value = null;
            lngInput.value = null;
        });

        dateSelector.addEventListener("change", function () {
            setDate = new Date(date.value + "T" + time.value);
            clientPositionArray["timeStamp"] = setDate.getTime();
            text1.innerHTML = setDate.getTime();
        });

        userNameInput.addEventListener("change", function () {
            clientPositionArray["userName"] = userNameInput.value;
        });

        groupNameInput.addEventListener("change", function () {
            clientPositionArray["groupName"] = groupNameInput.value;
        });

        speedInput.addEventListener("change", function () {
            clientPositionArray["speed"] = speedInput.value;
        });

        accuracyInput.addEventListener("change", function () {
            clientPositionArray["accuracy"] = accuracyInput.value;
        });

        headingInput.addEventListener("change", function () {
            clientPositionArray["heading"] = degToRad(headingInput.value);
        });

        xInput.addEventListener("change", function () {
            clientPositionArray["x"] = parseFloat(xInput.value);

            lngInput.value = (ol.proj.toLonLat([xInput.value, yInput.value])[0]).toFixed(5);
            latInput.value = (ol.proj.toLonLat([xInput.value, yInput.value])[1]).toFixed(5);
        });

        yInput.addEventListener("change", function () {
            clientPositionArray["y"] = parseFloat(yInput.value);

            lngInput.value = (ol.proj.toLonLat([xInput.value, yInput.value])[0]).toFixed(5);
            latInput.value = (ol.proj.toLonLat([xInput.value, yInput.value])[1]).toFixed(5);
        });

        latInput.addEventListener("change", function () {
            clientPositionArray["x"] = parseFloat(xInput.value);

            xInput.value = (ol.proj.fromLonLat([lngInput.value, latInput.value])[0]).toFixed(5);
            yInput.value = (ol.proj.fromLonLat([lngInput.value, latInput.value])[1]).toFixed(5);
        });

        lngInput.addEventListener("change", function () {
            clientPositionArray["y"] = parseFloat(yInput.value);

            xInput.value = (ol.proj.fromLonLat([lngInput.value, latInput.value])[0]).toFixed(5);
            yInput.value = (ol.proj.fromLonLat([lngInput.value, latInput.value])[1]).toFixed(5);
        });

        const clientPositionArray = {};

        function removeUserPosition() {
            setDate = new Date(0);
            date.value = (setDate.toLocaleDateString());
            time.value = (setDate.toLocaleTimeString());
            updateUserPosition();
            date.value = (new Date().toLocaleDateString());
            time.value = (new Date().toLocaleTimeString());
            setDate = new Date(date.value + "T" + time.value);
            text1.innerHTML = setDate.getTime();
        }

        function radToDeg(rad) {
            return rad * (180 / Math.PI);
        }

        function degToRad(deg) {
            return (deg * Math.PI * 2) / 360;
        }

        // longitude = 14
        // latitude = 57
        // [14, 57]

        // x = 1 558 472.87110583
        // y = 7 760 118.672902454
        // [1558849.778967426, 7760325.17864454]

        function msToTime(milliseconds) {
            return Math.ceil(milliseconds / 1000 / 60) + " min sedan";
        }

        function updateUserPosition() {
            const xhttp = new XMLHttpRequest();
            setDate = new Date(date.value + "T" + time.value);
            clientPositionArray["userName"] = userNameInput.value;
            clientPositionArray["groupName"] = groupNameInput.value;
            clientPositionArray["timeStamp"] = setDate.getTime();
            clientPositionArray["x"] = xInput.value;
            clientPositionArray["y"] = yInput.value;
            clientPositionArray["heading"] = degToRad(headingInput.value) || 0;
            clientPositionArray["accuracy"] = accuracyInput.value || 10;
            clientPositionArray["speed"] = speedInput.value || 0;
            const clientPositionString = Object.keys(clientPositionArray).map(b => `${b}=${clientPositionArray[b]}`).join('&');
            console.log(clientPositionString);
            xhttp.onload = function () {
                try {
                    const userList = JSON.parse(this.responseText);
                    userList.sort((a, b) => (a["userName"] > b["userName"]) ? 1 : ((b["userName"] > a["userName"]) ? -1 : 0));

                    document.getElementById("addHere").innerHTML = "";

                    for (let i = 0; i < userList.length; i++) {
                        // create links
                        const para = document.createElement("a");
                        const p = document.createElement("p");
                        para.innerText = userList[i]["userName"];
                        para.classList.add("userNameClick");

                        userList[i]["x"] =userList[i]["x"];
                        userList[i]["y"] =userList[i]["y"];
                        userList[i]["coordinates"] = ol.proj.toLonLat([userList[i]["x"], userList[i]["y"]]);
                        para.addEventListener("click", function () {
                            const userNameInputValue = userList[i]["userName"];
                            const groupNameInputValue = userList[i]["groupName"];
                            const timeStampInputValue = userList[i]["timeStamp"];
                            const speedInputValue = userList[i]["speed"];
                            const accuracyInputValue = userList[i]["accuracy"];
                            const headingInputValue = userList[i]["heading"];
                            const xInputValue = (userList[i]["x"]).toFixed(5);
                            const yInputValue = (userList[i]["y"]).toFixed(5);
                            const latInputValue = (userList[i]["coordinates"][1]).toFixed(5);
                            const lngInputValue = (userList[i]["coordinates"][0]).toFixed(5);
                            userNameInput.value = userNameInputValue;
                            groupNameInput.value = groupNameInputValue;
                            speedInput.value = speedInputValue;
                            accuracyInput.value = accuracyInputValue;
                            headingInput.value = headingInputValue;
                            xInput.value = xInputValue;
                            yInput.value = yInputValue;
                            latInput.value = latInputValue;
                            lngInput.value = lngInputValue;
                            date.value = (new Date(timeStampInputValue).toLocaleDateString());
                            time.value = (new Date(timeStampInputValue).toLocaleTimeString());
                            console.log(new Date(timeStampInputValue).toLocaleDateString())
                            console.log(userNameInputValue + " clicked!");
                        });
                        document.getElementById("addHere").appendChild(para);
                        document.getElementById("addHere").appendChild(p);

                        userList[i]["localTime"] = new Date(userList[i]["timeStamp"]).toLocaleString();
                        userList[i]["lastUpdate"] = msToTime(Date.now() - userList[i]["timeStamp"]);
                        userList[i]["heading"] = Math.round(radToDeg(userList[i]["heading"]));
                    }
                    pre1.innerHTML = JSON.stringify(userList, undefined, 2);
                } catch (error) {
                    console.log(error);
                }
            }
            xhttp.open("POST", "sql-location-handler.php");
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.send(!!clientPositionArray["userName"] ? clientPositionString : "");
        }

        updateUserPosition()
    </script>

    <?php

    if (array_key_exists('clearLocationData', $_POST)) {
        clearData();
    }
    function clearData()
    {
        $filename = 'db.sqlite';
        unlink($filename);
        echo "$filename removed!";
    }
    ?>
</body>

</html>