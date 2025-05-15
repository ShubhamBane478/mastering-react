import { useForm } from "react-hook-form";


const SimpleForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      
  return (
    <>
    <div className="bg-slate-900 w-full  h-screen	pt-8">
    <h1>Simple form</h1>
    <form>
        <div>
            <label>First Name : </label>
            <input />
        </div>
        <br/>
        <div>
            <label>Middle Name : </label>
            <input />
        </div>
        <br/>
        <div>
            <label>Last Name : </label>
            <input />
        </div>
        <br/>
    </form>
    </div>
    </>
  )
}

export default SimpleForm
