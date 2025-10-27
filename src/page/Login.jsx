
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login data:', data);
    alert(`ایمیل: ${data.email}\nرمز عبور: ${data.password}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 rounded-3xl shadow-2xl w-96 text-right"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">ورود به حساب</h2>

        {/* ایمیل */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">ایمیل</label>
          <input
            type="email"
            {...register('email', { required: 'وارد کردن ایمیل الزامی است' })}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ایمیل خود را وارد کنید"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* رمز عبور */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">رمز عبور</label>
          <input
            type="password"
            {...register('password', {
              required: 'وارد کردن رمز عبور الزامی است',
              minLength: { value: 6, message: 'حداقل ۶ کاراکتر' }
            })}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="رمز عبور خود را وارد کنید"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-2xl text-lg font-semibold hover:bg-blue-600 transition"
        >
          ورود
        </button>

        <p className="text-center mt-4 text-gray-500 text-sm">
          حساب کاربری ندارید؟ <span >ثبت نام</span>
        </p>
      </form>
    </div>
  )
}

export default Login;
