import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../../formValidators/authValidators';

// NOTE: This is the SignInForm component
// It should be further designed and styled as per the required UI design, this is just a basic implementation
// to show how the form works with the created validations
export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center gap-4 '
    >
      <div className='flex flex-col gap-2'>
        <input
          {...register('email')}
          placeholder='Email'
          type='email'
          className='outline-none border-2 border-gray-300 rounded-md p-2 w-[500px]'
        />
        {errors.email && (
          <span className='text-red-500'>{errors.email.message}</span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <input
          {...register('password')}
          placeholder='Password'
          type='password'
          className='outline-none border-2 border-gray-300 rounded-md p-2 w-[500px]'
        />
        {errors.password && (
          <span className='text-red-500'>{errors.password.message}</span>
        )}
      </div>

      <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
        Sign In
      </button>
    </form>
  );
}
