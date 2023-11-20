// const FormInput = ({field}) => {
//         {switch (field.type) {
//             case "textarea":
//               return <textarea key={crypto.randomUUID()}>{field.value}</textarea>;
  
//             case "select":
//               return (
//                 <select key={crypto.randomUUID()}>
//                   {field.options.map((option) => (
//                     <option value={option.value}>{option.label}</option>
//                   ))}
//                 </select>
//               );
//             default:
//               return (
//                 <>
//                   <input type={field.type} name={field.name}  key={crypto.randomUUID()}/>
//                   <label key={crypto.randomUUID()}>{field.label}</label>
//                 </>
//               );
//           }}
// }
 
// export default FormInput;