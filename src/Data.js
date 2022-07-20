import useCustomData from "./useCustomData";

const Data = ({ data }) => {
  const customData = useCustomData(data);

  return (
    <ul>
      {data === "users"
        ? customData.map((item) => <li key={item.id}>{item.name}</li>)
        : customData.map((item) => <li key={item.id}>{item.title}</li>)}
    </ul>
  );
};

export default Data;
