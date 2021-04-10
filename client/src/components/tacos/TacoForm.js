import { useState } from "react";
import { Form } from "semantic-ui-react";
import { TacoConsumer } from "../../providers/TacoProvider";
import { Fillings, Kinds, Toppings, Sauces } from "./TacoOpts";
const TacoForm = ({ addTaco }) => {
  const [taco, setTaco] = useState({
    filling: "",
    topping: "",
    sauce: "",
    kind: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTaco(taco);
    setTaco({ filling: "", topping: "", sauce: "", kind: "" });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Select
        label="Filling"
        name="filling"
        value={taco.filling}
        onChange={(e, { value }) => setTaco({ ...taco, filling: value })}
        options={Fillings}
      />
      <Form.Select
        label="Topping"
        name="topping"
        value={taco.topping}
        onChange={(e, { value }) => setTaco({ ...taco, topping: value })}
        options={Toppings}
      />
      <Form.Select
        label="Sauce"
        name="sauce"
        value={taco.sauce}
        onChange={(e, { value }) => setTaco({ ...taco, sauce: value })}
        options={Sauces}
      />
      <Form.Select
        label="Kind"
        name="kind"
        value={taco.kind}
        onChange={(e, { value }) => setTaco({ ...taco, kind: value })}
        options={Kinds}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  );
};

const ConnectedTacoForm = (props) => (
  <TacoConsumer>{(value) => <TacoForm {...props} {...value} />}</TacoConsumer>
);

export default ConnectedTacoForm;
