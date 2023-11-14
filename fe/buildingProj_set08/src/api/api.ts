import axios from "axios";

const URL: string = "http://localhost:2419/api/v1";
export const getProject = async () => {
  try {
    return await axios.get(`${URL}/getAll`).then((res) => {
      console.log(res.data.data[0].task);

      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneProject = async (projectID: string) => {
  try {
    return await axios
      .get(`${URL}/view-one-project/${projectID}`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
