//Here it is.

function confirmDecrypt() {
  var encrtyptedDataToDecrypt =
    "U2FsdGVkX18PbKaY9pQWdEk4nHMHIUf4yUriHLZKSzYqBDwb+VLmqM7p0mHGfX2Q+zF9rsCTie6hICNuvB5YAOO6+Y90Ki8XyGKgt0uyyhFBRehBPdNPlY/fRFiGtTZfgszPH0MbMP18THHO1A39MA==";
  var enteredPasscode = document.getElementById("inputPasscode").value;

  var decrypted = CryptoJS.AES.decrypt(
    encrtyptedDataToDecrypt,
    enteredPasscode
  ).toString(CryptoJS.enc.Utf8);
  if (decrypted.charAt(0) == "<") {
    document.getElementById("SecretLinkSpace").innerHTML = decrypted;
  } else {
    document.getElementById("SecretLinkSpace").innerHTML =
      "Sorry  " +
      enteredPasscode +
      " is incorrect <br> " +
      ' Pleasee contact Nabil <br> <b>lamribenn@gmail.com</b><br> use subject "timeline view request" , and a brief message <br> describing your interest.<br>thank you  ';
  }
}

function inject() {
  document.getElementById("secretDiv").innerHTML = '<div class="timeline">';
  document.getElementById("secretDiv").innerHTML = "hii";

  document.getElementById("secretDiv").innerHTML = "</div>";
}

