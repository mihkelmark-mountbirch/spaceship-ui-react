const API_BASE_PATH = "http://localhost:8080";

const API = {
  getAllSpaceships: () => fetch(API_BASE_PATH + "/spaceships"),
};

export default API;
