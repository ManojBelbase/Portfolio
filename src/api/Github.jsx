// GitHub.jsx
import { useState, useEffect } from "react";
import axios from "axios";
const username = "manojbelbase";
import { IoReloadOutline } from "react-icons/io5";

const GitHub = () => {
  const [followerCount, setFollowerCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFollowerCount = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setFollowerCount(response.data.followers);
      } catch (err) {
        setError("Error fetching follower count");
      } finally {
        setLoading(false);
      }
    };

    fetchFollowerCount();
  }, [username]);

  if (loading) {
    return (
      <div>
        <IoReloadOutline />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <span>{followerCount}</span>;
};

export default GitHub;
