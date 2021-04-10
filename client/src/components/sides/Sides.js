const { useEffect } = require("react");

const Sides = ({ tacoId, match }) => {
  useEffect(() => {
    getAllSides(tacoId);
    getAllSides(match.params.id);
  }, []);
};
