// fetch instagram graph api with axios, and return the data
import axios from "axios";

const token = process.env.REACT_APP_INSTAGRAM_TOKEN;

const InstagramData = async () => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

InstagramData();

export default InstagramData;
