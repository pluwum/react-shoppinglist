export const ROOT_URL = "https://python-shoppinglist-api.herokuapp.com/v1";
export const AXIOS_CONFIG = function() {
  const ACCESS_TOKEN = sessionStorage.getItem("access_token");
  return {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
};
