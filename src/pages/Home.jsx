import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function Home() {
  const [char, setChar] = useState([]);
  const [charValue, setCharValue] = useState("");
  const getChar = async () => {
    const resp = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${charValue}`
    );
    const arrData = resp.data.filter(
      (item) => item.category !== "Better Call Saul"
    );
    setChar(arrData);

    console.log(resp.data);
  };
  const filterChar = (e) => {
    setCharValue(e.target.value);
    setChar(char.filter((item) => item.name === e.target.value));
  };

  useEffect(() => {
    getChar();
  }, [charValue]);
  return (
    <main className="w-screen h-screen bg-img bg-no-repeat bg-cover">
      <section className="flex justify-center items-center m-4">
        <div>
          <img
            src="https://png2.cleanpng.com/sh/73d895e1ee470f8374b6dfc8efae1cb2/L0KzQYm3WME3N6pripH0aYP2gLBuTfxwb5Cyj9N1dHX1PcjvigRmNadqeAZ4cj3qgrL3iPlke155fd5udnn2ebF1TgNpd6gyeuRuYXvsfri0gvFlNaFzf586OD24coi8VPUyOJI1TaQEOD65Q4mCUMkyOmI6S6Y9MUS2RYO9VcY4NqFzf3==/kisspng-logo-walter-white-vector-graphics-television-show-breaking-bad-png-18-5b754e10a05298.6389091215344143526567.png"
            alt=""
            className="w-96 h-48 object-cover"
          />
        </div>
      </section>
      <form action="" className="flex justify-center items-center p-4">
        <input
          type="text"
          placeholder="Search characters"
          className="w-[90vw] max-w-[930px] p-2 bg-transparent border-[1px] border-solid border-green-400 caret-green-500 focus:outline-none text-white"
          value={charValue}
          onChange={(e) => filterChar(e)}
        />
        <button type="submit"></button>
      </form>
      <section className="flex justify-center items-center ">
        <div className="w-[80vw] m-2 max-w-[1500px] flex-wrap flex justify-center items-center">
          {char.map((item, index) => {
            return (
              <div key={index}>
                <Card {...item} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

const Card = ({ img, name, occupation, nickname }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt="Avatar" className="w-52 h-64  object-cover " />
        </div>
        <div className="flip-card-back cursor-pointer">
          <h1 className="text-4xl  mt-10 font-semibold">{name}</h1>
          <p className="text-md mt-2">A.K.A {nickname}</p>
          <p className="text-lg mt-3">{occupation}</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
