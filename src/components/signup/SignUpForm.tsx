import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Toaster, toast } from 'sonner'

const SignUpFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Please enter a valid email address.' }),
})

type TSignUpFormSchema = z.infer<typeof SignUpFormSchema>

export const SignUpForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpFormSchema>({ resolver: zodResolver(SignUpFormSchema) })

  const onSubmit = async (formData: TSignUpFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success(`The email "${formData.email}" was successfully registered.`)

    reset()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full grid gap-y-4 lg:grid-cols-[2fr_1fr] lg:gap-x-4 lg:items-baseline'
      >
        <div className='flex flex-col gap-y-2'>
          <input
            className='rounded-full w-full text-dark-blue-d font-raleway font-bold outline-none py-3 pl-6'
            {...register('email')}
            type='text'
            autoComplete='off'
            placeholder='email@example.com'
          />
          <span className='text-red-500 text-center lg:text-left'>
            {errors.email?.message}
          </span>
        </div>
        <button
          className='bg-gradient-to-r from-cyan-g to-blue-g rounded-full font-bold font-raleway py-3'
          type='submit'
        >
          {isSubmitting ? 'Submitting...' : 'Get Started For Free'}
        </button>
      </form>
      <Toaster richColors position='top-right' closeButton />
    </>
  )
}
