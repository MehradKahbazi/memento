import useAxios from "../../hooks/useAxios";

const Form = ({data}) => {
    console.log(data);
    const httpRequest = useAxios()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const body = {}
        httpRequest({url: data.url, method: data.method, data: body}). then(res => {console.log(res.data);});
    }

  return (
    <form onSubmit={(e) =>{handleSubmit(e)} }>
      {data && data.field.map((field) => {
        switch (field.type) {
            case "textarea":
              return <textarea key={crypto.randomUUID()}>{field.value}</textarea>;
  
            case "select":
              return (
                <select key={crypto.randomUUID()}>
                  {field.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              );
            default:
              return (
                <>
                  <input type={field.type} name={field.name}  key={crypto.randomUUID()}/>
                  <label key={crypto.randomUUID()}>{field.label}</label>
                </>
              );
          }
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
