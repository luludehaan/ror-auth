import React, { useState, useEffect } from "react";
import axios from "axios";

export const TacoContext = React.createContext();

export const TacoConsumer = TacoContext.Consumer;

const TacoProvider = ({ children }) => {
  const [tacos, setTacos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tacos")
      .then((res) => setTacos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addTaco = (taco) => {
    axios
      .post("/api/tacos", { taco })
      .then((res) => {
        setTacos([...tacos, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const updateTaco = (id, taco) => {
    axios.put(`/api/tacos/${id}`, { taco }).then((res) => {
      const updatedTacos = tacos.map((t) => {
        if (t.id === id) {
          return res.data;
        }
        return t;
      });
      setTacos(updatedTacos);
    });
  };

  const deleteTaco = (id) => {
    axios.delete(`/api/tacos/${id}`).then((res) => {
      setTacos(tacos.filter((t) => t.id !== id));
    });
  };

  return (
    <TacoContext.Provider
      value={{
        tacos,
        addTaco: addTaco,
        updateTaco: updateTaco,
        deleteTaco: deleteTaco,
      }}
    >
      {children}
    </TacoContext.Provider>
  );
};

export default TacoProvider;
