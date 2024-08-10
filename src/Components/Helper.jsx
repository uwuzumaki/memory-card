const pokemon = async (setArray) => {
  let allData = [];
  try {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [
      response1,
      response2,
      response3,
      response4,
      response5,
      response6,
      response7,
      response8,
      response9,
      response10,
      response11,
      response12,
    ] = await Promise.all([
      fetch(url + "1"),
      fetch(url + "2"),
      fetch(url + "3"),
      fetch(url + "4"),
      fetch(url + "5"),
      fetch(url + "6"),
      fetch(url + "7"),
      fetch(url + "8"),
      fetch(url + "9"),
      fetch(url + "10"),
      fetch(url + "11"),
      fetch(url + "12"),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    const data5 = await response5.json();
    const data6 = await response6.json();
    const data7 = await response7.json();
    const data8 = await response8.json();
    const data9 = await response9.json();
    const data10 = await response10.json();
    const data11 = await response11.json();
    const data12 = await response12.json();

    allData = [
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      data9,
      data10,
      data11,
      data12,
    ];
  } catch (error) {
    console.log(error);
  }
  setArray(allData);
};

export default pokemon;
