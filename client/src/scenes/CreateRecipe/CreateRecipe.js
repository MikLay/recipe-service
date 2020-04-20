import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import moment from "moment";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import {CATEGORIES} from "../../constants/entity_config";

const CreateForm = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
`;

const CreateRecipe = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    api.createRecipe({
      ...data,
      picture:
        "https://www.tasteofhome.com/wp-content/uploads/2017/10/Enchilada-Casser-Ole-_EXPS_WRSM17_42083_C03_22_2b-2-696x696.jpg",
      createDate: moment().format("YYYY-MM-DD HH:mm:SS")
    });
    history.push("/recipes");
  };

  return (
    <div className="container">
      <CreateForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Recipe name</label>
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="Name"
              ref={register}
            />
          </div>

          <div className="form-group">
            <label>Short Description</label>
            <input
              name="shortDesc"
              className="form-control"
              type="text"
              placeholder=""
              ref={register}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="longDesc"
              className="form-control"
              ref={register}
              rows={4}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <Form.Control as="select" name="category" ref={register} custom defaultValue={CATEGORIES[0].key}>
              {CATEGORIES.map(category => (
                  <option
                      key={category.key}
                      value={category.key}
                  >
                    {category.text}
                  </option>
              ))}
            </Form.Control>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button
            variant="dark"
            type="reset"
            onClick={() => history.push("/recipes")}
          >
            Reset
          </Button>
        </form>
      </CreateForm>
    </div>
  );
};

export default CreateRecipe;
