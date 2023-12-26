import axios from "axios";

const getDataElit = async () => {
  try {
    const data = JSON.stringify({
      user_id: procces.env.ELIT_USER_ID,
      token: procces.env.ELIT_TOKEN,
    });

    const config = {
      method: "post",
      url: "https://clientes.elit.com.ar/v1/api/productos?nombre=ssd&limit=2",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
};

const getDataAir = async () => {
  try {
    const pathAir = `https://www.air-intra.com/intra/portal/consart.php?${procces.env.AIR_TOKEN}&TEXTO=*ssd%20480`;
    const config = {
      method: "post",
      url: pathAir,
    };

    const response = await axios(config);
    const { data } = response;

    const dataArray = [];

    let arrayString = data.split("=").slice(2);
    for (let a of arrayString) {
      let lastIndex = a.lastIndexOf("'");
      let arrayString = a.slice(0, lastIndex - 2) + "]";
      dataArray.push(JSON.parse(arrayString));
    }

    console.log(dataArray);
  } catch (error) {
    console.log(error);
  }
};

getDataElit();
getDataAir();