function inject1() {
  document.getElementById("secretDiv").innerHTML = "";
  document.getElementById("secretDiv").innerHTML = '<div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2022 MAY </a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">Puting this website together.</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2022 APR </a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Neural net<br /> I ve been playing with opencv undo Unity and have felt hungry for more diving deeper into machine learning. I said reviewing calculus and statistics end meeting up Coronavirus networks and modeling techniques. .";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2022 APR</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Interviewing for a robotics company we discussed having a user move their head and replicating that mechanically period over the phone I was going to have an interview a second interview after a week and sell and the time to think about a solution period during a preliminary phone interview with the robotics company it was mentioned that at robotically period. I have to be very vague because I signed an nda agreement period that` give me an idea to present for my follow-up interview which will be over a video call.. I thought I could just track a colors face position on my screen and have that transfer to a server that would be holding my camera. when the color move their heads left or right my camera will also represent that motion giving them the impression that they are looking through a an actual window.. I worked on it for a week and it was ready for presentation it was a very good topic of conversation and a good Showcase of my skills with them such a short.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2022 JAN</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " I wanted a way to put my Unity games on a console for my kids. Basically I wanted to have my kids play games that I create in annuity period I didn t want they re too young to use the computer and I would rather use something more durable listless expensive period a perfect solution so now the challenge is putting a unity game which runs on X86 based processor with a Raspberry Pi which is an arm ship period. I also wanted to create a custom made controllers using an Arduino because I wanted to have analogue sliders since the first idea was to create pong. I tried the webgl round which was very quite to deploy but suffers from a very small browser memory allocation period. anything more complex that simple blocks and very small number of branded watches will not run with the current WebGL state. One workaround is to edit the .json file and increase the value for TOTAL_MEMORY. The webGl peopl advise using 512Md. The max allowed is only 2024 and is not recommended at all. Another option to explore will be Unity Projet tiny <!-- https://docs.unity3d.com/Packages/com.unity.tiny@0.16/manual/index.html --> At the moment It may not support";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2021 FEB</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Another fun weekend project is the mail detector equipped with a microphone that says you ve got mail just like in the good old AOL days. When the mail man slips an envelope through the mail slot on the front door, it passes in front of a sensor which triggers an Arduino uno to play the original wave audio “You got mail” The wave file was converted to raw bytes and stored directly on the EEPROM. I then built simple audio amplifier using a standard OpAmp.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2021 JAN</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Rodogo: A quadruped robot using 12 servos and custom power distribution circuit, an Arduino mega to drive the servos and a teensy 4.1 to read gyroscope values and compute a kinematic model. (more details regarding design, and coding available soon)";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2020 JUN</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Upgrade and managed home network. Everyone’s working from home and very dependent on the network. Since I do tinker with network configs I decided to segregate and consolidate our home network. I have to manage 3 IOT thermostats , 4 remote IOT switches, 6 IP cams, 2 web servers,a video strem server, a file sharing server , a movies nas , a main network, a guest network, a vpn , and my networking sandbox for tinkering and developing. (update 2021_ the machine hosting my seb servers is kaput.) ";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2020 MAY</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Early 2020 When zoom started to become part of our life, I thought it would be nice to include the other party’s face in my video feed. I created a quick project using OpenCV to detect a face anywhere on the screen, then compose it on a 3D object in Unity, then feed that back into any video conferencing platform that supports virtual camera inputs... before filters and microsoft teams.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2020 APR</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " I got a 3d printer<br /> 3D printing a collection of 3D printing tricks and tips that I have learned well designing various little object with my new 3D printer. I acquired my first 3D printer at the beginning of the covid. I figured I would be home for an extended period of time, and it would be a perfect time to get into 3D printing. One of my friends is a professional in additive manufacturing and he suggested trying the Creality Ender5 as a solid entry level printer. After getting comfortable with it I started upgrading : I accidentally snapped the mini usb plug and had to solder it back on. I accidentally snapped it later , and this time it was unsalvageable. I decided to upgrade the bord to a 32bit processor board. This can support marlin 2.0 and extra peripheral devices such as and automatic bed leveler. Upgraded the file transfer and printer monitoring. I had a spare raspberry pi laying around and used it to run Octoprint. I use Fusion 360 to design mechanical parts, and blender to design more organic forms . I’ve used both Cura and prusaslicer.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2019 JUN</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">Character Modeling</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2019 SEP</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " A friend of mine I brainstormed an idea to build a math game for kids. We came up with the bellhop bunny after Consulting with our kids. This hotel is made of multiple floors has a stack on each floor is a little critter who needs to provide an item to a friend who lives on a different floor the way to access the different floor his to solve an easy addition problem. Each floor is randomly generated and the characters on the right of my generated floors follow a unique procedural animation. for example if the the animal lives in a room the room will be furnished with a random bed a bedside table a rug and items you can find in the bedroom and arrange them in a random order while leaving enough space for the Critter to walk to the front door. When the doors open with see the critter doing an action that would be generally associated with a broom such as getting up from the bed and walking to the door or getting up from their desk and walking to the door..";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2018 MAY</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Integrated third party peripherals to the reality zombie game period this was a rifle with recoil and that came with a library and cplusplus period integrated these libraries were there game and also made models of the weapons that are worth going to be used period. the player would have a physical rifle and their hands and the Hollands Wood Project a holographic scan on top of it period by this time the game was getting more complicated and intricate and we were pushing the limits of the holy Lance period. we decided to to put the game into VR using HTC valves and the same controllers.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2017 JUL</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Co-founded TotalRespawn with Mark Belmarsh. At the time we were building a first-person shooter using the hololens. I designed a game server from that wood project the same Holograms to multiple users. This would allow two people to see the same zombie and even shoot at it for damage. I designed a server that would use TCP to share a common anchor World anchors data between the player and a UDP server to the sink zombie positions and attributes..";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2016 MAY</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">Alien Explorer Android Game</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2016 AUG</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Blender modeling tutorials for a group of devs.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2016 JUL</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">GPS app self hosted</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2016 MAY</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Letter storm. Spelling Advanture game for kids";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2016 APR</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">Kitty Cycle Android Game</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2015 JUL</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">RedDwarf</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2014 OCT</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Fps networked multiplayer prototype new year, new game project. This year I m learning how to build multiplayer games. So far i m learning about networking , server client model, animator and raycasting :)";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2013 DEC</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Vinny <br/>This is probably one of my first projects involving arduinos.Increase has a row over that moves around using Treads and 2Motors and it avoids obstacles using an module.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2013 SEP</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Blender modeling using a photo . used photoshop to manually manipulate the image for texturing.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2012</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Modelling our cat Pashal using Blender . This involved sketching our cat been scratching him again on a digital tablet importing that into blender and modeling it that way. Leader of this model was also raped it admitted to be used in unity at some point. at the time I didn t really know what I was going to do with the many other models that I was creating.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2011</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Pretty bad blender modeling and animation";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2007</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Road trip across the u.s. . Maybe put some pictures here";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2006</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " The cow parade is an international public Art Exhibit that has featured in major world cities period in 2006 Boston was selected as the event City. I was working as a intern industrial designer in a small firm in Boston and we were chosen to display two of the cows End Boston. I had tofabricate the proper mask in fiberglass cow parade";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2005</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Design coop Orietation table in baterry park. The cool think is that I ran into it many years later while visiting NewYork.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 2004</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">Industrial design</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 200ish</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">Urban graffiti scene</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1999</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " I don’t remember how i got introduced to OpenFx. It was certainly not a product of an internet search. I was running Windows98 and AOL, Netscape and InternetExplorer were all the rage. OpenFx is a very clunky mesh editor compared other modeling software at the time, but it was FreeWare.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1997</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " I had to get a ti-83 for highschool ap math classes and discovered that I could program them in Basic-style script";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1996</a></h2>';
  document.getElementById("secretDiv").innerHTML =
    ' <p style="color: black">BigMove</p>';
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1994</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Some of very few drawings i somehow kept around";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1994</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Introduced to GW basic at a local “informatic center”. One of if not the first programming center in my town for adults.Once again, my dad’s buddy was the program administrator, and I was allowed to attend the course. Thinking back as I am writing this blog, I was rather privileged as a child and didn’t even know it. I remember going in early to be able to use the IBMs to play a few minutes of Price or persia , the goonies, and river run before the class started.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1992</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Electronics and circuits.<br /> My dad was very well connected back then. He personally knew a few university professors and presidents, and I was able to attend the local after school university’s electronics design class at a young age. It was fun playing with multimeters and sciloscopes, and have access to a plethora of components, but I remember feeling blank, dark,and confused when the topics evolved to digital circuits and high math analysis. It almost felt like the stress felt when youre not ready for an exam, except I was not a registered student. I would still take notes knowing that some day I would be a grownup and understand it.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1991</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " My parents had a subscription to “sciences et vie” a monthly french science magazine which was one of the few foreign subsciptios allowed in Algeria at the time. I was a fan of the DIY electronic experiments. They provided schematics and explanations for building gadgets like a traffic signal , buzers and christmas tree light strobe. I added resistors , capacitors, diods and transistors to my list of scavanged parts. My lego creations were upgraded with blinking lights, motors. Moving to a new school, I found the only other kid who like me enjoyed electronics. His dad was and electrical engineer and had a home shop stacked with equipment, schematics , and tons of cool stuff. My friend and I build a remote controle from scratch (blindly following a schematic) and since I was the one with the lego, I also build a chassis . We were now the only kids in town with a remote controlled car.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = ' <div class="timeline">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineright">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent" style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> 1990</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " Discovering electricity. I was reaching the limits of what was possible to create with a limited lego set. I started experimenting with fusing lego with cardboard extentions. One day I opened broken walkman with the idea of pulling out the motor and integrate it to my lego. I built a lego plane with a motorized propeller. I would hold the plane with my fingers and connect two exposed wires and the propeller wold spin. I was hooked. I started scavenging basic components like motors, light bulbs, and wires from any juck I could get my hands on.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontainer timelineleft">';
  document.getElementById("secretDiv").innerHTML =
    ' <div class="timelinecontent">';
  document.getElementById("secretDiv").innerHTML =
    ' <h2 style="color: black"><a href=" "> pre 90s</a></h2>';
  document.getElementById("secretDiv").innerHTML = ' <p style="color: black">';
  document.getElementById("secretDiv").innerHTML =
    " North Africa in the 90’s was pretty good but not stellar. Toy stores were not the priority for developing countries at that time, but since my family traveled often to France, I was able to get lego sets. I had to be creative and build the toys I wanted. Many times had to disassemble my favorit current toy in order to build a new one. I spent most vacation days drawing, building toys, or watching tv. I grew up in a house where video games were almost taboo for some weird reason. Ond day I was in a hotel bar/restaurant with my parents, and noticed an Arcade machine. There was a definit look of panic in their eyes saying “oh no this is not for you, but it’s too late since you’ve seen on”. I had already ran to the machine , and it was glorious. I don’t remember what game it was , there were so many colors and works and animations. My parents convinced me that I didn’t need coins to play. I was allowed to move the joysticks and click the buttons pretending i was playing.";
  document.getElementById("secretDiv").innerHTML = " </p>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = " </div>";
  document.getElementById("secretDiv").innerHTML = "";
}
