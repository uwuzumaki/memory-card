const pokemon = async () => {
  let data;
  try {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(url + "25");

    if (!response.ok) {
      throw new Error("404");
    }
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data;
};

export default pokemon;
