import ContactViewModel from '../viewmodels/ContactViewModel'
import BackgroundDesign from './components/BackgroundDesign'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex not-md:flex-col items-center justify-around p-6">
        <div className='w-full sm:w-4/5 md:w-1/3 m-6 mt-12'>
          <p className='text-gray-900 text-sm lg:text-lg text-center'>
            Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away. Let's catch up over coffee. Great stories always begin with a good conversation
          </p>
        </div>

        <div className="w-full sm:w-4/5 md:w-2/5 mx-6 my-6">
          <h1 className="text-2xl text-center font-semibold text-gray-900">Join the Story</h1>
          <p className="mt-4 text-center text-sm text-gray-900">Ready to Bring your Vision to Life? Let's Talk</p>

          <ContactForm />

          <div className="mt-6 flex items-center justify-center">
            <a className='px-4 py-1 text-red-500 border-r border-red-500'
              href='mailto:varnita@varnanfilms.co.in' target='_blank'
            >
              varnita@varnanfilms.co.in
            </a>
            <a className='px-4 py-1 text-red-500'
              href='tel:+919837684567' target='_blank'
            >
              +91 9837684567
            </a>
          </div>
        </div>
      </div>

      <BackgroundDesign />
    </>
  )
}

const ContactForm = () => {
  const { register, errors, isSubmitting, isSubmitSuccessful, submitForm } = ContactViewModel()

  return (
    <form onSubmit={submitForm} className="my-12 flex flex-col items-center gap-2">
      <input
        type="text"
        {...register("name", { required: 'Name is required' })}
        className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your name"
      />
      {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}

      <input
        type="email"
        {...register("email", { required: 'Email is required' })}
        className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email"
      />
      {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}

      <input
        type="tel"
        {...register("phone", { required: 'Phone number is required', pattern: { value: /^[0-9+\-() ]+$/, message: 'Invalid phone number' } })}
        className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your phone number"
      />
      {errors.phone && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>}

      <textarea
        {...register("message", { required: 'Message is required' })}
        className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your message"
        rows="4"
      ></textarea>
      {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-40 inline-flex items-center justify-center px-4 py-2 bg-red-500 text-white font-medium rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        Submit
      </button>

      {isSubmitSuccessful && <p className="text-sm text-green-600 dark:text-green-400">Form Submitted</p>}
      {errors.contactForm && <p className="text-sm text-red-600 dark:text-red-400">{errors.contactForm.message}</p>}
    </form>
  )
}

export default App
